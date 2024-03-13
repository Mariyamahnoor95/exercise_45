function describe_city(name: string, country: string = "pakistan"): void {
  console.log(`${name} is in ${country}`);
}

describe_city("karachi");
describe_city("quetta");
describe_city("riyadh", "saudia arabia");
