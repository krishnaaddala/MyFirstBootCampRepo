// 1. Update this function to use a short circuit evaluation to set a default value for `something`
// Think back to node and how we set a PORT 😉

// var PORT = process.env.PORT || 3000;

const logMessage = message => {
  const solution = message || "Hello World!"; //Hello World!
  console.log(solution);
};

logMessage();

// 2. Update the code below to set `message` using a ternary expression (variable = conditional ? value : otherValue)

const logTired = beenWorkingAllDay => {
  const message = beenWorkingAllDay ? "I'm feeling really tired" : "I'm wide awake!";//I'm feeling really tired
  console.log(message);
};

logTired(true);
