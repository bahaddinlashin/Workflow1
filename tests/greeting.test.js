const greeting = require("../src/main")

it("should return Hello, Bahaa When send Bahaa",()=>{

    const response = greeting("Bahaa");
    
    expect(response).toEqual("Hello, Bahaa");
})