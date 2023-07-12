type NonEmpty<T> = T extends null | undefined ? never : T;

type Result = NonEmpty<string | undefined | null>;

type Expand0 = NonEmpty<string> | NonEmpty<undefined> | NonEmpty<null>;

type Expand1 =
  | (string extends null | undefined ? never : string)
  | (undefined extends null | undefined ? never : undefined)
  | (null extends null | undefined ? never : null);

type Expand2 = string | never | never;

type StatusTypes = "pending" | "inprogress" | "success" | "warning" | "error";

type ExcludeType<BaseType, ExcludeType> = BaseType extends ExcludeType ? never : BaseType;

type NonNegativeStatusTypes = ExcludeType<StatusTypes, "warning" | "error">;
