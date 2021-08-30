const { stub } = require("sinon");
const httpErrorsInstances = require("../src");
const utils = require("../src/utils");
const errors = require("../src/errors.js");
const httpErrors = {};

utils.polyfill["Object"]["entries"]();

describe("HTTP Errors", () => {
  const dateExpected = "2021-08-28 21:15:50";
  let getFullDateStub;

  beforeEach(() => {
    getFullDateStub = stub(utils, "getFullDate");
  });

  afterEach(() => {
    getFullDateStub.restore();
  });

  errors.forEach((error) => {
    httpErrors[error.alias] = error;
  });

  it("Should create every http error defined", () => {
    for (const [alias, errorInstance] of Object.entries(httpErrorsInstances)) {
      try {
        getFullDateStub.returns(dateExpected);
        throw new errorInstance();
      } catch (error) {
        expect(error.name).toEqual(httpErrors[alias].name);
        expect(error.message).toEqual(httpErrors[alias].message);
        expect(error.isHttpError).toEqual(true);
        expect(error.statusCode).toEqual(httpErrors[alias].statusCode);
        expect(error.date.length).toEqual(19);
        expect(error.date).toEqual(dateExpected);
        expect(error).toBeInstanceOf(Error);
      }
    }
  });

  describe("Error instances default", () => {
    for (const [alias] of Object.entries(httpErrors)) {
      it(`Should create ${alias} with message passed`, () => {
        try {
          getFullDateStub.returns(dateExpected);
          throw new httpErrorsInstances[alias]("Custom error message");
        } catch (error) {
          expect(error.date.length).toEqual(19);
          expect(error.date).toEqual(dateExpected);
          expect(error.message).toEqual("Custom error message");
          expect(error.statusCode).toEqual(expect.any(Number));
          expect(error.isHttpError).toEqual(true);
        }
      });
    }
  });

  describe("Error instances with message", () => {
    for (const [alias] of Object.entries(httpErrors)) {
      it(`Should create ${alias}`, () => {
        try {
          getFullDateStub.returns(dateExpected);
          throw new httpErrorsInstances[alias]("Custom error message");
        } catch (error) {
          expect(error.date.length).toEqual(19);
          expect(error.date).toEqual(dateExpected);
          expect(error.message).toEqual("Custom error message");
          expect(error.statusCode).toEqual(expect.any(Number));
          expect(error.isHttpError).toEqual(true);
        }
      });
    }
  });
});
