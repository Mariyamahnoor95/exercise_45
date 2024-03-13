"use strict";
function describe_city(name, country = "pakistan") {
    console.log(`${name} is in ${country}`);
}
describe_city("karachi");
describe_city("quetta");
describe_city("riyadh", "saudia arabia");
