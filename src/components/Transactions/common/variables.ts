import * as z from "zod";

const FIELD_NAME = {
  AMOUNT: "amount",
  DESCRIPTION: "description",
  CATEGORY: "category",
};

const FIELD_LABEL = {
  AMOUNT: "Enter your amount",
  DESCRIPTION: "Enter your description",
  CATEGORY: "Enter your category",
};

const SCHEMA = z.object({
  [FIELD_NAME.AMOUNT]: z.string().min(1, { message: "Required" }),
  [FIELD_NAME.DESCRIPTION]: z.string().min(1, { message: "Required" }),
  [FIELD_NAME.CATEGORY]: z.string({ required_error: "Required" }),
});

export { FIELD_LABEL, FIELD_NAME, SCHEMA };
