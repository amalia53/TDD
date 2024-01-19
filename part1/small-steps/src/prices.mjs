import "./polyfills";
import express from "express";

// Refactor the following code to get rid of the legacy Date class.
// Use Temporal.PlainDate instead. See /test/date_conversion.spec.mjs for examples.

function createApp(database) {
  const app = express();

  app.put("/prices", (req, res) => {
    const type = req.query.type;
    const cost = parseInt(req.query.cost);
    database.setBasePrice(type, cost);
    res.json();
  });

  app.get("/prices", (req, res) => {
    const age = req.query.age ? parseInt(req.query.age) : undefined;
    const type = req.query.type;
    const baseCost = database.findBasePriceByType(type).cost;
    const date = parseDate(req.query.date);
    const cost = calculateCost(age, type, date, baseCost);
    res.json({ cost });
  });

  function parseDate(dateString) {
    if (dateString) {
      return new Date(dateString);
    }
  }

  function calculateCost(age, type, date, baseCost) {
    if (type === "night") {
      return calculateCostForNightTicket(age, baseCost);
    } else {
      return calculateCostForDayTicket(age, date, baseCost);
    }
  }

  function calculateCostForNightTicket(age, baseCost) {
    if (age === undefined) {
      return 0;
    }
    if (age < 6) {
      return 0;
    }
    if (age > 64) {
      return Math.ceil(baseCost * 0.4);
    }
    return baseCost;
  }

  function calculateCostForDayTicket(age, date, baseCost) {
    let reduction = calculateReduction(date);
    if (age === undefined) {
      return Math.ceil(baseCost * (1 - reduction / 100));
    }
    if (age < 6) {
      return 0;
    }
    if (age < 15) {
      return Math.ceil(baseCost * 0.7);
    }
    if (age > 64) {
      return Math.ceil(baseCost * 0.75 * (1 - reduction / 100));
    }
    return Math.ceil(baseCost * (1 - reduction / 100));
  }

  function calculateReduction(date) {
    let reduction = 0;
    if (date && isMonday(convertDate(date)) && !isHoliday(date)) {
      reduction = 35;
    }
    return reduction;
  }

  function isMonday(date) {
    return date.dayOfWeek === 1;
  }

  function convertDate(date) {
    if (date instanceof Date) {
      return Temporal.PlainDate.from(date.toISOString().split('T')[0])
    } else {
      return date
    }
  }

  function isHoliday(date) {
    const holidays = database.getHolidays();
    for (let row of holidays) {
      let holiday = new Date(row.holiday);
      let formattedHoliday = Temporal.PlainDate.from(row.holiday)
      let formatted = convertDate(date)
      if (
        convertDate(date) &&
        convertDate(date).year === formattedHoliday.year &&
        convertDate(date).month === formattedHoliday.month &&
        convertDate(date).day === formattedHoliday.day
      ) {
        return true;
      }
    }
    return false;
  }

  return app;
}

export { createApp };
