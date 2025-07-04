
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model roles
 * 
 */
export type roles = $Result.DefaultSelection<Prisma.$rolesPayload>
/**
 * Model leave_types
 * 
 */
export type leave_types = $Result.DefaultSelection<Prisma.$leave_typesPayload>
/**
 * Model leave_status
 * 
 */
export type leave_status = $Result.DefaultSelection<Prisma.$leave_statusPayload>
/**
 * Model departments
 * 
 */
export type departments = $Result.DefaultSelection<Prisma.$departmentsPayload>
/**
 * Model leave_request
 * 
 */
export type leave_request = $Result.DefaultSelection<Prisma.$leave_requestPayload>
/**
 * Model leave_request_history
 * 
 */
export type leave_request_history = $Result.DefaultSelection<Prisma.$leave_request_historyPayload>
/**
 * Model leave_balance
 * 
 */
export type leave_balance = $Result.DefaultSelection<Prisma.$leave_balancePayload>
/**
 * Model leave_policy
 * 
 */
export type leave_policy = $Result.DefaultSelection<Prisma.$leave_policyPayload>
/**
 * Model holiday
 * 
 */
export type holiday = $Result.DefaultSelection<Prisma.$holidayPayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  HR: 'HR',
  MANAGER: 'MANAGER',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const LEAVE_TYPE: {
  SICK: 'SICK',
  CASUAL: 'CASUAL',
  PAID: 'PAID',
  ANNUAL: 'ANNUAL',
  MONTHLY: 'MONTHLY',
  PERSONAL: 'PERSONAL',
  MATERNITY: 'MATERNITY',
  PATERNITY: 'PATERNITY',
  BEREAVEMENT: 'BEREAVEMENT',
  CTO: 'CTO',
  LWP: 'LWP'
};

export type LEAVE_TYPE = (typeof LEAVE_TYPE)[keyof typeof LEAVE_TYPE]


export const LEAVE_APPROVAL: {
  APPROVED_BY_MANAGER: 'APPROVED_BY_MANAGER',
  APPROVED: 'APPROVED',
  APPROVED_BY_HR: 'APPROVED_BY_HR',
  APPROVED_BY_ADMIN: 'APPROVED_BY_ADMIN',
  AUTO_APPROVED: 'AUTO_APPROVED',
  PENDING: 'PENDING',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  PENDING_BY_MANAGER: 'PENDING_BY_MANAGER',
  PENDING_BY_HR: 'PENDING_BY_HR',
  PENDING_BY_ADMIN: 'PENDING_BY_ADMIN'
};

export type LEAVE_APPROVAL = (typeof LEAVE_APPROVAL)[keyof typeof LEAVE_APPROVAL]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type LEAVE_TYPE = $Enums.LEAVE_TYPE

export const LEAVE_TYPE: typeof $Enums.LEAVE_TYPE

export type LEAVE_APPROVAL = $Enums.LEAVE_APPROVAL

export const LEAVE_APPROVAL: typeof $Enums.LEAVE_APPROVAL

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.roles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.roles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.roles`: Exposes CRUD operations for the **roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.roles.findMany()
    * ```
    */
  get roles(): Prisma.rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leave_types`: Exposes CRUD operations for the **leave_types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leave_types
    * const leave_types = await prisma.leave_types.findMany()
    * ```
    */
  get leave_types(): Prisma.leave_typesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leave_status`: Exposes CRUD operations for the **leave_status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leave_statuses
    * const leave_statuses = await prisma.leave_status.findMany()
    * ```
    */
  get leave_status(): Prisma.leave_statusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departments`: Exposes CRUD operations for the **departments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.departments.findMany()
    * ```
    */
  get departments(): Prisma.departmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leave_request`: Exposes CRUD operations for the **leave_request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leave_requests
    * const leave_requests = await prisma.leave_request.findMany()
    * ```
    */
  get leave_request(): Prisma.leave_requestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leave_request_history`: Exposes CRUD operations for the **leave_request_history** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leave_request_histories
    * const leave_request_histories = await prisma.leave_request_history.findMany()
    * ```
    */
  get leave_request_history(): Prisma.leave_request_historyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leave_balance`: Exposes CRUD operations for the **leave_balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leave_balances
    * const leave_balances = await prisma.leave_balance.findMany()
    * ```
    */
  get leave_balance(): Prisma.leave_balanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leave_policy`: Exposes CRUD operations for the **leave_policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leave_policies
    * const leave_policies = await prisma.leave_policy.findMany()
    * ```
    */
  get leave_policy(): Prisma.leave_policyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holiday`: Exposes CRUD operations for the **holiday** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holidays
    * const holidays = await prisma.holiday.findMany()
    * ```
    */
  get holiday(): Prisma.holidayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    roles: 'roles',
    leave_types: 'leave_types',
    leave_status: 'leave_status',
    departments: 'departments',
    leave_request: 'leave_request',
    leave_request_history: 'leave_request_history',
    leave_balance: 'leave_balance',
    leave_policy: 'leave_policy',
    holiday: 'holiday',
    user: 'user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "roles" | "leave_types" | "leave_status" | "departments" | "leave_request" | "leave_request_history" | "leave_balance" | "leave_policy" | "holiday" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      roles: {
        payload: Prisma.$rolesPayload<ExtArgs>
        fields: Prisma.rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findFirst: {
            args: Prisma.rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          findMany: {
            args: Prisma.rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          create: {
            args: Prisma.rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          createMany: {
            args: Prisma.rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          delete: {
            args: Prisma.rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          update: {
            args: Prisma.rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          deleteMany: {
            args: Prisma.rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>[]
          }
          upsert: {
            args: Prisma.rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolesPayload>
          }
          aggregate: {
            args: Prisma.RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles>
          }
          groupBy: {
            args: Prisma.rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolesCountArgs<ExtArgs>
            result: $Utils.Optional<RolesCountAggregateOutputType> | number
          }
        }
      }
      leave_types: {
        payload: Prisma.$leave_typesPayload<ExtArgs>
        fields: Prisma.leave_typesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leave_typesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_typesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leave_typesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_typesPayload>
          }
          findFirst: {
            args: Prisma.leave_typesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_typesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leave_typesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_typesPayload>
          }
          findMany: {
            args: Prisma.leave_typesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_typesPayload>[]
          }
          create: {
            args: Prisma.leave_typesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_typesPayload>
          }
          createMany: {
            args: Prisma.leave_typesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leave_typesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_typesPayload>[]
          }
          delete: {
            args: Prisma.leave_typesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_typesPayload>
          }
          update: {
            args: Prisma.leave_typesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_typesPayload>
          }
          deleteMany: {
            args: Prisma.leave_typesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leave_typesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leave_typesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_typesPayload>[]
          }
          upsert: {
            args: Prisma.leave_typesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_typesPayload>
          }
          aggregate: {
            args: Prisma.Leave_typesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave_types>
          }
          groupBy: {
            args: Prisma.leave_typesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Leave_typesGroupByOutputType>[]
          }
          count: {
            args: Prisma.leave_typesCountArgs<ExtArgs>
            result: $Utils.Optional<Leave_typesCountAggregateOutputType> | number
          }
        }
      }
      leave_status: {
        payload: Prisma.$leave_statusPayload<ExtArgs>
        fields: Prisma.leave_statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leave_statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leave_statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_statusPayload>
          }
          findFirst: {
            args: Prisma.leave_statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leave_statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_statusPayload>
          }
          findMany: {
            args: Prisma.leave_statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_statusPayload>[]
          }
          create: {
            args: Prisma.leave_statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_statusPayload>
          }
          createMany: {
            args: Prisma.leave_statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leave_statusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_statusPayload>[]
          }
          delete: {
            args: Prisma.leave_statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_statusPayload>
          }
          update: {
            args: Prisma.leave_statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_statusPayload>
          }
          deleteMany: {
            args: Prisma.leave_statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leave_statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leave_statusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_statusPayload>[]
          }
          upsert: {
            args: Prisma.leave_statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_statusPayload>
          }
          aggregate: {
            args: Prisma.Leave_statusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave_status>
          }
          groupBy: {
            args: Prisma.leave_statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Leave_statusGroupByOutputType>[]
          }
          count: {
            args: Prisma.leave_statusCountArgs<ExtArgs>
            result: $Utils.Optional<Leave_statusCountAggregateOutputType> | number
          }
        }
      }
      departments: {
        payload: Prisma.$departmentsPayload<ExtArgs>
        fields: Prisma.departmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          findFirst: {
            args: Prisma.departmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          findMany: {
            args: Prisma.departmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          create: {
            args: Prisma.departmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          createMany: {
            args: Prisma.departmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.departmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          delete: {
            args: Prisma.departmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          update: {
            args: Prisma.departmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          deleteMany: {
            args: Prisma.departmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.departmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>[]
          }
          upsert: {
            args: Prisma.departmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentsPayload>
          }
          aggregate: {
            args: Prisma.DepartmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartments>
          }
          groupBy: {
            args: Prisma.departmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.departmentsCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentsCountAggregateOutputType> | number
          }
        }
      }
      leave_request: {
        payload: Prisma.$leave_requestPayload<ExtArgs>
        fields: Prisma.leave_requestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leave_requestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leave_requestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>
          }
          findFirst: {
            args: Prisma.leave_requestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leave_requestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>
          }
          findMany: {
            args: Prisma.leave_requestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>[]
          }
          create: {
            args: Prisma.leave_requestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>
          }
          createMany: {
            args: Prisma.leave_requestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leave_requestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>[]
          }
          delete: {
            args: Prisma.leave_requestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>
          }
          update: {
            args: Prisma.leave_requestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>
          }
          deleteMany: {
            args: Prisma.leave_requestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leave_requestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leave_requestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>[]
          }
          upsert: {
            args: Prisma.leave_requestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_requestPayload>
          }
          aggregate: {
            args: Prisma.Leave_requestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave_request>
          }
          groupBy: {
            args: Prisma.leave_requestGroupByArgs<ExtArgs>
            result: $Utils.Optional<Leave_requestGroupByOutputType>[]
          }
          count: {
            args: Prisma.leave_requestCountArgs<ExtArgs>
            result: $Utils.Optional<Leave_requestCountAggregateOutputType> | number
          }
        }
      }
      leave_request_history: {
        payload: Prisma.$leave_request_historyPayload<ExtArgs>
        fields: Prisma.leave_request_historyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leave_request_historyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_request_historyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leave_request_historyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_request_historyPayload>
          }
          findFirst: {
            args: Prisma.leave_request_historyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_request_historyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leave_request_historyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_request_historyPayload>
          }
          findMany: {
            args: Prisma.leave_request_historyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_request_historyPayload>[]
          }
          create: {
            args: Prisma.leave_request_historyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_request_historyPayload>
          }
          createMany: {
            args: Prisma.leave_request_historyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leave_request_historyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_request_historyPayload>[]
          }
          delete: {
            args: Prisma.leave_request_historyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_request_historyPayload>
          }
          update: {
            args: Prisma.leave_request_historyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_request_historyPayload>
          }
          deleteMany: {
            args: Prisma.leave_request_historyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leave_request_historyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leave_request_historyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_request_historyPayload>[]
          }
          upsert: {
            args: Prisma.leave_request_historyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_request_historyPayload>
          }
          aggregate: {
            args: Prisma.Leave_request_historyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave_request_history>
          }
          groupBy: {
            args: Prisma.leave_request_historyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Leave_request_historyGroupByOutputType>[]
          }
          count: {
            args: Prisma.leave_request_historyCountArgs<ExtArgs>
            result: $Utils.Optional<Leave_request_historyCountAggregateOutputType> | number
          }
        }
      }
      leave_balance: {
        payload: Prisma.$leave_balancePayload<ExtArgs>
        fields: Prisma.leave_balanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leave_balanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_balancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leave_balanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_balancePayload>
          }
          findFirst: {
            args: Prisma.leave_balanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_balancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leave_balanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_balancePayload>
          }
          findMany: {
            args: Prisma.leave_balanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_balancePayload>[]
          }
          create: {
            args: Prisma.leave_balanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_balancePayload>
          }
          createMany: {
            args: Prisma.leave_balanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leave_balanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_balancePayload>[]
          }
          delete: {
            args: Prisma.leave_balanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_balancePayload>
          }
          update: {
            args: Prisma.leave_balanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_balancePayload>
          }
          deleteMany: {
            args: Prisma.leave_balanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leave_balanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leave_balanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_balancePayload>[]
          }
          upsert: {
            args: Prisma.leave_balanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_balancePayload>
          }
          aggregate: {
            args: Prisma.Leave_balanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave_balance>
          }
          groupBy: {
            args: Prisma.leave_balanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<Leave_balanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.leave_balanceCountArgs<ExtArgs>
            result: $Utils.Optional<Leave_balanceCountAggregateOutputType> | number
          }
        }
      }
      leave_policy: {
        payload: Prisma.$leave_policyPayload<ExtArgs>
        fields: Prisma.leave_policyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.leave_policyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_policyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.leave_policyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_policyPayload>
          }
          findFirst: {
            args: Prisma.leave_policyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_policyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.leave_policyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_policyPayload>
          }
          findMany: {
            args: Prisma.leave_policyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_policyPayload>[]
          }
          create: {
            args: Prisma.leave_policyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_policyPayload>
          }
          createMany: {
            args: Prisma.leave_policyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.leave_policyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_policyPayload>[]
          }
          delete: {
            args: Prisma.leave_policyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_policyPayload>
          }
          update: {
            args: Prisma.leave_policyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_policyPayload>
          }
          deleteMany: {
            args: Prisma.leave_policyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.leave_policyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.leave_policyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_policyPayload>[]
          }
          upsert: {
            args: Prisma.leave_policyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$leave_policyPayload>
          }
          aggregate: {
            args: Prisma.Leave_policyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave_policy>
          }
          groupBy: {
            args: Prisma.leave_policyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Leave_policyGroupByOutputType>[]
          }
          count: {
            args: Prisma.leave_policyCountArgs<ExtArgs>
            result: $Utils.Optional<Leave_policyCountAggregateOutputType> | number
          }
        }
      }
      holiday: {
        payload: Prisma.$holidayPayload<ExtArgs>
        fields: Prisma.holidayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.holidayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.holidayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidayPayload>
          }
          findFirst: {
            args: Prisma.holidayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.holidayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidayPayload>
          }
          findMany: {
            args: Prisma.holidayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidayPayload>[]
          }
          create: {
            args: Prisma.holidayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidayPayload>
          }
          createMany: {
            args: Prisma.holidayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.holidayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidayPayload>[]
          }
          delete: {
            args: Prisma.holidayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidayPayload>
          }
          update: {
            args: Prisma.holidayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidayPayload>
          }
          deleteMany: {
            args: Prisma.holidayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.holidayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.holidayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidayPayload>[]
          }
          upsert: {
            args: Prisma.holidayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$holidayPayload>
          }
          aggregate: {
            args: Prisma.HolidayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHoliday>
          }
          groupBy: {
            args: Prisma.holidayGroupByArgs<ExtArgs>
            result: $Utils.Optional<HolidayGroupByOutputType>[]
          }
          count: {
            args: Prisma.holidayCountArgs<ExtArgs>
            result: $Utils.Optional<HolidayCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    roles?: rolesOmit
    leave_types?: leave_typesOmit
    leave_status?: leave_statusOmit
    departments?: departmentsOmit
    leave_request?: leave_requestOmit
    leave_request_history?: leave_request_historyOmit
    leave_balance?: leave_balanceOmit
    leave_policy?: leave_policyOmit
    holiday?: holidayOmit
    user?: userOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RolesCountOutputType
   */

  export type RolesCountOutputType = {
    users: number
  }

  export type RolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RolesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolesCountOutputType
     */
    select?: RolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolesCountOutputType without action
   */
  export type RolesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }


  /**
   * Count Type Leave_typesCountOutputType
   */

  export type Leave_typesCountOutputType = {
    leave_requests: number
    leave_policies: number
    leave_balances: number
  }

  export type Leave_typesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave_requests?: boolean | Leave_typesCountOutputTypeCountLeave_requestsArgs
    leave_policies?: boolean | Leave_typesCountOutputTypeCountLeave_policiesArgs
    leave_balances?: boolean | Leave_typesCountOutputTypeCountLeave_balancesArgs
  }

  // Custom InputTypes
  /**
   * Leave_typesCountOutputType without action
   */
  export type Leave_typesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave_typesCountOutputType
     */
    select?: Leave_typesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Leave_typesCountOutputType without action
   */
  export type Leave_typesCountOutputTypeCountLeave_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_requestWhereInput
  }

  /**
   * Leave_typesCountOutputType without action
   */
  export type Leave_typesCountOutputTypeCountLeave_policiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_policyWhereInput
  }

  /**
   * Leave_typesCountOutputType without action
   */
  export type Leave_typesCountOutputTypeCountLeave_balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_balanceWhereInput
  }


  /**
   * Count Type Leave_statusCountOutputType
   */

  export type Leave_statusCountOutputType = {
    leave_requests: number
    leave_request_histories: number
  }

  export type Leave_statusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave_requests?: boolean | Leave_statusCountOutputTypeCountLeave_requestsArgs
    leave_request_histories?: boolean | Leave_statusCountOutputTypeCountLeave_request_historiesArgs
  }

  // Custom InputTypes
  /**
   * Leave_statusCountOutputType without action
   */
  export type Leave_statusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave_statusCountOutputType
     */
    select?: Leave_statusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Leave_statusCountOutputType without action
   */
  export type Leave_statusCountOutputTypeCountLeave_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_requestWhereInput
  }

  /**
   * Leave_statusCountOutputType without action
   */
  export type Leave_statusCountOutputTypeCountLeave_request_historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_request_historyWhereInput
  }


  /**
   * Count Type DepartmentsCountOutputType
   */

  export type DepartmentsCountOutputType = {
    users: number
    leave_policy: number
    holiday: number
  }

  export type DepartmentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DepartmentsCountOutputTypeCountUsersArgs
    leave_policy?: boolean | DepartmentsCountOutputTypeCountLeave_policyArgs
    holiday?: boolean | DepartmentsCountOutputTypeCountHolidayArgs
  }

  // Custom InputTypes
  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentsCountOutputType
     */
    select?: DepartmentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountLeave_policyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_policyWhereInput
  }

  /**
   * DepartmentsCountOutputType without action
   */
  export type DepartmentsCountOutputTypeCountHolidayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: holidayWhereInput
  }


  /**
   * Count Type Leave_requestCountOutputType
   */

  export type Leave_requestCountOutputType = {
    leave_request_histories: number
  }

  export type Leave_requestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave_request_histories?: boolean | Leave_requestCountOutputTypeCountLeave_request_historiesArgs
  }

  // Custom InputTypes
  /**
   * Leave_requestCountOutputType without action
   */
  export type Leave_requestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave_requestCountOutputType
     */
    select?: Leave_requestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Leave_requestCountOutputType without action
   */
  export type Leave_requestCountOutputTypeCountLeave_request_historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_request_historyWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    subordinates: number
    leave_requests: number
    leave_balances: number
    leave_request_histories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subordinates?: boolean | UserCountOutputTypeCountSubordinatesArgs
    leave_requests?: boolean | UserCountOutputTypeCountLeave_requestsArgs
    leave_balances?: boolean | UserCountOutputTypeCountLeave_balancesArgs
    leave_request_histories?: boolean | UserCountOutputTypeCountLeave_request_historiesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeave_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_requestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeave_balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_balanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeave_request_historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_request_historyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model roles
   */

  export type AggregateRoles = {
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  export type RolesAvgAggregateOutputType = {
    id: number | null
  }

  export type RolesSumAggregateOutputType = {
    id: number | null
  }

  export type RolesMinAggregateOutputType = {
    id: number | null
    name: $Enums.Role | null
    description: string | null
    is_Active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesMaxAggregateOutputType = {
    id: number | null
    name: $Enums.Role | null
    description: string | null
    is_Active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RolesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    is_Active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RolesAvgAggregateInputType = {
    id?: true
  }

  export type RolesSumAggregateInputType = {
    id?: true
  }

  export type RolesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
  }

  export type RolesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to aggregate.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolesMaxAggregateInputType
  }

  export type GetRolesAggregateType<T extends RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles[P]>
      : GetScalarType<T[P], AggregateRoles[P]>
  }




  export type rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolesWhereInput
    orderBy?: rolesOrderByWithAggregationInput | rolesOrderByWithAggregationInput[]
    by: RolesScalarFieldEnum[] | RolesScalarFieldEnum
    having?: rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolesCountAggregateInputType | true
    _avg?: RolesAvgAggregateInputType
    _sum?: RolesSumAggregateInputType
    _min?: RolesMinAggregateInputType
    _max?: RolesMaxAggregateInputType
  }

  export type RolesGroupByOutputType = {
    id: number
    name: $Enums.Role
    description: string
    is_Active: boolean
    created_at: Date
    updated_at: Date
    _count: RolesCountAggregateOutputType | null
    _avg: RolesAvgAggregateOutputType | null
    _sum: RolesSumAggregateOutputType | null
    _min: RolesMinAggregateOutputType | null
    _max: RolesMaxAggregateOutputType | null
  }

  type GetRolesGroupByPayload<T extends rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolesGroupByOutputType[P]>
            : GetScalarType<T[P], RolesGroupByOutputType[P]>
        }
      >
    >


  export type rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["roles"]>

  export type rolesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "is_Active" | "created_at" | "updated_at", ExtArgs["result"]["roles"]>
  export type rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | roles$usersArgs<ExtArgs>
    _count?: boolean | RolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "roles"
    objects: {
      users: Prisma.$userPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: $Enums.Role
      description: string
      is_Active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["roles"]>
    composites: {}
  }

  type rolesGetPayload<S extends boolean | null | undefined | rolesDefaultArgs> = $Result.GetResult<Prisma.$rolesPayload, S>

  type rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolesCountAggregateInputType | true
    }

  export interface rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['roles'], meta: { name: 'roles' } }
    /**
     * Find zero or one Roles that matches the filter.
     * @param {rolesFindUniqueArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolesFindUniqueArgs>(args: SelectSubset<T, rolesFindUniqueArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolesFindUniqueOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolesFindFirstArgs>(args?: SelectSubset<T, rolesFindFirstArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindFirstOrThrowArgs} args - Arguments to find a Roles
     * @example
     * // Get one Roles
     * const roles = await prisma.roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.roles.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.roles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolesWithIdOnly = await prisma.roles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolesFindManyArgs>(args?: SelectSubset<T, rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles.
     * @param {rolesCreateArgs} args - Arguments to create a Roles.
     * @example
     * // Create one Roles
     * const Roles = await prisma.roles.create({
     *   data: {
     *     // ... data to create a Roles
     *   }
     * })
     * 
     */
    create<T extends rolesCreateArgs>(args: SelectSubset<T, rolesCreateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {rolesCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolesCreateManyArgs>(args?: SelectSubset<T, rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {rolesCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const roles = await prisma.roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles.
     * @param {rolesDeleteArgs} args - Arguments to delete one Roles.
     * @example
     * // Delete one Roles
     * const Roles = await prisma.roles.delete({
     *   where: {
     *     // ... filter to delete one Roles
     *   }
     * })
     * 
     */
    delete<T extends rolesDeleteArgs>(args: SelectSubset<T, rolesDeleteArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles.
     * @param {rolesUpdateArgs} args - Arguments to update one Roles.
     * @example
     * // Update one Roles
     * const roles = await prisma.roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolesUpdateArgs>(args: SelectSubset<T, rolesUpdateArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {rolesDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolesDeleteManyArgs>(args?: SelectSubset<T, rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolesUpdateManyArgs>(args: SelectSubset<T, rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {rolesUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const roles = await prisma.roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const rolesWithIdOnly = await prisma.roles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles.
     * @param {rolesUpsertArgs} args - Arguments to update or create a Roles.
     * @example
     * // Update or create a Roles
     * const roles = await prisma.roles.upsert({
     *   create: {
     *     // ... data to create a Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles we want to update
     *   }
     * })
     */
    upsert<T extends rolesUpsertArgs>(args: SelectSubset<T, rolesUpsertArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.roles.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends rolesCountArgs>(
      args?: Subset<T, rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolesAggregateArgs>(args: Subset<T, RolesAggregateArgs>): Prisma.PrismaPromise<GetRolesAggregateType<T>>

    /**
     * Group by Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolesGroupByArgs['orderBy'] }
        : { orderBy?: rolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the roles model
   */
  readonly fields: rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends roles$usersArgs<ExtArgs> = {}>(args?: Subset<T, roles$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the roles model
   */
  interface rolesFieldRefs {
    readonly id: FieldRef<"roles", 'Int'>
    readonly name: FieldRef<"roles", 'Role'>
    readonly description: FieldRef<"roles", 'String'>
    readonly is_Active: FieldRef<"roles", 'Boolean'>
    readonly created_at: FieldRef<"roles", 'DateTime'>
    readonly updated_at: FieldRef<"roles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * roles findUnique
   */
  export type rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findUniqueOrThrow
   */
  export type rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles findFirst
   */
  export type rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findFirstOrThrow
   */
  export type rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles findMany
   */
  export type rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: rolesOrderByWithRelationInput | rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RolesScalarFieldEnum | RolesScalarFieldEnum[]
  }

  /**
   * roles create
   */
  export type rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a roles.
     */
    data: XOR<rolesCreateInput, rolesUncheckedCreateInput>
  }

  /**
   * roles createMany
   */
  export type rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles createManyAndReturn
   */
  export type rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to create many roles.
     */
    data: rolesCreateManyInput | rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * roles update
   */
  export type rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a roles.
     */
    data: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
    /**
     * Choose, which roles to update.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles updateMany
   */
  export type rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles updateManyAndReturn
   */
  export type rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * The data used to update roles.
     */
    data: XOR<rolesUpdateManyMutationInput, rolesUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * roles upsert
   */
  export type rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the roles to update in case it exists.
     */
    where: rolesWhereUniqueInput
    /**
     * In case the roles found by the `where` argument doesn't exist, create a new roles with this data.
     */
    create: XOR<rolesCreateInput, rolesUncheckedCreateInput>
    /**
     * In case the roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolesUpdateInput, rolesUncheckedUpdateInput>
  }

  /**
   * roles delete
   */
  export type rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
    /**
     * Filter which roles to delete.
     */
    where: rolesWhereUniqueInput
  }

  /**
   * roles deleteMany
   */
  export type rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: rolesWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * roles.users
   */
  export type roles$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * roles without action
   */
  export type rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the roles
     */
    select?: rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the roles
     */
    omit?: rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: rolesInclude<ExtArgs> | null
  }


  /**
   * Model leave_types
   */

  export type AggregateLeave_types = {
    _count: Leave_typesCountAggregateOutputType | null
    _min: Leave_typesMinAggregateOutputType | null
    _max: Leave_typesMaxAggregateOutputType | null
  }

  export type Leave_typesMinAggregateOutputType = {
    id: string | null
    name: $Enums.LEAVE_TYPE | null
    description: string | null
    max_days_per_request: string | null
    is_Active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Leave_typesMaxAggregateOutputType = {
    id: string | null
    name: $Enums.LEAVE_TYPE | null
    description: string | null
    max_days_per_request: string | null
    is_Active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Leave_typesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    max_days_per_request: number
    is_Active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Leave_typesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    max_days_per_request?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
  }

  export type Leave_typesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    max_days_per_request?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
  }

  export type Leave_typesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    max_days_per_request?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Leave_typesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_types to aggregate.
     */
    where?: leave_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_types to fetch.
     */
    orderBy?: leave_typesOrderByWithRelationInput | leave_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leave_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leave_types
    **/
    _count?: true | Leave_typesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Leave_typesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Leave_typesMaxAggregateInputType
  }

  export type GetLeave_typesAggregateType<T extends Leave_typesAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave_types]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave_types[P]>
      : GetScalarType<T[P], AggregateLeave_types[P]>
  }




  export type leave_typesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_typesWhereInput
    orderBy?: leave_typesOrderByWithAggregationInput | leave_typesOrderByWithAggregationInput[]
    by: Leave_typesScalarFieldEnum[] | Leave_typesScalarFieldEnum
    having?: leave_typesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Leave_typesCountAggregateInputType | true
    _min?: Leave_typesMinAggregateInputType
    _max?: Leave_typesMaxAggregateInputType
  }

  export type Leave_typesGroupByOutputType = {
    id: string
    name: $Enums.LEAVE_TYPE
    description: string
    max_days_per_request: string
    is_Active: boolean
    created_at: Date
    updated_at: Date
    _count: Leave_typesCountAggregateOutputType | null
    _min: Leave_typesMinAggregateOutputType | null
    _max: Leave_typesMaxAggregateOutputType | null
  }

  type GetLeave_typesGroupByPayload<T extends leave_typesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Leave_typesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Leave_typesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Leave_typesGroupByOutputType[P]>
            : GetScalarType<T[P], Leave_typesGroupByOutputType[P]>
        }
      >
    >


  export type leave_typesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    max_days_per_request?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
    leave_requests?: boolean | leave_types$leave_requestsArgs<ExtArgs>
    leave_policies?: boolean | leave_types$leave_policiesArgs<ExtArgs>
    leave_balances?: boolean | leave_types$leave_balancesArgs<ExtArgs>
    _count?: boolean | Leave_typesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_types"]>

  export type leave_typesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    max_days_per_request?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["leave_types"]>

  export type leave_typesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    max_days_per_request?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["leave_types"]>

  export type leave_typesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    max_days_per_request?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type leave_typesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "max_days_per_request" | "is_Active" | "created_at" | "updated_at", ExtArgs["result"]["leave_types"]>
  export type leave_typesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave_requests?: boolean | leave_types$leave_requestsArgs<ExtArgs>
    leave_policies?: boolean | leave_types$leave_policiesArgs<ExtArgs>
    leave_balances?: boolean | leave_types$leave_balancesArgs<ExtArgs>
    _count?: boolean | Leave_typesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type leave_typesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type leave_typesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $leave_typesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leave_types"
    objects: {
      leave_requests: Prisma.$leave_requestPayload<ExtArgs>[]
      leave_policies: Prisma.$leave_policyPayload<ExtArgs>[]
      leave_balances: Prisma.$leave_balancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.LEAVE_TYPE
      description: string
      max_days_per_request: string
      is_Active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["leave_types"]>
    composites: {}
  }

  type leave_typesGetPayload<S extends boolean | null | undefined | leave_typesDefaultArgs> = $Result.GetResult<Prisma.$leave_typesPayload, S>

  type leave_typesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leave_typesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Leave_typesCountAggregateInputType | true
    }

  export interface leave_typesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leave_types'], meta: { name: 'leave_types' } }
    /**
     * Find zero or one Leave_types that matches the filter.
     * @param {leave_typesFindUniqueArgs} args - Arguments to find a Leave_types
     * @example
     * // Get one Leave_types
     * const leave_types = await prisma.leave_types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leave_typesFindUniqueArgs>(args: SelectSubset<T, leave_typesFindUniqueArgs<ExtArgs>>): Prisma__leave_typesClient<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leave_types that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leave_typesFindUniqueOrThrowArgs} args - Arguments to find a Leave_types
     * @example
     * // Get one Leave_types
     * const leave_types = await prisma.leave_types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leave_typesFindUniqueOrThrowArgs>(args: SelectSubset<T, leave_typesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leave_typesClient<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_typesFindFirstArgs} args - Arguments to find a Leave_types
     * @example
     * // Get one Leave_types
     * const leave_types = await prisma.leave_types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leave_typesFindFirstArgs>(args?: SelectSubset<T, leave_typesFindFirstArgs<ExtArgs>>): Prisma__leave_typesClient<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_typesFindFirstOrThrowArgs} args - Arguments to find a Leave_types
     * @example
     * // Get one Leave_types
     * const leave_types = await prisma.leave_types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leave_typesFindFirstOrThrowArgs>(args?: SelectSubset<T, leave_typesFindFirstOrThrowArgs<ExtArgs>>): Prisma__leave_typesClient<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leave_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_typesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leave_types
     * const leave_types = await prisma.leave_types.findMany()
     * 
     * // Get first 10 Leave_types
     * const leave_types = await prisma.leave_types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leave_typesWithIdOnly = await prisma.leave_types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leave_typesFindManyArgs>(args?: SelectSubset<T, leave_typesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leave_types.
     * @param {leave_typesCreateArgs} args - Arguments to create a Leave_types.
     * @example
     * // Create one Leave_types
     * const Leave_types = await prisma.leave_types.create({
     *   data: {
     *     // ... data to create a Leave_types
     *   }
     * })
     * 
     */
    create<T extends leave_typesCreateArgs>(args: SelectSubset<T, leave_typesCreateArgs<ExtArgs>>): Prisma__leave_typesClient<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leave_types.
     * @param {leave_typesCreateManyArgs} args - Arguments to create many Leave_types.
     * @example
     * // Create many Leave_types
     * const leave_types = await prisma.leave_types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leave_typesCreateManyArgs>(args?: SelectSubset<T, leave_typesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leave_types and returns the data saved in the database.
     * @param {leave_typesCreateManyAndReturnArgs} args - Arguments to create many Leave_types.
     * @example
     * // Create many Leave_types
     * const leave_types = await prisma.leave_types.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leave_types and only return the `id`
     * const leave_typesWithIdOnly = await prisma.leave_types.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leave_typesCreateManyAndReturnArgs>(args?: SelectSubset<T, leave_typesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leave_types.
     * @param {leave_typesDeleteArgs} args - Arguments to delete one Leave_types.
     * @example
     * // Delete one Leave_types
     * const Leave_types = await prisma.leave_types.delete({
     *   where: {
     *     // ... filter to delete one Leave_types
     *   }
     * })
     * 
     */
    delete<T extends leave_typesDeleteArgs>(args: SelectSubset<T, leave_typesDeleteArgs<ExtArgs>>): Prisma__leave_typesClient<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leave_types.
     * @param {leave_typesUpdateArgs} args - Arguments to update one Leave_types.
     * @example
     * // Update one Leave_types
     * const leave_types = await prisma.leave_types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leave_typesUpdateArgs>(args: SelectSubset<T, leave_typesUpdateArgs<ExtArgs>>): Prisma__leave_typesClient<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leave_types.
     * @param {leave_typesDeleteManyArgs} args - Arguments to filter Leave_types to delete.
     * @example
     * // Delete a few Leave_types
     * const { count } = await prisma.leave_types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leave_typesDeleteManyArgs>(args?: SelectSubset<T, leave_typesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_typesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leave_types
     * const leave_types = await prisma.leave_types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leave_typesUpdateManyArgs>(args: SelectSubset<T, leave_typesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_types and returns the data updated in the database.
     * @param {leave_typesUpdateManyAndReturnArgs} args - Arguments to update many Leave_types.
     * @example
     * // Update many Leave_types
     * const leave_types = await prisma.leave_types.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leave_types and only return the `id`
     * const leave_typesWithIdOnly = await prisma.leave_types.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leave_typesUpdateManyAndReturnArgs>(args: SelectSubset<T, leave_typesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leave_types.
     * @param {leave_typesUpsertArgs} args - Arguments to update or create a Leave_types.
     * @example
     * // Update or create a Leave_types
     * const leave_types = await prisma.leave_types.upsert({
     *   create: {
     *     // ... data to create a Leave_types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave_types we want to update
     *   }
     * })
     */
    upsert<T extends leave_typesUpsertArgs>(args: SelectSubset<T, leave_typesUpsertArgs<ExtArgs>>): Prisma__leave_typesClient<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leave_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_typesCountArgs} args - Arguments to filter Leave_types to count.
     * @example
     * // Count the number of Leave_types
     * const count = await prisma.leave_types.count({
     *   where: {
     *     // ... the filter for the Leave_types we want to count
     *   }
     * })
    **/
    count<T extends leave_typesCountArgs>(
      args?: Subset<T, leave_typesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Leave_typesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Leave_typesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Leave_typesAggregateArgs>(args: Subset<T, Leave_typesAggregateArgs>): Prisma.PrismaPromise<GetLeave_typesAggregateType<T>>

    /**
     * Group by Leave_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_typesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leave_typesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leave_typesGroupByArgs['orderBy'] }
        : { orderBy?: leave_typesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leave_typesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeave_typesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leave_types model
   */
  readonly fields: leave_typesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leave_types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leave_typesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leave_requests<T extends leave_types$leave_requestsArgs<ExtArgs> = {}>(args?: Subset<T, leave_types$leave_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leave_policies<T extends leave_types$leave_policiesArgs<ExtArgs> = {}>(args?: Subset<T, leave_types$leave_policiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leave_balances<T extends leave_types$leave_balancesArgs<ExtArgs> = {}>(args?: Subset<T, leave_types$leave_balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leave_types model
   */
  interface leave_typesFieldRefs {
    readonly id: FieldRef<"leave_types", 'String'>
    readonly name: FieldRef<"leave_types", 'LEAVE_TYPE'>
    readonly description: FieldRef<"leave_types", 'String'>
    readonly max_days_per_request: FieldRef<"leave_types", 'String'>
    readonly is_Active: FieldRef<"leave_types", 'Boolean'>
    readonly created_at: FieldRef<"leave_types", 'DateTime'>
    readonly updated_at: FieldRef<"leave_types", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * leave_types findUnique
   */
  export type leave_typesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_types
     */
    select?: leave_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_types
     */
    omit?: leave_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_typesInclude<ExtArgs> | null
    /**
     * Filter, which leave_types to fetch.
     */
    where: leave_typesWhereUniqueInput
  }

  /**
   * leave_types findUniqueOrThrow
   */
  export type leave_typesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_types
     */
    select?: leave_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_types
     */
    omit?: leave_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_typesInclude<ExtArgs> | null
    /**
     * Filter, which leave_types to fetch.
     */
    where: leave_typesWhereUniqueInput
  }

  /**
   * leave_types findFirst
   */
  export type leave_typesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_types
     */
    select?: leave_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_types
     */
    omit?: leave_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_typesInclude<ExtArgs> | null
    /**
     * Filter, which leave_types to fetch.
     */
    where?: leave_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_types to fetch.
     */
    orderBy?: leave_typesOrderByWithRelationInput | leave_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_types.
     */
    cursor?: leave_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_types.
     */
    distinct?: Leave_typesScalarFieldEnum | Leave_typesScalarFieldEnum[]
  }

  /**
   * leave_types findFirstOrThrow
   */
  export type leave_typesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_types
     */
    select?: leave_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_types
     */
    omit?: leave_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_typesInclude<ExtArgs> | null
    /**
     * Filter, which leave_types to fetch.
     */
    where?: leave_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_types to fetch.
     */
    orderBy?: leave_typesOrderByWithRelationInput | leave_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_types.
     */
    cursor?: leave_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_types.
     */
    distinct?: Leave_typesScalarFieldEnum | Leave_typesScalarFieldEnum[]
  }

  /**
   * leave_types findMany
   */
  export type leave_typesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_types
     */
    select?: leave_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_types
     */
    omit?: leave_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_typesInclude<ExtArgs> | null
    /**
     * Filter, which leave_types to fetch.
     */
    where?: leave_typesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_types to fetch.
     */
    orderBy?: leave_typesOrderByWithRelationInput | leave_typesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leave_types.
     */
    cursor?: leave_typesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_types.
     */
    skip?: number
    distinct?: Leave_typesScalarFieldEnum | Leave_typesScalarFieldEnum[]
  }

  /**
   * leave_types create
   */
  export type leave_typesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_types
     */
    select?: leave_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_types
     */
    omit?: leave_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_typesInclude<ExtArgs> | null
    /**
     * The data needed to create a leave_types.
     */
    data: XOR<leave_typesCreateInput, leave_typesUncheckedCreateInput>
  }

  /**
   * leave_types createMany
   */
  export type leave_typesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leave_types.
     */
    data: leave_typesCreateManyInput | leave_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leave_types createManyAndReturn
   */
  export type leave_typesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_types
     */
    select?: leave_typesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_types
     */
    omit?: leave_typesOmit<ExtArgs> | null
    /**
     * The data used to create many leave_types.
     */
    data: leave_typesCreateManyInput | leave_typesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leave_types update
   */
  export type leave_typesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_types
     */
    select?: leave_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_types
     */
    omit?: leave_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_typesInclude<ExtArgs> | null
    /**
     * The data needed to update a leave_types.
     */
    data: XOR<leave_typesUpdateInput, leave_typesUncheckedUpdateInput>
    /**
     * Choose, which leave_types to update.
     */
    where: leave_typesWhereUniqueInput
  }

  /**
   * leave_types updateMany
   */
  export type leave_typesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leave_types.
     */
    data: XOR<leave_typesUpdateManyMutationInput, leave_typesUncheckedUpdateManyInput>
    /**
     * Filter which leave_types to update
     */
    where?: leave_typesWhereInput
    /**
     * Limit how many leave_types to update.
     */
    limit?: number
  }

  /**
   * leave_types updateManyAndReturn
   */
  export type leave_typesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_types
     */
    select?: leave_typesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_types
     */
    omit?: leave_typesOmit<ExtArgs> | null
    /**
     * The data used to update leave_types.
     */
    data: XOR<leave_typesUpdateManyMutationInput, leave_typesUncheckedUpdateManyInput>
    /**
     * Filter which leave_types to update
     */
    where?: leave_typesWhereInput
    /**
     * Limit how many leave_types to update.
     */
    limit?: number
  }

  /**
   * leave_types upsert
   */
  export type leave_typesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_types
     */
    select?: leave_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_types
     */
    omit?: leave_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_typesInclude<ExtArgs> | null
    /**
     * The filter to search for the leave_types to update in case it exists.
     */
    where: leave_typesWhereUniqueInput
    /**
     * In case the leave_types found by the `where` argument doesn't exist, create a new leave_types with this data.
     */
    create: XOR<leave_typesCreateInput, leave_typesUncheckedCreateInput>
    /**
     * In case the leave_types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leave_typesUpdateInput, leave_typesUncheckedUpdateInput>
  }

  /**
   * leave_types delete
   */
  export type leave_typesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_types
     */
    select?: leave_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_types
     */
    omit?: leave_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_typesInclude<ExtArgs> | null
    /**
     * Filter which leave_types to delete.
     */
    where: leave_typesWhereUniqueInput
  }

  /**
   * leave_types deleteMany
   */
  export type leave_typesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_types to delete
     */
    where?: leave_typesWhereInput
    /**
     * Limit how many leave_types to delete.
     */
    limit?: number
  }

  /**
   * leave_types.leave_requests
   */
  export type leave_types$leave_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    where?: leave_requestWhereInput
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    cursor?: leave_requestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[]
  }

  /**
   * leave_types.leave_policies
   */
  export type leave_types$leave_policiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyInclude<ExtArgs> | null
    where?: leave_policyWhereInput
    orderBy?: leave_policyOrderByWithRelationInput | leave_policyOrderByWithRelationInput[]
    cursor?: leave_policyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Leave_policyScalarFieldEnum | Leave_policyScalarFieldEnum[]
  }

  /**
   * leave_types.leave_balances
   */
  export type leave_types$leave_balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceInclude<ExtArgs> | null
    where?: leave_balanceWhereInput
    orderBy?: leave_balanceOrderByWithRelationInput | leave_balanceOrderByWithRelationInput[]
    cursor?: leave_balanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Leave_balanceScalarFieldEnum | Leave_balanceScalarFieldEnum[]
  }

  /**
   * leave_types without action
   */
  export type leave_typesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_types
     */
    select?: leave_typesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_types
     */
    omit?: leave_typesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_typesInclude<ExtArgs> | null
  }


  /**
   * Model leave_status
   */

  export type AggregateLeave_status = {
    _count: Leave_statusCountAggregateOutputType | null
    _avg: Leave_statusAvgAggregateOutputType | null
    _sum: Leave_statusSumAggregateOutputType | null
    _min: Leave_statusMinAggregateOutputType | null
    _max: Leave_statusMaxAggregateOutputType | null
  }

  export type Leave_statusAvgAggregateOutputType = {
    id: number | null
  }

  export type Leave_statusSumAggregateOutputType = {
    id: number | null
  }

  export type Leave_statusMinAggregateOutputType = {
    id: number | null
    name: $Enums.LEAVE_APPROVAL | null
    description: string | null
    is_Active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Leave_statusMaxAggregateOutputType = {
    id: number | null
    name: $Enums.LEAVE_APPROVAL | null
    description: string | null
    is_Active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Leave_statusCountAggregateOutputType = {
    id: number
    name: number
    description: number
    is_Active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Leave_statusAvgAggregateInputType = {
    id?: true
  }

  export type Leave_statusSumAggregateInputType = {
    id?: true
  }

  export type Leave_statusMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
  }

  export type Leave_statusMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
  }

  export type Leave_statusCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Leave_statusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_status to aggregate.
     */
    where?: leave_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_statuses to fetch.
     */
    orderBy?: leave_statusOrderByWithRelationInput | leave_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leave_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leave_statuses
    **/
    _count?: true | Leave_statusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Leave_statusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Leave_statusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Leave_statusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Leave_statusMaxAggregateInputType
  }

  export type GetLeave_statusAggregateType<T extends Leave_statusAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave_status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave_status[P]>
      : GetScalarType<T[P], AggregateLeave_status[P]>
  }




  export type leave_statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_statusWhereInput
    orderBy?: leave_statusOrderByWithAggregationInput | leave_statusOrderByWithAggregationInput[]
    by: Leave_statusScalarFieldEnum[] | Leave_statusScalarFieldEnum
    having?: leave_statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Leave_statusCountAggregateInputType | true
    _avg?: Leave_statusAvgAggregateInputType
    _sum?: Leave_statusSumAggregateInputType
    _min?: Leave_statusMinAggregateInputType
    _max?: Leave_statusMaxAggregateInputType
  }

  export type Leave_statusGroupByOutputType = {
    id: number
    name: $Enums.LEAVE_APPROVAL
    description: string
    is_Active: boolean
    created_at: Date
    updated_at: Date
    _count: Leave_statusCountAggregateOutputType | null
    _avg: Leave_statusAvgAggregateOutputType | null
    _sum: Leave_statusSumAggregateOutputType | null
    _min: Leave_statusMinAggregateOutputType | null
    _max: Leave_statusMaxAggregateOutputType | null
  }

  type GetLeave_statusGroupByPayload<T extends leave_statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Leave_statusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Leave_statusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Leave_statusGroupByOutputType[P]>
            : GetScalarType<T[P], Leave_statusGroupByOutputType[P]>
        }
      >
    >


  export type leave_statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
    leave_requests?: boolean | leave_status$leave_requestsArgs<ExtArgs>
    leave_request_histories?: boolean | leave_status$leave_request_historiesArgs<ExtArgs>
    _count?: boolean | Leave_statusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_status"]>

  export type leave_statusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["leave_status"]>

  export type leave_statusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["leave_status"]>

  export type leave_statusSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type leave_statusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "is_Active" | "created_at" | "updated_at", ExtArgs["result"]["leave_status"]>
  export type leave_statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave_requests?: boolean | leave_status$leave_requestsArgs<ExtArgs>
    leave_request_histories?: boolean | leave_status$leave_request_historiesArgs<ExtArgs>
    _count?: boolean | Leave_statusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type leave_statusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type leave_statusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $leave_statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leave_status"
    objects: {
      leave_requests: Prisma.$leave_requestPayload<ExtArgs>[]
      leave_request_histories: Prisma.$leave_request_historyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: $Enums.LEAVE_APPROVAL
      description: string
      is_Active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["leave_status"]>
    composites: {}
  }

  type leave_statusGetPayload<S extends boolean | null | undefined | leave_statusDefaultArgs> = $Result.GetResult<Prisma.$leave_statusPayload, S>

  type leave_statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leave_statusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Leave_statusCountAggregateInputType | true
    }

  export interface leave_statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leave_status'], meta: { name: 'leave_status' } }
    /**
     * Find zero or one Leave_status that matches the filter.
     * @param {leave_statusFindUniqueArgs} args - Arguments to find a Leave_status
     * @example
     * // Get one Leave_status
     * const leave_status = await prisma.leave_status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leave_statusFindUniqueArgs>(args: SelectSubset<T, leave_statusFindUniqueArgs<ExtArgs>>): Prisma__leave_statusClient<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leave_status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leave_statusFindUniqueOrThrowArgs} args - Arguments to find a Leave_status
     * @example
     * // Get one Leave_status
     * const leave_status = await prisma.leave_status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leave_statusFindUniqueOrThrowArgs>(args: SelectSubset<T, leave_statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leave_statusClient<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_statusFindFirstArgs} args - Arguments to find a Leave_status
     * @example
     * // Get one Leave_status
     * const leave_status = await prisma.leave_status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leave_statusFindFirstArgs>(args?: SelectSubset<T, leave_statusFindFirstArgs<ExtArgs>>): Prisma__leave_statusClient<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_statusFindFirstOrThrowArgs} args - Arguments to find a Leave_status
     * @example
     * // Get one Leave_status
     * const leave_status = await prisma.leave_status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leave_statusFindFirstOrThrowArgs>(args?: SelectSubset<T, leave_statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__leave_statusClient<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leave_statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leave_statuses
     * const leave_statuses = await prisma.leave_status.findMany()
     * 
     * // Get first 10 Leave_statuses
     * const leave_statuses = await prisma.leave_status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leave_statusWithIdOnly = await prisma.leave_status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leave_statusFindManyArgs>(args?: SelectSubset<T, leave_statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leave_status.
     * @param {leave_statusCreateArgs} args - Arguments to create a Leave_status.
     * @example
     * // Create one Leave_status
     * const Leave_status = await prisma.leave_status.create({
     *   data: {
     *     // ... data to create a Leave_status
     *   }
     * })
     * 
     */
    create<T extends leave_statusCreateArgs>(args: SelectSubset<T, leave_statusCreateArgs<ExtArgs>>): Prisma__leave_statusClient<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leave_statuses.
     * @param {leave_statusCreateManyArgs} args - Arguments to create many Leave_statuses.
     * @example
     * // Create many Leave_statuses
     * const leave_status = await prisma.leave_status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leave_statusCreateManyArgs>(args?: SelectSubset<T, leave_statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leave_statuses and returns the data saved in the database.
     * @param {leave_statusCreateManyAndReturnArgs} args - Arguments to create many Leave_statuses.
     * @example
     * // Create many Leave_statuses
     * const leave_status = await prisma.leave_status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leave_statuses and only return the `id`
     * const leave_statusWithIdOnly = await prisma.leave_status.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leave_statusCreateManyAndReturnArgs>(args?: SelectSubset<T, leave_statusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leave_status.
     * @param {leave_statusDeleteArgs} args - Arguments to delete one Leave_status.
     * @example
     * // Delete one Leave_status
     * const Leave_status = await prisma.leave_status.delete({
     *   where: {
     *     // ... filter to delete one Leave_status
     *   }
     * })
     * 
     */
    delete<T extends leave_statusDeleteArgs>(args: SelectSubset<T, leave_statusDeleteArgs<ExtArgs>>): Prisma__leave_statusClient<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leave_status.
     * @param {leave_statusUpdateArgs} args - Arguments to update one Leave_status.
     * @example
     * // Update one Leave_status
     * const leave_status = await prisma.leave_status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leave_statusUpdateArgs>(args: SelectSubset<T, leave_statusUpdateArgs<ExtArgs>>): Prisma__leave_statusClient<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leave_statuses.
     * @param {leave_statusDeleteManyArgs} args - Arguments to filter Leave_statuses to delete.
     * @example
     * // Delete a few Leave_statuses
     * const { count } = await prisma.leave_status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leave_statusDeleteManyArgs>(args?: SelectSubset<T, leave_statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leave_statuses
     * const leave_status = await prisma.leave_status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leave_statusUpdateManyArgs>(args: SelectSubset<T, leave_statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_statuses and returns the data updated in the database.
     * @param {leave_statusUpdateManyAndReturnArgs} args - Arguments to update many Leave_statuses.
     * @example
     * // Update many Leave_statuses
     * const leave_status = await prisma.leave_status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leave_statuses and only return the `id`
     * const leave_statusWithIdOnly = await prisma.leave_status.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leave_statusUpdateManyAndReturnArgs>(args: SelectSubset<T, leave_statusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leave_status.
     * @param {leave_statusUpsertArgs} args - Arguments to update or create a Leave_status.
     * @example
     * // Update or create a Leave_status
     * const leave_status = await prisma.leave_status.upsert({
     *   create: {
     *     // ... data to create a Leave_status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave_status we want to update
     *   }
     * })
     */
    upsert<T extends leave_statusUpsertArgs>(args: SelectSubset<T, leave_statusUpsertArgs<ExtArgs>>): Prisma__leave_statusClient<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leave_statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_statusCountArgs} args - Arguments to filter Leave_statuses to count.
     * @example
     * // Count the number of Leave_statuses
     * const count = await prisma.leave_status.count({
     *   where: {
     *     // ... the filter for the Leave_statuses we want to count
     *   }
     * })
    **/
    count<T extends leave_statusCountArgs>(
      args?: Subset<T, leave_statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Leave_statusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Leave_statusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Leave_statusAggregateArgs>(args: Subset<T, Leave_statusAggregateArgs>): Prisma.PrismaPromise<GetLeave_statusAggregateType<T>>

    /**
     * Group by Leave_status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_statusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leave_statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leave_statusGroupByArgs['orderBy'] }
        : { orderBy?: leave_statusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leave_statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeave_statusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leave_status model
   */
  readonly fields: leave_statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leave_status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leave_statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leave_requests<T extends leave_status$leave_requestsArgs<ExtArgs> = {}>(args?: Subset<T, leave_status$leave_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leave_request_histories<T extends leave_status$leave_request_historiesArgs<ExtArgs> = {}>(args?: Subset<T, leave_status$leave_request_historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leave_status model
   */
  interface leave_statusFieldRefs {
    readonly id: FieldRef<"leave_status", 'Int'>
    readonly name: FieldRef<"leave_status", 'LEAVE_APPROVAL'>
    readonly description: FieldRef<"leave_status", 'String'>
    readonly is_Active: FieldRef<"leave_status", 'Boolean'>
    readonly created_at: FieldRef<"leave_status", 'DateTime'>
    readonly updated_at: FieldRef<"leave_status", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * leave_status findUnique
   */
  export type leave_statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_status
     */
    select?: leave_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_status
     */
    omit?: leave_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_statusInclude<ExtArgs> | null
    /**
     * Filter, which leave_status to fetch.
     */
    where: leave_statusWhereUniqueInput
  }

  /**
   * leave_status findUniqueOrThrow
   */
  export type leave_statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_status
     */
    select?: leave_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_status
     */
    omit?: leave_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_statusInclude<ExtArgs> | null
    /**
     * Filter, which leave_status to fetch.
     */
    where: leave_statusWhereUniqueInput
  }

  /**
   * leave_status findFirst
   */
  export type leave_statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_status
     */
    select?: leave_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_status
     */
    omit?: leave_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_statusInclude<ExtArgs> | null
    /**
     * Filter, which leave_status to fetch.
     */
    where?: leave_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_statuses to fetch.
     */
    orderBy?: leave_statusOrderByWithRelationInput | leave_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_statuses.
     */
    cursor?: leave_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_statuses.
     */
    distinct?: Leave_statusScalarFieldEnum | Leave_statusScalarFieldEnum[]
  }

  /**
   * leave_status findFirstOrThrow
   */
  export type leave_statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_status
     */
    select?: leave_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_status
     */
    omit?: leave_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_statusInclude<ExtArgs> | null
    /**
     * Filter, which leave_status to fetch.
     */
    where?: leave_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_statuses to fetch.
     */
    orderBy?: leave_statusOrderByWithRelationInput | leave_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_statuses.
     */
    cursor?: leave_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_statuses.
     */
    distinct?: Leave_statusScalarFieldEnum | Leave_statusScalarFieldEnum[]
  }

  /**
   * leave_status findMany
   */
  export type leave_statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_status
     */
    select?: leave_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_status
     */
    omit?: leave_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_statusInclude<ExtArgs> | null
    /**
     * Filter, which leave_statuses to fetch.
     */
    where?: leave_statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_statuses to fetch.
     */
    orderBy?: leave_statusOrderByWithRelationInput | leave_statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leave_statuses.
     */
    cursor?: leave_statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_statuses.
     */
    skip?: number
    distinct?: Leave_statusScalarFieldEnum | Leave_statusScalarFieldEnum[]
  }

  /**
   * leave_status create
   */
  export type leave_statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_status
     */
    select?: leave_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_status
     */
    omit?: leave_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_statusInclude<ExtArgs> | null
    /**
     * The data needed to create a leave_status.
     */
    data: XOR<leave_statusCreateInput, leave_statusUncheckedCreateInput>
  }

  /**
   * leave_status createMany
   */
  export type leave_statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leave_statuses.
     */
    data: leave_statusCreateManyInput | leave_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leave_status createManyAndReturn
   */
  export type leave_statusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_status
     */
    select?: leave_statusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_status
     */
    omit?: leave_statusOmit<ExtArgs> | null
    /**
     * The data used to create many leave_statuses.
     */
    data: leave_statusCreateManyInput | leave_statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leave_status update
   */
  export type leave_statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_status
     */
    select?: leave_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_status
     */
    omit?: leave_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_statusInclude<ExtArgs> | null
    /**
     * The data needed to update a leave_status.
     */
    data: XOR<leave_statusUpdateInput, leave_statusUncheckedUpdateInput>
    /**
     * Choose, which leave_status to update.
     */
    where: leave_statusWhereUniqueInput
  }

  /**
   * leave_status updateMany
   */
  export type leave_statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leave_statuses.
     */
    data: XOR<leave_statusUpdateManyMutationInput, leave_statusUncheckedUpdateManyInput>
    /**
     * Filter which leave_statuses to update
     */
    where?: leave_statusWhereInput
    /**
     * Limit how many leave_statuses to update.
     */
    limit?: number
  }

  /**
   * leave_status updateManyAndReturn
   */
  export type leave_statusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_status
     */
    select?: leave_statusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_status
     */
    omit?: leave_statusOmit<ExtArgs> | null
    /**
     * The data used to update leave_statuses.
     */
    data: XOR<leave_statusUpdateManyMutationInput, leave_statusUncheckedUpdateManyInput>
    /**
     * Filter which leave_statuses to update
     */
    where?: leave_statusWhereInput
    /**
     * Limit how many leave_statuses to update.
     */
    limit?: number
  }

  /**
   * leave_status upsert
   */
  export type leave_statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_status
     */
    select?: leave_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_status
     */
    omit?: leave_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_statusInclude<ExtArgs> | null
    /**
     * The filter to search for the leave_status to update in case it exists.
     */
    where: leave_statusWhereUniqueInput
    /**
     * In case the leave_status found by the `where` argument doesn't exist, create a new leave_status with this data.
     */
    create: XOR<leave_statusCreateInput, leave_statusUncheckedCreateInput>
    /**
     * In case the leave_status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leave_statusUpdateInput, leave_statusUncheckedUpdateInput>
  }

  /**
   * leave_status delete
   */
  export type leave_statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_status
     */
    select?: leave_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_status
     */
    omit?: leave_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_statusInclude<ExtArgs> | null
    /**
     * Filter which leave_status to delete.
     */
    where: leave_statusWhereUniqueInput
  }

  /**
   * leave_status deleteMany
   */
  export type leave_statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_statuses to delete
     */
    where?: leave_statusWhereInput
    /**
     * Limit how many leave_statuses to delete.
     */
    limit?: number
  }

  /**
   * leave_status.leave_requests
   */
  export type leave_status$leave_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    where?: leave_requestWhereInput
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    cursor?: leave_requestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[]
  }

  /**
   * leave_status.leave_request_histories
   */
  export type leave_status$leave_request_historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
    where?: leave_request_historyWhereInput
    orderBy?: leave_request_historyOrderByWithRelationInput | leave_request_historyOrderByWithRelationInput[]
    cursor?: leave_request_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Leave_request_historyScalarFieldEnum | Leave_request_historyScalarFieldEnum[]
  }

  /**
   * leave_status without action
   */
  export type leave_statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_status
     */
    select?: leave_statusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_status
     */
    omit?: leave_statusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_statusInclude<ExtArgs> | null
  }


  /**
   * Model departments
   */

  export type AggregateDepartments = {
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  export type DepartmentsMinAggregateOutputType = {
    id: string | null
    cus_id: string | null
    name: string | null
    description: string | null
    is_Active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DepartmentsMaxAggregateOutputType = {
    id: string | null
    cus_id: string | null
    name: string | null
    description: string | null
    is_Active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DepartmentsCountAggregateOutputType = {
    id: number
    cus_id: number
    name: number
    description: number
    is_Active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DepartmentsMinAggregateInputType = {
    id?: true
    cus_id?: true
    name?: true
    description?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
  }

  export type DepartmentsMaxAggregateInputType = {
    id?: true
    cus_id?: true
    name?: true
    description?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
  }

  export type DepartmentsCountAggregateInputType = {
    id?: true
    cus_id?: true
    name?: true
    description?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DepartmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to aggregate.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentsMaxAggregateInputType
  }

  export type GetDepartmentsAggregateType<T extends DepartmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartments[P]>
      : GetScalarType<T[P], AggregateDepartments[P]>
  }




  export type departmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentsWhereInput
    orderBy?: departmentsOrderByWithAggregationInput | departmentsOrderByWithAggregationInput[]
    by: DepartmentsScalarFieldEnum[] | DepartmentsScalarFieldEnum
    having?: departmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentsCountAggregateInputType | true
    _min?: DepartmentsMinAggregateInputType
    _max?: DepartmentsMaxAggregateInputType
  }

  export type DepartmentsGroupByOutputType = {
    id: string
    cus_id: string
    name: string
    description: string
    is_Active: boolean
    created_at: Date
    updated_at: Date
    _count: DepartmentsCountAggregateOutputType | null
    _min: DepartmentsMinAggregateOutputType | null
    _max: DepartmentsMaxAggregateOutputType | null
  }

  type GetDepartmentsGroupByPayload<T extends departmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentsGroupByOutputType[P]>
        }
      >
    >


  export type departmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cus_id?: boolean
    name?: boolean
    description?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | departments$usersArgs<ExtArgs>
    leave_policy?: boolean | departments$leave_policyArgs<ExtArgs>
    holiday?: boolean | departments$holidayArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cus_id?: boolean
    name?: boolean
    description?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cus_id?: boolean
    name?: boolean
    description?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["departments"]>

  export type departmentsSelectScalar = {
    id?: boolean
    cus_id?: boolean
    name?: boolean
    description?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type departmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cus_id" | "name" | "description" | "is_Active" | "created_at" | "updated_at", ExtArgs["result"]["departments"]>
  export type departmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | departments$usersArgs<ExtArgs>
    leave_policy?: boolean | departments$leave_policyArgs<ExtArgs>
    holiday?: boolean | departments$holidayArgs<ExtArgs>
    _count?: boolean | DepartmentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type departmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type departmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $departmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "departments"
    objects: {
      users: Prisma.$userPayload<ExtArgs>[]
      leave_policy: Prisma.$leave_policyPayload<ExtArgs>[]
      holiday: Prisma.$holidayPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cus_id: string
      name: string
      description: string
      is_Active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["departments"]>
    composites: {}
  }

  type departmentsGetPayload<S extends boolean | null | undefined | departmentsDefaultArgs> = $Result.GetResult<Prisma.$departmentsPayload, S>

  type departmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentsCountAggregateInputType | true
    }

  export interface departmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['departments'], meta: { name: 'departments' } }
    /**
     * Find zero or one Departments that matches the filter.
     * @param {departmentsFindUniqueArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departmentsFindUniqueArgs>(args: SelectSubset<T, departmentsFindUniqueArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departmentsFindUniqueOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, departmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindFirstArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departmentsFindFirstArgs>(args?: SelectSubset<T, departmentsFindFirstArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindFirstOrThrowArgs} args - Arguments to find a Departments
     * @example
     * // Get one Departments
     * const departments = await prisma.departments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, departmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.departments.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.departments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentsWithIdOnly = await prisma.departments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends departmentsFindManyArgs>(args?: SelectSubset<T, departmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departments.
     * @param {departmentsCreateArgs} args - Arguments to create a Departments.
     * @example
     * // Create one Departments
     * const Departments = await prisma.departments.create({
     *   data: {
     *     // ... data to create a Departments
     *   }
     * })
     * 
     */
    create<T extends departmentsCreateArgs>(args: SelectSubset<T, departmentsCreateArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {departmentsCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departmentsCreateManyArgs>(args?: SelectSubset<T, departmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {departmentsCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const departments = await prisma.departments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentsWithIdOnly = await prisma.departments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends departmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, departmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departments.
     * @param {departmentsDeleteArgs} args - Arguments to delete one Departments.
     * @example
     * // Delete one Departments
     * const Departments = await prisma.departments.delete({
     *   where: {
     *     // ... filter to delete one Departments
     *   }
     * })
     * 
     */
    delete<T extends departmentsDeleteArgs>(args: SelectSubset<T, departmentsDeleteArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departments.
     * @param {departmentsUpdateArgs} args - Arguments to update one Departments.
     * @example
     * // Update one Departments
     * const departments = await prisma.departments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departmentsUpdateArgs>(args: SelectSubset<T, departmentsUpdateArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {departmentsDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.departments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departmentsDeleteManyArgs>(args?: SelectSubset<T, departmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departmentsUpdateManyArgs>(args: SelectSubset<T, departmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {departmentsUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const departments = await prisma.departments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentsWithIdOnly = await prisma.departments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends departmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, departmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departments.
     * @param {departmentsUpsertArgs} args - Arguments to update or create a Departments.
     * @example
     * // Update or create a Departments
     * const departments = await prisma.departments.upsert({
     *   create: {
     *     // ... data to create a Departments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departments we want to update
     *   }
     * })
     */
    upsert<T extends departmentsUpsertArgs>(args: SelectSubset<T, departmentsUpsertArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.departments.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentsCountArgs>(
      args?: Subset<T, departmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentsAggregateArgs>(args: Subset<T, DepartmentsAggregateArgs>): Prisma.PrismaPromise<GetDepartmentsAggregateType<T>>

    /**
     * Group by Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends departmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentsGroupByArgs['orderBy'] }
        : { orderBy?: departmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, departmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the departments model
   */
  readonly fields: departmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for departments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends departments$usersArgs<ExtArgs> = {}>(args?: Subset<T, departments$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leave_policy<T extends departments$leave_policyArgs<ExtArgs> = {}>(args?: Subset<T, departments$leave_policyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    holiday<T extends departments$holidayArgs<ExtArgs> = {}>(args?: Subset<T, departments$holidayArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$holidayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the departments model
   */
  interface departmentsFieldRefs {
    readonly id: FieldRef<"departments", 'String'>
    readonly cus_id: FieldRef<"departments", 'String'>
    readonly name: FieldRef<"departments", 'String'>
    readonly description: FieldRef<"departments", 'String'>
    readonly is_Active: FieldRef<"departments", 'Boolean'>
    readonly created_at: FieldRef<"departments", 'DateTime'>
    readonly updated_at: FieldRef<"departments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * departments findUnique
   */
  export type departmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments findUniqueOrThrow
   */
  export type departmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments findFirst
   */
  export type departmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments findFirstOrThrow
   */
  export type departmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments findMany
   */
  export type departmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentsOrderByWithRelationInput | departmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    distinct?: DepartmentsScalarFieldEnum | DepartmentsScalarFieldEnum[]
  }

  /**
   * departments create
   */
  export type departmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a departments.
     */
    data: XOR<departmentsCreateInput, departmentsUncheckedCreateInput>
  }

  /**
   * departments createMany
   */
  export type departmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentsCreateManyInput | departmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departments createManyAndReturn
   */
  export type departmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * The data used to create many departments.
     */
    data: departmentsCreateManyInput | departmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * departments update
   */
  export type departmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a departments.
     */
    data: XOR<departmentsUpdateInput, departmentsUncheckedUpdateInput>
    /**
     * Choose, which departments to update.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments updateMany
   */
  export type departmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentsUpdateManyMutationInput, departmentsUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentsWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * departments updateManyAndReturn
   */
  export type departmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * The data used to update departments.
     */
    data: XOR<departmentsUpdateManyMutationInput, departmentsUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentsWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * departments upsert
   */
  export type departmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the departments to update in case it exists.
     */
    where: departmentsWhereUniqueInput
    /**
     * In case the departments found by the `where` argument doesn't exist, create a new departments with this data.
     */
    create: XOR<departmentsCreateInput, departmentsUncheckedCreateInput>
    /**
     * In case the departments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentsUpdateInput, departmentsUncheckedUpdateInput>
  }

  /**
   * departments delete
   */
  export type departmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    /**
     * Filter which departments to delete.
     */
    where: departmentsWhereUniqueInput
  }

  /**
   * departments deleteMany
   */
  export type departmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentsWhereInput
    /**
     * Limit how many departments to delete.
     */
    limit?: number
  }

  /**
   * departments.users
   */
  export type departments$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * departments.leave_policy
   */
  export type departments$leave_policyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyInclude<ExtArgs> | null
    where?: leave_policyWhereInput
    orderBy?: leave_policyOrderByWithRelationInput | leave_policyOrderByWithRelationInput[]
    cursor?: leave_policyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Leave_policyScalarFieldEnum | Leave_policyScalarFieldEnum[]
  }

  /**
   * departments.holiday
   */
  export type departments$holidayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayInclude<ExtArgs> | null
    where?: holidayWhereInput
    orderBy?: holidayOrderByWithRelationInput | holidayOrderByWithRelationInput[]
    cursor?: holidayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * departments without action
   */
  export type departmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
  }


  /**
   * Model leave_request
   */

  export type AggregateLeave_request = {
    _count: Leave_requestCountAggregateOutputType | null
    _avg: Leave_requestAvgAggregateOutputType | null
    _sum: Leave_requestSumAggregateOutputType | null
    _min: Leave_requestMinAggregateOutputType | null
    _max: Leave_requestMaxAggregateOutputType | null
  }

  export type Leave_requestAvgAggregateOutputType = {
    no_of_days: number | null
    status_id: number | null
  }

  export type Leave_requestSumAggregateOutputType = {
    no_of_days: number | null
    status_id: number | null
  }

  export type Leave_requestMinAggregateOutputType = {
    id: string | null
    cus_id: string | null
    start_date: Date | null
    end_date: Date | null
    no_of_days: number | null
    reason: string | null
    applied_date: Date | null
    user_id: string | null
    leave_type_id: $Enums.LEAVE_TYPE | null
    status_id: number | null
  }

  export type Leave_requestMaxAggregateOutputType = {
    id: string | null
    cus_id: string | null
    start_date: Date | null
    end_date: Date | null
    no_of_days: number | null
    reason: string | null
    applied_date: Date | null
    user_id: string | null
    leave_type_id: $Enums.LEAVE_TYPE | null
    status_id: number | null
  }

  export type Leave_requestCountAggregateOutputType = {
    id: number
    cus_id: number
    start_date: number
    end_date: number
    no_of_days: number
    reason: number
    applied_date: number
    user_id: number
    leave_type_id: number
    status_id: number
    _all: number
  }


  export type Leave_requestAvgAggregateInputType = {
    no_of_days?: true
    status_id?: true
  }

  export type Leave_requestSumAggregateInputType = {
    no_of_days?: true
    status_id?: true
  }

  export type Leave_requestMinAggregateInputType = {
    id?: true
    cus_id?: true
    start_date?: true
    end_date?: true
    no_of_days?: true
    reason?: true
    applied_date?: true
    user_id?: true
    leave_type_id?: true
    status_id?: true
  }

  export type Leave_requestMaxAggregateInputType = {
    id?: true
    cus_id?: true
    start_date?: true
    end_date?: true
    no_of_days?: true
    reason?: true
    applied_date?: true
    user_id?: true
    leave_type_id?: true
    status_id?: true
  }

  export type Leave_requestCountAggregateInputType = {
    id?: true
    cus_id?: true
    start_date?: true
    end_date?: true
    no_of_days?: true
    reason?: true
    applied_date?: true
    user_id?: true
    leave_type_id?: true
    status_id?: true
    _all?: true
  }

  export type Leave_requestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_request to aggregate.
     */
    where?: leave_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_requests to fetch.
     */
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leave_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leave_requests
    **/
    _count?: true | Leave_requestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Leave_requestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Leave_requestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Leave_requestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Leave_requestMaxAggregateInputType
  }

  export type GetLeave_requestAggregateType<T extends Leave_requestAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave_request]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave_request[P]>
      : GetScalarType<T[P], AggregateLeave_request[P]>
  }




  export type leave_requestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_requestWhereInput
    orderBy?: leave_requestOrderByWithAggregationInput | leave_requestOrderByWithAggregationInput[]
    by: Leave_requestScalarFieldEnum[] | Leave_requestScalarFieldEnum
    having?: leave_requestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Leave_requestCountAggregateInputType | true
    _avg?: Leave_requestAvgAggregateInputType
    _sum?: Leave_requestSumAggregateInputType
    _min?: Leave_requestMinAggregateInputType
    _max?: Leave_requestMaxAggregateInputType
  }

  export type Leave_requestGroupByOutputType = {
    id: string
    cus_id: string
    start_date: Date
    end_date: Date
    no_of_days: number
    reason: string
    applied_date: Date
    user_id: string
    leave_type_id: $Enums.LEAVE_TYPE
    status_id: number
    _count: Leave_requestCountAggregateOutputType | null
    _avg: Leave_requestAvgAggregateOutputType | null
    _sum: Leave_requestSumAggregateOutputType | null
    _min: Leave_requestMinAggregateOutputType | null
    _max: Leave_requestMaxAggregateOutputType | null
  }

  type GetLeave_requestGroupByPayload<T extends leave_requestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Leave_requestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Leave_requestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Leave_requestGroupByOutputType[P]>
            : GetScalarType<T[P], Leave_requestGroupByOutputType[P]>
        }
      >
    >


  export type leave_requestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cus_id?: boolean
    start_date?: boolean
    end_date?: boolean
    no_of_days?: boolean
    reason?: boolean
    applied_date?: boolean
    user_id?: boolean
    leave_type_id?: boolean
    status_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
    status?: boolean | leave_statusDefaultArgs<ExtArgs>
    leave_request_histories?: boolean | leave_request$leave_request_historiesArgs<ExtArgs>
    _count?: boolean | Leave_requestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_request"]>

  export type leave_requestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cus_id?: boolean
    start_date?: boolean
    end_date?: boolean
    no_of_days?: boolean
    reason?: boolean
    applied_date?: boolean
    user_id?: boolean
    leave_type_id?: boolean
    status_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
    status?: boolean | leave_statusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_request"]>

  export type leave_requestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cus_id?: boolean
    start_date?: boolean
    end_date?: boolean
    no_of_days?: boolean
    reason?: boolean
    applied_date?: boolean
    user_id?: boolean
    leave_type_id?: boolean
    status_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
    status?: boolean | leave_statusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_request"]>

  export type leave_requestSelectScalar = {
    id?: boolean
    cus_id?: boolean
    start_date?: boolean
    end_date?: boolean
    no_of_days?: boolean
    reason?: boolean
    applied_date?: boolean
    user_id?: boolean
    leave_type_id?: boolean
    status_id?: boolean
  }

  export type leave_requestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cus_id" | "start_date" | "end_date" | "no_of_days" | "reason" | "applied_date" | "user_id" | "leave_type_id" | "status_id", ExtArgs["result"]["leave_request"]>
  export type leave_requestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
    status?: boolean | leave_statusDefaultArgs<ExtArgs>
    leave_request_histories?: boolean | leave_request$leave_request_historiesArgs<ExtArgs>
    _count?: boolean | Leave_requestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type leave_requestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
    status?: boolean | leave_statusDefaultArgs<ExtArgs>
  }
  export type leave_requestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
    status?: boolean | leave_statusDefaultArgs<ExtArgs>
  }

  export type $leave_requestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leave_request"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      leave_type: Prisma.$leave_typesPayload<ExtArgs>
      status: Prisma.$leave_statusPayload<ExtArgs>
      leave_request_histories: Prisma.$leave_request_historyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cus_id: string
      start_date: Date
      end_date: Date
      no_of_days: number
      reason: string
      applied_date: Date
      user_id: string
      leave_type_id: $Enums.LEAVE_TYPE
      status_id: number
    }, ExtArgs["result"]["leave_request"]>
    composites: {}
  }

  type leave_requestGetPayload<S extends boolean | null | undefined | leave_requestDefaultArgs> = $Result.GetResult<Prisma.$leave_requestPayload, S>

  type leave_requestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leave_requestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Leave_requestCountAggregateInputType | true
    }

  export interface leave_requestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leave_request'], meta: { name: 'leave_request' } }
    /**
     * Find zero or one Leave_request that matches the filter.
     * @param {leave_requestFindUniqueArgs} args - Arguments to find a Leave_request
     * @example
     * // Get one Leave_request
     * const leave_request = await prisma.leave_request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leave_requestFindUniqueArgs>(args: SelectSubset<T, leave_requestFindUniqueArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leave_request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leave_requestFindUniqueOrThrowArgs} args - Arguments to find a Leave_request
     * @example
     * // Get one Leave_request
     * const leave_request = await prisma.leave_request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leave_requestFindUniqueOrThrowArgs>(args: SelectSubset<T, leave_requestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestFindFirstArgs} args - Arguments to find a Leave_request
     * @example
     * // Get one Leave_request
     * const leave_request = await prisma.leave_request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leave_requestFindFirstArgs>(args?: SelectSubset<T, leave_requestFindFirstArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestFindFirstOrThrowArgs} args - Arguments to find a Leave_request
     * @example
     * // Get one Leave_request
     * const leave_request = await prisma.leave_request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leave_requestFindFirstOrThrowArgs>(args?: SelectSubset<T, leave_requestFindFirstOrThrowArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leave_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leave_requests
     * const leave_requests = await prisma.leave_request.findMany()
     * 
     * // Get first 10 Leave_requests
     * const leave_requests = await prisma.leave_request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leave_requestWithIdOnly = await prisma.leave_request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leave_requestFindManyArgs>(args?: SelectSubset<T, leave_requestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leave_request.
     * @param {leave_requestCreateArgs} args - Arguments to create a Leave_request.
     * @example
     * // Create one Leave_request
     * const Leave_request = await prisma.leave_request.create({
     *   data: {
     *     // ... data to create a Leave_request
     *   }
     * })
     * 
     */
    create<T extends leave_requestCreateArgs>(args: SelectSubset<T, leave_requestCreateArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leave_requests.
     * @param {leave_requestCreateManyArgs} args - Arguments to create many Leave_requests.
     * @example
     * // Create many Leave_requests
     * const leave_request = await prisma.leave_request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leave_requestCreateManyArgs>(args?: SelectSubset<T, leave_requestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leave_requests and returns the data saved in the database.
     * @param {leave_requestCreateManyAndReturnArgs} args - Arguments to create many Leave_requests.
     * @example
     * // Create many Leave_requests
     * const leave_request = await prisma.leave_request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leave_requests and only return the `id`
     * const leave_requestWithIdOnly = await prisma.leave_request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leave_requestCreateManyAndReturnArgs>(args?: SelectSubset<T, leave_requestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leave_request.
     * @param {leave_requestDeleteArgs} args - Arguments to delete one Leave_request.
     * @example
     * // Delete one Leave_request
     * const Leave_request = await prisma.leave_request.delete({
     *   where: {
     *     // ... filter to delete one Leave_request
     *   }
     * })
     * 
     */
    delete<T extends leave_requestDeleteArgs>(args: SelectSubset<T, leave_requestDeleteArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leave_request.
     * @param {leave_requestUpdateArgs} args - Arguments to update one Leave_request.
     * @example
     * // Update one Leave_request
     * const leave_request = await prisma.leave_request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leave_requestUpdateArgs>(args: SelectSubset<T, leave_requestUpdateArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leave_requests.
     * @param {leave_requestDeleteManyArgs} args - Arguments to filter Leave_requests to delete.
     * @example
     * // Delete a few Leave_requests
     * const { count } = await prisma.leave_request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leave_requestDeleteManyArgs>(args?: SelectSubset<T, leave_requestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leave_requests
     * const leave_request = await prisma.leave_request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leave_requestUpdateManyArgs>(args: SelectSubset<T, leave_requestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_requests and returns the data updated in the database.
     * @param {leave_requestUpdateManyAndReturnArgs} args - Arguments to update many Leave_requests.
     * @example
     * // Update many Leave_requests
     * const leave_request = await prisma.leave_request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leave_requests and only return the `id`
     * const leave_requestWithIdOnly = await prisma.leave_request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leave_requestUpdateManyAndReturnArgs>(args: SelectSubset<T, leave_requestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leave_request.
     * @param {leave_requestUpsertArgs} args - Arguments to update or create a Leave_request.
     * @example
     * // Update or create a Leave_request
     * const leave_request = await prisma.leave_request.upsert({
     *   create: {
     *     // ... data to create a Leave_request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave_request we want to update
     *   }
     * })
     */
    upsert<T extends leave_requestUpsertArgs>(args: SelectSubset<T, leave_requestUpsertArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leave_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestCountArgs} args - Arguments to filter Leave_requests to count.
     * @example
     * // Count the number of Leave_requests
     * const count = await prisma.leave_request.count({
     *   where: {
     *     // ... the filter for the Leave_requests we want to count
     *   }
     * })
    **/
    count<T extends leave_requestCountArgs>(
      args?: Subset<T, leave_requestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Leave_requestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Leave_requestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Leave_requestAggregateArgs>(args: Subset<T, Leave_requestAggregateArgs>): Prisma.PrismaPromise<GetLeave_requestAggregateType<T>>

    /**
     * Group by Leave_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_requestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leave_requestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leave_requestGroupByArgs['orderBy'] }
        : { orderBy?: leave_requestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leave_requestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeave_requestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leave_request model
   */
  readonly fields: leave_requestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leave_request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leave_requestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leave_type<T extends leave_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, leave_typesDefaultArgs<ExtArgs>>): Prisma__leave_typesClient<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends leave_statusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, leave_statusDefaultArgs<ExtArgs>>): Prisma__leave_statusClient<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leave_request_histories<T extends leave_request$leave_request_historiesArgs<ExtArgs> = {}>(args?: Subset<T, leave_request$leave_request_historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leave_request model
   */
  interface leave_requestFieldRefs {
    readonly id: FieldRef<"leave_request", 'String'>
    readonly cus_id: FieldRef<"leave_request", 'String'>
    readonly start_date: FieldRef<"leave_request", 'DateTime'>
    readonly end_date: FieldRef<"leave_request", 'DateTime'>
    readonly no_of_days: FieldRef<"leave_request", 'Int'>
    readonly reason: FieldRef<"leave_request", 'String'>
    readonly applied_date: FieldRef<"leave_request", 'DateTime'>
    readonly user_id: FieldRef<"leave_request", 'String'>
    readonly leave_type_id: FieldRef<"leave_request", 'LEAVE_TYPE'>
    readonly status_id: FieldRef<"leave_request", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * leave_request findUnique
   */
  export type leave_requestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * Filter, which leave_request to fetch.
     */
    where: leave_requestWhereUniqueInput
  }

  /**
   * leave_request findUniqueOrThrow
   */
  export type leave_requestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * Filter, which leave_request to fetch.
     */
    where: leave_requestWhereUniqueInput
  }

  /**
   * leave_request findFirst
   */
  export type leave_requestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * Filter, which leave_request to fetch.
     */
    where?: leave_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_requests to fetch.
     */
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_requests.
     */
    cursor?: leave_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_requests.
     */
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[]
  }

  /**
   * leave_request findFirstOrThrow
   */
  export type leave_requestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * Filter, which leave_request to fetch.
     */
    where?: leave_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_requests to fetch.
     */
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_requests.
     */
    cursor?: leave_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_requests.
     */
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[]
  }

  /**
   * leave_request findMany
   */
  export type leave_requestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * Filter, which leave_requests to fetch.
     */
    where?: leave_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_requests to fetch.
     */
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leave_requests.
     */
    cursor?: leave_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_requests.
     */
    skip?: number
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[]
  }

  /**
   * leave_request create
   */
  export type leave_requestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * The data needed to create a leave_request.
     */
    data: XOR<leave_requestCreateInput, leave_requestUncheckedCreateInput>
  }

  /**
   * leave_request createMany
   */
  export type leave_requestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leave_requests.
     */
    data: leave_requestCreateManyInput | leave_requestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leave_request createManyAndReturn
   */
  export type leave_requestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * The data used to create many leave_requests.
     */
    data: leave_requestCreateManyInput | leave_requestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * leave_request update
   */
  export type leave_requestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * The data needed to update a leave_request.
     */
    data: XOR<leave_requestUpdateInput, leave_requestUncheckedUpdateInput>
    /**
     * Choose, which leave_request to update.
     */
    where: leave_requestWhereUniqueInput
  }

  /**
   * leave_request updateMany
   */
  export type leave_requestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leave_requests.
     */
    data: XOR<leave_requestUpdateManyMutationInput, leave_requestUncheckedUpdateManyInput>
    /**
     * Filter which leave_requests to update
     */
    where?: leave_requestWhereInput
    /**
     * Limit how many leave_requests to update.
     */
    limit?: number
  }

  /**
   * leave_request updateManyAndReturn
   */
  export type leave_requestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * The data used to update leave_requests.
     */
    data: XOR<leave_requestUpdateManyMutationInput, leave_requestUncheckedUpdateManyInput>
    /**
     * Filter which leave_requests to update
     */
    where?: leave_requestWhereInput
    /**
     * Limit how many leave_requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * leave_request upsert
   */
  export type leave_requestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * The filter to search for the leave_request to update in case it exists.
     */
    where: leave_requestWhereUniqueInput
    /**
     * In case the leave_request found by the `where` argument doesn't exist, create a new leave_request with this data.
     */
    create: XOR<leave_requestCreateInput, leave_requestUncheckedCreateInput>
    /**
     * In case the leave_request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leave_requestUpdateInput, leave_requestUncheckedUpdateInput>
  }

  /**
   * leave_request delete
   */
  export type leave_requestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    /**
     * Filter which leave_request to delete.
     */
    where: leave_requestWhereUniqueInput
  }

  /**
   * leave_request deleteMany
   */
  export type leave_requestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_requests to delete
     */
    where?: leave_requestWhereInput
    /**
     * Limit how many leave_requests to delete.
     */
    limit?: number
  }

  /**
   * leave_request.leave_request_histories
   */
  export type leave_request$leave_request_historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
    where?: leave_request_historyWhereInput
    orderBy?: leave_request_historyOrderByWithRelationInput | leave_request_historyOrderByWithRelationInput[]
    cursor?: leave_request_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Leave_request_historyScalarFieldEnum | Leave_request_historyScalarFieldEnum[]
  }

  /**
   * leave_request without action
   */
  export type leave_requestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
  }


  /**
   * Model leave_request_history
   */

  export type AggregateLeave_request_history = {
    _count: Leave_request_historyCountAggregateOutputType | null
    _avg: Leave_request_historyAvgAggregateOutputType | null
    _sum: Leave_request_historySumAggregateOutputType | null
    _min: Leave_request_historyMinAggregateOutputType | null
    _max: Leave_request_historyMaxAggregateOutputType | null
  }

  export type Leave_request_historyAvgAggregateOutputType = {
    status_id: number | null
  }

  export type Leave_request_historySumAggregateOutputType = {
    status_id: number | null
  }

  export type Leave_request_historyMinAggregateOutputType = {
    id: string | null
    comments: string | null
    created_at: Date | null
    leave_request_id: string | null
    status_id: number | null
    updated_by: string | null
  }

  export type Leave_request_historyMaxAggregateOutputType = {
    id: string | null
    comments: string | null
    created_at: Date | null
    leave_request_id: string | null
    status_id: number | null
    updated_by: string | null
  }

  export type Leave_request_historyCountAggregateOutputType = {
    id: number
    comments: number
    created_at: number
    leave_request_id: number
    status_id: number
    updated_by: number
    _all: number
  }


  export type Leave_request_historyAvgAggregateInputType = {
    status_id?: true
  }

  export type Leave_request_historySumAggregateInputType = {
    status_id?: true
  }

  export type Leave_request_historyMinAggregateInputType = {
    id?: true
    comments?: true
    created_at?: true
    leave_request_id?: true
    status_id?: true
    updated_by?: true
  }

  export type Leave_request_historyMaxAggregateInputType = {
    id?: true
    comments?: true
    created_at?: true
    leave_request_id?: true
    status_id?: true
    updated_by?: true
  }

  export type Leave_request_historyCountAggregateInputType = {
    id?: true
    comments?: true
    created_at?: true
    leave_request_id?: true
    status_id?: true
    updated_by?: true
    _all?: true
  }

  export type Leave_request_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_request_history to aggregate.
     */
    where?: leave_request_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_request_histories to fetch.
     */
    orderBy?: leave_request_historyOrderByWithRelationInput | leave_request_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leave_request_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_request_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_request_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leave_request_histories
    **/
    _count?: true | Leave_request_historyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Leave_request_historyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Leave_request_historySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Leave_request_historyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Leave_request_historyMaxAggregateInputType
  }

  export type GetLeave_request_historyAggregateType<T extends Leave_request_historyAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave_request_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave_request_history[P]>
      : GetScalarType<T[P], AggregateLeave_request_history[P]>
  }




  export type leave_request_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_request_historyWhereInput
    orderBy?: leave_request_historyOrderByWithAggregationInput | leave_request_historyOrderByWithAggregationInput[]
    by: Leave_request_historyScalarFieldEnum[] | Leave_request_historyScalarFieldEnum
    having?: leave_request_historyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Leave_request_historyCountAggregateInputType | true
    _avg?: Leave_request_historyAvgAggregateInputType
    _sum?: Leave_request_historySumAggregateInputType
    _min?: Leave_request_historyMinAggregateInputType
    _max?: Leave_request_historyMaxAggregateInputType
  }

  export type Leave_request_historyGroupByOutputType = {
    id: string
    comments: string
    created_at: Date
    leave_request_id: string
    status_id: number
    updated_by: string
    _count: Leave_request_historyCountAggregateOutputType | null
    _avg: Leave_request_historyAvgAggregateOutputType | null
    _sum: Leave_request_historySumAggregateOutputType | null
    _min: Leave_request_historyMinAggregateOutputType | null
    _max: Leave_request_historyMaxAggregateOutputType | null
  }

  type GetLeave_request_historyGroupByPayload<T extends leave_request_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Leave_request_historyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Leave_request_historyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Leave_request_historyGroupByOutputType[P]>
            : GetScalarType<T[P], Leave_request_historyGroupByOutputType[P]>
        }
      >
    >


  export type leave_request_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comments?: boolean
    created_at?: boolean
    leave_request_id?: boolean
    status_id?: boolean
    updated_by?: boolean
    leave_request?: boolean | leave_requestDefaultArgs<ExtArgs>
    status?: boolean | leave_statusDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_request_history"]>

  export type leave_request_historySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comments?: boolean
    created_at?: boolean
    leave_request_id?: boolean
    status_id?: boolean
    updated_by?: boolean
    leave_request?: boolean | leave_requestDefaultArgs<ExtArgs>
    status?: boolean | leave_statusDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_request_history"]>

  export type leave_request_historySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comments?: boolean
    created_at?: boolean
    leave_request_id?: boolean
    status_id?: boolean
    updated_by?: boolean
    leave_request?: boolean | leave_requestDefaultArgs<ExtArgs>
    status?: boolean | leave_statusDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_request_history"]>

  export type leave_request_historySelectScalar = {
    id?: boolean
    comments?: boolean
    created_at?: boolean
    leave_request_id?: boolean
    status_id?: boolean
    updated_by?: boolean
  }

  export type leave_request_historyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comments" | "created_at" | "leave_request_id" | "status_id" | "updated_by", ExtArgs["result"]["leave_request_history"]>
  export type leave_request_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave_request?: boolean | leave_requestDefaultArgs<ExtArgs>
    status?: boolean | leave_statusDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type leave_request_historyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave_request?: boolean | leave_requestDefaultArgs<ExtArgs>
    status?: boolean | leave_statusDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type leave_request_historyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave_request?: boolean | leave_requestDefaultArgs<ExtArgs>
    status?: boolean | leave_statusDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $leave_request_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leave_request_history"
    objects: {
      leave_request: Prisma.$leave_requestPayload<ExtArgs>
      status: Prisma.$leave_statusPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      comments: string
      created_at: Date
      leave_request_id: string
      status_id: number
      updated_by: string
    }, ExtArgs["result"]["leave_request_history"]>
    composites: {}
  }

  type leave_request_historyGetPayload<S extends boolean | null | undefined | leave_request_historyDefaultArgs> = $Result.GetResult<Prisma.$leave_request_historyPayload, S>

  type leave_request_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leave_request_historyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Leave_request_historyCountAggregateInputType | true
    }

  export interface leave_request_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leave_request_history'], meta: { name: 'leave_request_history' } }
    /**
     * Find zero or one Leave_request_history that matches the filter.
     * @param {leave_request_historyFindUniqueArgs} args - Arguments to find a Leave_request_history
     * @example
     * // Get one Leave_request_history
     * const leave_request_history = await prisma.leave_request_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leave_request_historyFindUniqueArgs>(args: SelectSubset<T, leave_request_historyFindUniqueArgs<ExtArgs>>): Prisma__leave_request_historyClient<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leave_request_history that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leave_request_historyFindUniqueOrThrowArgs} args - Arguments to find a Leave_request_history
     * @example
     * // Get one Leave_request_history
     * const leave_request_history = await prisma.leave_request_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leave_request_historyFindUniqueOrThrowArgs>(args: SelectSubset<T, leave_request_historyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leave_request_historyClient<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_request_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_request_historyFindFirstArgs} args - Arguments to find a Leave_request_history
     * @example
     * // Get one Leave_request_history
     * const leave_request_history = await prisma.leave_request_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leave_request_historyFindFirstArgs>(args?: SelectSubset<T, leave_request_historyFindFirstArgs<ExtArgs>>): Prisma__leave_request_historyClient<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_request_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_request_historyFindFirstOrThrowArgs} args - Arguments to find a Leave_request_history
     * @example
     * // Get one Leave_request_history
     * const leave_request_history = await prisma.leave_request_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leave_request_historyFindFirstOrThrowArgs>(args?: SelectSubset<T, leave_request_historyFindFirstOrThrowArgs<ExtArgs>>): Prisma__leave_request_historyClient<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leave_request_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_request_historyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leave_request_histories
     * const leave_request_histories = await prisma.leave_request_history.findMany()
     * 
     * // Get first 10 Leave_request_histories
     * const leave_request_histories = await prisma.leave_request_history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leave_request_historyWithIdOnly = await prisma.leave_request_history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leave_request_historyFindManyArgs>(args?: SelectSubset<T, leave_request_historyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leave_request_history.
     * @param {leave_request_historyCreateArgs} args - Arguments to create a Leave_request_history.
     * @example
     * // Create one Leave_request_history
     * const Leave_request_history = await prisma.leave_request_history.create({
     *   data: {
     *     // ... data to create a Leave_request_history
     *   }
     * })
     * 
     */
    create<T extends leave_request_historyCreateArgs>(args: SelectSubset<T, leave_request_historyCreateArgs<ExtArgs>>): Prisma__leave_request_historyClient<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leave_request_histories.
     * @param {leave_request_historyCreateManyArgs} args - Arguments to create many Leave_request_histories.
     * @example
     * // Create many Leave_request_histories
     * const leave_request_history = await prisma.leave_request_history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leave_request_historyCreateManyArgs>(args?: SelectSubset<T, leave_request_historyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leave_request_histories and returns the data saved in the database.
     * @param {leave_request_historyCreateManyAndReturnArgs} args - Arguments to create many Leave_request_histories.
     * @example
     * // Create many Leave_request_histories
     * const leave_request_history = await prisma.leave_request_history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leave_request_histories and only return the `id`
     * const leave_request_historyWithIdOnly = await prisma.leave_request_history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leave_request_historyCreateManyAndReturnArgs>(args?: SelectSubset<T, leave_request_historyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leave_request_history.
     * @param {leave_request_historyDeleteArgs} args - Arguments to delete one Leave_request_history.
     * @example
     * // Delete one Leave_request_history
     * const Leave_request_history = await prisma.leave_request_history.delete({
     *   where: {
     *     // ... filter to delete one Leave_request_history
     *   }
     * })
     * 
     */
    delete<T extends leave_request_historyDeleteArgs>(args: SelectSubset<T, leave_request_historyDeleteArgs<ExtArgs>>): Prisma__leave_request_historyClient<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leave_request_history.
     * @param {leave_request_historyUpdateArgs} args - Arguments to update one Leave_request_history.
     * @example
     * // Update one Leave_request_history
     * const leave_request_history = await prisma.leave_request_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leave_request_historyUpdateArgs>(args: SelectSubset<T, leave_request_historyUpdateArgs<ExtArgs>>): Prisma__leave_request_historyClient<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leave_request_histories.
     * @param {leave_request_historyDeleteManyArgs} args - Arguments to filter Leave_request_histories to delete.
     * @example
     * // Delete a few Leave_request_histories
     * const { count } = await prisma.leave_request_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leave_request_historyDeleteManyArgs>(args?: SelectSubset<T, leave_request_historyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_request_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_request_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leave_request_histories
     * const leave_request_history = await prisma.leave_request_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leave_request_historyUpdateManyArgs>(args: SelectSubset<T, leave_request_historyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_request_histories and returns the data updated in the database.
     * @param {leave_request_historyUpdateManyAndReturnArgs} args - Arguments to update many Leave_request_histories.
     * @example
     * // Update many Leave_request_histories
     * const leave_request_history = await prisma.leave_request_history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leave_request_histories and only return the `id`
     * const leave_request_historyWithIdOnly = await prisma.leave_request_history.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leave_request_historyUpdateManyAndReturnArgs>(args: SelectSubset<T, leave_request_historyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leave_request_history.
     * @param {leave_request_historyUpsertArgs} args - Arguments to update or create a Leave_request_history.
     * @example
     * // Update or create a Leave_request_history
     * const leave_request_history = await prisma.leave_request_history.upsert({
     *   create: {
     *     // ... data to create a Leave_request_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave_request_history we want to update
     *   }
     * })
     */
    upsert<T extends leave_request_historyUpsertArgs>(args: SelectSubset<T, leave_request_historyUpsertArgs<ExtArgs>>): Prisma__leave_request_historyClient<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leave_request_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_request_historyCountArgs} args - Arguments to filter Leave_request_histories to count.
     * @example
     * // Count the number of Leave_request_histories
     * const count = await prisma.leave_request_history.count({
     *   where: {
     *     // ... the filter for the Leave_request_histories we want to count
     *   }
     * })
    **/
    count<T extends leave_request_historyCountArgs>(
      args?: Subset<T, leave_request_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Leave_request_historyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave_request_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Leave_request_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Leave_request_historyAggregateArgs>(args: Subset<T, Leave_request_historyAggregateArgs>): Prisma.PrismaPromise<GetLeave_request_historyAggregateType<T>>

    /**
     * Group by Leave_request_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_request_historyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leave_request_historyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leave_request_historyGroupByArgs['orderBy'] }
        : { orderBy?: leave_request_historyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leave_request_historyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeave_request_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leave_request_history model
   */
  readonly fields: leave_request_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leave_request_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leave_request_historyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leave_request<T extends leave_requestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, leave_requestDefaultArgs<ExtArgs>>): Prisma__leave_requestClient<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends leave_statusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, leave_statusDefaultArgs<ExtArgs>>): Prisma__leave_statusClient<$Result.GetResult<Prisma.$leave_statusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leave_request_history model
   */
  interface leave_request_historyFieldRefs {
    readonly id: FieldRef<"leave_request_history", 'String'>
    readonly comments: FieldRef<"leave_request_history", 'String'>
    readonly created_at: FieldRef<"leave_request_history", 'DateTime'>
    readonly leave_request_id: FieldRef<"leave_request_history", 'String'>
    readonly status_id: FieldRef<"leave_request_history", 'Int'>
    readonly updated_by: FieldRef<"leave_request_history", 'String'>
  }
    

  // Custom InputTypes
  /**
   * leave_request_history findUnique
   */
  export type leave_request_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
    /**
     * Filter, which leave_request_history to fetch.
     */
    where: leave_request_historyWhereUniqueInput
  }

  /**
   * leave_request_history findUniqueOrThrow
   */
  export type leave_request_historyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
    /**
     * Filter, which leave_request_history to fetch.
     */
    where: leave_request_historyWhereUniqueInput
  }

  /**
   * leave_request_history findFirst
   */
  export type leave_request_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
    /**
     * Filter, which leave_request_history to fetch.
     */
    where?: leave_request_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_request_histories to fetch.
     */
    orderBy?: leave_request_historyOrderByWithRelationInput | leave_request_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_request_histories.
     */
    cursor?: leave_request_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_request_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_request_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_request_histories.
     */
    distinct?: Leave_request_historyScalarFieldEnum | Leave_request_historyScalarFieldEnum[]
  }

  /**
   * leave_request_history findFirstOrThrow
   */
  export type leave_request_historyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
    /**
     * Filter, which leave_request_history to fetch.
     */
    where?: leave_request_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_request_histories to fetch.
     */
    orderBy?: leave_request_historyOrderByWithRelationInput | leave_request_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_request_histories.
     */
    cursor?: leave_request_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_request_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_request_histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_request_histories.
     */
    distinct?: Leave_request_historyScalarFieldEnum | Leave_request_historyScalarFieldEnum[]
  }

  /**
   * leave_request_history findMany
   */
  export type leave_request_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
    /**
     * Filter, which leave_request_histories to fetch.
     */
    where?: leave_request_historyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_request_histories to fetch.
     */
    orderBy?: leave_request_historyOrderByWithRelationInput | leave_request_historyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leave_request_histories.
     */
    cursor?: leave_request_historyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_request_histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_request_histories.
     */
    skip?: number
    distinct?: Leave_request_historyScalarFieldEnum | Leave_request_historyScalarFieldEnum[]
  }

  /**
   * leave_request_history create
   */
  export type leave_request_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
    /**
     * The data needed to create a leave_request_history.
     */
    data: XOR<leave_request_historyCreateInput, leave_request_historyUncheckedCreateInput>
  }

  /**
   * leave_request_history createMany
   */
  export type leave_request_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leave_request_histories.
     */
    data: leave_request_historyCreateManyInput | leave_request_historyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leave_request_history createManyAndReturn
   */
  export type leave_request_historyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * The data used to create many leave_request_histories.
     */
    data: leave_request_historyCreateManyInput | leave_request_historyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * leave_request_history update
   */
  export type leave_request_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
    /**
     * The data needed to update a leave_request_history.
     */
    data: XOR<leave_request_historyUpdateInput, leave_request_historyUncheckedUpdateInput>
    /**
     * Choose, which leave_request_history to update.
     */
    where: leave_request_historyWhereUniqueInput
  }

  /**
   * leave_request_history updateMany
   */
  export type leave_request_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leave_request_histories.
     */
    data: XOR<leave_request_historyUpdateManyMutationInput, leave_request_historyUncheckedUpdateManyInput>
    /**
     * Filter which leave_request_histories to update
     */
    where?: leave_request_historyWhereInput
    /**
     * Limit how many leave_request_histories to update.
     */
    limit?: number
  }

  /**
   * leave_request_history updateManyAndReturn
   */
  export type leave_request_historyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * The data used to update leave_request_histories.
     */
    data: XOR<leave_request_historyUpdateManyMutationInput, leave_request_historyUncheckedUpdateManyInput>
    /**
     * Filter which leave_request_histories to update
     */
    where?: leave_request_historyWhereInput
    /**
     * Limit how many leave_request_histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * leave_request_history upsert
   */
  export type leave_request_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
    /**
     * The filter to search for the leave_request_history to update in case it exists.
     */
    where: leave_request_historyWhereUniqueInput
    /**
     * In case the leave_request_history found by the `where` argument doesn't exist, create a new leave_request_history with this data.
     */
    create: XOR<leave_request_historyCreateInput, leave_request_historyUncheckedCreateInput>
    /**
     * In case the leave_request_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leave_request_historyUpdateInput, leave_request_historyUncheckedUpdateInput>
  }

  /**
   * leave_request_history delete
   */
  export type leave_request_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
    /**
     * Filter which leave_request_history to delete.
     */
    where: leave_request_historyWhereUniqueInput
  }

  /**
   * leave_request_history deleteMany
   */
  export type leave_request_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_request_histories to delete
     */
    where?: leave_request_historyWhereInput
    /**
     * Limit how many leave_request_histories to delete.
     */
    limit?: number
  }

  /**
   * leave_request_history without action
   */
  export type leave_request_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
  }


  /**
   * Model leave_balance
   */

  export type AggregateLeave_balance = {
    _count: Leave_balanceCountAggregateOutputType | null
    _avg: Leave_balanceAvgAggregateOutputType | null
    _sum: Leave_balanceSumAggregateOutputType | null
    _min: Leave_balanceMinAggregateOutputType | null
    _max: Leave_balanceMaxAggregateOutputType | null
  }

  export type Leave_balanceAvgAggregateOutputType = {
    yearly: number | null
    totalEntitlement: number | null
    year: number | null
    used: number | null
    pending: number | null
    carried_over: number | null
    balance: number | null
  }

  export type Leave_balanceSumAggregateOutputType = {
    yearly: number | null
    totalEntitlement: number | null
    year: number | null
    used: number | null
    pending: number | null
    carried_over: number | null
    balance: number | null
  }

  export type Leave_balanceMinAggregateOutputType = {
    id: string | null
    yearly: number | null
    totalEntitlement: number | null
    year: number | null
    used: number | null
    pending: number | null
    carried_over: number | null
    balance: number | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    leave_type_id: $Enums.LEAVE_TYPE | null
  }

  export type Leave_balanceMaxAggregateOutputType = {
    id: string | null
    yearly: number | null
    totalEntitlement: number | null
    year: number | null
    used: number | null
    pending: number | null
    carried_over: number | null
    balance: number | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    leave_type_id: $Enums.LEAVE_TYPE | null
  }

  export type Leave_balanceCountAggregateOutputType = {
    id: number
    yearly: number
    totalEntitlement: number
    year: number
    used: number
    pending: number
    carried_over: number
    balance: number
    created_at: number
    updated_at: number
    user_id: number
    leave_type_id: number
    _all: number
  }


  export type Leave_balanceAvgAggregateInputType = {
    yearly?: true
    totalEntitlement?: true
    year?: true
    used?: true
    pending?: true
    carried_over?: true
    balance?: true
  }

  export type Leave_balanceSumAggregateInputType = {
    yearly?: true
    totalEntitlement?: true
    year?: true
    used?: true
    pending?: true
    carried_over?: true
    balance?: true
  }

  export type Leave_balanceMinAggregateInputType = {
    id?: true
    yearly?: true
    totalEntitlement?: true
    year?: true
    used?: true
    pending?: true
    carried_over?: true
    balance?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    leave_type_id?: true
  }

  export type Leave_balanceMaxAggregateInputType = {
    id?: true
    yearly?: true
    totalEntitlement?: true
    year?: true
    used?: true
    pending?: true
    carried_over?: true
    balance?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    leave_type_id?: true
  }

  export type Leave_balanceCountAggregateInputType = {
    id?: true
    yearly?: true
    totalEntitlement?: true
    year?: true
    used?: true
    pending?: true
    carried_over?: true
    balance?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    leave_type_id?: true
    _all?: true
  }

  export type Leave_balanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_balance to aggregate.
     */
    where?: leave_balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_balances to fetch.
     */
    orderBy?: leave_balanceOrderByWithRelationInput | leave_balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leave_balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leave_balances
    **/
    _count?: true | Leave_balanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Leave_balanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Leave_balanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Leave_balanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Leave_balanceMaxAggregateInputType
  }

  export type GetLeave_balanceAggregateType<T extends Leave_balanceAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave_balance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave_balance[P]>
      : GetScalarType<T[P], AggregateLeave_balance[P]>
  }




  export type leave_balanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_balanceWhereInput
    orderBy?: leave_balanceOrderByWithAggregationInput | leave_balanceOrderByWithAggregationInput[]
    by: Leave_balanceScalarFieldEnum[] | Leave_balanceScalarFieldEnum
    having?: leave_balanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Leave_balanceCountAggregateInputType | true
    _avg?: Leave_balanceAvgAggregateInputType
    _sum?: Leave_balanceSumAggregateInputType
    _min?: Leave_balanceMinAggregateInputType
    _max?: Leave_balanceMaxAggregateInputType
  }

  export type Leave_balanceGroupByOutputType = {
    id: string
    yearly: number
    totalEntitlement: number
    year: number
    used: number
    pending: number
    carried_over: number
    balance: number
    created_at: Date
    updated_at: Date
    user_id: string
    leave_type_id: $Enums.LEAVE_TYPE
    _count: Leave_balanceCountAggregateOutputType | null
    _avg: Leave_balanceAvgAggregateOutputType | null
    _sum: Leave_balanceSumAggregateOutputType | null
    _min: Leave_balanceMinAggregateOutputType | null
    _max: Leave_balanceMaxAggregateOutputType | null
  }

  type GetLeave_balanceGroupByPayload<T extends leave_balanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Leave_balanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Leave_balanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Leave_balanceGroupByOutputType[P]>
            : GetScalarType<T[P], Leave_balanceGroupByOutputType[P]>
        }
      >
    >


  export type leave_balanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yearly?: boolean
    totalEntitlement?: boolean
    year?: boolean
    used?: boolean
    pending?: boolean
    carried_over?: boolean
    balance?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    leave_type_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_balance"]>

  export type leave_balanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yearly?: boolean
    totalEntitlement?: boolean
    year?: boolean
    used?: boolean
    pending?: boolean
    carried_over?: boolean
    balance?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    leave_type_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_balance"]>

  export type leave_balanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    yearly?: boolean
    totalEntitlement?: boolean
    year?: boolean
    used?: boolean
    pending?: boolean
    carried_over?: boolean
    balance?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    leave_type_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave_balance"]>

  export type leave_balanceSelectScalar = {
    id?: boolean
    yearly?: boolean
    totalEntitlement?: boolean
    year?: boolean
    used?: boolean
    pending?: boolean
    carried_over?: boolean
    balance?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    leave_type_id?: boolean
  }

  export type leave_balanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "yearly" | "totalEntitlement" | "year" | "used" | "pending" | "carried_over" | "balance" | "created_at" | "updated_at" | "user_id" | "leave_type_id", ExtArgs["result"]["leave_balance"]>
  export type leave_balanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
  }
  export type leave_balanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
  }
  export type leave_balanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
  }

  export type $leave_balancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leave_balance"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      leave_type: Prisma.$leave_typesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      yearly: number
      totalEntitlement: number
      year: number
      used: number
      pending: number
      carried_over: number
      balance: number
      created_at: Date
      updated_at: Date
      user_id: string
      leave_type_id: $Enums.LEAVE_TYPE
    }, ExtArgs["result"]["leave_balance"]>
    composites: {}
  }

  type leave_balanceGetPayload<S extends boolean | null | undefined | leave_balanceDefaultArgs> = $Result.GetResult<Prisma.$leave_balancePayload, S>

  type leave_balanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leave_balanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Leave_balanceCountAggregateInputType | true
    }

  export interface leave_balanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leave_balance'], meta: { name: 'leave_balance' } }
    /**
     * Find zero or one Leave_balance that matches the filter.
     * @param {leave_balanceFindUniqueArgs} args - Arguments to find a Leave_balance
     * @example
     * // Get one Leave_balance
     * const leave_balance = await prisma.leave_balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leave_balanceFindUniqueArgs>(args: SelectSubset<T, leave_balanceFindUniqueArgs<ExtArgs>>): Prisma__leave_balanceClient<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leave_balance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leave_balanceFindUniqueOrThrowArgs} args - Arguments to find a Leave_balance
     * @example
     * // Get one Leave_balance
     * const leave_balance = await prisma.leave_balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leave_balanceFindUniqueOrThrowArgs>(args: SelectSubset<T, leave_balanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leave_balanceClient<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_balanceFindFirstArgs} args - Arguments to find a Leave_balance
     * @example
     * // Get one Leave_balance
     * const leave_balance = await prisma.leave_balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leave_balanceFindFirstArgs>(args?: SelectSubset<T, leave_balanceFindFirstArgs<ExtArgs>>): Prisma__leave_balanceClient<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_balance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_balanceFindFirstOrThrowArgs} args - Arguments to find a Leave_balance
     * @example
     * // Get one Leave_balance
     * const leave_balance = await prisma.leave_balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leave_balanceFindFirstOrThrowArgs>(args?: SelectSubset<T, leave_balanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__leave_balanceClient<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leave_balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_balanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leave_balances
     * const leave_balances = await prisma.leave_balance.findMany()
     * 
     * // Get first 10 Leave_balances
     * const leave_balances = await prisma.leave_balance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leave_balanceWithIdOnly = await prisma.leave_balance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leave_balanceFindManyArgs>(args?: SelectSubset<T, leave_balanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leave_balance.
     * @param {leave_balanceCreateArgs} args - Arguments to create a Leave_balance.
     * @example
     * // Create one Leave_balance
     * const Leave_balance = await prisma.leave_balance.create({
     *   data: {
     *     // ... data to create a Leave_balance
     *   }
     * })
     * 
     */
    create<T extends leave_balanceCreateArgs>(args: SelectSubset<T, leave_balanceCreateArgs<ExtArgs>>): Prisma__leave_balanceClient<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leave_balances.
     * @param {leave_balanceCreateManyArgs} args - Arguments to create many Leave_balances.
     * @example
     * // Create many Leave_balances
     * const leave_balance = await prisma.leave_balance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leave_balanceCreateManyArgs>(args?: SelectSubset<T, leave_balanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leave_balances and returns the data saved in the database.
     * @param {leave_balanceCreateManyAndReturnArgs} args - Arguments to create many Leave_balances.
     * @example
     * // Create many Leave_balances
     * const leave_balance = await prisma.leave_balance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leave_balances and only return the `id`
     * const leave_balanceWithIdOnly = await prisma.leave_balance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leave_balanceCreateManyAndReturnArgs>(args?: SelectSubset<T, leave_balanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leave_balance.
     * @param {leave_balanceDeleteArgs} args - Arguments to delete one Leave_balance.
     * @example
     * // Delete one Leave_balance
     * const Leave_balance = await prisma.leave_balance.delete({
     *   where: {
     *     // ... filter to delete one Leave_balance
     *   }
     * })
     * 
     */
    delete<T extends leave_balanceDeleteArgs>(args: SelectSubset<T, leave_balanceDeleteArgs<ExtArgs>>): Prisma__leave_balanceClient<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leave_balance.
     * @param {leave_balanceUpdateArgs} args - Arguments to update one Leave_balance.
     * @example
     * // Update one Leave_balance
     * const leave_balance = await prisma.leave_balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leave_balanceUpdateArgs>(args: SelectSubset<T, leave_balanceUpdateArgs<ExtArgs>>): Prisma__leave_balanceClient<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leave_balances.
     * @param {leave_balanceDeleteManyArgs} args - Arguments to filter Leave_balances to delete.
     * @example
     * // Delete a few Leave_balances
     * const { count } = await prisma.leave_balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leave_balanceDeleteManyArgs>(args?: SelectSubset<T, leave_balanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_balanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leave_balances
     * const leave_balance = await prisma.leave_balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leave_balanceUpdateManyArgs>(args: SelectSubset<T, leave_balanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_balances and returns the data updated in the database.
     * @param {leave_balanceUpdateManyAndReturnArgs} args - Arguments to update many Leave_balances.
     * @example
     * // Update many Leave_balances
     * const leave_balance = await prisma.leave_balance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leave_balances and only return the `id`
     * const leave_balanceWithIdOnly = await prisma.leave_balance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leave_balanceUpdateManyAndReturnArgs>(args: SelectSubset<T, leave_balanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leave_balance.
     * @param {leave_balanceUpsertArgs} args - Arguments to update or create a Leave_balance.
     * @example
     * // Update or create a Leave_balance
     * const leave_balance = await prisma.leave_balance.upsert({
     *   create: {
     *     // ... data to create a Leave_balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave_balance we want to update
     *   }
     * })
     */
    upsert<T extends leave_balanceUpsertArgs>(args: SelectSubset<T, leave_balanceUpsertArgs<ExtArgs>>): Prisma__leave_balanceClient<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leave_balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_balanceCountArgs} args - Arguments to filter Leave_balances to count.
     * @example
     * // Count the number of Leave_balances
     * const count = await prisma.leave_balance.count({
     *   where: {
     *     // ... the filter for the Leave_balances we want to count
     *   }
     * })
    **/
    count<T extends leave_balanceCountArgs>(
      args?: Subset<T, leave_balanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Leave_balanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave_balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Leave_balanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Leave_balanceAggregateArgs>(args: Subset<T, Leave_balanceAggregateArgs>): Prisma.PrismaPromise<GetLeave_balanceAggregateType<T>>

    /**
     * Group by Leave_balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_balanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leave_balanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leave_balanceGroupByArgs['orderBy'] }
        : { orderBy?: leave_balanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leave_balanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeave_balanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leave_balance model
   */
  readonly fields: leave_balanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leave_balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leave_balanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leave_type<T extends leave_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, leave_typesDefaultArgs<ExtArgs>>): Prisma__leave_typesClient<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leave_balance model
   */
  interface leave_balanceFieldRefs {
    readonly id: FieldRef<"leave_balance", 'String'>
    readonly yearly: FieldRef<"leave_balance", 'Int'>
    readonly totalEntitlement: FieldRef<"leave_balance", 'Int'>
    readonly year: FieldRef<"leave_balance", 'Int'>
    readonly used: FieldRef<"leave_balance", 'Int'>
    readonly pending: FieldRef<"leave_balance", 'Int'>
    readonly carried_over: FieldRef<"leave_balance", 'Int'>
    readonly balance: FieldRef<"leave_balance", 'Int'>
    readonly created_at: FieldRef<"leave_balance", 'DateTime'>
    readonly updated_at: FieldRef<"leave_balance", 'DateTime'>
    readonly user_id: FieldRef<"leave_balance", 'String'>
    readonly leave_type_id: FieldRef<"leave_balance", 'LEAVE_TYPE'>
  }
    

  // Custom InputTypes
  /**
   * leave_balance findUnique
   */
  export type leave_balanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceInclude<ExtArgs> | null
    /**
     * Filter, which leave_balance to fetch.
     */
    where: leave_balanceWhereUniqueInput
  }

  /**
   * leave_balance findUniqueOrThrow
   */
  export type leave_balanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceInclude<ExtArgs> | null
    /**
     * Filter, which leave_balance to fetch.
     */
    where: leave_balanceWhereUniqueInput
  }

  /**
   * leave_balance findFirst
   */
  export type leave_balanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceInclude<ExtArgs> | null
    /**
     * Filter, which leave_balance to fetch.
     */
    where?: leave_balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_balances to fetch.
     */
    orderBy?: leave_balanceOrderByWithRelationInput | leave_balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_balances.
     */
    cursor?: leave_balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_balances.
     */
    distinct?: Leave_balanceScalarFieldEnum | Leave_balanceScalarFieldEnum[]
  }

  /**
   * leave_balance findFirstOrThrow
   */
  export type leave_balanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceInclude<ExtArgs> | null
    /**
     * Filter, which leave_balance to fetch.
     */
    where?: leave_balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_balances to fetch.
     */
    orderBy?: leave_balanceOrderByWithRelationInput | leave_balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_balances.
     */
    cursor?: leave_balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_balances.
     */
    distinct?: Leave_balanceScalarFieldEnum | Leave_balanceScalarFieldEnum[]
  }

  /**
   * leave_balance findMany
   */
  export type leave_balanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceInclude<ExtArgs> | null
    /**
     * Filter, which leave_balances to fetch.
     */
    where?: leave_balanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_balances to fetch.
     */
    orderBy?: leave_balanceOrderByWithRelationInput | leave_balanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leave_balances.
     */
    cursor?: leave_balanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_balances.
     */
    skip?: number
    distinct?: Leave_balanceScalarFieldEnum | Leave_balanceScalarFieldEnum[]
  }

  /**
   * leave_balance create
   */
  export type leave_balanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceInclude<ExtArgs> | null
    /**
     * The data needed to create a leave_balance.
     */
    data: XOR<leave_balanceCreateInput, leave_balanceUncheckedCreateInput>
  }

  /**
   * leave_balance createMany
   */
  export type leave_balanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leave_balances.
     */
    data: leave_balanceCreateManyInput | leave_balanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leave_balance createManyAndReturn
   */
  export type leave_balanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * The data used to create many leave_balances.
     */
    data: leave_balanceCreateManyInput | leave_balanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * leave_balance update
   */
  export type leave_balanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceInclude<ExtArgs> | null
    /**
     * The data needed to update a leave_balance.
     */
    data: XOR<leave_balanceUpdateInput, leave_balanceUncheckedUpdateInput>
    /**
     * Choose, which leave_balance to update.
     */
    where: leave_balanceWhereUniqueInput
  }

  /**
   * leave_balance updateMany
   */
  export type leave_balanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leave_balances.
     */
    data: XOR<leave_balanceUpdateManyMutationInput, leave_balanceUncheckedUpdateManyInput>
    /**
     * Filter which leave_balances to update
     */
    where?: leave_balanceWhereInput
    /**
     * Limit how many leave_balances to update.
     */
    limit?: number
  }

  /**
   * leave_balance updateManyAndReturn
   */
  export type leave_balanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * The data used to update leave_balances.
     */
    data: XOR<leave_balanceUpdateManyMutationInput, leave_balanceUncheckedUpdateManyInput>
    /**
     * Filter which leave_balances to update
     */
    where?: leave_balanceWhereInput
    /**
     * Limit how many leave_balances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * leave_balance upsert
   */
  export type leave_balanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceInclude<ExtArgs> | null
    /**
     * The filter to search for the leave_balance to update in case it exists.
     */
    where: leave_balanceWhereUniqueInput
    /**
     * In case the leave_balance found by the `where` argument doesn't exist, create a new leave_balance with this data.
     */
    create: XOR<leave_balanceCreateInput, leave_balanceUncheckedCreateInput>
    /**
     * In case the leave_balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leave_balanceUpdateInput, leave_balanceUncheckedUpdateInput>
  }

  /**
   * leave_balance delete
   */
  export type leave_balanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceInclude<ExtArgs> | null
    /**
     * Filter which leave_balance to delete.
     */
    where: leave_balanceWhereUniqueInput
  }

  /**
   * leave_balance deleteMany
   */
  export type leave_balanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_balances to delete
     */
    where?: leave_balanceWhereInput
    /**
     * Limit how many leave_balances to delete.
     */
    limit?: number
  }

  /**
   * leave_balance without action
   */
  export type leave_balanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceInclude<ExtArgs> | null
  }


  /**
   * Model leave_policy
   */

  export type AggregateLeave_policy = {
    _count: Leave_policyCountAggregateOutputType | null
    _avg: Leave_policyAvgAggregateOutputType | null
    _sum: Leave_policySumAggregateOutputType | null
    _min: Leave_policyMinAggregateOutputType | null
    _max: Leave_policyMaxAggregateOutputType | null
  }

  export type Leave_policyAvgAggregateOutputType = {
    max_days_per_year: number | null
    max_days_per_request: number | null
    carry_over_limit: number | null
    carry_over_expiry: number | null
  }

  export type Leave_policySumAggregateOutputType = {
    max_days_per_year: number | null
    max_days_per_request: number | null
    carry_over_limit: number | null
    carry_over_expiry: number | null
  }

  export type Leave_policyMinAggregateOutputType = {
    id: string | null
    max_days_per_year: number | null
    max_days_per_request: number | null
    carry_over_limit: number | null
    carry_over_expiry: number | null
    is_Active: boolean | null
    effective_from: Date | null
    effective_to: Date | null
    created_at: Date | null
    updated_at: Date | null
    leave_type_id: $Enums.LEAVE_TYPE | null
    department_id: string | null
  }

  export type Leave_policyMaxAggregateOutputType = {
    id: string | null
    max_days_per_year: number | null
    max_days_per_request: number | null
    carry_over_limit: number | null
    carry_over_expiry: number | null
    is_Active: boolean | null
    effective_from: Date | null
    effective_to: Date | null
    created_at: Date | null
    updated_at: Date | null
    leave_type_id: $Enums.LEAVE_TYPE | null
    department_id: string | null
  }

  export type Leave_policyCountAggregateOutputType = {
    id: number
    max_days_per_year: number
    max_days_per_request: number
    carry_over_limit: number
    carry_over_expiry: number
    is_Active: number
    effective_from: number
    effective_to: number
    created_at: number
    updated_at: number
    leave_type_id: number
    department_id: number
    _all: number
  }


  export type Leave_policyAvgAggregateInputType = {
    max_days_per_year?: true
    max_days_per_request?: true
    carry_over_limit?: true
    carry_over_expiry?: true
  }

  export type Leave_policySumAggregateInputType = {
    max_days_per_year?: true
    max_days_per_request?: true
    carry_over_limit?: true
    carry_over_expiry?: true
  }

  export type Leave_policyMinAggregateInputType = {
    id?: true
    max_days_per_year?: true
    max_days_per_request?: true
    carry_over_limit?: true
    carry_over_expiry?: true
    is_Active?: true
    effective_from?: true
    effective_to?: true
    created_at?: true
    updated_at?: true
    leave_type_id?: true
    department_id?: true
  }

  export type Leave_policyMaxAggregateInputType = {
    id?: true
    max_days_per_year?: true
    max_days_per_request?: true
    carry_over_limit?: true
    carry_over_expiry?: true
    is_Active?: true
    effective_from?: true
    effective_to?: true
    created_at?: true
    updated_at?: true
    leave_type_id?: true
    department_id?: true
  }

  export type Leave_policyCountAggregateInputType = {
    id?: true
    max_days_per_year?: true
    max_days_per_request?: true
    carry_over_limit?: true
    carry_over_expiry?: true
    is_Active?: true
    effective_from?: true
    effective_to?: true
    created_at?: true
    updated_at?: true
    leave_type_id?: true
    department_id?: true
    _all?: true
  }

  export type Leave_policyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_policy to aggregate.
     */
    where?: leave_policyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_policies to fetch.
     */
    orderBy?: leave_policyOrderByWithRelationInput | leave_policyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: leave_policyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned leave_policies
    **/
    _count?: true | Leave_policyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Leave_policyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Leave_policySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Leave_policyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Leave_policyMaxAggregateInputType
  }

  export type GetLeave_policyAggregateType<T extends Leave_policyAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave_policy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave_policy[P]>
      : GetScalarType<T[P], AggregateLeave_policy[P]>
  }




  export type leave_policyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: leave_policyWhereInput
    orderBy?: leave_policyOrderByWithAggregationInput | leave_policyOrderByWithAggregationInput[]
    by: Leave_policyScalarFieldEnum[] | Leave_policyScalarFieldEnum
    having?: leave_policyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Leave_policyCountAggregateInputType | true
    _avg?: Leave_policyAvgAggregateInputType
    _sum?: Leave_policySumAggregateInputType
    _min?: Leave_policyMinAggregateInputType
    _max?: Leave_policyMaxAggregateInputType
  }

  export type Leave_policyGroupByOutputType = {
    id: string
    max_days_per_year: number
    max_days_per_request: number
    carry_over_limit: number
    carry_over_expiry: number
    is_Active: boolean
    effective_from: Date
    effective_to: Date
    created_at: Date
    updated_at: Date
    leave_type_id: $Enums.LEAVE_TYPE
    department_id: string | null
    _count: Leave_policyCountAggregateOutputType | null
    _avg: Leave_policyAvgAggregateOutputType | null
    _sum: Leave_policySumAggregateOutputType | null
    _min: Leave_policyMinAggregateOutputType | null
    _max: Leave_policyMaxAggregateOutputType | null
  }

  type GetLeave_policyGroupByPayload<T extends leave_policyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Leave_policyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Leave_policyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Leave_policyGroupByOutputType[P]>
            : GetScalarType<T[P], Leave_policyGroupByOutputType[P]>
        }
      >
    >


  export type leave_policySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    max_days_per_year?: boolean
    max_days_per_request?: boolean
    carry_over_limit?: boolean
    carry_over_expiry?: boolean
    is_Active?: boolean
    effective_from?: boolean
    effective_to?: boolean
    created_at?: boolean
    updated_at?: boolean
    leave_type_id?: boolean
    department_id?: boolean
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
    department?: boolean | leave_policy$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["leave_policy"]>

  export type leave_policySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    max_days_per_year?: boolean
    max_days_per_request?: boolean
    carry_over_limit?: boolean
    carry_over_expiry?: boolean
    is_Active?: boolean
    effective_from?: boolean
    effective_to?: boolean
    created_at?: boolean
    updated_at?: boolean
    leave_type_id?: boolean
    department_id?: boolean
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
    department?: boolean | leave_policy$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["leave_policy"]>

  export type leave_policySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    max_days_per_year?: boolean
    max_days_per_request?: boolean
    carry_over_limit?: boolean
    carry_over_expiry?: boolean
    is_Active?: boolean
    effective_from?: boolean
    effective_to?: boolean
    created_at?: boolean
    updated_at?: boolean
    leave_type_id?: boolean
    department_id?: boolean
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
    department?: boolean | leave_policy$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["leave_policy"]>

  export type leave_policySelectScalar = {
    id?: boolean
    max_days_per_year?: boolean
    max_days_per_request?: boolean
    carry_over_limit?: boolean
    carry_over_expiry?: boolean
    is_Active?: boolean
    effective_from?: boolean
    effective_to?: boolean
    created_at?: boolean
    updated_at?: boolean
    leave_type_id?: boolean
    department_id?: boolean
  }

  export type leave_policyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "max_days_per_year" | "max_days_per_request" | "carry_over_limit" | "carry_over_expiry" | "is_Active" | "effective_from" | "effective_to" | "created_at" | "updated_at" | "leave_type_id" | "department_id", ExtArgs["result"]["leave_policy"]>
  export type leave_policyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
    department?: boolean | leave_policy$departmentArgs<ExtArgs>
  }
  export type leave_policyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
    department?: boolean | leave_policy$departmentArgs<ExtArgs>
  }
  export type leave_policyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave_type?: boolean | leave_typesDefaultArgs<ExtArgs>
    department?: boolean | leave_policy$departmentArgs<ExtArgs>
  }

  export type $leave_policyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "leave_policy"
    objects: {
      leave_type: Prisma.$leave_typesPayload<ExtArgs>
      department: Prisma.$departmentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      max_days_per_year: number
      max_days_per_request: number
      carry_over_limit: number
      carry_over_expiry: number
      is_Active: boolean
      effective_from: Date
      effective_to: Date
      created_at: Date
      updated_at: Date
      leave_type_id: $Enums.LEAVE_TYPE
      department_id: string | null
    }, ExtArgs["result"]["leave_policy"]>
    composites: {}
  }

  type leave_policyGetPayload<S extends boolean | null | undefined | leave_policyDefaultArgs> = $Result.GetResult<Prisma.$leave_policyPayload, S>

  type leave_policyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<leave_policyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Leave_policyCountAggregateInputType | true
    }

  export interface leave_policyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['leave_policy'], meta: { name: 'leave_policy' } }
    /**
     * Find zero or one Leave_policy that matches the filter.
     * @param {leave_policyFindUniqueArgs} args - Arguments to find a Leave_policy
     * @example
     * // Get one Leave_policy
     * const leave_policy = await prisma.leave_policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends leave_policyFindUniqueArgs>(args: SelectSubset<T, leave_policyFindUniqueArgs<ExtArgs>>): Prisma__leave_policyClient<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leave_policy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {leave_policyFindUniqueOrThrowArgs} args - Arguments to find a Leave_policy
     * @example
     * // Get one Leave_policy
     * const leave_policy = await prisma.leave_policy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends leave_policyFindUniqueOrThrowArgs>(args: SelectSubset<T, leave_policyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__leave_policyClient<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_policyFindFirstArgs} args - Arguments to find a Leave_policy
     * @example
     * // Get one Leave_policy
     * const leave_policy = await prisma.leave_policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends leave_policyFindFirstArgs>(args?: SelectSubset<T, leave_policyFindFirstArgs<ExtArgs>>): Prisma__leave_policyClient<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave_policy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_policyFindFirstOrThrowArgs} args - Arguments to find a Leave_policy
     * @example
     * // Get one Leave_policy
     * const leave_policy = await prisma.leave_policy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends leave_policyFindFirstOrThrowArgs>(args?: SelectSubset<T, leave_policyFindFirstOrThrowArgs<ExtArgs>>): Prisma__leave_policyClient<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leave_policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_policyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leave_policies
     * const leave_policies = await prisma.leave_policy.findMany()
     * 
     * // Get first 10 Leave_policies
     * const leave_policies = await prisma.leave_policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leave_policyWithIdOnly = await prisma.leave_policy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends leave_policyFindManyArgs>(args?: SelectSubset<T, leave_policyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leave_policy.
     * @param {leave_policyCreateArgs} args - Arguments to create a Leave_policy.
     * @example
     * // Create one Leave_policy
     * const Leave_policy = await prisma.leave_policy.create({
     *   data: {
     *     // ... data to create a Leave_policy
     *   }
     * })
     * 
     */
    create<T extends leave_policyCreateArgs>(args: SelectSubset<T, leave_policyCreateArgs<ExtArgs>>): Prisma__leave_policyClient<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leave_policies.
     * @param {leave_policyCreateManyArgs} args - Arguments to create many Leave_policies.
     * @example
     * // Create many Leave_policies
     * const leave_policy = await prisma.leave_policy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends leave_policyCreateManyArgs>(args?: SelectSubset<T, leave_policyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leave_policies and returns the data saved in the database.
     * @param {leave_policyCreateManyAndReturnArgs} args - Arguments to create many Leave_policies.
     * @example
     * // Create many Leave_policies
     * const leave_policy = await prisma.leave_policy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leave_policies and only return the `id`
     * const leave_policyWithIdOnly = await prisma.leave_policy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends leave_policyCreateManyAndReturnArgs>(args?: SelectSubset<T, leave_policyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leave_policy.
     * @param {leave_policyDeleteArgs} args - Arguments to delete one Leave_policy.
     * @example
     * // Delete one Leave_policy
     * const Leave_policy = await prisma.leave_policy.delete({
     *   where: {
     *     // ... filter to delete one Leave_policy
     *   }
     * })
     * 
     */
    delete<T extends leave_policyDeleteArgs>(args: SelectSubset<T, leave_policyDeleteArgs<ExtArgs>>): Prisma__leave_policyClient<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leave_policy.
     * @param {leave_policyUpdateArgs} args - Arguments to update one Leave_policy.
     * @example
     * // Update one Leave_policy
     * const leave_policy = await prisma.leave_policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends leave_policyUpdateArgs>(args: SelectSubset<T, leave_policyUpdateArgs<ExtArgs>>): Prisma__leave_policyClient<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leave_policies.
     * @param {leave_policyDeleteManyArgs} args - Arguments to filter Leave_policies to delete.
     * @example
     * // Delete a few Leave_policies
     * const { count } = await prisma.leave_policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends leave_policyDeleteManyArgs>(args?: SelectSubset<T, leave_policyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_policyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leave_policies
     * const leave_policy = await prisma.leave_policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends leave_policyUpdateManyArgs>(args: SelectSubset<T, leave_policyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leave_policies and returns the data updated in the database.
     * @param {leave_policyUpdateManyAndReturnArgs} args - Arguments to update many Leave_policies.
     * @example
     * // Update many Leave_policies
     * const leave_policy = await prisma.leave_policy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leave_policies and only return the `id`
     * const leave_policyWithIdOnly = await prisma.leave_policy.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends leave_policyUpdateManyAndReturnArgs>(args: SelectSubset<T, leave_policyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leave_policy.
     * @param {leave_policyUpsertArgs} args - Arguments to update or create a Leave_policy.
     * @example
     * // Update or create a Leave_policy
     * const leave_policy = await prisma.leave_policy.upsert({
     *   create: {
     *     // ... data to create a Leave_policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave_policy we want to update
     *   }
     * })
     */
    upsert<T extends leave_policyUpsertArgs>(args: SelectSubset<T, leave_policyUpsertArgs<ExtArgs>>): Prisma__leave_policyClient<$Result.GetResult<Prisma.$leave_policyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leave_policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_policyCountArgs} args - Arguments to filter Leave_policies to count.
     * @example
     * // Count the number of Leave_policies
     * const count = await prisma.leave_policy.count({
     *   where: {
     *     // ... the filter for the Leave_policies we want to count
     *   }
     * })
    **/
    count<T extends leave_policyCountArgs>(
      args?: Subset<T, leave_policyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Leave_policyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave_policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Leave_policyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Leave_policyAggregateArgs>(args: Subset<T, Leave_policyAggregateArgs>): Prisma.PrismaPromise<GetLeave_policyAggregateType<T>>

    /**
     * Group by Leave_policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {leave_policyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends leave_policyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: leave_policyGroupByArgs['orderBy'] }
        : { orderBy?: leave_policyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, leave_policyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeave_policyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the leave_policy model
   */
  readonly fields: leave_policyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for leave_policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__leave_policyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leave_type<T extends leave_typesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, leave_typesDefaultArgs<ExtArgs>>): Prisma__leave_typesClient<$Result.GetResult<Prisma.$leave_typesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends leave_policy$departmentArgs<ExtArgs> = {}>(args?: Subset<T, leave_policy$departmentArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the leave_policy model
   */
  interface leave_policyFieldRefs {
    readonly id: FieldRef<"leave_policy", 'String'>
    readonly max_days_per_year: FieldRef<"leave_policy", 'Int'>
    readonly max_days_per_request: FieldRef<"leave_policy", 'Int'>
    readonly carry_over_limit: FieldRef<"leave_policy", 'Int'>
    readonly carry_over_expiry: FieldRef<"leave_policy", 'Int'>
    readonly is_Active: FieldRef<"leave_policy", 'Boolean'>
    readonly effective_from: FieldRef<"leave_policy", 'DateTime'>
    readonly effective_to: FieldRef<"leave_policy", 'DateTime'>
    readonly created_at: FieldRef<"leave_policy", 'DateTime'>
    readonly updated_at: FieldRef<"leave_policy", 'DateTime'>
    readonly leave_type_id: FieldRef<"leave_policy", 'LEAVE_TYPE'>
    readonly department_id: FieldRef<"leave_policy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * leave_policy findUnique
   */
  export type leave_policyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyInclude<ExtArgs> | null
    /**
     * Filter, which leave_policy to fetch.
     */
    where: leave_policyWhereUniqueInput
  }

  /**
   * leave_policy findUniqueOrThrow
   */
  export type leave_policyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyInclude<ExtArgs> | null
    /**
     * Filter, which leave_policy to fetch.
     */
    where: leave_policyWhereUniqueInput
  }

  /**
   * leave_policy findFirst
   */
  export type leave_policyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyInclude<ExtArgs> | null
    /**
     * Filter, which leave_policy to fetch.
     */
    where?: leave_policyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_policies to fetch.
     */
    orderBy?: leave_policyOrderByWithRelationInput | leave_policyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_policies.
     */
    cursor?: leave_policyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_policies.
     */
    distinct?: Leave_policyScalarFieldEnum | Leave_policyScalarFieldEnum[]
  }

  /**
   * leave_policy findFirstOrThrow
   */
  export type leave_policyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyInclude<ExtArgs> | null
    /**
     * Filter, which leave_policy to fetch.
     */
    where?: leave_policyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_policies to fetch.
     */
    orderBy?: leave_policyOrderByWithRelationInput | leave_policyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for leave_policies.
     */
    cursor?: leave_policyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of leave_policies.
     */
    distinct?: Leave_policyScalarFieldEnum | Leave_policyScalarFieldEnum[]
  }

  /**
   * leave_policy findMany
   */
  export type leave_policyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyInclude<ExtArgs> | null
    /**
     * Filter, which leave_policies to fetch.
     */
    where?: leave_policyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of leave_policies to fetch.
     */
    orderBy?: leave_policyOrderByWithRelationInput | leave_policyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing leave_policies.
     */
    cursor?: leave_policyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` leave_policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` leave_policies.
     */
    skip?: number
    distinct?: Leave_policyScalarFieldEnum | Leave_policyScalarFieldEnum[]
  }

  /**
   * leave_policy create
   */
  export type leave_policyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyInclude<ExtArgs> | null
    /**
     * The data needed to create a leave_policy.
     */
    data: XOR<leave_policyCreateInput, leave_policyUncheckedCreateInput>
  }

  /**
   * leave_policy createMany
   */
  export type leave_policyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many leave_policies.
     */
    data: leave_policyCreateManyInput | leave_policyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * leave_policy createManyAndReturn
   */
  export type leave_policyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * The data used to create many leave_policies.
     */
    data: leave_policyCreateManyInput | leave_policyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * leave_policy update
   */
  export type leave_policyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyInclude<ExtArgs> | null
    /**
     * The data needed to update a leave_policy.
     */
    data: XOR<leave_policyUpdateInput, leave_policyUncheckedUpdateInput>
    /**
     * Choose, which leave_policy to update.
     */
    where: leave_policyWhereUniqueInput
  }

  /**
   * leave_policy updateMany
   */
  export type leave_policyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update leave_policies.
     */
    data: XOR<leave_policyUpdateManyMutationInput, leave_policyUncheckedUpdateManyInput>
    /**
     * Filter which leave_policies to update
     */
    where?: leave_policyWhereInput
    /**
     * Limit how many leave_policies to update.
     */
    limit?: number
  }

  /**
   * leave_policy updateManyAndReturn
   */
  export type leave_policyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * The data used to update leave_policies.
     */
    data: XOR<leave_policyUpdateManyMutationInput, leave_policyUncheckedUpdateManyInput>
    /**
     * Filter which leave_policies to update
     */
    where?: leave_policyWhereInput
    /**
     * Limit how many leave_policies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * leave_policy upsert
   */
  export type leave_policyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyInclude<ExtArgs> | null
    /**
     * The filter to search for the leave_policy to update in case it exists.
     */
    where: leave_policyWhereUniqueInput
    /**
     * In case the leave_policy found by the `where` argument doesn't exist, create a new leave_policy with this data.
     */
    create: XOR<leave_policyCreateInput, leave_policyUncheckedCreateInput>
    /**
     * In case the leave_policy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<leave_policyUpdateInput, leave_policyUncheckedUpdateInput>
  }

  /**
   * leave_policy delete
   */
  export type leave_policyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyInclude<ExtArgs> | null
    /**
     * Filter which leave_policy to delete.
     */
    where: leave_policyWhereUniqueInput
  }

  /**
   * leave_policy deleteMany
   */
  export type leave_policyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which leave_policies to delete
     */
    where?: leave_policyWhereInput
    /**
     * Limit how many leave_policies to delete.
     */
    limit?: number
  }

  /**
   * leave_policy.department
   */
  export type leave_policy$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    where?: departmentsWhereInput
  }

  /**
   * leave_policy without action
   */
  export type leave_policyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_policy
     */
    select?: leave_policySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_policy
     */
    omit?: leave_policyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_policyInclude<ExtArgs> | null
  }


  /**
   * Model holiday
   */

  export type AggregateHoliday = {
    _count: HolidayCountAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  export type HolidayMinAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    is_Recurring: boolean | null
    is_Active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    department_id: string | null
  }

  export type HolidayMaxAggregateOutputType = {
    id: string | null
    name: string | null
    date: Date | null
    is_Recurring: boolean | null
    is_Active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    department_id: string | null
  }

  export type HolidayCountAggregateOutputType = {
    id: number
    name: number
    date: number
    is_Recurring: number
    is_Active: number
    created_at: number
    updated_at: number
    department_id: number
    _all: number
  }


  export type HolidayMinAggregateInputType = {
    id?: true
    name?: true
    date?: true
    is_Recurring?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
    department_id?: true
  }

  export type HolidayMaxAggregateInputType = {
    id?: true
    name?: true
    date?: true
    is_Recurring?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
    department_id?: true
  }

  export type HolidayCountAggregateInputType = {
    id?: true
    name?: true
    date?: true
    is_Recurring?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
    department_id?: true
    _all?: true
  }

  export type HolidayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which holiday to aggregate.
     */
    where?: holidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holidays to fetch.
     */
    orderBy?: holidayOrderByWithRelationInput | holidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: holidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned holidays
    **/
    _count?: true | HolidayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HolidayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HolidayMaxAggregateInputType
  }

  export type GetHolidayAggregateType<T extends HolidayAggregateArgs> = {
        [P in keyof T & keyof AggregateHoliday]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHoliday[P]>
      : GetScalarType<T[P], AggregateHoliday[P]>
  }




  export type holidayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: holidayWhereInput
    orderBy?: holidayOrderByWithAggregationInput | holidayOrderByWithAggregationInput[]
    by: HolidayScalarFieldEnum[] | HolidayScalarFieldEnum
    having?: holidayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HolidayCountAggregateInputType | true
    _min?: HolidayMinAggregateInputType
    _max?: HolidayMaxAggregateInputType
  }

  export type HolidayGroupByOutputType = {
    id: string
    name: string
    date: Date
    is_Recurring: boolean
    is_Active: boolean
    created_at: Date
    updated_at: Date
    department_id: string | null
    _count: HolidayCountAggregateOutputType | null
    _min: HolidayMinAggregateOutputType | null
    _max: HolidayMaxAggregateOutputType | null
  }

  type GetHolidayGroupByPayload<T extends holidayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HolidayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HolidayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HolidayGroupByOutputType[P]>
            : GetScalarType<T[P], HolidayGroupByOutputType[P]>
        }
      >
    >


  export type holidaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    is_Recurring?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
    department_id?: boolean
    department?: boolean | holiday$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type holidaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    is_Recurring?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
    department_id?: boolean
    department?: boolean | holiday$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type holidaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    date?: boolean
    is_Recurring?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
    department_id?: boolean
    department?: boolean | holiday$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["holiday"]>

  export type holidaySelectScalar = {
    id?: boolean
    name?: boolean
    date?: boolean
    is_Recurring?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
    department_id?: boolean
  }

  export type holidayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "date" | "is_Recurring" | "is_Active" | "created_at" | "updated_at" | "department_id", ExtArgs["result"]["holiday"]>
  export type holidayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | holiday$departmentArgs<ExtArgs>
  }
  export type holidayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | holiday$departmentArgs<ExtArgs>
  }
  export type holidayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | holiday$departmentArgs<ExtArgs>
  }

  export type $holidayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "holiday"
    objects: {
      department: Prisma.$departmentsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      date: Date
      is_Recurring: boolean
      is_Active: boolean
      created_at: Date
      updated_at: Date
      department_id: string | null
    }, ExtArgs["result"]["holiday"]>
    composites: {}
  }

  type holidayGetPayload<S extends boolean | null | undefined | holidayDefaultArgs> = $Result.GetResult<Prisma.$holidayPayload, S>

  type holidayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<holidayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HolidayCountAggregateInputType | true
    }

  export interface holidayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['holiday'], meta: { name: 'holiday' } }
    /**
     * Find zero or one Holiday that matches the filter.
     * @param {holidayFindUniqueArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends holidayFindUniqueArgs>(args: SelectSubset<T, holidayFindUniqueArgs<ExtArgs>>): Prisma__holidayClient<$Result.GetResult<Prisma.$holidayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Holiday that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {holidayFindUniqueOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends holidayFindUniqueOrThrowArgs>(args: SelectSubset<T, holidayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__holidayClient<$Result.GetResult<Prisma.$holidayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holiday that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holidayFindFirstArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends holidayFindFirstArgs>(args?: SelectSubset<T, holidayFindFirstArgs<ExtArgs>>): Prisma__holidayClient<$Result.GetResult<Prisma.$holidayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holiday that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holidayFindFirstOrThrowArgs} args - Arguments to find a Holiday
     * @example
     * // Get one Holiday
     * const holiday = await prisma.holiday.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends holidayFindFirstOrThrowArgs>(args?: SelectSubset<T, holidayFindFirstOrThrowArgs<ExtArgs>>): Prisma__holidayClient<$Result.GetResult<Prisma.$holidayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holidays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holidayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holidays
     * const holidays = await prisma.holiday.findMany()
     * 
     * // Get first 10 Holidays
     * const holidays = await prisma.holiday.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holidayWithIdOnly = await prisma.holiday.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends holidayFindManyArgs>(args?: SelectSubset<T, holidayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$holidayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Holiday.
     * @param {holidayCreateArgs} args - Arguments to create a Holiday.
     * @example
     * // Create one Holiday
     * const Holiday = await prisma.holiday.create({
     *   data: {
     *     // ... data to create a Holiday
     *   }
     * })
     * 
     */
    create<T extends holidayCreateArgs>(args: SelectSubset<T, holidayCreateArgs<ExtArgs>>): Prisma__holidayClient<$Result.GetResult<Prisma.$holidayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Holidays.
     * @param {holidayCreateManyArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends holidayCreateManyArgs>(args?: SelectSubset<T, holidayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holidays and returns the data saved in the database.
     * @param {holidayCreateManyAndReturnArgs} args - Arguments to create many Holidays.
     * @example
     * // Create many Holidays
     * const holiday = await prisma.holiday.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holidays and only return the `id`
     * const holidayWithIdOnly = await prisma.holiday.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends holidayCreateManyAndReturnArgs>(args?: SelectSubset<T, holidayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$holidayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Holiday.
     * @param {holidayDeleteArgs} args - Arguments to delete one Holiday.
     * @example
     * // Delete one Holiday
     * const Holiday = await prisma.holiday.delete({
     *   where: {
     *     // ... filter to delete one Holiday
     *   }
     * })
     * 
     */
    delete<T extends holidayDeleteArgs>(args: SelectSubset<T, holidayDeleteArgs<ExtArgs>>): Prisma__holidayClient<$Result.GetResult<Prisma.$holidayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Holiday.
     * @param {holidayUpdateArgs} args - Arguments to update one Holiday.
     * @example
     * // Update one Holiday
     * const holiday = await prisma.holiday.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends holidayUpdateArgs>(args: SelectSubset<T, holidayUpdateArgs<ExtArgs>>): Prisma__holidayClient<$Result.GetResult<Prisma.$holidayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Holidays.
     * @param {holidayDeleteManyArgs} args - Arguments to filter Holidays to delete.
     * @example
     * // Delete a few Holidays
     * const { count } = await prisma.holiday.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends holidayDeleteManyArgs>(args?: SelectSubset<T, holidayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holidayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holidays
     * const holiday = await prisma.holiday.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends holidayUpdateManyArgs>(args: SelectSubset<T, holidayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holidays and returns the data updated in the database.
     * @param {holidayUpdateManyAndReturnArgs} args - Arguments to update many Holidays.
     * @example
     * // Update many Holidays
     * const holiday = await prisma.holiday.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Holidays and only return the `id`
     * const holidayWithIdOnly = await prisma.holiday.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends holidayUpdateManyAndReturnArgs>(args: SelectSubset<T, holidayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$holidayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Holiday.
     * @param {holidayUpsertArgs} args - Arguments to update or create a Holiday.
     * @example
     * // Update or create a Holiday
     * const holiday = await prisma.holiday.upsert({
     *   create: {
     *     // ... data to create a Holiday
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holiday we want to update
     *   }
     * })
     */
    upsert<T extends holidayUpsertArgs>(args: SelectSubset<T, holidayUpsertArgs<ExtArgs>>): Prisma__holidayClient<$Result.GetResult<Prisma.$holidayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Holidays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holidayCountArgs} args - Arguments to filter Holidays to count.
     * @example
     * // Count the number of Holidays
     * const count = await prisma.holiday.count({
     *   where: {
     *     // ... the filter for the Holidays we want to count
     *   }
     * })
    **/
    count<T extends holidayCountArgs>(
      args?: Subset<T, holidayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HolidayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HolidayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HolidayAggregateArgs>(args: Subset<T, HolidayAggregateArgs>): Prisma.PrismaPromise<GetHolidayAggregateType<T>>

    /**
     * Group by Holiday.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {holidayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends holidayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: holidayGroupByArgs['orderBy'] }
        : { orderBy?: holidayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, holidayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHolidayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the holiday model
   */
  readonly fields: holidayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for holiday.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__holidayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends holiday$departmentArgs<ExtArgs> = {}>(args?: Subset<T, holiday$departmentArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the holiday model
   */
  interface holidayFieldRefs {
    readonly id: FieldRef<"holiday", 'String'>
    readonly name: FieldRef<"holiday", 'String'>
    readonly date: FieldRef<"holiday", 'DateTime'>
    readonly is_Recurring: FieldRef<"holiday", 'Boolean'>
    readonly is_Active: FieldRef<"holiday", 'Boolean'>
    readonly created_at: FieldRef<"holiday", 'DateTime'>
    readonly updated_at: FieldRef<"holiday", 'DateTime'>
    readonly department_id: FieldRef<"holiday", 'String'>
  }
    

  // Custom InputTypes
  /**
   * holiday findUnique
   */
  export type holidayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayInclude<ExtArgs> | null
    /**
     * Filter, which holiday to fetch.
     */
    where: holidayWhereUniqueInput
  }

  /**
   * holiday findUniqueOrThrow
   */
  export type holidayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayInclude<ExtArgs> | null
    /**
     * Filter, which holiday to fetch.
     */
    where: holidayWhereUniqueInput
  }

  /**
   * holiday findFirst
   */
  export type holidayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayInclude<ExtArgs> | null
    /**
     * Filter, which holiday to fetch.
     */
    where?: holidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holidays to fetch.
     */
    orderBy?: holidayOrderByWithRelationInput | holidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for holidays.
     */
    cursor?: holidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * holiday findFirstOrThrow
   */
  export type holidayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayInclude<ExtArgs> | null
    /**
     * Filter, which holiday to fetch.
     */
    where?: holidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holidays to fetch.
     */
    orderBy?: holidayOrderByWithRelationInput | holidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for holidays.
     */
    cursor?: holidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holidays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of holidays.
     */
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * holiday findMany
   */
  export type holidayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayInclude<ExtArgs> | null
    /**
     * Filter, which holidays to fetch.
     */
    where?: holidayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of holidays to fetch.
     */
    orderBy?: holidayOrderByWithRelationInput | holidayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing holidays.
     */
    cursor?: holidayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` holidays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` holidays.
     */
    skip?: number
    distinct?: HolidayScalarFieldEnum | HolidayScalarFieldEnum[]
  }

  /**
   * holiday create
   */
  export type holidayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayInclude<ExtArgs> | null
    /**
     * The data needed to create a holiday.
     */
    data: XOR<holidayCreateInput, holidayUncheckedCreateInput>
  }

  /**
   * holiday createMany
   */
  export type holidayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many holidays.
     */
    data: holidayCreateManyInput | holidayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * holiday createManyAndReturn
   */
  export type holidayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * The data used to create many holidays.
     */
    data: holidayCreateManyInput | holidayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * holiday update
   */
  export type holidayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayInclude<ExtArgs> | null
    /**
     * The data needed to update a holiday.
     */
    data: XOR<holidayUpdateInput, holidayUncheckedUpdateInput>
    /**
     * Choose, which holiday to update.
     */
    where: holidayWhereUniqueInput
  }

  /**
   * holiday updateMany
   */
  export type holidayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update holidays.
     */
    data: XOR<holidayUpdateManyMutationInput, holidayUncheckedUpdateManyInput>
    /**
     * Filter which holidays to update
     */
    where?: holidayWhereInput
    /**
     * Limit how many holidays to update.
     */
    limit?: number
  }

  /**
   * holiday updateManyAndReturn
   */
  export type holidayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * The data used to update holidays.
     */
    data: XOR<holidayUpdateManyMutationInput, holidayUncheckedUpdateManyInput>
    /**
     * Filter which holidays to update
     */
    where?: holidayWhereInput
    /**
     * Limit how many holidays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * holiday upsert
   */
  export type holidayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayInclude<ExtArgs> | null
    /**
     * The filter to search for the holiday to update in case it exists.
     */
    where: holidayWhereUniqueInput
    /**
     * In case the holiday found by the `where` argument doesn't exist, create a new holiday with this data.
     */
    create: XOR<holidayCreateInput, holidayUncheckedCreateInput>
    /**
     * In case the holiday was found with the provided `where` argument, update it with this data.
     */
    update: XOR<holidayUpdateInput, holidayUncheckedUpdateInput>
  }

  /**
   * holiday delete
   */
  export type holidayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayInclude<ExtArgs> | null
    /**
     * Filter which holiday to delete.
     */
    where: holidayWhereUniqueInput
  }

  /**
   * holiday deleteMany
   */
  export type holidayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which holidays to delete
     */
    where?: holidayWhereInput
    /**
     * Limit how many holidays to delete.
     */
    limit?: number
  }

  /**
   * holiday.department
   */
  export type holiday$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the departments
     */
    select?: departmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the departments
     */
    omit?: departmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentsInclude<ExtArgs> | null
    where?: departmentsWhereInput
  }

  /**
   * holiday without action
   */
  export type holidayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the holiday
     */
    select?: holidaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the holiday
     */
    omit?: holidayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: holidayInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    cus_id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    joined_date: Date | null
    is_Active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    role_id: number | null
    department_name: string | null
    manager_id: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    cus_id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    joined_date: Date | null
    is_Active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    role_id: number | null
    department_name: string | null
    manager_id: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    cus_id: number
    first_name: number
    last_name: number
    email: number
    password: number
    joined_date: number
    is_Active: number
    created_at: number
    updated_at: number
    role_id: number
    department_name: number
    manager_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    cus_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    joined_date?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
    role_id?: true
    department_name?: true
    manager_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    cus_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    joined_date?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
    role_id?: true
    department_name?: true
    manager_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    cus_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    joined_date?: true
    is_Active?: true
    created_at?: true
    updated_at?: true
    role_id?: true
    department_name?: true
    manager_id?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date: Date
    is_Active: boolean
    created_at: Date
    updated_at: Date
    role_id: number
    department_name: string
    manager_id: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cus_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    joined_date?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_id?: boolean
    department_name?: boolean
    manager_id?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
    department?: boolean | departmentsDefaultArgs<ExtArgs>
    manager?: boolean | user$managerArgs<ExtArgs>
    subordinates?: boolean | user$subordinatesArgs<ExtArgs>
    leave_requests?: boolean | user$leave_requestsArgs<ExtArgs>
    leave_balances?: boolean | user$leave_balancesArgs<ExtArgs>
    leave_request_histories?: boolean | user$leave_request_historiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cus_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    joined_date?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_id?: boolean
    department_name?: boolean
    manager_id?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
    department?: boolean | departmentsDefaultArgs<ExtArgs>
    manager?: boolean | user$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cus_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    joined_date?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_id?: boolean
    department_name?: boolean
    manager_id?: boolean
    role?: boolean | rolesDefaultArgs<ExtArgs>
    department?: boolean | departmentsDefaultArgs<ExtArgs>
    manager?: boolean | user$managerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    cus_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    joined_date?: boolean
    is_Active?: boolean
    created_at?: boolean
    updated_at?: boolean
    role_id?: boolean
    department_name?: boolean
    manager_id?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cus_id" | "first_name" | "last_name" | "email" | "password" | "joined_date" | "is_Active" | "created_at" | "updated_at" | "role_id" | "department_name" | "manager_id", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
    department?: boolean | departmentsDefaultArgs<ExtArgs>
    manager?: boolean | user$managerArgs<ExtArgs>
    subordinates?: boolean | user$subordinatesArgs<ExtArgs>
    leave_requests?: boolean | user$leave_requestsArgs<ExtArgs>
    leave_balances?: boolean | user$leave_balancesArgs<ExtArgs>
    leave_request_histories?: boolean | user$leave_request_historiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
    department?: boolean | departmentsDefaultArgs<ExtArgs>
    manager?: boolean | user$managerArgs<ExtArgs>
  }
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | rolesDefaultArgs<ExtArgs>
    department?: boolean | departmentsDefaultArgs<ExtArgs>
    manager?: boolean | user$managerArgs<ExtArgs>
  }

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      role: Prisma.$rolesPayload<ExtArgs>
      department: Prisma.$departmentsPayload<ExtArgs>
      manager: Prisma.$userPayload<ExtArgs> | null
      subordinates: Prisma.$userPayload<ExtArgs>[]
      leave_requests: Prisma.$leave_requestPayload<ExtArgs>[]
      leave_balances: Prisma.$leave_balancePayload<ExtArgs>[]
      leave_request_histories: Prisma.$leave_request_historyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cus_id: string
      first_name: string
      last_name: string
      email: string
      password: string
      joined_date: Date
      is_Active: boolean
      created_at: Date
      updated_at: Date
      role_id: number
      department_name: string
      manager_id: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, rolesDefaultArgs<ExtArgs>>): Prisma__rolesClient<$Result.GetResult<Prisma.$rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    department<T extends departmentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, departmentsDefaultArgs<ExtArgs>>): Prisma__departmentsClient<$Result.GetResult<Prisma.$departmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    manager<T extends user$managerArgs<ExtArgs> = {}>(args?: Subset<T, user$managerArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subordinates<T extends user$subordinatesArgs<ExtArgs> = {}>(args?: Subset<T, user$subordinatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leave_requests<T extends user$leave_requestsArgs<ExtArgs> = {}>(args?: Subset<T, user$leave_requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leave_balances<T extends user$leave_balancesArgs<ExtArgs> = {}>(args?: Subset<T, user$leave_balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_balancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leave_request_histories<T extends user$leave_request_historiesArgs<ExtArgs> = {}>(args?: Subset<T, user$leave_request_historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$leave_request_historyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly cus_id: FieldRef<"user", 'String'>
    readonly first_name: FieldRef<"user", 'String'>
    readonly last_name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly joined_date: FieldRef<"user", 'DateTime'>
    readonly is_Active: FieldRef<"user", 'Boolean'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
    readonly role_id: FieldRef<"user", 'Int'>
    readonly department_name: FieldRef<"user", 'String'>
    readonly manager_id: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.manager
   */
  export type user$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
  }

  /**
   * user.subordinates
   */
  export type user$subordinatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    where?: userWhereInput
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    cursor?: userWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user.leave_requests
   */
  export type user$leave_requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request
     */
    select?: leave_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request
     */
    omit?: leave_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_requestInclude<ExtArgs> | null
    where?: leave_requestWhereInput
    orderBy?: leave_requestOrderByWithRelationInput | leave_requestOrderByWithRelationInput[]
    cursor?: leave_requestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Leave_requestScalarFieldEnum | Leave_requestScalarFieldEnum[]
  }

  /**
   * user.leave_balances
   */
  export type user$leave_balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_balance
     */
    select?: leave_balanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_balance
     */
    omit?: leave_balanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_balanceInclude<ExtArgs> | null
    where?: leave_balanceWhereInput
    orderBy?: leave_balanceOrderByWithRelationInput | leave_balanceOrderByWithRelationInput[]
    cursor?: leave_balanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Leave_balanceScalarFieldEnum | Leave_balanceScalarFieldEnum[]
  }

  /**
   * user.leave_request_histories
   */
  export type user$leave_request_historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the leave_request_history
     */
    select?: leave_request_historySelect<ExtArgs> | null
    /**
     * Omit specific fields from the leave_request_history
     */
    omit?: leave_request_historyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: leave_request_historyInclude<ExtArgs> | null
    where?: leave_request_historyWhereInput
    orderBy?: leave_request_historyOrderByWithRelationInput | leave_request_historyOrderByWithRelationInput[]
    cursor?: leave_request_historyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Leave_request_historyScalarFieldEnum | Leave_request_historyScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RolesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    is_Active: 'is_Active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RolesScalarFieldEnum = (typeof RolesScalarFieldEnum)[keyof typeof RolesScalarFieldEnum]


  export const Leave_typesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    max_days_per_request: 'max_days_per_request',
    is_Active: 'is_Active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Leave_typesScalarFieldEnum = (typeof Leave_typesScalarFieldEnum)[keyof typeof Leave_typesScalarFieldEnum]


  export const Leave_statusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    is_Active: 'is_Active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Leave_statusScalarFieldEnum = (typeof Leave_statusScalarFieldEnum)[keyof typeof Leave_statusScalarFieldEnum]


  export const DepartmentsScalarFieldEnum: {
    id: 'id',
    cus_id: 'cus_id',
    name: 'name',
    description: 'description',
    is_Active: 'is_Active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DepartmentsScalarFieldEnum = (typeof DepartmentsScalarFieldEnum)[keyof typeof DepartmentsScalarFieldEnum]


  export const Leave_requestScalarFieldEnum: {
    id: 'id',
    cus_id: 'cus_id',
    start_date: 'start_date',
    end_date: 'end_date',
    no_of_days: 'no_of_days',
    reason: 'reason',
    applied_date: 'applied_date',
    user_id: 'user_id',
    leave_type_id: 'leave_type_id',
    status_id: 'status_id'
  };

  export type Leave_requestScalarFieldEnum = (typeof Leave_requestScalarFieldEnum)[keyof typeof Leave_requestScalarFieldEnum]


  export const Leave_request_historyScalarFieldEnum: {
    id: 'id',
    comments: 'comments',
    created_at: 'created_at',
    leave_request_id: 'leave_request_id',
    status_id: 'status_id',
    updated_by: 'updated_by'
  };

  export type Leave_request_historyScalarFieldEnum = (typeof Leave_request_historyScalarFieldEnum)[keyof typeof Leave_request_historyScalarFieldEnum]


  export const Leave_balanceScalarFieldEnum: {
    id: 'id',
    yearly: 'yearly',
    totalEntitlement: 'totalEntitlement',
    year: 'year',
    used: 'used',
    pending: 'pending',
    carried_over: 'carried_over',
    balance: 'balance',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    leave_type_id: 'leave_type_id'
  };

  export type Leave_balanceScalarFieldEnum = (typeof Leave_balanceScalarFieldEnum)[keyof typeof Leave_balanceScalarFieldEnum]


  export const Leave_policyScalarFieldEnum: {
    id: 'id',
    max_days_per_year: 'max_days_per_year',
    max_days_per_request: 'max_days_per_request',
    carry_over_limit: 'carry_over_limit',
    carry_over_expiry: 'carry_over_expiry',
    is_Active: 'is_Active',
    effective_from: 'effective_from',
    effective_to: 'effective_to',
    created_at: 'created_at',
    updated_at: 'updated_at',
    leave_type_id: 'leave_type_id',
    department_id: 'department_id'
  };

  export type Leave_policyScalarFieldEnum = (typeof Leave_policyScalarFieldEnum)[keyof typeof Leave_policyScalarFieldEnum]


  export const HolidayScalarFieldEnum: {
    id: 'id',
    name: 'name',
    date: 'date',
    is_Recurring: 'is_Recurring',
    is_Active: 'is_Active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    department_id: 'department_id'
  };

  export type HolidayScalarFieldEnum = (typeof HolidayScalarFieldEnum)[keyof typeof HolidayScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    cus_id: 'cus_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    joined_date: 'joined_date',
    is_Active: 'is_Active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    role_id: 'role_id',
    department_name: 'department_name',
    manager_id: 'manager_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LEAVE_TYPE'
   */
  export type EnumLEAVE_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LEAVE_TYPE'>
    


  /**
   * Reference to a field of type 'LEAVE_TYPE[]'
   */
  export type ListEnumLEAVE_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LEAVE_TYPE[]'>
    


  /**
   * Reference to a field of type 'LEAVE_APPROVAL'
   */
  export type EnumLEAVE_APPROVALFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LEAVE_APPROVAL'>
    


  /**
   * Reference to a field of type 'LEAVE_APPROVAL[]'
   */
  export type ListEnumLEAVE_APPROVALFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LEAVE_APPROVAL[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type rolesWhereInput = {
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    id?: IntFilter<"roles"> | number
    name?: EnumRoleFilter<"roles"> | $Enums.Role
    description?: StringFilter<"roles"> | string
    is_Active?: BoolFilter<"roles"> | boolean
    created_at?: DateTimeFilter<"roles"> | Date | string
    updated_at?: DateTimeFilter<"roles"> | Date | string
    users?: UserListRelationFilter
  }

  export type rolesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: userOrderByRelationAggregateInput
  }

  export type rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rolesWhereInput | rolesWhereInput[]
    OR?: rolesWhereInput[]
    NOT?: rolesWhereInput | rolesWhereInput[]
    name?: EnumRoleFilter<"roles"> | $Enums.Role
    description?: StringFilter<"roles"> | string
    is_Active?: BoolFilter<"roles"> | boolean
    created_at?: DateTimeFilter<"roles"> | Date | string
    updated_at?: DateTimeFilter<"roles"> | Date | string
    users?: UserListRelationFilter
  }, "id">

  export type rolesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: rolesCountOrderByAggregateInput
    _avg?: rolesAvgOrderByAggregateInput
    _max?: rolesMaxOrderByAggregateInput
    _min?: rolesMinOrderByAggregateInput
    _sum?: rolesSumOrderByAggregateInput
  }

  export type rolesScalarWhereWithAggregatesInput = {
    AND?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    OR?: rolesScalarWhereWithAggregatesInput[]
    NOT?: rolesScalarWhereWithAggregatesInput | rolesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"roles"> | number
    name?: EnumRoleWithAggregatesFilter<"roles"> | $Enums.Role
    description?: StringWithAggregatesFilter<"roles"> | string
    is_Active?: BoolWithAggregatesFilter<"roles"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"roles"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"roles"> | Date | string
  }

  export type leave_typesWhereInput = {
    AND?: leave_typesWhereInput | leave_typesWhereInput[]
    OR?: leave_typesWhereInput[]
    NOT?: leave_typesWhereInput | leave_typesWhereInput[]
    id?: StringFilter<"leave_types"> | string
    name?: EnumLEAVE_TYPEFilter<"leave_types"> | $Enums.LEAVE_TYPE
    description?: StringFilter<"leave_types"> | string
    max_days_per_request?: StringFilter<"leave_types"> | string
    is_Active?: BoolFilter<"leave_types"> | boolean
    created_at?: DateTimeFilter<"leave_types"> | Date | string
    updated_at?: DateTimeFilter<"leave_types"> | Date | string
    leave_requests?: Leave_requestListRelationFilter
    leave_policies?: Leave_policyListRelationFilter
    leave_balances?: Leave_balanceListRelationFilter
  }

  export type leave_typesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    max_days_per_request?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    leave_requests?: leave_requestOrderByRelationAggregateInput
    leave_policies?: leave_policyOrderByRelationAggregateInput
    leave_balances?: leave_balanceOrderByRelationAggregateInput
  }

  export type leave_typesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: $Enums.LEAVE_TYPE
    AND?: leave_typesWhereInput | leave_typesWhereInput[]
    OR?: leave_typesWhereInput[]
    NOT?: leave_typesWhereInput | leave_typesWhereInput[]
    description?: StringFilter<"leave_types"> | string
    max_days_per_request?: StringFilter<"leave_types"> | string
    is_Active?: BoolFilter<"leave_types"> | boolean
    created_at?: DateTimeFilter<"leave_types"> | Date | string
    updated_at?: DateTimeFilter<"leave_types"> | Date | string
    leave_requests?: Leave_requestListRelationFilter
    leave_policies?: Leave_policyListRelationFilter
    leave_balances?: Leave_balanceListRelationFilter
  }, "id" | "name">

  export type leave_typesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    max_days_per_request?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: leave_typesCountOrderByAggregateInput
    _max?: leave_typesMaxOrderByAggregateInput
    _min?: leave_typesMinOrderByAggregateInput
  }

  export type leave_typesScalarWhereWithAggregatesInput = {
    AND?: leave_typesScalarWhereWithAggregatesInput | leave_typesScalarWhereWithAggregatesInput[]
    OR?: leave_typesScalarWhereWithAggregatesInput[]
    NOT?: leave_typesScalarWhereWithAggregatesInput | leave_typesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"leave_types"> | string
    name?: EnumLEAVE_TYPEWithAggregatesFilter<"leave_types"> | $Enums.LEAVE_TYPE
    description?: StringWithAggregatesFilter<"leave_types"> | string
    max_days_per_request?: StringWithAggregatesFilter<"leave_types"> | string
    is_Active?: BoolWithAggregatesFilter<"leave_types"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"leave_types"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"leave_types"> | Date | string
  }

  export type leave_statusWhereInput = {
    AND?: leave_statusWhereInput | leave_statusWhereInput[]
    OR?: leave_statusWhereInput[]
    NOT?: leave_statusWhereInput | leave_statusWhereInput[]
    id?: IntFilter<"leave_status"> | number
    name?: EnumLEAVE_APPROVALFilter<"leave_status"> | $Enums.LEAVE_APPROVAL
    description?: StringFilter<"leave_status"> | string
    is_Active?: BoolFilter<"leave_status"> | boolean
    created_at?: DateTimeFilter<"leave_status"> | Date | string
    updated_at?: DateTimeFilter<"leave_status"> | Date | string
    leave_requests?: Leave_requestListRelationFilter
    leave_request_histories?: Leave_request_historyListRelationFilter
  }

  export type leave_statusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    leave_requests?: leave_requestOrderByRelationAggregateInput
    leave_request_histories?: leave_request_historyOrderByRelationAggregateInput
  }

  export type leave_statusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: $Enums.LEAVE_APPROVAL
    AND?: leave_statusWhereInput | leave_statusWhereInput[]
    OR?: leave_statusWhereInput[]
    NOT?: leave_statusWhereInput | leave_statusWhereInput[]
    description?: StringFilter<"leave_status"> | string
    is_Active?: BoolFilter<"leave_status"> | boolean
    created_at?: DateTimeFilter<"leave_status"> | Date | string
    updated_at?: DateTimeFilter<"leave_status"> | Date | string
    leave_requests?: Leave_requestListRelationFilter
    leave_request_histories?: Leave_request_historyListRelationFilter
  }, "id" | "name">

  export type leave_statusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: leave_statusCountOrderByAggregateInput
    _avg?: leave_statusAvgOrderByAggregateInput
    _max?: leave_statusMaxOrderByAggregateInput
    _min?: leave_statusMinOrderByAggregateInput
    _sum?: leave_statusSumOrderByAggregateInput
  }

  export type leave_statusScalarWhereWithAggregatesInput = {
    AND?: leave_statusScalarWhereWithAggregatesInput | leave_statusScalarWhereWithAggregatesInput[]
    OR?: leave_statusScalarWhereWithAggregatesInput[]
    NOT?: leave_statusScalarWhereWithAggregatesInput | leave_statusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"leave_status"> | number
    name?: EnumLEAVE_APPROVALWithAggregatesFilter<"leave_status"> | $Enums.LEAVE_APPROVAL
    description?: StringWithAggregatesFilter<"leave_status"> | string
    is_Active?: BoolWithAggregatesFilter<"leave_status"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"leave_status"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"leave_status"> | Date | string
  }

  export type departmentsWhereInput = {
    AND?: departmentsWhereInput | departmentsWhereInput[]
    OR?: departmentsWhereInput[]
    NOT?: departmentsWhereInput | departmentsWhereInput[]
    id?: StringFilter<"departments"> | string
    cus_id?: StringFilter<"departments"> | string
    name?: StringFilter<"departments"> | string
    description?: StringFilter<"departments"> | string
    is_Active?: BoolFilter<"departments"> | boolean
    created_at?: DateTimeFilter<"departments"> | Date | string
    updated_at?: DateTimeFilter<"departments"> | Date | string
    users?: UserListRelationFilter
    leave_policy?: Leave_policyListRelationFilter
    holiday?: HolidayListRelationFilter
  }

  export type departmentsOrderByWithRelationInput = {
    id?: SortOrder
    cus_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    users?: userOrderByRelationAggregateInput
    leave_policy?: leave_policyOrderByRelationAggregateInput
    holiday?: holidayOrderByRelationAggregateInput
  }

  export type departmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cus_id?: string
    AND?: departmentsWhereInput | departmentsWhereInput[]
    OR?: departmentsWhereInput[]
    NOT?: departmentsWhereInput | departmentsWhereInput[]
    name?: StringFilter<"departments"> | string
    description?: StringFilter<"departments"> | string
    is_Active?: BoolFilter<"departments"> | boolean
    created_at?: DateTimeFilter<"departments"> | Date | string
    updated_at?: DateTimeFilter<"departments"> | Date | string
    users?: UserListRelationFilter
    leave_policy?: Leave_policyListRelationFilter
    holiday?: HolidayListRelationFilter
  }, "id" | "cus_id">

  export type departmentsOrderByWithAggregationInput = {
    id?: SortOrder
    cus_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: departmentsCountOrderByAggregateInput
    _max?: departmentsMaxOrderByAggregateInput
    _min?: departmentsMinOrderByAggregateInput
  }

  export type departmentsScalarWhereWithAggregatesInput = {
    AND?: departmentsScalarWhereWithAggregatesInput | departmentsScalarWhereWithAggregatesInput[]
    OR?: departmentsScalarWhereWithAggregatesInput[]
    NOT?: departmentsScalarWhereWithAggregatesInput | departmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"departments"> | string
    cus_id?: StringWithAggregatesFilter<"departments"> | string
    name?: StringWithAggregatesFilter<"departments"> | string
    description?: StringWithAggregatesFilter<"departments"> | string
    is_Active?: BoolWithAggregatesFilter<"departments"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"departments"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"departments"> | Date | string
  }

  export type leave_requestWhereInput = {
    AND?: leave_requestWhereInput | leave_requestWhereInput[]
    OR?: leave_requestWhereInput[]
    NOT?: leave_requestWhereInput | leave_requestWhereInput[]
    id?: StringFilter<"leave_request"> | string
    cus_id?: StringFilter<"leave_request"> | string
    start_date?: DateTimeFilter<"leave_request"> | Date | string
    end_date?: DateTimeFilter<"leave_request"> | Date | string
    no_of_days?: IntFilter<"leave_request"> | number
    reason?: StringFilter<"leave_request"> | string
    applied_date?: DateTimeFilter<"leave_request"> | Date | string
    user_id?: StringFilter<"leave_request"> | string
    leave_type_id?: EnumLEAVE_TYPEFilter<"leave_request"> | $Enums.LEAVE_TYPE
    status_id?: IntFilter<"leave_request"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    leave_type?: XOR<Leave_typesScalarRelationFilter, leave_typesWhereInput>
    status?: XOR<Leave_statusScalarRelationFilter, leave_statusWhereInput>
    leave_request_histories?: Leave_request_historyListRelationFilter
  }

  export type leave_requestOrderByWithRelationInput = {
    id?: SortOrder
    cus_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    no_of_days?: SortOrder
    reason?: SortOrder
    applied_date?: SortOrder
    user_id?: SortOrder
    leave_type_id?: SortOrder
    status_id?: SortOrder
    user?: userOrderByWithRelationInput
    leave_type?: leave_typesOrderByWithRelationInput
    status?: leave_statusOrderByWithRelationInput
    leave_request_histories?: leave_request_historyOrderByRelationAggregateInput
  }

  export type leave_requestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cus_id?: string
    AND?: leave_requestWhereInput | leave_requestWhereInput[]
    OR?: leave_requestWhereInput[]
    NOT?: leave_requestWhereInput | leave_requestWhereInput[]
    start_date?: DateTimeFilter<"leave_request"> | Date | string
    end_date?: DateTimeFilter<"leave_request"> | Date | string
    no_of_days?: IntFilter<"leave_request"> | number
    reason?: StringFilter<"leave_request"> | string
    applied_date?: DateTimeFilter<"leave_request"> | Date | string
    user_id?: StringFilter<"leave_request"> | string
    leave_type_id?: EnumLEAVE_TYPEFilter<"leave_request"> | $Enums.LEAVE_TYPE
    status_id?: IntFilter<"leave_request"> | number
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    leave_type?: XOR<Leave_typesScalarRelationFilter, leave_typesWhereInput>
    status?: XOR<Leave_statusScalarRelationFilter, leave_statusWhereInput>
    leave_request_histories?: Leave_request_historyListRelationFilter
  }, "id" | "cus_id">

  export type leave_requestOrderByWithAggregationInput = {
    id?: SortOrder
    cus_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    no_of_days?: SortOrder
    reason?: SortOrder
    applied_date?: SortOrder
    user_id?: SortOrder
    leave_type_id?: SortOrder
    status_id?: SortOrder
    _count?: leave_requestCountOrderByAggregateInput
    _avg?: leave_requestAvgOrderByAggregateInput
    _max?: leave_requestMaxOrderByAggregateInput
    _min?: leave_requestMinOrderByAggregateInput
    _sum?: leave_requestSumOrderByAggregateInput
  }

  export type leave_requestScalarWhereWithAggregatesInput = {
    AND?: leave_requestScalarWhereWithAggregatesInput | leave_requestScalarWhereWithAggregatesInput[]
    OR?: leave_requestScalarWhereWithAggregatesInput[]
    NOT?: leave_requestScalarWhereWithAggregatesInput | leave_requestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"leave_request"> | string
    cus_id?: StringWithAggregatesFilter<"leave_request"> | string
    start_date?: DateTimeWithAggregatesFilter<"leave_request"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"leave_request"> | Date | string
    no_of_days?: IntWithAggregatesFilter<"leave_request"> | number
    reason?: StringWithAggregatesFilter<"leave_request"> | string
    applied_date?: DateTimeWithAggregatesFilter<"leave_request"> | Date | string
    user_id?: StringWithAggregatesFilter<"leave_request"> | string
    leave_type_id?: EnumLEAVE_TYPEWithAggregatesFilter<"leave_request"> | $Enums.LEAVE_TYPE
    status_id?: IntWithAggregatesFilter<"leave_request"> | number
  }

  export type leave_request_historyWhereInput = {
    AND?: leave_request_historyWhereInput | leave_request_historyWhereInput[]
    OR?: leave_request_historyWhereInput[]
    NOT?: leave_request_historyWhereInput | leave_request_historyWhereInput[]
    id?: StringFilter<"leave_request_history"> | string
    comments?: StringFilter<"leave_request_history"> | string
    created_at?: DateTimeFilter<"leave_request_history"> | Date | string
    leave_request_id?: StringFilter<"leave_request_history"> | string
    status_id?: IntFilter<"leave_request_history"> | number
    updated_by?: StringFilter<"leave_request_history"> | string
    leave_request?: XOR<Leave_requestScalarRelationFilter, leave_requestWhereInput>
    status?: XOR<Leave_statusScalarRelationFilter, leave_statusWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type leave_request_historyOrderByWithRelationInput = {
    id?: SortOrder
    comments?: SortOrder
    created_at?: SortOrder
    leave_request_id?: SortOrder
    status_id?: SortOrder
    updated_by?: SortOrder
    leave_request?: leave_requestOrderByWithRelationInput
    status?: leave_statusOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type leave_request_historyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: leave_request_historyWhereInput | leave_request_historyWhereInput[]
    OR?: leave_request_historyWhereInput[]
    NOT?: leave_request_historyWhereInput | leave_request_historyWhereInput[]
    comments?: StringFilter<"leave_request_history"> | string
    created_at?: DateTimeFilter<"leave_request_history"> | Date | string
    leave_request_id?: StringFilter<"leave_request_history"> | string
    status_id?: IntFilter<"leave_request_history"> | number
    updated_by?: StringFilter<"leave_request_history"> | string
    leave_request?: XOR<Leave_requestScalarRelationFilter, leave_requestWhereInput>
    status?: XOR<Leave_statusScalarRelationFilter, leave_statusWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type leave_request_historyOrderByWithAggregationInput = {
    id?: SortOrder
    comments?: SortOrder
    created_at?: SortOrder
    leave_request_id?: SortOrder
    status_id?: SortOrder
    updated_by?: SortOrder
    _count?: leave_request_historyCountOrderByAggregateInput
    _avg?: leave_request_historyAvgOrderByAggregateInput
    _max?: leave_request_historyMaxOrderByAggregateInput
    _min?: leave_request_historyMinOrderByAggregateInput
    _sum?: leave_request_historySumOrderByAggregateInput
  }

  export type leave_request_historyScalarWhereWithAggregatesInput = {
    AND?: leave_request_historyScalarWhereWithAggregatesInput | leave_request_historyScalarWhereWithAggregatesInput[]
    OR?: leave_request_historyScalarWhereWithAggregatesInput[]
    NOT?: leave_request_historyScalarWhereWithAggregatesInput | leave_request_historyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"leave_request_history"> | string
    comments?: StringWithAggregatesFilter<"leave_request_history"> | string
    created_at?: DateTimeWithAggregatesFilter<"leave_request_history"> | Date | string
    leave_request_id?: StringWithAggregatesFilter<"leave_request_history"> | string
    status_id?: IntWithAggregatesFilter<"leave_request_history"> | number
    updated_by?: StringWithAggregatesFilter<"leave_request_history"> | string
  }

  export type leave_balanceWhereInput = {
    AND?: leave_balanceWhereInput | leave_balanceWhereInput[]
    OR?: leave_balanceWhereInput[]
    NOT?: leave_balanceWhereInput | leave_balanceWhereInput[]
    id?: StringFilter<"leave_balance"> | string
    yearly?: IntFilter<"leave_balance"> | number
    totalEntitlement?: IntFilter<"leave_balance"> | number
    year?: IntFilter<"leave_balance"> | number
    used?: IntFilter<"leave_balance"> | number
    pending?: IntFilter<"leave_balance"> | number
    carried_over?: IntFilter<"leave_balance"> | number
    balance?: IntFilter<"leave_balance"> | number
    created_at?: DateTimeFilter<"leave_balance"> | Date | string
    updated_at?: DateTimeFilter<"leave_balance"> | Date | string
    user_id?: StringFilter<"leave_balance"> | string
    leave_type_id?: EnumLEAVE_TYPEFilter<"leave_balance"> | $Enums.LEAVE_TYPE
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    leave_type?: XOR<Leave_typesScalarRelationFilter, leave_typesWhereInput>
  }

  export type leave_balanceOrderByWithRelationInput = {
    id?: SortOrder
    yearly?: SortOrder
    totalEntitlement?: SortOrder
    year?: SortOrder
    used?: SortOrder
    pending?: SortOrder
    carried_over?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    leave_type_id?: SortOrder
    user?: userOrderByWithRelationInput
    leave_type?: leave_typesOrderByWithRelationInput
  }

  export type leave_balanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_leave_type_id_year?: leave_balanceUser_idLeave_type_idYearCompoundUniqueInput
    AND?: leave_balanceWhereInput | leave_balanceWhereInput[]
    OR?: leave_balanceWhereInput[]
    NOT?: leave_balanceWhereInput | leave_balanceWhereInput[]
    yearly?: IntFilter<"leave_balance"> | number
    totalEntitlement?: IntFilter<"leave_balance"> | number
    year?: IntFilter<"leave_balance"> | number
    used?: IntFilter<"leave_balance"> | number
    pending?: IntFilter<"leave_balance"> | number
    carried_over?: IntFilter<"leave_balance"> | number
    balance?: IntFilter<"leave_balance"> | number
    created_at?: DateTimeFilter<"leave_balance"> | Date | string
    updated_at?: DateTimeFilter<"leave_balance"> | Date | string
    user_id?: StringFilter<"leave_balance"> | string
    leave_type_id?: EnumLEAVE_TYPEFilter<"leave_balance"> | $Enums.LEAVE_TYPE
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    leave_type?: XOR<Leave_typesScalarRelationFilter, leave_typesWhereInput>
  }, "id" | "user_id_leave_type_id_year">

  export type leave_balanceOrderByWithAggregationInput = {
    id?: SortOrder
    yearly?: SortOrder
    totalEntitlement?: SortOrder
    year?: SortOrder
    used?: SortOrder
    pending?: SortOrder
    carried_over?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    leave_type_id?: SortOrder
    _count?: leave_balanceCountOrderByAggregateInput
    _avg?: leave_balanceAvgOrderByAggregateInput
    _max?: leave_balanceMaxOrderByAggregateInput
    _min?: leave_balanceMinOrderByAggregateInput
    _sum?: leave_balanceSumOrderByAggregateInput
  }

  export type leave_balanceScalarWhereWithAggregatesInput = {
    AND?: leave_balanceScalarWhereWithAggregatesInput | leave_balanceScalarWhereWithAggregatesInput[]
    OR?: leave_balanceScalarWhereWithAggregatesInput[]
    NOT?: leave_balanceScalarWhereWithAggregatesInput | leave_balanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"leave_balance"> | string
    yearly?: IntWithAggregatesFilter<"leave_balance"> | number
    totalEntitlement?: IntWithAggregatesFilter<"leave_balance"> | number
    year?: IntWithAggregatesFilter<"leave_balance"> | number
    used?: IntWithAggregatesFilter<"leave_balance"> | number
    pending?: IntWithAggregatesFilter<"leave_balance"> | number
    carried_over?: IntWithAggregatesFilter<"leave_balance"> | number
    balance?: IntWithAggregatesFilter<"leave_balance"> | number
    created_at?: DateTimeWithAggregatesFilter<"leave_balance"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"leave_balance"> | Date | string
    user_id?: StringWithAggregatesFilter<"leave_balance"> | string
    leave_type_id?: EnumLEAVE_TYPEWithAggregatesFilter<"leave_balance"> | $Enums.LEAVE_TYPE
  }

  export type leave_policyWhereInput = {
    AND?: leave_policyWhereInput | leave_policyWhereInput[]
    OR?: leave_policyWhereInput[]
    NOT?: leave_policyWhereInput | leave_policyWhereInput[]
    id?: StringFilter<"leave_policy"> | string
    max_days_per_year?: IntFilter<"leave_policy"> | number
    max_days_per_request?: IntFilter<"leave_policy"> | number
    carry_over_limit?: IntFilter<"leave_policy"> | number
    carry_over_expiry?: IntFilter<"leave_policy"> | number
    is_Active?: BoolFilter<"leave_policy"> | boolean
    effective_from?: DateTimeFilter<"leave_policy"> | Date | string
    effective_to?: DateTimeFilter<"leave_policy"> | Date | string
    created_at?: DateTimeFilter<"leave_policy"> | Date | string
    updated_at?: DateTimeFilter<"leave_policy"> | Date | string
    leave_type_id?: EnumLEAVE_TYPEFilter<"leave_policy"> | $Enums.LEAVE_TYPE
    department_id?: StringNullableFilter<"leave_policy"> | string | null
    leave_type?: XOR<Leave_typesScalarRelationFilter, leave_typesWhereInput>
    department?: XOR<DepartmentsNullableScalarRelationFilter, departmentsWhereInput> | null
  }

  export type leave_policyOrderByWithRelationInput = {
    id?: SortOrder
    max_days_per_year?: SortOrder
    max_days_per_request?: SortOrder
    carry_over_limit?: SortOrder
    carry_over_expiry?: SortOrder
    is_Active?: SortOrder
    effective_from?: SortOrder
    effective_to?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    leave_type_id?: SortOrder
    department_id?: SortOrderInput | SortOrder
    leave_type?: leave_typesOrderByWithRelationInput
    department?: departmentsOrderByWithRelationInput
  }

  export type leave_policyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: leave_policyWhereInput | leave_policyWhereInput[]
    OR?: leave_policyWhereInput[]
    NOT?: leave_policyWhereInput | leave_policyWhereInput[]
    max_days_per_year?: IntFilter<"leave_policy"> | number
    max_days_per_request?: IntFilter<"leave_policy"> | number
    carry_over_limit?: IntFilter<"leave_policy"> | number
    carry_over_expiry?: IntFilter<"leave_policy"> | number
    is_Active?: BoolFilter<"leave_policy"> | boolean
    effective_from?: DateTimeFilter<"leave_policy"> | Date | string
    effective_to?: DateTimeFilter<"leave_policy"> | Date | string
    created_at?: DateTimeFilter<"leave_policy"> | Date | string
    updated_at?: DateTimeFilter<"leave_policy"> | Date | string
    leave_type_id?: EnumLEAVE_TYPEFilter<"leave_policy"> | $Enums.LEAVE_TYPE
    department_id?: StringNullableFilter<"leave_policy"> | string | null
    leave_type?: XOR<Leave_typesScalarRelationFilter, leave_typesWhereInput>
    department?: XOR<DepartmentsNullableScalarRelationFilter, departmentsWhereInput> | null
  }, "id">

  export type leave_policyOrderByWithAggregationInput = {
    id?: SortOrder
    max_days_per_year?: SortOrder
    max_days_per_request?: SortOrder
    carry_over_limit?: SortOrder
    carry_over_expiry?: SortOrder
    is_Active?: SortOrder
    effective_from?: SortOrder
    effective_to?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    leave_type_id?: SortOrder
    department_id?: SortOrderInput | SortOrder
    _count?: leave_policyCountOrderByAggregateInput
    _avg?: leave_policyAvgOrderByAggregateInput
    _max?: leave_policyMaxOrderByAggregateInput
    _min?: leave_policyMinOrderByAggregateInput
    _sum?: leave_policySumOrderByAggregateInput
  }

  export type leave_policyScalarWhereWithAggregatesInput = {
    AND?: leave_policyScalarWhereWithAggregatesInput | leave_policyScalarWhereWithAggregatesInput[]
    OR?: leave_policyScalarWhereWithAggregatesInput[]
    NOT?: leave_policyScalarWhereWithAggregatesInput | leave_policyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"leave_policy"> | string
    max_days_per_year?: IntWithAggregatesFilter<"leave_policy"> | number
    max_days_per_request?: IntWithAggregatesFilter<"leave_policy"> | number
    carry_over_limit?: IntWithAggregatesFilter<"leave_policy"> | number
    carry_over_expiry?: IntWithAggregatesFilter<"leave_policy"> | number
    is_Active?: BoolWithAggregatesFilter<"leave_policy"> | boolean
    effective_from?: DateTimeWithAggregatesFilter<"leave_policy"> | Date | string
    effective_to?: DateTimeWithAggregatesFilter<"leave_policy"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"leave_policy"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"leave_policy"> | Date | string
    leave_type_id?: EnumLEAVE_TYPEWithAggregatesFilter<"leave_policy"> | $Enums.LEAVE_TYPE
    department_id?: StringNullableWithAggregatesFilter<"leave_policy"> | string | null
  }

  export type holidayWhereInput = {
    AND?: holidayWhereInput | holidayWhereInput[]
    OR?: holidayWhereInput[]
    NOT?: holidayWhereInput | holidayWhereInput[]
    id?: StringFilter<"holiday"> | string
    name?: StringFilter<"holiday"> | string
    date?: DateTimeFilter<"holiday"> | Date | string
    is_Recurring?: BoolFilter<"holiday"> | boolean
    is_Active?: BoolFilter<"holiday"> | boolean
    created_at?: DateTimeFilter<"holiday"> | Date | string
    updated_at?: DateTimeFilter<"holiday"> | Date | string
    department_id?: StringNullableFilter<"holiday"> | string | null
    department?: XOR<DepartmentsNullableScalarRelationFilter, departmentsWhereInput> | null
  }

  export type holidayOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    is_Recurring?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    department_id?: SortOrderInput | SortOrder
    department?: departmentsOrderByWithRelationInput
  }

  export type holidayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: holidayWhereInput | holidayWhereInput[]
    OR?: holidayWhereInput[]
    NOT?: holidayWhereInput | holidayWhereInput[]
    name?: StringFilter<"holiday"> | string
    date?: DateTimeFilter<"holiday"> | Date | string
    is_Recurring?: BoolFilter<"holiday"> | boolean
    is_Active?: BoolFilter<"holiday"> | boolean
    created_at?: DateTimeFilter<"holiday"> | Date | string
    updated_at?: DateTimeFilter<"holiday"> | Date | string
    department_id?: StringNullableFilter<"holiday"> | string | null
    department?: XOR<DepartmentsNullableScalarRelationFilter, departmentsWhereInput> | null
  }, "id">

  export type holidayOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    is_Recurring?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    department_id?: SortOrderInput | SortOrder
    _count?: holidayCountOrderByAggregateInput
    _max?: holidayMaxOrderByAggregateInput
    _min?: holidayMinOrderByAggregateInput
  }

  export type holidayScalarWhereWithAggregatesInput = {
    AND?: holidayScalarWhereWithAggregatesInput | holidayScalarWhereWithAggregatesInput[]
    OR?: holidayScalarWhereWithAggregatesInput[]
    NOT?: holidayScalarWhereWithAggregatesInput | holidayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"holiday"> | string
    name?: StringWithAggregatesFilter<"holiday"> | string
    date?: DateTimeWithAggregatesFilter<"holiday"> | Date | string
    is_Recurring?: BoolWithAggregatesFilter<"holiday"> | boolean
    is_Active?: BoolWithAggregatesFilter<"holiday"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"holiday"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"holiday"> | Date | string
    department_id?: StringNullableWithAggregatesFilter<"holiday"> | string | null
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    cus_id?: StringFilter<"user"> | string
    first_name?: StringFilter<"user"> | string
    last_name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    joined_date?: DateTimeFilter<"user"> | Date | string
    is_Active?: BoolFilter<"user"> | boolean
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    role_id?: IntFilter<"user"> | number
    department_name?: StringFilter<"user"> | string
    manager_id?: StringNullableFilter<"user"> | string | null
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    department?: XOR<DepartmentsScalarRelationFilter, departmentsWhereInput>
    manager?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    subordinates?: UserListRelationFilter
    leave_requests?: Leave_requestListRelationFilter
    leave_balances?: Leave_balanceListRelationFilter
    leave_request_histories?: Leave_request_historyListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    cus_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joined_date?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    department_name?: SortOrder
    manager_id?: SortOrderInput | SortOrder
    role?: rolesOrderByWithRelationInput
    department?: departmentsOrderByWithRelationInput
    manager?: userOrderByWithRelationInput
    subordinates?: userOrderByRelationAggregateInput
    leave_requests?: leave_requestOrderByRelationAggregateInput
    leave_balances?: leave_balanceOrderByRelationAggregateInput
    leave_request_histories?: leave_request_historyOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cus_id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    first_name?: StringFilter<"user"> | string
    last_name?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    joined_date?: DateTimeFilter<"user"> | Date | string
    is_Active?: BoolFilter<"user"> | boolean
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    role_id?: IntFilter<"user"> | number
    department_name?: StringFilter<"user"> | string
    manager_id?: StringNullableFilter<"user"> | string | null
    role?: XOR<RolesScalarRelationFilter, rolesWhereInput>
    department?: XOR<DepartmentsScalarRelationFilter, departmentsWhereInput>
    manager?: XOR<UserNullableScalarRelationFilter, userWhereInput> | null
    subordinates?: UserListRelationFilter
    leave_requests?: Leave_requestListRelationFilter
    leave_balances?: Leave_balanceListRelationFilter
    leave_request_histories?: Leave_request_historyListRelationFilter
  }, "id" | "cus_id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    cus_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joined_date?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    department_name?: SortOrder
    manager_id?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    cus_id?: StringWithAggregatesFilter<"user"> | string
    first_name?: StringWithAggregatesFilter<"user"> | string
    last_name?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    joined_date?: DateTimeWithAggregatesFilter<"user"> | Date | string
    is_Active?: BoolWithAggregatesFilter<"user"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    role_id?: IntWithAggregatesFilter<"user"> | number
    department_name?: StringWithAggregatesFilter<"user"> | string
    manager_id?: StringNullableWithAggregatesFilter<"user"> | string | null
  }

  export type rolesCreateInput = {
    id: number
    name?: $Enums.Role
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: userCreateNestedManyWithoutRoleInput
  }

  export type rolesUncheckedCreateInput = {
    id: number
    name?: $Enums.Role
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: userUncheckedCreateNestedManyWithoutRoleInput
  }

  export type rolesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateManyWithoutRoleNestedInput
  }

  export type rolesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type rolesCreateManyInput = {
    id: number
    name?: $Enums.Role
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type rolesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leave_typesCreateInput = {
    id?: string
    name: $Enums.LEAVE_TYPE
    description: string
    max_days_per_request: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_requests?: leave_requestCreateNestedManyWithoutLeave_typeInput
    leave_policies?: leave_policyCreateNestedManyWithoutLeave_typeInput
    leave_balances?: leave_balanceCreateNestedManyWithoutLeave_typeInput
  }

  export type leave_typesUncheckedCreateInput = {
    id?: string
    name: $Enums.LEAVE_TYPE
    description: string
    max_days_per_request: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_requests?: leave_requestUncheckedCreateNestedManyWithoutLeave_typeInput
    leave_policies?: leave_policyUncheckedCreateNestedManyWithoutLeave_typeInput
    leave_balances?: leave_balanceUncheckedCreateNestedManyWithoutLeave_typeInput
  }

  export type leave_typesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    description?: StringFieldUpdateOperationsInput | string
    max_days_per_request?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_requests?: leave_requestUpdateManyWithoutLeave_typeNestedInput
    leave_policies?: leave_policyUpdateManyWithoutLeave_typeNestedInput
    leave_balances?: leave_balanceUpdateManyWithoutLeave_typeNestedInput
  }

  export type leave_typesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    description?: StringFieldUpdateOperationsInput | string
    max_days_per_request?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_requests?: leave_requestUncheckedUpdateManyWithoutLeave_typeNestedInput
    leave_policies?: leave_policyUncheckedUpdateManyWithoutLeave_typeNestedInput
    leave_balances?: leave_balanceUncheckedUpdateManyWithoutLeave_typeNestedInput
  }

  export type leave_typesCreateManyInput = {
    id?: string
    name: $Enums.LEAVE_TYPE
    description: string
    max_days_per_request: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type leave_typesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    description?: StringFieldUpdateOperationsInput | string
    max_days_per_request?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leave_typesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    description?: StringFieldUpdateOperationsInput | string
    max_days_per_request?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leave_statusCreateInput = {
    id: number
    name?: $Enums.LEAVE_APPROVAL
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_requests?: leave_requestCreateNestedManyWithoutStatusInput
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutStatusInput
  }

  export type leave_statusUncheckedCreateInput = {
    id: number
    name?: $Enums.LEAVE_APPROVAL
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_requests?: leave_requestUncheckedCreateNestedManyWithoutStatusInput
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutStatusInput
  }

  export type leave_statusUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumLEAVE_APPROVALFieldUpdateOperationsInput | $Enums.LEAVE_APPROVAL
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_requests?: leave_requestUpdateManyWithoutStatusNestedInput
    leave_request_histories?: leave_request_historyUpdateManyWithoutStatusNestedInput
  }

  export type leave_statusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumLEAVE_APPROVALFieldUpdateOperationsInput | $Enums.LEAVE_APPROVAL
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_requests?: leave_requestUncheckedUpdateManyWithoutStatusNestedInput
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type leave_statusCreateManyInput = {
    id: number
    name?: $Enums.LEAVE_APPROVAL
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type leave_statusUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumLEAVE_APPROVALFieldUpdateOperationsInput | $Enums.LEAVE_APPROVAL
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leave_statusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumLEAVE_APPROVALFieldUpdateOperationsInput | $Enums.LEAVE_APPROVAL
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type departmentsCreateInput = {
    id?: string
    cus_id: string
    name: string
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: userCreateNestedManyWithoutDepartmentInput
    leave_policy?: leave_policyCreateNestedManyWithoutDepartmentInput
    holiday?: holidayCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsUncheckedCreateInput = {
    id?: string
    cus_id: string
    name: string
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: userUncheckedCreateNestedManyWithoutDepartmentInput
    leave_policy?: leave_policyUncheckedCreateNestedManyWithoutDepartmentInput
    holiday?: holidayUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateManyWithoutDepartmentNestedInput
    leave_policy?: leave_policyUpdateManyWithoutDepartmentNestedInput
    holiday?: holidayUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUncheckedUpdateManyWithoutDepartmentNestedInput
    leave_policy?: leave_policyUncheckedUpdateManyWithoutDepartmentNestedInput
    holiday?: holidayUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentsCreateManyInput = {
    id?: string
    cus_id: string
    name: string
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type departmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type departmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leave_requestCreateInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    user: userCreateNestedOneWithoutLeave_requestsInput
    leave_type: leave_typesCreateNestedOneWithoutLeave_requestsInput
    status: leave_statusCreateNestedOneWithoutLeave_requestsInput
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutLeave_requestInput
  }

  export type leave_requestUncheckedCreateInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    user_id: string
    leave_type_id: $Enums.LEAVE_TYPE
    status_id: number
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutLeave_requestInput
  }

  export type leave_requestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutLeave_requestsNestedInput
    leave_type?: leave_typesUpdateOneRequiredWithoutLeave_requestsNestedInput
    status?: leave_statusUpdateOneRequiredWithoutLeave_requestsNestedInput
    leave_request_histories?: leave_request_historyUpdateManyWithoutLeave_requestNestedInput
  }

  export type leave_requestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    status_id?: IntFieldUpdateOperationsInput | number
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutLeave_requestNestedInput
  }

  export type leave_requestCreateManyInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    user_id: string
    leave_type_id: $Enums.LEAVE_TYPE
    status_id: number
  }

  export type leave_requestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leave_requestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    status_id?: IntFieldUpdateOperationsInput | number
  }

  export type leave_request_historyCreateInput = {
    id?: string
    comments: string
    created_at?: Date | string
    leave_request: leave_requestCreateNestedOneWithoutLeave_request_historiesInput
    status: leave_statusCreateNestedOneWithoutLeave_request_historiesInput
    user: userCreateNestedOneWithoutLeave_request_historiesInput
  }

  export type leave_request_historyUncheckedCreateInput = {
    id?: string
    comments: string
    created_at?: Date | string
    leave_request_id: string
    status_id: number
    updated_by: string
  }

  export type leave_request_historyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_request?: leave_requestUpdateOneRequiredWithoutLeave_request_historiesNestedInput
    status?: leave_statusUpdateOneRequiredWithoutLeave_request_historiesNestedInput
    user?: userUpdateOneRequiredWithoutLeave_request_historiesNestedInput
  }

  export type leave_request_historyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_request_id?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type leave_request_historyCreateManyInput = {
    id?: string
    comments: string
    created_at?: Date | string
    leave_request_id: string
    status_id: number
    updated_by: string
  }

  export type leave_request_historyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leave_request_historyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_request_id?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type leave_balanceCreateInput = {
    id?: string
    yearly: number
    totalEntitlement: number
    year: number
    used: number
    pending: number
    carried_over: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutLeave_balancesInput
    leave_type: leave_typesCreateNestedOneWithoutLeave_balancesInput
  }

  export type leave_balanceUncheckedCreateInput = {
    id?: string
    yearly: number
    totalEntitlement: number
    year: number
    used: number
    pending: number
    carried_over: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    leave_type_id: $Enums.LEAVE_TYPE
  }

  export type leave_balanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearly?: IntFieldUpdateOperationsInput | number
    totalEntitlement?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    carried_over?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutLeave_balancesNestedInput
    leave_type?: leave_typesUpdateOneRequiredWithoutLeave_balancesNestedInput
  }

  export type leave_balanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearly?: IntFieldUpdateOperationsInput | number
    totalEntitlement?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    carried_over?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
  }

  export type leave_balanceCreateManyInput = {
    id?: string
    yearly: number
    totalEntitlement: number
    year: number
    used: number
    pending: number
    carried_over: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
    leave_type_id: $Enums.LEAVE_TYPE
  }

  export type leave_balanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearly?: IntFieldUpdateOperationsInput | number
    totalEntitlement?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    carried_over?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leave_balanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearly?: IntFieldUpdateOperationsInput | number
    totalEntitlement?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    carried_over?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
  }

  export type leave_policyCreateInput = {
    id?: string
    max_days_per_year: number
    max_days_per_request: number
    carry_over_limit: number
    carry_over_expiry: number
    is_Active: boolean
    effective_from: Date | string
    effective_to: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    leave_type: leave_typesCreateNestedOneWithoutLeave_policiesInput
    department?: departmentsCreateNestedOneWithoutLeave_policyInput
  }

  export type leave_policyUncheckedCreateInput = {
    id?: string
    max_days_per_year: number
    max_days_per_request: number
    carry_over_limit: number
    carry_over_expiry: number
    is_Active: boolean
    effective_from: Date | string
    effective_to: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    leave_type_id: $Enums.LEAVE_TYPE
    department_id?: string | null
  }

  export type leave_policyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    max_days_per_year?: IntFieldUpdateOperationsInput | number
    max_days_per_request?: IntFieldUpdateOperationsInput | number
    carry_over_limit?: IntFieldUpdateOperationsInput | number
    carry_over_expiry?: IntFieldUpdateOperationsInput | number
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    effective_from?: DateTimeFieldUpdateOperationsInput | Date | string
    effective_to?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_type?: leave_typesUpdateOneRequiredWithoutLeave_policiesNestedInput
    department?: departmentsUpdateOneWithoutLeave_policyNestedInput
  }

  export type leave_policyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    max_days_per_year?: IntFieldUpdateOperationsInput | number
    max_days_per_request?: IntFieldUpdateOperationsInput | number
    carry_over_limit?: IntFieldUpdateOperationsInput | number
    carry_over_expiry?: IntFieldUpdateOperationsInput | number
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    effective_from?: DateTimeFieldUpdateOperationsInput | Date | string
    effective_to?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    department_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type leave_policyCreateManyInput = {
    id?: string
    max_days_per_year: number
    max_days_per_request: number
    carry_over_limit: number
    carry_over_expiry: number
    is_Active: boolean
    effective_from: Date | string
    effective_to: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    leave_type_id: $Enums.LEAVE_TYPE
    department_id?: string | null
  }

  export type leave_policyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    max_days_per_year?: IntFieldUpdateOperationsInput | number
    max_days_per_request?: IntFieldUpdateOperationsInput | number
    carry_over_limit?: IntFieldUpdateOperationsInput | number
    carry_over_expiry?: IntFieldUpdateOperationsInput | number
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    effective_from?: DateTimeFieldUpdateOperationsInput | Date | string
    effective_to?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leave_policyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    max_days_per_year?: IntFieldUpdateOperationsInput | number
    max_days_per_request?: IntFieldUpdateOperationsInput | number
    carry_over_limit?: IntFieldUpdateOperationsInput | number
    carry_over_expiry?: IntFieldUpdateOperationsInput | number
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    effective_from?: DateTimeFieldUpdateOperationsInput | Date | string
    effective_to?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    department_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type holidayCreateInput = {
    id?: string
    name: string
    date: Date | string
    is_Recurring: boolean
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    department?: departmentsCreateNestedOneWithoutHolidayInput
  }

  export type holidayUncheckedCreateInput = {
    id?: string
    name: string
    date: Date | string
    is_Recurring: boolean
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    department_id?: string | null
  }

  export type holidayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Recurring?: BoolFieldUpdateOperationsInput | boolean
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: departmentsUpdateOneWithoutHolidayNestedInput
  }

  export type holidayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Recurring?: BoolFieldUpdateOperationsInput | boolean
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type holidayCreateManyInput = {
    id?: string
    name: string
    date: Date | string
    is_Recurring: boolean
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    department_id?: string | null
  }

  export type holidayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Recurring?: BoolFieldUpdateOperationsInput | boolean
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type holidayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Recurring?: BoolFieldUpdateOperationsInput | boolean
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type userCreateInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    department: departmentsCreateNestedOneWithoutUsersInput
    manager?: userCreateNestedOneWithoutSubordinatesInput
    subordinates?: userCreateNestedManyWithoutManagerInput
    leave_requests?: leave_requestCreateNestedManyWithoutUserInput
    leave_balances?: leave_balanceCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: number
    department_name: string
    manager_id?: string | null
    subordinates?: userUncheckedCreateNestedManyWithoutManagerInput
    leave_requests?: leave_requestUncheckedCreateNestedManyWithoutUserInput
    leave_balances?: leave_balanceUncheckedCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    department?: departmentsUpdateOneRequiredWithoutUsersNestedInput
    manager?: userUpdateOneWithoutSubordinatesNestedInput
    subordinates?: userUpdateManyWithoutManagerNestedInput
    leave_requests?: leave_requestUpdateManyWithoutUserNestedInput
    leave_balances?: leave_balanceUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    subordinates?: userUncheckedUpdateManyWithoutManagerNestedInput
    leave_requests?: leave_requestUncheckedUpdateManyWithoutUserNestedInput
    leave_balances?: leave_balanceUncheckedUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: number
    department_name: string
    manager_id?: string | null
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: userWhereInput
    some?: userWhereInput
    none?: userWhereInput
  }

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type rolesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type rolesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumLEAVE_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAVE_TYPE | EnumLEAVE_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.LEAVE_TYPE[] | ListEnumLEAVE_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAVE_TYPE[] | ListEnumLEAVE_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAVE_TYPEFilter<$PrismaModel> | $Enums.LEAVE_TYPE
  }

  export type Leave_requestListRelationFilter = {
    every?: leave_requestWhereInput
    some?: leave_requestWhereInput
    none?: leave_requestWhereInput
  }

  export type Leave_policyListRelationFilter = {
    every?: leave_policyWhereInput
    some?: leave_policyWhereInput
    none?: leave_policyWhereInput
  }

  export type Leave_balanceListRelationFilter = {
    every?: leave_balanceWhereInput
    some?: leave_balanceWhereInput
    none?: leave_balanceWhereInput
  }

  export type leave_requestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type leave_policyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type leave_balanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type leave_typesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    max_days_per_request?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type leave_typesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    max_days_per_request?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type leave_typesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    max_days_per_request?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumLEAVE_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAVE_TYPE | EnumLEAVE_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.LEAVE_TYPE[] | ListEnumLEAVE_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAVE_TYPE[] | ListEnumLEAVE_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAVE_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.LEAVE_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLEAVE_TYPEFilter<$PrismaModel>
    _max?: NestedEnumLEAVE_TYPEFilter<$PrismaModel>
  }

  export type EnumLEAVE_APPROVALFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAVE_APPROVAL | EnumLEAVE_APPROVALFieldRefInput<$PrismaModel>
    in?: $Enums.LEAVE_APPROVAL[] | ListEnumLEAVE_APPROVALFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAVE_APPROVAL[] | ListEnumLEAVE_APPROVALFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAVE_APPROVALFilter<$PrismaModel> | $Enums.LEAVE_APPROVAL
  }

  export type Leave_request_historyListRelationFilter = {
    every?: leave_request_historyWhereInput
    some?: leave_request_historyWhereInput
    none?: leave_request_historyWhereInput
  }

  export type leave_request_historyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type leave_statusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type leave_statusAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type leave_statusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type leave_statusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type leave_statusSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumLEAVE_APPROVALWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAVE_APPROVAL | EnumLEAVE_APPROVALFieldRefInput<$PrismaModel>
    in?: $Enums.LEAVE_APPROVAL[] | ListEnumLEAVE_APPROVALFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAVE_APPROVAL[] | ListEnumLEAVE_APPROVALFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAVE_APPROVALWithAggregatesFilter<$PrismaModel> | $Enums.LEAVE_APPROVAL
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLEAVE_APPROVALFilter<$PrismaModel>
    _max?: NestedEnumLEAVE_APPROVALFilter<$PrismaModel>
  }

  export type HolidayListRelationFilter = {
    every?: holidayWhereInput
    some?: holidayWhereInput
    none?: holidayWhereInput
  }

  export type holidayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type departmentsCountOrderByAggregateInput = {
    id?: SortOrder
    cus_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type departmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    cus_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type departmentsMinOrderByAggregateInput = {
    id?: SortOrder
    cus_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type Leave_typesScalarRelationFilter = {
    is?: leave_typesWhereInput
    isNot?: leave_typesWhereInput
  }

  export type Leave_statusScalarRelationFilter = {
    is?: leave_statusWhereInput
    isNot?: leave_statusWhereInput
  }

  export type leave_requestCountOrderByAggregateInput = {
    id?: SortOrder
    cus_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    no_of_days?: SortOrder
    reason?: SortOrder
    applied_date?: SortOrder
    user_id?: SortOrder
    leave_type_id?: SortOrder
    status_id?: SortOrder
  }

  export type leave_requestAvgOrderByAggregateInput = {
    no_of_days?: SortOrder
    status_id?: SortOrder
  }

  export type leave_requestMaxOrderByAggregateInput = {
    id?: SortOrder
    cus_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    no_of_days?: SortOrder
    reason?: SortOrder
    applied_date?: SortOrder
    user_id?: SortOrder
    leave_type_id?: SortOrder
    status_id?: SortOrder
  }

  export type leave_requestMinOrderByAggregateInput = {
    id?: SortOrder
    cus_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    no_of_days?: SortOrder
    reason?: SortOrder
    applied_date?: SortOrder
    user_id?: SortOrder
    leave_type_id?: SortOrder
    status_id?: SortOrder
  }

  export type leave_requestSumOrderByAggregateInput = {
    no_of_days?: SortOrder
    status_id?: SortOrder
  }

  export type Leave_requestScalarRelationFilter = {
    is?: leave_requestWhereInput
    isNot?: leave_requestWhereInput
  }

  export type leave_request_historyCountOrderByAggregateInput = {
    id?: SortOrder
    comments?: SortOrder
    created_at?: SortOrder
    leave_request_id?: SortOrder
    status_id?: SortOrder
    updated_by?: SortOrder
  }

  export type leave_request_historyAvgOrderByAggregateInput = {
    status_id?: SortOrder
  }

  export type leave_request_historyMaxOrderByAggregateInput = {
    id?: SortOrder
    comments?: SortOrder
    created_at?: SortOrder
    leave_request_id?: SortOrder
    status_id?: SortOrder
    updated_by?: SortOrder
  }

  export type leave_request_historyMinOrderByAggregateInput = {
    id?: SortOrder
    comments?: SortOrder
    created_at?: SortOrder
    leave_request_id?: SortOrder
    status_id?: SortOrder
    updated_by?: SortOrder
  }

  export type leave_request_historySumOrderByAggregateInput = {
    status_id?: SortOrder
  }

  export type leave_balanceUser_idLeave_type_idYearCompoundUniqueInput = {
    user_id: string
    leave_type_id: $Enums.LEAVE_TYPE
    year: number
  }

  export type leave_balanceCountOrderByAggregateInput = {
    id?: SortOrder
    yearly?: SortOrder
    totalEntitlement?: SortOrder
    year?: SortOrder
    used?: SortOrder
    pending?: SortOrder
    carried_over?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    leave_type_id?: SortOrder
  }

  export type leave_balanceAvgOrderByAggregateInput = {
    yearly?: SortOrder
    totalEntitlement?: SortOrder
    year?: SortOrder
    used?: SortOrder
    pending?: SortOrder
    carried_over?: SortOrder
    balance?: SortOrder
  }

  export type leave_balanceMaxOrderByAggregateInput = {
    id?: SortOrder
    yearly?: SortOrder
    totalEntitlement?: SortOrder
    year?: SortOrder
    used?: SortOrder
    pending?: SortOrder
    carried_over?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    leave_type_id?: SortOrder
  }

  export type leave_balanceMinOrderByAggregateInput = {
    id?: SortOrder
    yearly?: SortOrder
    totalEntitlement?: SortOrder
    year?: SortOrder
    used?: SortOrder
    pending?: SortOrder
    carried_over?: SortOrder
    balance?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    leave_type_id?: SortOrder
  }

  export type leave_balanceSumOrderByAggregateInput = {
    yearly?: SortOrder
    totalEntitlement?: SortOrder
    year?: SortOrder
    used?: SortOrder
    pending?: SortOrder
    carried_over?: SortOrder
    balance?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DepartmentsNullableScalarRelationFilter = {
    is?: departmentsWhereInput | null
    isNot?: departmentsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type leave_policyCountOrderByAggregateInput = {
    id?: SortOrder
    max_days_per_year?: SortOrder
    max_days_per_request?: SortOrder
    carry_over_limit?: SortOrder
    carry_over_expiry?: SortOrder
    is_Active?: SortOrder
    effective_from?: SortOrder
    effective_to?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    leave_type_id?: SortOrder
    department_id?: SortOrder
  }

  export type leave_policyAvgOrderByAggregateInput = {
    max_days_per_year?: SortOrder
    max_days_per_request?: SortOrder
    carry_over_limit?: SortOrder
    carry_over_expiry?: SortOrder
  }

  export type leave_policyMaxOrderByAggregateInput = {
    id?: SortOrder
    max_days_per_year?: SortOrder
    max_days_per_request?: SortOrder
    carry_over_limit?: SortOrder
    carry_over_expiry?: SortOrder
    is_Active?: SortOrder
    effective_from?: SortOrder
    effective_to?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    leave_type_id?: SortOrder
    department_id?: SortOrder
  }

  export type leave_policyMinOrderByAggregateInput = {
    id?: SortOrder
    max_days_per_year?: SortOrder
    max_days_per_request?: SortOrder
    carry_over_limit?: SortOrder
    carry_over_expiry?: SortOrder
    is_Active?: SortOrder
    effective_from?: SortOrder
    effective_to?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    leave_type_id?: SortOrder
    department_id?: SortOrder
  }

  export type leave_policySumOrderByAggregateInput = {
    max_days_per_year?: SortOrder
    max_days_per_request?: SortOrder
    carry_over_limit?: SortOrder
    carry_over_expiry?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type holidayCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    is_Recurring?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    department_id?: SortOrder
  }

  export type holidayMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    is_Recurring?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    department_id?: SortOrder
  }

  export type holidayMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    date?: SortOrder
    is_Recurring?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    department_id?: SortOrder
  }

  export type RolesScalarRelationFilter = {
    is?: rolesWhereInput
    isNot?: rolesWhereInput
  }

  export type DepartmentsScalarRelationFilter = {
    is?: departmentsWhereInput
    isNot?: departmentsWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: userWhereInput | null
    isNot?: userWhereInput | null
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    cus_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joined_date?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    department_name?: SortOrder
    manager_id?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    cus_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joined_date?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    department_name?: SortOrder
    manager_id?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    cus_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    joined_date?: SortOrder
    is_Active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role_id?: SortOrder
    department_name?: SortOrder
    manager_id?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type userCreateNestedManyWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type userUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutRoleInput | userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutRoleInput | userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userUpdateManyWithWhereWithoutRoleInput | userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput> | userCreateWithoutRoleInput[] | userUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: userCreateOrConnectWithoutRoleInput | userCreateOrConnectWithoutRoleInput[]
    upsert?: userUpsertWithWhereUniqueWithoutRoleInput | userUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: userCreateManyRoleInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutRoleInput | userUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: userUpdateManyWithWhereWithoutRoleInput | userUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type leave_requestCreateNestedManyWithoutLeave_typeInput = {
    create?: XOR<leave_requestCreateWithoutLeave_typeInput, leave_requestUncheckedCreateWithoutLeave_typeInput> | leave_requestCreateWithoutLeave_typeInput[] | leave_requestUncheckedCreateWithoutLeave_typeInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutLeave_typeInput | leave_requestCreateOrConnectWithoutLeave_typeInput[]
    createMany?: leave_requestCreateManyLeave_typeInputEnvelope
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
  }

  export type leave_policyCreateNestedManyWithoutLeave_typeInput = {
    create?: XOR<leave_policyCreateWithoutLeave_typeInput, leave_policyUncheckedCreateWithoutLeave_typeInput> | leave_policyCreateWithoutLeave_typeInput[] | leave_policyUncheckedCreateWithoutLeave_typeInput[]
    connectOrCreate?: leave_policyCreateOrConnectWithoutLeave_typeInput | leave_policyCreateOrConnectWithoutLeave_typeInput[]
    createMany?: leave_policyCreateManyLeave_typeInputEnvelope
    connect?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
  }

  export type leave_balanceCreateNestedManyWithoutLeave_typeInput = {
    create?: XOR<leave_balanceCreateWithoutLeave_typeInput, leave_balanceUncheckedCreateWithoutLeave_typeInput> | leave_balanceCreateWithoutLeave_typeInput[] | leave_balanceUncheckedCreateWithoutLeave_typeInput[]
    connectOrCreate?: leave_balanceCreateOrConnectWithoutLeave_typeInput | leave_balanceCreateOrConnectWithoutLeave_typeInput[]
    createMany?: leave_balanceCreateManyLeave_typeInputEnvelope
    connect?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
  }

  export type leave_requestUncheckedCreateNestedManyWithoutLeave_typeInput = {
    create?: XOR<leave_requestCreateWithoutLeave_typeInput, leave_requestUncheckedCreateWithoutLeave_typeInput> | leave_requestCreateWithoutLeave_typeInput[] | leave_requestUncheckedCreateWithoutLeave_typeInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutLeave_typeInput | leave_requestCreateOrConnectWithoutLeave_typeInput[]
    createMany?: leave_requestCreateManyLeave_typeInputEnvelope
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
  }

  export type leave_policyUncheckedCreateNestedManyWithoutLeave_typeInput = {
    create?: XOR<leave_policyCreateWithoutLeave_typeInput, leave_policyUncheckedCreateWithoutLeave_typeInput> | leave_policyCreateWithoutLeave_typeInput[] | leave_policyUncheckedCreateWithoutLeave_typeInput[]
    connectOrCreate?: leave_policyCreateOrConnectWithoutLeave_typeInput | leave_policyCreateOrConnectWithoutLeave_typeInput[]
    createMany?: leave_policyCreateManyLeave_typeInputEnvelope
    connect?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
  }

  export type leave_balanceUncheckedCreateNestedManyWithoutLeave_typeInput = {
    create?: XOR<leave_balanceCreateWithoutLeave_typeInput, leave_balanceUncheckedCreateWithoutLeave_typeInput> | leave_balanceCreateWithoutLeave_typeInput[] | leave_balanceUncheckedCreateWithoutLeave_typeInput[]
    connectOrCreate?: leave_balanceCreateOrConnectWithoutLeave_typeInput | leave_balanceCreateOrConnectWithoutLeave_typeInput[]
    createMany?: leave_balanceCreateManyLeave_typeInputEnvelope
    connect?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
  }

  export type EnumLEAVE_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.LEAVE_TYPE
  }

  export type leave_requestUpdateManyWithoutLeave_typeNestedInput = {
    create?: XOR<leave_requestCreateWithoutLeave_typeInput, leave_requestUncheckedCreateWithoutLeave_typeInput> | leave_requestCreateWithoutLeave_typeInput[] | leave_requestUncheckedCreateWithoutLeave_typeInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutLeave_typeInput | leave_requestCreateOrConnectWithoutLeave_typeInput[]
    upsert?: leave_requestUpsertWithWhereUniqueWithoutLeave_typeInput | leave_requestUpsertWithWhereUniqueWithoutLeave_typeInput[]
    createMany?: leave_requestCreateManyLeave_typeInputEnvelope
    set?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    disconnect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    delete?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    update?: leave_requestUpdateWithWhereUniqueWithoutLeave_typeInput | leave_requestUpdateWithWhereUniqueWithoutLeave_typeInput[]
    updateMany?: leave_requestUpdateManyWithWhereWithoutLeave_typeInput | leave_requestUpdateManyWithWhereWithoutLeave_typeInput[]
    deleteMany?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
  }

  export type leave_policyUpdateManyWithoutLeave_typeNestedInput = {
    create?: XOR<leave_policyCreateWithoutLeave_typeInput, leave_policyUncheckedCreateWithoutLeave_typeInput> | leave_policyCreateWithoutLeave_typeInput[] | leave_policyUncheckedCreateWithoutLeave_typeInput[]
    connectOrCreate?: leave_policyCreateOrConnectWithoutLeave_typeInput | leave_policyCreateOrConnectWithoutLeave_typeInput[]
    upsert?: leave_policyUpsertWithWhereUniqueWithoutLeave_typeInput | leave_policyUpsertWithWhereUniqueWithoutLeave_typeInput[]
    createMany?: leave_policyCreateManyLeave_typeInputEnvelope
    set?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    disconnect?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    delete?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    connect?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    update?: leave_policyUpdateWithWhereUniqueWithoutLeave_typeInput | leave_policyUpdateWithWhereUniqueWithoutLeave_typeInput[]
    updateMany?: leave_policyUpdateManyWithWhereWithoutLeave_typeInput | leave_policyUpdateManyWithWhereWithoutLeave_typeInput[]
    deleteMany?: leave_policyScalarWhereInput | leave_policyScalarWhereInput[]
  }

  export type leave_balanceUpdateManyWithoutLeave_typeNestedInput = {
    create?: XOR<leave_balanceCreateWithoutLeave_typeInput, leave_balanceUncheckedCreateWithoutLeave_typeInput> | leave_balanceCreateWithoutLeave_typeInput[] | leave_balanceUncheckedCreateWithoutLeave_typeInput[]
    connectOrCreate?: leave_balanceCreateOrConnectWithoutLeave_typeInput | leave_balanceCreateOrConnectWithoutLeave_typeInput[]
    upsert?: leave_balanceUpsertWithWhereUniqueWithoutLeave_typeInput | leave_balanceUpsertWithWhereUniqueWithoutLeave_typeInput[]
    createMany?: leave_balanceCreateManyLeave_typeInputEnvelope
    set?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    disconnect?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    delete?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    connect?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    update?: leave_balanceUpdateWithWhereUniqueWithoutLeave_typeInput | leave_balanceUpdateWithWhereUniqueWithoutLeave_typeInput[]
    updateMany?: leave_balanceUpdateManyWithWhereWithoutLeave_typeInput | leave_balanceUpdateManyWithWhereWithoutLeave_typeInput[]
    deleteMany?: leave_balanceScalarWhereInput | leave_balanceScalarWhereInput[]
  }

  export type leave_requestUncheckedUpdateManyWithoutLeave_typeNestedInput = {
    create?: XOR<leave_requestCreateWithoutLeave_typeInput, leave_requestUncheckedCreateWithoutLeave_typeInput> | leave_requestCreateWithoutLeave_typeInput[] | leave_requestUncheckedCreateWithoutLeave_typeInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutLeave_typeInput | leave_requestCreateOrConnectWithoutLeave_typeInput[]
    upsert?: leave_requestUpsertWithWhereUniqueWithoutLeave_typeInput | leave_requestUpsertWithWhereUniqueWithoutLeave_typeInput[]
    createMany?: leave_requestCreateManyLeave_typeInputEnvelope
    set?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    disconnect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    delete?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    update?: leave_requestUpdateWithWhereUniqueWithoutLeave_typeInput | leave_requestUpdateWithWhereUniqueWithoutLeave_typeInput[]
    updateMany?: leave_requestUpdateManyWithWhereWithoutLeave_typeInput | leave_requestUpdateManyWithWhereWithoutLeave_typeInput[]
    deleteMany?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
  }

  export type leave_policyUncheckedUpdateManyWithoutLeave_typeNestedInput = {
    create?: XOR<leave_policyCreateWithoutLeave_typeInput, leave_policyUncheckedCreateWithoutLeave_typeInput> | leave_policyCreateWithoutLeave_typeInput[] | leave_policyUncheckedCreateWithoutLeave_typeInput[]
    connectOrCreate?: leave_policyCreateOrConnectWithoutLeave_typeInput | leave_policyCreateOrConnectWithoutLeave_typeInput[]
    upsert?: leave_policyUpsertWithWhereUniqueWithoutLeave_typeInput | leave_policyUpsertWithWhereUniqueWithoutLeave_typeInput[]
    createMany?: leave_policyCreateManyLeave_typeInputEnvelope
    set?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    disconnect?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    delete?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    connect?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    update?: leave_policyUpdateWithWhereUniqueWithoutLeave_typeInput | leave_policyUpdateWithWhereUniqueWithoutLeave_typeInput[]
    updateMany?: leave_policyUpdateManyWithWhereWithoutLeave_typeInput | leave_policyUpdateManyWithWhereWithoutLeave_typeInput[]
    deleteMany?: leave_policyScalarWhereInput | leave_policyScalarWhereInput[]
  }

  export type leave_balanceUncheckedUpdateManyWithoutLeave_typeNestedInput = {
    create?: XOR<leave_balanceCreateWithoutLeave_typeInput, leave_balanceUncheckedCreateWithoutLeave_typeInput> | leave_balanceCreateWithoutLeave_typeInput[] | leave_balanceUncheckedCreateWithoutLeave_typeInput[]
    connectOrCreate?: leave_balanceCreateOrConnectWithoutLeave_typeInput | leave_balanceCreateOrConnectWithoutLeave_typeInput[]
    upsert?: leave_balanceUpsertWithWhereUniqueWithoutLeave_typeInput | leave_balanceUpsertWithWhereUniqueWithoutLeave_typeInput[]
    createMany?: leave_balanceCreateManyLeave_typeInputEnvelope
    set?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    disconnect?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    delete?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    connect?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    update?: leave_balanceUpdateWithWhereUniqueWithoutLeave_typeInput | leave_balanceUpdateWithWhereUniqueWithoutLeave_typeInput[]
    updateMany?: leave_balanceUpdateManyWithWhereWithoutLeave_typeInput | leave_balanceUpdateManyWithWhereWithoutLeave_typeInput[]
    deleteMany?: leave_balanceScalarWhereInput | leave_balanceScalarWhereInput[]
  }

  export type leave_requestCreateNestedManyWithoutStatusInput = {
    create?: XOR<leave_requestCreateWithoutStatusInput, leave_requestUncheckedCreateWithoutStatusInput> | leave_requestCreateWithoutStatusInput[] | leave_requestUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutStatusInput | leave_requestCreateOrConnectWithoutStatusInput[]
    createMany?: leave_requestCreateManyStatusInputEnvelope
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
  }

  export type leave_request_historyCreateNestedManyWithoutStatusInput = {
    create?: XOR<leave_request_historyCreateWithoutStatusInput, leave_request_historyUncheckedCreateWithoutStatusInput> | leave_request_historyCreateWithoutStatusInput[] | leave_request_historyUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: leave_request_historyCreateOrConnectWithoutStatusInput | leave_request_historyCreateOrConnectWithoutStatusInput[]
    createMany?: leave_request_historyCreateManyStatusInputEnvelope
    connect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
  }

  export type leave_requestUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<leave_requestCreateWithoutStatusInput, leave_requestUncheckedCreateWithoutStatusInput> | leave_requestCreateWithoutStatusInput[] | leave_requestUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutStatusInput | leave_requestCreateOrConnectWithoutStatusInput[]
    createMany?: leave_requestCreateManyStatusInputEnvelope
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
  }

  export type leave_request_historyUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<leave_request_historyCreateWithoutStatusInput, leave_request_historyUncheckedCreateWithoutStatusInput> | leave_request_historyCreateWithoutStatusInput[] | leave_request_historyUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: leave_request_historyCreateOrConnectWithoutStatusInput | leave_request_historyCreateOrConnectWithoutStatusInput[]
    createMany?: leave_request_historyCreateManyStatusInputEnvelope
    connect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
  }

  export type EnumLEAVE_APPROVALFieldUpdateOperationsInput = {
    set?: $Enums.LEAVE_APPROVAL
  }

  export type leave_requestUpdateManyWithoutStatusNestedInput = {
    create?: XOR<leave_requestCreateWithoutStatusInput, leave_requestUncheckedCreateWithoutStatusInput> | leave_requestCreateWithoutStatusInput[] | leave_requestUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutStatusInput | leave_requestCreateOrConnectWithoutStatusInput[]
    upsert?: leave_requestUpsertWithWhereUniqueWithoutStatusInput | leave_requestUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: leave_requestCreateManyStatusInputEnvelope
    set?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    disconnect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    delete?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    update?: leave_requestUpdateWithWhereUniqueWithoutStatusInput | leave_requestUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: leave_requestUpdateManyWithWhereWithoutStatusInput | leave_requestUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
  }

  export type leave_request_historyUpdateManyWithoutStatusNestedInput = {
    create?: XOR<leave_request_historyCreateWithoutStatusInput, leave_request_historyUncheckedCreateWithoutStatusInput> | leave_request_historyCreateWithoutStatusInput[] | leave_request_historyUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: leave_request_historyCreateOrConnectWithoutStatusInput | leave_request_historyCreateOrConnectWithoutStatusInput[]
    upsert?: leave_request_historyUpsertWithWhereUniqueWithoutStatusInput | leave_request_historyUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: leave_request_historyCreateManyStatusInputEnvelope
    set?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    disconnect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    delete?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    connect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    update?: leave_request_historyUpdateWithWhereUniqueWithoutStatusInput | leave_request_historyUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: leave_request_historyUpdateManyWithWhereWithoutStatusInput | leave_request_historyUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: leave_request_historyScalarWhereInput | leave_request_historyScalarWhereInput[]
  }

  export type leave_requestUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<leave_requestCreateWithoutStatusInput, leave_requestUncheckedCreateWithoutStatusInput> | leave_requestCreateWithoutStatusInput[] | leave_requestUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutStatusInput | leave_requestCreateOrConnectWithoutStatusInput[]
    upsert?: leave_requestUpsertWithWhereUniqueWithoutStatusInput | leave_requestUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: leave_requestCreateManyStatusInputEnvelope
    set?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    disconnect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    delete?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    update?: leave_requestUpdateWithWhereUniqueWithoutStatusInput | leave_requestUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: leave_requestUpdateManyWithWhereWithoutStatusInput | leave_requestUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
  }

  export type leave_request_historyUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<leave_request_historyCreateWithoutStatusInput, leave_request_historyUncheckedCreateWithoutStatusInput> | leave_request_historyCreateWithoutStatusInput[] | leave_request_historyUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: leave_request_historyCreateOrConnectWithoutStatusInput | leave_request_historyCreateOrConnectWithoutStatusInput[]
    upsert?: leave_request_historyUpsertWithWhereUniqueWithoutStatusInput | leave_request_historyUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: leave_request_historyCreateManyStatusInputEnvelope
    set?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    disconnect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    delete?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    connect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    update?: leave_request_historyUpdateWithWhereUniqueWithoutStatusInput | leave_request_historyUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: leave_request_historyUpdateManyWithWhereWithoutStatusInput | leave_request_historyUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: leave_request_historyScalarWhereInput | leave_request_historyScalarWhereInput[]
  }

  export type userCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<userCreateWithoutDepartmentInput, userUncheckedCreateWithoutDepartmentInput> | userCreateWithoutDepartmentInput[] | userUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: userCreateOrConnectWithoutDepartmentInput | userCreateOrConnectWithoutDepartmentInput[]
    createMany?: userCreateManyDepartmentInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type leave_policyCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<leave_policyCreateWithoutDepartmentInput, leave_policyUncheckedCreateWithoutDepartmentInput> | leave_policyCreateWithoutDepartmentInput[] | leave_policyUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: leave_policyCreateOrConnectWithoutDepartmentInput | leave_policyCreateOrConnectWithoutDepartmentInput[]
    createMany?: leave_policyCreateManyDepartmentInputEnvelope
    connect?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
  }

  export type holidayCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<holidayCreateWithoutDepartmentInput, holidayUncheckedCreateWithoutDepartmentInput> | holidayCreateWithoutDepartmentInput[] | holidayUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: holidayCreateOrConnectWithoutDepartmentInput | holidayCreateOrConnectWithoutDepartmentInput[]
    createMany?: holidayCreateManyDepartmentInputEnvelope
    connect?: holidayWhereUniqueInput | holidayWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<userCreateWithoutDepartmentInput, userUncheckedCreateWithoutDepartmentInput> | userCreateWithoutDepartmentInput[] | userUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: userCreateOrConnectWithoutDepartmentInput | userCreateOrConnectWithoutDepartmentInput[]
    createMany?: userCreateManyDepartmentInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type leave_policyUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<leave_policyCreateWithoutDepartmentInput, leave_policyUncheckedCreateWithoutDepartmentInput> | leave_policyCreateWithoutDepartmentInput[] | leave_policyUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: leave_policyCreateOrConnectWithoutDepartmentInput | leave_policyCreateOrConnectWithoutDepartmentInput[]
    createMany?: leave_policyCreateManyDepartmentInputEnvelope
    connect?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
  }

  export type holidayUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<holidayCreateWithoutDepartmentInput, holidayUncheckedCreateWithoutDepartmentInput> | holidayCreateWithoutDepartmentInput[] | holidayUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: holidayCreateOrConnectWithoutDepartmentInput | holidayCreateOrConnectWithoutDepartmentInput[]
    createMany?: holidayCreateManyDepartmentInputEnvelope
    connect?: holidayWhereUniqueInput | holidayWhereUniqueInput[]
  }

  export type userUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<userCreateWithoutDepartmentInput, userUncheckedCreateWithoutDepartmentInput> | userCreateWithoutDepartmentInput[] | userUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: userCreateOrConnectWithoutDepartmentInput | userCreateOrConnectWithoutDepartmentInput[]
    upsert?: userUpsertWithWhereUniqueWithoutDepartmentInput | userUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: userCreateManyDepartmentInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutDepartmentInput | userUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: userUpdateManyWithWhereWithoutDepartmentInput | userUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type leave_policyUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<leave_policyCreateWithoutDepartmentInput, leave_policyUncheckedCreateWithoutDepartmentInput> | leave_policyCreateWithoutDepartmentInput[] | leave_policyUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: leave_policyCreateOrConnectWithoutDepartmentInput | leave_policyCreateOrConnectWithoutDepartmentInput[]
    upsert?: leave_policyUpsertWithWhereUniqueWithoutDepartmentInput | leave_policyUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: leave_policyCreateManyDepartmentInputEnvelope
    set?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    disconnect?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    delete?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    connect?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    update?: leave_policyUpdateWithWhereUniqueWithoutDepartmentInput | leave_policyUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: leave_policyUpdateManyWithWhereWithoutDepartmentInput | leave_policyUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: leave_policyScalarWhereInput | leave_policyScalarWhereInput[]
  }

  export type holidayUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<holidayCreateWithoutDepartmentInput, holidayUncheckedCreateWithoutDepartmentInput> | holidayCreateWithoutDepartmentInput[] | holidayUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: holidayCreateOrConnectWithoutDepartmentInput | holidayCreateOrConnectWithoutDepartmentInput[]
    upsert?: holidayUpsertWithWhereUniqueWithoutDepartmentInput | holidayUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: holidayCreateManyDepartmentInputEnvelope
    set?: holidayWhereUniqueInput | holidayWhereUniqueInput[]
    disconnect?: holidayWhereUniqueInput | holidayWhereUniqueInput[]
    delete?: holidayWhereUniqueInput | holidayWhereUniqueInput[]
    connect?: holidayWhereUniqueInput | holidayWhereUniqueInput[]
    update?: holidayUpdateWithWhereUniqueWithoutDepartmentInput | holidayUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: holidayUpdateManyWithWhereWithoutDepartmentInput | holidayUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: holidayScalarWhereInput | holidayScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<userCreateWithoutDepartmentInput, userUncheckedCreateWithoutDepartmentInput> | userCreateWithoutDepartmentInput[] | userUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: userCreateOrConnectWithoutDepartmentInput | userCreateOrConnectWithoutDepartmentInput[]
    upsert?: userUpsertWithWhereUniqueWithoutDepartmentInput | userUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: userCreateManyDepartmentInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutDepartmentInput | userUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: userUpdateManyWithWhereWithoutDepartmentInput | userUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type leave_policyUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<leave_policyCreateWithoutDepartmentInput, leave_policyUncheckedCreateWithoutDepartmentInput> | leave_policyCreateWithoutDepartmentInput[] | leave_policyUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: leave_policyCreateOrConnectWithoutDepartmentInput | leave_policyCreateOrConnectWithoutDepartmentInput[]
    upsert?: leave_policyUpsertWithWhereUniqueWithoutDepartmentInput | leave_policyUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: leave_policyCreateManyDepartmentInputEnvelope
    set?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    disconnect?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    delete?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    connect?: leave_policyWhereUniqueInput | leave_policyWhereUniqueInput[]
    update?: leave_policyUpdateWithWhereUniqueWithoutDepartmentInput | leave_policyUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: leave_policyUpdateManyWithWhereWithoutDepartmentInput | leave_policyUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: leave_policyScalarWhereInput | leave_policyScalarWhereInput[]
  }

  export type holidayUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<holidayCreateWithoutDepartmentInput, holidayUncheckedCreateWithoutDepartmentInput> | holidayCreateWithoutDepartmentInput[] | holidayUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: holidayCreateOrConnectWithoutDepartmentInput | holidayCreateOrConnectWithoutDepartmentInput[]
    upsert?: holidayUpsertWithWhereUniqueWithoutDepartmentInput | holidayUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: holidayCreateManyDepartmentInputEnvelope
    set?: holidayWhereUniqueInput | holidayWhereUniqueInput[]
    disconnect?: holidayWhereUniqueInput | holidayWhereUniqueInput[]
    delete?: holidayWhereUniqueInput | holidayWhereUniqueInput[]
    connect?: holidayWhereUniqueInput | holidayWhereUniqueInput[]
    update?: holidayUpdateWithWhereUniqueWithoutDepartmentInput | holidayUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: holidayUpdateManyWithWhereWithoutDepartmentInput | holidayUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: holidayScalarWhereInput | holidayScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutLeave_requestsInput = {
    create?: XOR<userCreateWithoutLeave_requestsInput, userUncheckedCreateWithoutLeave_requestsInput>
    connectOrCreate?: userCreateOrConnectWithoutLeave_requestsInput
    connect?: userWhereUniqueInput
  }

  export type leave_typesCreateNestedOneWithoutLeave_requestsInput = {
    create?: XOR<leave_typesCreateWithoutLeave_requestsInput, leave_typesUncheckedCreateWithoutLeave_requestsInput>
    connectOrCreate?: leave_typesCreateOrConnectWithoutLeave_requestsInput
    connect?: leave_typesWhereUniqueInput
  }

  export type leave_statusCreateNestedOneWithoutLeave_requestsInput = {
    create?: XOR<leave_statusCreateWithoutLeave_requestsInput, leave_statusUncheckedCreateWithoutLeave_requestsInput>
    connectOrCreate?: leave_statusCreateOrConnectWithoutLeave_requestsInput
    connect?: leave_statusWhereUniqueInput
  }

  export type leave_request_historyCreateNestedManyWithoutLeave_requestInput = {
    create?: XOR<leave_request_historyCreateWithoutLeave_requestInput, leave_request_historyUncheckedCreateWithoutLeave_requestInput> | leave_request_historyCreateWithoutLeave_requestInput[] | leave_request_historyUncheckedCreateWithoutLeave_requestInput[]
    connectOrCreate?: leave_request_historyCreateOrConnectWithoutLeave_requestInput | leave_request_historyCreateOrConnectWithoutLeave_requestInput[]
    createMany?: leave_request_historyCreateManyLeave_requestInputEnvelope
    connect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
  }

  export type leave_request_historyUncheckedCreateNestedManyWithoutLeave_requestInput = {
    create?: XOR<leave_request_historyCreateWithoutLeave_requestInput, leave_request_historyUncheckedCreateWithoutLeave_requestInput> | leave_request_historyCreateWithoutLeave_requestInput[] | leave_request_historyUncheckedCreateWithoutLeave_requestInput[]
    connectOrCreate?: leave_request_historyCreateOrConnectWithoutLeave_requestInput | leave_request_historyCreateOrConnectWithoutLeave_requestInput[]
    createMany?: leave_request_historyCreateManyLeave_requestInputEnvelope
    connect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutLeave_requestsNestedInput = {
    create?: XOR<userCreateWithoutLeave_requestsInput, userUncheckedCreateWithoutLeave_requestsInput>
    connectOrCreate?: userCreateOrConnectWithoutLeave_requestsInput
    upsert?: userUpsertWithoutLeave_requestsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLeave_requestsInput, userUpdateWithoutLeave_requestsInput>, userUncheckedUpdateWithoutLeave_requestsInput>
  }

  export type leave_typesUpdateOneRequiredWithoutLeave_requestsNestedInput = {
    create?: XOR<leave_typesCreateWithoutLeave_requestsInput, leave_typesUncheckedCreateWithoutLeave_requestsInput>
    connectOrCreate?: leave_typesCreateOrConnectWithoutLeave_requestsInput
    upsert?: leave_typesUpsertWithoutLeave_requestsInput
    connect?: leave_typesWhereUniqueInput
    update?: XOR<XOR<leave_typesUpdateToOneWithWhereWithoutLeave_requestsInput, leave_typesUpdateWithoutLeave_requestsInput>, leave_typesUncheckedUpdateWithoutLeave_requestsInput>
  }

  export type leave_statusUpdateOneRequiredWithoutLeave_requestsNestedInput = {
    create?: XOR<leave_statusCreateWithoutLeave_requestsInput, leave_statusUncheckedCreateWithoutLeave_requestsInput>
    connectOrCreate?: leave_statusCreateOrConnectWithoutLeave_requestsInput
    upsert?: leave_statusUpsertWithoutLeave_requestsInput
    connect?: leave_statusWhereUniqueInput
    update?: XOR<XOR<leave_statusUpdateToOneWithWhereWithoutLeave_requestsInput, leave_statusUpdateWithoutLeave_requestsInput>, leave_statusUncheckedUpdateWithoutLeave_requestsInput>
  }

  export type leave_request_historyUpdateManyWithoutLeave_requestNestedInput = {
    create?: XOR<leave_request_historyCreateWithoutLeave_requestInput, leave_request_historyUncheckedCreateWithoutLeave_requestInput> | leave_request_historyCreateWithoutLeave_requestInput[] | leave_request_historyUncheckedCreateWithoutLeave_requestInput[]
    connectOrCreate?: leave_request_historyCreateOrConnectWithoutLeave_requestInput | leave_request_historyCreateOrConnectWithoutLeave_requestInput[]
    upsert?: leave_request_historyUpsertWithWhereUniqueWithoutLeave_requestInput | leave_request_historyUpsertWithWhereUniqueWithoutLeave_requestInput[]
    createMany?: leave_request_historyCreateManyLeave_requestInputEnvelope
    set?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    disconnect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    delete?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    connect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    update?: leave_request_historyUpdateWithWhereUniqueWithoutLeave_requestInput | leave_request_historyUpdateWithWhereUniqueWithoutLeave_requestInput[]
    updateMany?: leave_request_historyUpdateManyWithWhereWithoutLeave_requestInput | leave_request_historyUpdateManyWithWhereWithoutLeave_requestInput[]
    deleteMany?: leave_request_historyScalarWhereInput | leave_request_historyScalarWhereInput[]
  }

  export type leave_request_historyUncheckedUpdateManyWithoutLeave_requestNestedInput = {
    create?: XOR<leave_request_historyCreateWithoutLeave_requestInput, leave_request_historyUncheckedCreateWithoutLeave_requestInput> | leave_request_historyCreateWithoutLeave_requestInput[] | leave_request_historyUncheckedCreateWithoutLeave_requestInput[]
    connectOrCreate?: leave_request_historyCreateOrConnectWithoutLeave_requestInput | leave_request_historyCreateOrConnectWithoutLeave_requestInput[]
    upsert?: leave_request_historyUpsertWithWhereUniqueWithoutLeave_requestInput | leave_request_historyUpsertWithWhereUniqueWithoutLeave_requestInput[]
    createMany?: leave_request_historyCreateManyLeave_requestInputEnvelope
    set?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    disconnect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    delete?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    connect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    update?: leave_request_historyUpdateWithWhereUniqueWithoutLeave_requestInput | leave_request_historyUpdateWithWhereUniqueWithoutLeave_requestInput[]
    updateMany?: leave_request_historyUpdateManyWithWhereWithoutLeave_requestInput | leave_request_historyUpdateManyWithWhereWithoutLeave_requestInput[]
    deleteMany?: leave_request_historyScalarWhereInput | leave_request_historyScalarWhereInput[]
  }

  export type leave_requestCreateNestedOneWithoutLeave_request_historiesInput = {
    create?: XOR<leave_requestCreateWithoutLeave_request_historiesInput, leave_requestUncheckedCreateWithoutLeave_request_historiesInput>
    connectOrCreate?: leave_requestCreateOrConnectWithoutLeave_request_historiesInput
    connect?: leave_requestWhereUniqueInput
  }

  export type leave_statusCreateNestedOneWithoutLeave_request_historiesInput = {
    create?: XOR<leave_statusCreateWithoutLeave_request_historiesInput, leave_statusUncheckedCreateWithoutLeave_request_historiesInput>
    connectOrCreate?: leave_statusCreateOrConnectWithoutLeave_request_historiesInput
    connect?: leave_statusWhereUniqueInput
  }

  export type userCreateNestedOneWithoutLeave_request_historiesInput = {
    create?: XOR<userCreateWithoutLeave_request_historiesInput, userUncheckedCreateWithoutLeave_request_historiesInput>
    connectOrCreate?: userCreateOrConnectWithoutLeave_request_historiesInput
    connect?: userWhereUniqueInput
  }

  export type leave_requestUpdateOneRequiredWithoutLeave_request_historiesNestedInput = {
    create?: XOR<leave_requestCreateWithoutLeave_request_historiesInput, leave_requestUncheckedCreateWithoutLeave_request_historiesInput>
    connectOrCreate?: leave_requestCreateOrConnectWithoutLeave_request_historiesInput
    upsert?: leave_requestUpsertWithoutLeave_request_historiesInput
    connect?: leave_requestWhereUniqueInput
    update?: XOR<XOR<leave_requestUpdateToOneWithWhereWithoutLeave_request_historiesInput, leave_requestUpdateWithoutLeave_request_historiesInput>, leave_requestUncheckedUpdateWithoutLeave_request_historiesInput>
  }

  export type leave_statusUpdateOneRequiredWithoutLeave_request_historiesNestedInput = {
    create?: XOR<leave_statusCreateWithoutLeave_request_historiesInput, leave_statusUncheckedCreateWithoutLeave_request_historiesInput>
    connectOrCreate?: leave_statusCreateOrConnectWithoutLeave_request_historiesInput
    upsert?: leave_statusUpsertWithoutLeave_request_historiesInput
    connect?: leave_statusWhereUniqueInput
    update?: XOR<XOR<leave_statusUpdateToOneWithWhereWithoutLeave_request_historiesInput, leave_statusUpdateWithoutLeave_request_historiesInput>, leave_statusUncheckedUpdateWithoutLeave_request_historiesInput>
  }

  export type userUpdateOneRequiredWithoutLeave_request_historiesNestedInput = {
    create?: XOR<userCreateWithoutLeave_request_historiesInput, userUncheckedCreateWithoutLeave_request_historiesInput>
    connectOrCreate?: userCreateOrConnectWithoutLeave_request_historiesInput
    upsert?: userUpsertWithoutLeave_request_historiesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLeave_request_historiesInput, userUpdateWithoutLeave_request_historiesInput>, userUncheckedUpdateWithoutLeave_request_historiesInput>
  }

  export type userCreateNestedOneWithoutLeave_balancesInput = {
    create?: XOR<userCreateWithoutLeave_balancesInput, userUncheckedCreateWithoutLeave_balancesInput>
    connectOrCreate?: userCreateOrConnectWithoutLeave_balancesInput
    connect?: userWhereUniqueInput
  }

  export type leave_typesCreateNestedOneWithoutLeave_balancesInput = {
    create?: XOR<leave_typesCreateWithoutLeave_balancesInput, leave_typesUncheckedCreateWithoutLeave_balancesInput>
    connectOrCreate?: leave_typesCreateOrConnectWithoutLeave_balancesInput
    connect?: leave_typesWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutLeave_balancesNestedInput = {
    create?: XOR<userCreateWithoutLeave_balancesInput, userUncheckedCreateWithoutLeave_balancesInput>
    connectOrCreate?: userCreateOrConnectWithoutLeave_balancesInput
    upsert?: userUpsertWithoutLeave_balancesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutLeave_balancesInput, userUpdateWithoutLeave_balancesInput>, userUncheckedUpdateWithoutLeave_balancesInput>
  }

  export type leave_typesUpdateOneRequiredWithoutLeave_balancesNestedInput = {
    create?: XOR<leave_typesCreateWithoutLeave_balancesInput, leave_typesUncheckedCreateWithoutLeave_balancesInput>
    connectOrCreate?: leave_typesCreateOrConnectWithoutLeave_balancesInput
    upsert?: leave_typesUpsertWithoutLeave_balancesInput
    connect?: leave_typesWhereUniqueInput
    update?: XOR<XOR<leave_typesUpdateToOneWithWhereWithoutLeave_balancesInput, leave_typesUpdateWithoutLeave_balancesInput>, leave_typesUncheckedUpdateWithoutLeave_balancesInput>
  }

  export type leave_typesCreateNestedOneWithoutLeave_policiesInput = {
    create?: XOR<leave_typesCreateWithoutLeave_policiesInput, leave_typesUncheckedCreateWithoutLeave_policiesInput>
    connectOrCreate?: leave_typesCreateOrConnectWithoutLeave_policiesInput
    connect?: leave_typesWhereUniqueInput
  }

  export type departmentsCreateNestedOneWithoutLeave_policyInput = {
    create?: XOR<departmentsCreateWithoutLeave_policyInput, departmentsUncheckedCreateWithoutLeave_policyInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutLeave_policyInput
    connect?: departmentsWhereUniqueInput
  }

  export type leave_typesUpdateOneRequiredWithoutLeave_policiesNestedInput = {
    create?: XOR<leave_typesCreateWithoutLeave_policiesInput, leave_typesUncheckedCreateWithoutLeave_policiesInput>
    connectOrCreate?: leave_typesCreateOrConnectWithoutLeave_policiesInput
    upsert?: leave_typesUpsertWithoutLeave_policiesInput
    connect?: leave_typesWhereUniqueInput
    update?: XOR<XOR<leave_typesUpdateToOneWithWhereWithoutLeave_policiesInput, leave_typesUpdateWithoutLeave_policiesInput>, leave_typesUncheckedUpdateWithoutLeave_policiesInput>
  }

  export type departmentsUpdateOneWithoutLeave_policyNestedInput = {
    create?: XOR<departmentsCreateWithoutLeave_policyInput, departmentsUncheckedCreateWithoutLeave_policyInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutLeave_policyInput
    upsert?: departmentsUpsertWithoutLeave_policyInput
    disconnect?: departmentsWhereInput | boolean
    delete?: departmentsWhereInput | boolean
    connect?: departmentsWhereUniqueInput
    update?: XOR<XOR<departmentsUpdateToOneWithWhereWithoutLeave_policyInput, departmentsUpdateWithoutLeave_policyInput>, departmentsUncheckedUpdateWithoutLeave_policyInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type departmentsCreateNestedOneWithoutHolidayInput = {
    create?: XOR<departmentsCreateWithoutHolidayInput, departmentsUncheckedCreateWithoutHolidayInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutHolidayInput
    connect?: departmentsWhereUniqueInput
  }

  export type departmentsUpdateOneWithoutHolidayNestedInput = {
    create?: XOR<departmentsCreateWithoutHolidayInput, departmentsUncheckedCreateWithoutHolidayInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutHolidayInput
    upsert?: departmentsUpsertWithoutHolidayInput
    disconnect?: departmentsWhereInput | boolean
    delete?: departmentsWhereInput | boolean
    connect?: departmentsWhereUniqueInput
    update?: XOR<XOR<departmentsUpdateToOneWithWhereWithoutHolidayInput, departmentsUpdateWithoutHolidayInput>, departmentsUncheckedUpdateWithoutHolidayInput>
  }

  export type rolesCreateNestedOneWithoutUsersInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    connect?: rolesWhereUniqueInput
  }

  export type departmentsCreateNestedOneWithoutUsersInput = {
    create?: XOR<departmentsCreateWithoutUsersInput, departmentsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutUsersInput
    connect?: departmentsWhereUniqueInput
  }

  export type userCreateNestedOneWithoutSubordinatesInput = {
    create?: XOR<userCreateWithoutSubordinatesInput, userUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: userCreateOrConnectWithoutSubordinatesInput
    connect?: userWhereUniqueInput
  }

  export type userCreateNestedManyWithoutManagerInput = {
    create?: XOR<userCreateWithoutManagerInput, userUncheckedCreateWithoutManagerInput> | userCreateWithoutManagerInput[] | userUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: userCreateOrConnectWithoutManagerInput | userCreateOrConnectWithoutManagerInput[]
    createMany?: userCreateManyManagerInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type leave_requestCreateNestedManyWithoutUserInput = {
    create?: XOR<leave_requestCreateWithoutUserInput, leave_requestUncheckedCreateWithoutUserInput> | leave_requestCreateWithoutUserInput[] | leave_requestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutUserInput | leave_requestCreateOrConnectWithoutUserInput[]
    createMany?: leave_requestCreateManyUserInputEnvelope
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
  }

  export type leave_balanceCreateNestedManyWithoutUserInput = {
    create?: XOR<leave_balanceCreateWithoutUserInput, leave_balanceUncheckedCreateWithoutUserInput> | leave_balanceCreateWithoutUserInput[] | leave_balanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: leave_balanceCreateOrConnectWithoutUserInput | leave_balanceCreateOrConnectWithoutUserInput[]
    createMany?: leave_balanceCreateManyUserInputEnvelope
    connect?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
  }

  export type leave_request_historyCreateNestedManyWithoutUserInput = {
    create?: XOR<leave_request_historyCreateWithoutUserInput, leave_request_historyUncheckedCreateWithoutUserInput> | leave_request_historyCreateWithoutUserInput[] | leave_request_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: leave_request_historyCreateOrConnectWithoutUserInput | leave_request_historyCreateOrConnectWithoutUserInput[]
    createMany?: leave_request_historyCreateManyUserInputEnvelope
    connect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
  }

  export type userUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<userCreateWithoutManagerInput, userUncheckedCreateWithoutManagerInput> | userCreateWithoutManagerInput[] | userUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: userCreateOrConnectWithoutManagerInput | userCreateOrConnectWithoutManagerInput[]
    createMany?: userCreateManyManagerInputEnvelope
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
  }

  export type leave_requestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<leave_requestCreateWithoutUserInput, leave_requestUncheckedCreateWithoutUserInput> | leave_requestCreateWithoutUserInput[] | leave_requestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutUserInput | leave_requestCreateOrConnectWithoutUserInput[]
    createMany?: leave_requestCreateManyUserInputEnvelope
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
  }

  export type leave_balanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<leave_balanceCreateWithoutUserInput, leave_balanceUncheckedCreateWithoutUserInput> | leave_balanceCreateWithoutUserInput[] | leave_balanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: leave_balanceCreateOrConnectWithoutUserInput | leave_balanceCreateOrConnectWithoutUserInput[]
    createMany?: leave_balanceCreateManyUserInputEnvelope
    connect?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
  }

  export type leave_request_historyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<leave_request_historyCreateWithoutUserInput, leave_request_historyUncheckedCreateWithoutUserInput> | leave_request_historyCreateWithoutUserInput[] | leave_request_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: leave_request_historyCreateOrConnectWithoutUserInput | leave_request_historyCreateOrConnectWithoutUserInput[]
    createMany?: leave_request_historyCreateManyUserInputEnvelope
    connect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
  }

  export type rolesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: rolesCreateOrConnectWithoutUsersInput
    upsert?: rolesUpsertWithoutUsersInput
    connect?: rolesWhereUniqueInput
    update?: XOR<XOR<rolesUpdateToOneWithWhereWithoutUsersInput, rolesUpdateWithoutUsersInput>, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type departmentsUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<departmentsCreateWithoutUsersInput, departmentsUncheckedCreateWithoutUsersInput>
    connectOrCreate?: departmentsCreateOrConnectWithoutUsersInput
    upsert?: departmentsUpsertWithoutUsersInput
    connect?: departmentsWhereUniqueInput
    update?: XOR<XOR<departmentsUpdateToOneWithWhereWithoutUsersInput, departmentsUpdateWithoutUsersInput>, departmentsUncheckedUpdateWithoutUsersInput>
  }

  export type userUpdateOneWithoutSubordinatesNestedInput = {
    create?: XOR<userCreateWithoutSubordinatesInput, userUncheckedCreateWithoutSubordinatesInput>
    connectOrCreate?: userCreateOrConnectWithoutSubordinatesInput
    upsert?: userUpsertWithoutSubordinatesInput
    disconnect?: userWhereInput | boolean
    delete?: userWhereInput | boolean
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSubordinatesInput, userUpdateWithoutSubordinatesInput>, userUncheckedUpdateWithoutSubordinatesInput>
  }

  export type userUpdateManyWithoutManagerNestedInput = {
    create?: XOR<userCreateWithoutManagerInput, userUncheckedCreateWithoutManagerInput> | userCreateWithoutManagerInput[] | userUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: userCreateOrConnectWithoutManagerInput | userCreateOrConnectWithoutManagerInput[]
    upsert?: userUpsertWithWhereUniqueWithoutManagerInput | userUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: userCreateManyManagerInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutManagerInput | userUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: userUpdateManyWithWhereWithoutManagerInput | userUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type leave_requestUpdateManyWithoutUserNestedInput = {
    create?: XOR<leave_requestCreateWithoutUserInput, leave_requestUncheckedCreateWithoutUserInput> | leave_requestCreateWithoutUserInput[] | leave_requestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutUserInput | leave_requestCreateOrConnectWithoutUserInput[]
    upsert?: leave_requestUpsertWithWhereUniqueWithoutUserInput | leave_requestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: leave_requestCreateManyUserInputEnvelope
    set?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    disconnect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    delete?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    update?: leave_requestUpdateWithWhereUniqueWithoutUserInput | leave_requestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: leave_requestUpdateManyWithWhereWithoutUserInput | leave_requestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
  }

  export type leave_balanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<leave_balanceCreateWithoutUserInput, leave_balanceUncheckedCreateWithoutUserInput> | leave_balanceCreateWithoutUserInput[] | leave_balanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: leave_balanceCreateOrConnectWithoutUserInput | leave_balanceCreateOrConnectWithoutUserInput[]
    upsert?: leave_balanceUpsertWithWhereUniqueWithoutUserInput | leave_balanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: leave_balanceCreateManyUserInputEnvelope
    set?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    disconnect?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    delete?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    connect?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    update?: leave_balanceUpdateWithWhereUniqueWithoutUserInput | leave_balanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: leave_balanceUpdateManyWithWhereWithoutUserInput | leave_balanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: leave_balanceScalarWhereInput | leave_balanceScalarWhereInput[]
  }

  export type leave_request_historyUpdateManyWithoutUserNestedInput = {
    create?: XOR<leave_request_historyCreateWithoutUserInput, leave_request_historyUncheckedCreateWithoutUserInput> | leave_request_historyCreateWithoutUserInput[] | leave_request_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: leave_request_historyCreateOrConnectWithoutUserInput | leave_request_historyCreateOrConnectWithoutUserInput[]
    upsert?: leave_request_historyUpsertWithWhereUniqueWithoutUserInput | leave_request_historyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: leave_request_historyCreateManyUserInputEnvelope
    set?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    disconnect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    delete?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    connect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    update?: leave_request_historyUpdateWithWhereUniqueWithoutUserInput | leave_request_historyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: leave_request_historyUpdateManyWithWhereWithoutUserInput | leave_request_historyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: leave_request_historyScalarWhereInput | leave_request_historyScalarWhereInput[]
  }

  export type userUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<userCreateWithoutManagerInput, userUncheckedCreateWithoutManagerInput> | userCreateWithoutManagerInput[] | userUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: userCreateOrConnectWithoutManagerInput | userCreateOrConnectWithoutManagerInput[]
    upsert?: userUpsertWithWhereUniqueWithoutManagerInput | userUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: userCreateManyManagerInputEnvelope
    set?: userWhereUniqueInput | userWhereUniqueInput[]
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[]
    delete?: userWhereUniqueInput | userWhereUniqueInput[]
    connect?: userWhereUniqueInput | userWhereUniqueInput[]
    update?: userUpdateWithWhereUniqueWithoutManagerInput | userUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: userUpdateManyWithWhereWithoutManagerInput | userUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: userScalarWhereInput | userScalarWhereInput[]
  }

  export type leave_requestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<leave_requestCreateWithoutUserInput, leave_requestUncheckedCreateWithoutUserInput> | leave_requestCreateWithoutUserInput[] | leave_requestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: leave_requestCreateOrConnectWithoutUserInput | leave_requestCreateOrConnectWithoutUserInput[]
    upsert?: leave_requestUpsertWithWhereUniqueWithoutUserInput | leave_requestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: leave_requestCreateManyUserInputEnvelope
    set?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    disconnect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    delete?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    connect?: leave_requestWhereUniqueInput | leave_requestWhereUniqueInput[]
    update?: leave_requestUpdateWithWhereUniqueWithoutUserInput | leave_requestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: leave_requestUpdateManyWithWhereWithoutUserInput | leave_requestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
  }

  export type leave_balanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<leave_balanceCreateWithoutUserInput, leave_balanceUncheckedCreateWithoutUserInput> | leave_balanceCreateWithoutUserInput[] | leave_balanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: leave_balanceCreateOrConnectWithoutUserInput | leave_balanceCreateOrConnectWithoutUserInput[]
    upsert?: leave_balanceUpsertWithWhereUniqueWithoutUserInput | leave_balanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: leave_balanceCreateManyUserInputEnvelope
    set?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    disconnect?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    delete?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    connect?: leave_balanceWhereUniqueInput | leave_balanceWhereUniqueInput[]
    update?: leave_balanceUpdateWithWhereUniqueWithoutUserInput | leave_balanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: leave_balanceUpdateManyWithWhereWithoutUserInput | leave_balanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: leave_balanceScalarWhereInput | leave_balanceScalarWhereInput[]
  }

  export type leave_request_historyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<leave_request_historyCreateWithoutUserInput, leave_request_historyUncheckedCreateWithoutUserInput> | leave_request_historyCreateWithoutUserInput[] | leave_request_historyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: leave_request_historyCreateOrConnectWithoutUserInput | leave_request_historyCreateOrConnectWithoutUserInput[]
    upsert?: leave_request_historyUpsertWithWhereUniqueWithoutUserInput | leave_request_historyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: leave_request_historyCreateManyUserInputEnvelope
    set?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    disconnect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    delete?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    connect?: leave_request_historyWhereUniqueInput | leave_request_historyWhereUniqueInput[]
    update?: leave_request_historyUpdateWithWhereUniqueWithoutUserInput | leave_request_historyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: leave_request_historyUpdateManyWithWhereWithoutUserInput | leave_request_historyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: leave_request_historyScalarWhereInput | leave_request_historyScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLEAVE_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAVE_TYPE | EnumLEAVE_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.LEAVE_TYPE[] | ListEnumLEAVE_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAVE_TYPE[] | ListEnumLEAVE_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAVE_TYPEFilter<$PrismaModel> | $Enums.LEAVE_TYPE
  }

  export type NestedEnumLEAVE_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAVE_TYPE | EnumLEAVE_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.LEAVE_TYPE[] | ListEnumLEAVE_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAVE_TYPE[] | ListEnumLEAVE_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAVE_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.LEAVE_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLEAVE_TYPEFilter<$PrismaModel>
    _max?: NestedEnumLEAVE_TYPEFilter<$PrismaModel>
  }

  export type NestedEnumLEAVE_APPROVALFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAVE_APPROVAL | EnumLEAVE_APPROVALFieldRefInput<$PrismaModel>
    in?: $Enums.LEAVE_APPROVAL[] | ListEnumLEAVE_APPROVALFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAVE_APPROVAL[] | ListEnumLEAVE_APPROVALFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAVE_APPROVALFilter<$PrismaModel> | $Enums.LEAVE_APPROVAL
  }

  export type NestedEnumLEAVE_APPROVALWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LEAVE_APPROVAL | EnumLEAVE_APPROVALFieldRefInput<$PrismaModel>
    in?: $Enums.LEAVE_APPROVAL[] | ListEnumLEAVE_APPROVALFieldRefInput<$PrismaModel>
    notIn?: $Enums.LEAVE_APPROVAL[] | ListEnumLEAVE_APPROVALFieldRefInput<$PrismaModel>
    not?: NestedEnumLEAVE_APPROVALWithAggregatesFilter<$PrismaModel> | $Enums.LEAVE_APPROVAL
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLEAVE_APPROVALFilter<$PrismaModel>
    _max?: NestedEnumLEAVE_APPROVALFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type userCreateWithoutRoleInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    department: departmentsCreateNestedOneWithoutUsersInput
    manager?: userCreateNestedOneWithoutSubordinatesInput
    subordinates?: userCreateNestedManyWithoutManagerInput
    leave_requests?: leave_requestCreateNestedManyWithoutUserInput
    leave_balances?: leave_balanceCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRoleInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    department_name: string
    manager_id?: string | null
    subordinates?: userUncheckedCreateNestedManyWithoutManagerInput
    leave_requests?: leave_requestUncheckedCreateNestedManyWithoutUserInput
    leave_balances?: leave_balanceUncheckedCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRoleInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userCreateManyRoleInputEnvelope = {
    data: userCreateManyRoleInput | userCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutRoleInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>
  }

  export type userUpdateWithWhereUniqueWithoutRoleInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>
  }

  export type userUpdateManyWithWhereWithoutRoleInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutRoleInput>
  }

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[]
    OR?: userScalarWhereInput[]
    NOT?: userScalarWhereInput | userScalarWhereInput[]
    id?: StringFilter<"user"> | string
    cus_id?: StringFilter<"user"> | string
    first_name?: StringFilter<"user"> | string
    last_name?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    joined_date?: DateTimeFilter<"user"> | Date | string
    is_Active?: BoolFilter<"user"> | boolean
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    role_id?: IntFilter<"user"> | number
    department_name?: StringFilter<"user"> | string
    manager_id?: StringNullableFilter<"user"> | string | null
  }

  export type leave_requestCreateWithoutLeave_typeInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    user: userCreateNestedOneWithoutLeave_requestsInput
    status: leave_statusCreateNestedOneWithoutLeave_requestsInput
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutLeave_requestInput
  }

  export type leave_requestUncheckedCreateWithoutLeave_typeInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    user_id: string
    status_id: number
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutLeave_requestInput
  }

  export type leave_requestCreateOrConnectWithoutLeave_typeInput = {
    where: leave_requestWhereUniqueInput
    create: XOR<leave_requestCreateWithoutLeave_typeInput, leave_requestUncheckedCreateWithoutLeave_typeInput>
  }

  export type leave_requestCreateManyLeave_typeInputEnvelope = {
    data: leave_requestCreateManyLeave_typeInput | leave_requestCreateManyLeave_typeInput[]
    skipDuplicates?: boolean
  }

  export type leave_policyCreateWithoutLeave_typeInput = {
    id?: string
    max_days_per_year: number
    max_days_per_request: number
    carry_over_limit: number
    carry_over_expiry: number
    is_Active: boolean
    effective_from: Date | string
    effective_to: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    department?: departmentsCreateNestedOneWithoutLeave_policyInput
  }

  export type leave_policyUncheckedCreateWithoutLeave_typeInput = {
    id?: string
    max_days_per_year: number
    max_days_per_request: number
    carry_over_limit: number
    carry_over_expiry: number
    is_Active: boolean
    effective_from: Date | string
    effective_to: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    department_id?: string | null
  }

  export type leave_policyCreateOrConnectWithoutLeave_typeInput = {
    where: leave_policyWhereUniqueInput
    create: XOR<leave_policyCreateWithoutLeave_typeInput, leave_policyUncheckedCreateWithoutLeave_typeInput>
  }

  export type leave_policyCreateManyLeave_typeInputEnvelope = {
    data: leave_policyCreateManyLeave_typeInput | leave_policyCreateManyLeave_typeInput[]
    skipDuplicates?: boolean
  }

  export type leave_balanceCreateWithoutLeave_typeInput = {
    id?: string
    yearly: number
    totalEntitlement: number
    year: number
    used: number
    pending: number
    carried_over: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
    user: userCreateNestedOneWithoutLeave_balancesInput
  }

  export type leave_balanceUncheckedCreateWithoutLeave_typeInput = {
    id?: string
    yearly: number
    totalEntitlement: number
    year: number
    used: number
    pending: number
    carried_over: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
  }

  export type leave_balanceCreateOrConnectWithoutLeave_typeInput = {
    where: leave_balanceWhereUniqueInput
    create: XOR<leave_balanceCreateWithoutLeave_typeInput, leave_balanceUncheckedCreateWithoutLeave_typeInput>
  }

  export type leave_balanceCreateManyLeave_typeInputEnvelope = {
    data: leave_balanceCreateManyLeave_typeInput | leave_balanceCreateManyLeave_typeInput[]
    skipDuplicates?: boolean
  }

  export type leave_requestUpsertWithWhereUniqueWithoutLeave_typeInput = {
    where: leave_requestWhereUniqueInput
    update: XOR<leave_requestUpdateWithoutLeave_typeInput, leave_requestUncheckedUpdateWithoutLeave_typeInput>
    create: XOR<leave_requestCreateWithoutLeave_typeInput, leave_requestUncheckedCreateWithoutLeave_typeInput>
  }

  export type leave_requestUpdateWithWhereUniqueWithoutLeave_typeInput = {
    where: leave_requestWhereUniqueInput
    data: XOR<leave_requestUpdateWithoutLeave_typeInput, leave_requestUncheckedUpdateWithoutLeave_typeInput>
  }

  export type leave_requestUpdateManyWithWhereWithoutLeave_typeInput = {
    where: leave_requestScalarWhereInput
    data: XOR<leave_requestUpdateManyMutationInput, leave_requestUncheckedUpdateManyWithoutLeave_typeInput>
  }

  export type leave_requestScalarWhereInput = {
    AND?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
    OR?: leave_requestScalarWhereInput[]
    NOT?: leave_requestScalarWhereInput | leave_requestScalarWhereInput[]
    id?: StringFilter<"leave_request"> | string
    cus_id?: StringFilter<"leave_request"> | string
    start_date?: DateTimeFilter<"leave_request"> | Date | string
    end_date?: DateTimeFilter<"leave_request"> | Date | string
    no_of_days?: IntFilter<"leave_request"> | number
    reason?: StringFilter<"leave_request"> | string
    applied_date?: DateTimeFilter<"leave_request"> | Date | string
    user_id?: StringFilter<"leave_request"> | string
    leave_type_id?: EnumLEAVE_TYPEFilter<"leave_request"> | $Enums.LEAVE_TYPE
    status_id?: IntFilter<"leave_request"> | number
  }

  export type leave_policyUpsertWithWhereUniqueWithoutLeave_typeInput = {
    where: leave_policyWhereUniqueInput
    update: XOR<leave_policyUpdateWithoutLeave_typeInput, leave_policyUncheckedUpdateWithoutLeave_typeInput>
    create: XOR<leave_policyCreateWithoutLeave_typeInput, leave_policyUncheckedCreateWithoutLeave_typeInput>
  }

  export type leave_policyUpdateWithWhereUniqueWithoutLeave_typeInput = {
    where: leave_policyWhereUniqueInput
    data: XOR<leave_policyUpdateWithoutLeave_typeInput, leave_policyUncheckedUpdateWithoutLeave_typeInput>
  }

  export type leave_policyUpdateManyWithWhereWithoutLeave_typeInput = {
    where: leave_policyScalarWhereInput
    data: XOR<leave_policyUpdateManyMutationInput, leave_policyUncheckedUpdateManyWithoutLeave_typeInput>
  }

  export type leave_policyScalarWhereInput = {
    AND?: leave_policyScalarWhereInput | leave_policyScalarWhereInput[]
    OR?: leave_policyScalarWhereInput[]
    NOT?: leave_policyScalarWhereInput | leave_policyScalarWhereInput[]
    id?: StringFilter<"leave_policy"> | string
    max_days_per_year?: IntFilter<"leave_policy"> | number
    max_days_per_request?: IntFilter<"leave_policy"> | number
    carry_over_limit?: IntFilter<"leave_policy"> | number
    carry_over_expiry?: IntFilter<"leave_policy"> | number
    is_Active?: BoolFilter<"leave_policy"> | boolean
    effective_from?: DateTimeFilter<"leave_policy"> | Date | string
    effective_to?: DateTimeFilter<"leave_policy"> | Date | string
    created_at?: DateTimeFilter<"leave_policy"> | Date | string
    updated_at?: DateTimeFilter<"leave_policy"> | Date | string
    leave_type_id?: EnumLEAVE_TYPEFilter<"leave_policy"> | $Enums.LEAVE_TYPE
    department_id?: StringNullableFilter<"leave_policy"> | string | null
  }

  export type leave_balanceUpsertWithWhereUniqueWithoutLeave_typeInput = {
    where: leave_balanceWhereUniqueInput
    update: XOR<leave_balanceUpdateWithoutLeave_typeInput, leave_balanceUncheckedUpdateWithoutLeave_typeInput>
    create: XOR<leave_balanceCreateWithoutLeave_typeInput, leave_balanceUncheckedCreateWithoutLeave_typeInput>
  }

  export type leave_balanceUpdateWithWhereUniqueWithoutLeave_typeInput = {
    where: leave_balanceWhereUniqueInput
    data: XOR<leave_balanceUpdateWithoutLeave_typeInput, leave_balanceUncheckedUpdateWithoutLeave_typeInput>
  }

  export type leave_balanceUpdateManyWithWhereWithoutLeave_typeInput = {
    where: leave_balanceScalarWhereInput
    data: XOR<leave_balanceUpdateManyMutationInput, leave_balanceUncheckedUpdateManyWithoutLeave_typeInput>
  }

  export type leave_balanceScalarWhereInput = {
    AND?: leave_balanceScalarWhereInput | leave_balanceScalarWhereInput[]
    OR?: leave_balanceScalarWhereInput[]
    NOT?: leave_balanceScalarWhereInput | leave_balanceScalarWhereInput[]
    id?: StringFilter<"leave_balance"> | string
    yearly?: IntFilter<"leave_balance"> | number
    totalEntitlement?: IntFilter<"leave_balance"> | number
    year?: IntFilter<"leave_balance"> | number
    used?: IntFilter<"leave_balance"> | number
    pending?: IntFilter<"leave_balance"> | number
    carried_over?: IntFilter<"leave_balance"> | number
    balance?: IntFilter<"leave_balance"> | number
    created_at?: DateTimeFilter<"leave_balance"> | Date | string
    updated_at?: DateTimeFilter<"leave_balance"> | Date | string
    user_id?: StringFilter<"leave_balance"> | string
    leave_type_id?: EnumLEAVE_TYPEFilter<"leave_balance"> | $Enums.LEAVE_TYPE
  }

  export type leave_requestCreateWithoutStatusInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    user: userCreateNestedOneWithoutLeave_requestsInput
    leave_type: leave_typesCreateNestedOneWithoutLeave_requestsInput
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutLeave_requestInput
  }

  export type leave_requestUncheckedCreateWithoutStatusInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    user_id: string
    leave_type_id: $Enums.LEAVE_TYPE
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutLeave_requestInput
  }

  export type leave_requestCreateOrConnectWithoutStatusInput = {
    where: leave_requestWhereUniqueInput
    create: XOR<leave_requestCreateWithoutStatusInput, leave_requestUncheckedCreateWithoutStatusInput>
  }

  export type leave_requestCreateManyStatusInputEnvelope = {
    data: leave_requestCreateManyStatusInput | leave_requestCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type leave_request_historyCreateWithoutStatusInput = {
    id?: string
    comments: string
    created_at?: Date | string
    leave_request: leave_requestCreateNestedOneWithoutLeave_request_historiesInput
    user: userCreateNestedOneWithoutLeave_request_historiesInput
  }

  export type leave_request_historyUncheckedCreateWithoutStatusInput = {
    id?: string
    comments: string
    created_at?: Date | string
    leave_request_id: string
    updated_by: string
  }

  export type leave_request_historyCreateOrConnectWithoutStatusInput = {
    where: leave_request_historyWhereUniqueInput
    create: XOR<leave_request_historyCreateWithoutStatusInput, leave_request_historyUncheckedCreateWithoutStatusInput>
  }

  export type leave_request_historyCreateManyStatusInputEnvelope = {
    data: leave_request_historyCreateManyStatusInput | leave_request_historyCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type leave_requestUpsertWithWhereUniqueWithoutStatusInput = {
    where: leave_requestWhereUniqueInput
    update: XOR<leave_requestUpdateWithoutStatusInput, leave_requestUncheckedUpdateWithoutStatusInput>
    create: XOR<leave_requestCreateWithoutStatusInput, leave_requestUncheckedCreateWithoutStatusInput>
  }

  export type leave_requestUpdateWithWhereUniqueWithoutStatusInput = {
    where: leave_requestWhereUniqueInput
    data: XOR<leave_requestUpdateWithoutStatusInput, leave_requestUncheckedUpdateWithoutStatusInput>
  }

  export type leave_requestUpdateManyWithWhereWithoutStatusInput = {
    where: leave_requestScalarWhereInput
    data: XOR<leave_requestUpdateManyMutationInput, leave_requestUncheckedUpdateManyWithoutStatusInput>
  }

  export type leave_request_historyUpsertWithWhereUniqueWithoutStatusInput = {
    where: leave_request_historyWhereUniqueInput
    update: XOR<leave_request_historyUpdateWithoutStatusInput, leave_request_historyUncheckedUpdateWithoutStatusInput>
    create: XOR<leave_request_historyCreateWithoutStatusInput, leave_request_historyUncheckedCreateWithoutStatusInput>
  }

  export type leave_request_historyUpdateWithWhereUniqueWithoutStatusInput = {
    where: leave_request_historyWhereUniqueInput
    data: XOR<leave_request_historyUpdateWithoutStatusInput, leave_request_historyUncheckedUpdateWithoutStatusInput>
  }

  export type leave_request_historyUpdateManyWithWhereWithoutStatusInput = {
    where: leave_request_historyScalarWhereInput
    data: XOR<leave_request_historyUpdateManyMutationInput, leave_request_historyUncheckedUpdateManyWithoutStatusInput>
  }

  export type leave_request_historyScalarWhereInput = {
    AND?: leave_request_historyScalarWhereInput | leave_request_historyScalarWhereInput[]
    OR?: leave_request_historyScalarWhereInput[]
    NOT?: leave_request_historyScalarWhereInput | leave_request_historyScalarWhereInput[]
    id?: StringFilter<"leave_request_history"> | string
    comments?: StringFilter<"leave_request_history"> | string
    created_at?: DateTimeFilter<"leave_request_history"> | Date | string
    leave_request_id?: StringFilter<"leave_request_history"> | string
    status_id?: IntFilter<"leave_request_history"> | number
    updated_by?: StringFilter<"leave_request_history"> | string
  }

  export type userCreateWithoutDepartmentInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    manager?: userCreateNestedOneWithoutSubordinatesInput
    subordinates?: userCreateNestedManyWithoutManagerInput
    leave_requests?: leave_requestCreateNestedManyWithoutUserInput
    leave_balances?: leave_balanceCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutDepartmentInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: number
    manager_id?: string | null
    subordinates?: userUncheckedCreateNestedManyWithoutManagerInput
    leave_requests?: leave_requestUncheckedCreateNestedManyWithoutUserInput
    leave_balances?: leave_balanceUncheckedCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutDepartmentInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutDepartmentInput, userUncheckedCreateWithoutDepartmentInput>
  }

  export type userCreateManyDepartmentInputEnvelope = {
    data: userCreateManyDepartmentInput | userCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type leave_policyCreateWithoutDepartmentInput = {
    id?: string
    max_days_per_year: number
    max_days_per_request: number
    carry_over_limit: number
    carry_over_expiry: number
    is_Active: boolean
    effective_from: Date | string
    effective_to: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    leave_type: leave_typesCreateNestedOneWithoutLeave_policiesInput
  }

  export type leave_policyUncheckedCreateWithoutDepartmentInput = {
    id?: string
    max_days_per_year: number
    max_days_per_request: number
    carry_over_limit: number
    carry_over_expiry: number
    is_Active: boolean
    effective_from: Date | string
    effective_to: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    leave_type_id: $Enums.LEAVE_TYPE
  }

  export type leave_policyCreateOrConnectWithoutDepartmentInput = {
    where: leave_policyWhereUniqueInput
    create: XOR<leave_policyCreateWithoutDepartmentInput, leave_policyUncheckedCreateWithoutDepartmentInput>
  }

  export type leave_policyCreateManyDepartmentInputEnvelope = {
    data: leave_policyCreateManyDepartmentInput | leave_policyCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type holidayCreateWithoutDepartmentInput = {
    id?: string
    name: string
    date: Date | string
    is_Recurring: boolean
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type holidayUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    date: Date | string
    is_Recurring: boolean
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type holidayCreateOrConnectWithoutDepartmentInput = {
    where: holidayWhereUniqueInput
    create: XOR<holidayCreateWithoutDepartmentInput, holidayUncheckedCreateWithoutDepartmentInput>
  }

  export type holidayCreateManyDepartmentInputEnvelope = {
    data: holidayCreateManyDepartmentInput | holidayCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutDepartmentInput, userUncheckedUpdateWithoutDepartmentInput>
    create: XOR<userCreateWithoutDepartmentInput, userUncheckedCreateWithoutDepartmentInput>
  }

  export type userUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutDepartmentInput, userUncheckedUpdateWithoutDepartmentInput>
  }

  export type userUpdateManyWithWhereWithoutDepartmentInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type leave_policyUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: leave_policyWhereUniqueInput
    update: XOR<leave_policyUpdateWithoutDepartmentInput, leave_policyUncheckedUpdateWithoutDepartmentInput>
    create: XOR<leave_policyCreateWithoutDepartmentInput, leave_policyUncheckedCreateWithoutDepartmentInput>
  }

  export type leave_policyUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: leave_policyWhereUniqueInput
    data: XOR<leave_policyUpdateWithoutDepartmentInput, leave_policyUncheckedUpdateWithoutDepartmentInput>
  }

  export type leave_policyUpdateManyWithWhereWithoutDepartmentInput = {
    where: leave_policyScalarWhereInput
    data: XOR<leave_policyUpdateManyMutationInput, leave_policyUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type holidayUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: holidayWhereUniqueInput
    update: XOR<holidayUpdateWithoutDepartmentInput, holidayUncheckedUpdateWithoutDepartmentInput>
    create: XOR<holidayCreateWithoutDepartmentInput, holidayUncheckedCreateWithoutDepartmentInput>
  }

  export type holidayUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: holidayWhereUniqueInput
    data: XOR<holidayUpdateWithoutDepartmentInput, holidayUncheckedUpdateWithoutDepartmentInput>
  }

  export type holidayUpdateManyWithWhereWithoutDepartmentInput = {
    where: holidayScalarWhereInput
    data: XOR<holidayUpdateManyMutationInput, holidayUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type holidayScalarWhereInput = {
    AND?: holidayScalarWhereInput | holidayScalarWhereInput[]
    OR?: holidayScalarWhereInput[]
    NOT?: holidayScalarWhereInput | holidayScalarWhereInput[]
    id?: StringFilter<"holiday"> | string
    name?: StringFilter<"holiday"> | string
    date?: DateTimeFilter<"holiday"> | Date | string
    is_Recurring?: BoolFilter<"holiday"> | boolean
    is_Active?: BoolFilter<"holiday"> | boolean
    created_at?: DateTimeFilter<"holiday"> | Date | string
    updated_at?: DateTimeFilter<"holiday"> | Date | string
    department_id?: StringNullableFilter<"holiday"> | string | null
  }

  export type userCreateWithoutLeave_requestsInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    department: departmentsCreateNestedOneWithoutUsersInput
    manager?: userCreateNestedOneWithoutSubordinatesInput
    subordinates?: userCreateNestedManyWithoutManagerInput
    leave_balances?: leave_balanceCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutLeave_requestsInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: number
    department_name: string
    manager_id?: string | null
    subordinates?: userUncheckedCreateNestedManyWithoutManagerInput
    leave_balances?: leave_balanceUncheckedCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutLeave_requestsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLeave_requestsInput, userUncheckedCreateWithoutLeave_requestsInput>
  }

  export type leave_typesCreateWithoutLeave_requestsInput = {
    id?: string
    name: $Enums.LEAVE_TYPE
    description: string
    max_days_per_request: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_policies?: leave_policyCreateNestedManyWithoutLeave_typeInput
    leave_balances?: leave_balanceCreateNestedManyWithoutLeave_typeInput
  }

  export type leave_typesUncheckedCreateWithoutLeave_requestsInput = {
    id?: string
    name: $Enums.LEAVE_TYPE
    description: string
    max_days_per_request: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_policies?: leave_policyUncheckedCreateNestedManyWithoutLeave_typeInput
    leave_balances?: leave_balanceUncheckedCreateNestedManyWithoutLeave_typeInput
  }

  export type leave_typesCreateOrConnectWithoutLeave_requestsInput = {
    where: leave_typesWhereUniqueInput
    create: XOR<leave_typesCreateWithoutLeave_requestsInput, leave_typesUncheckedCreateWithoutLeave_requestsInput>
  }

  export type leave_statusCreateWithoutLeave_requestsInput = {
    id: number
    name?: $Enums.LEAVE_APPROVAL
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutStatusInput
  }

  export type leave_statusUncheckedCreateWithoutLeave_requestsInput = {
    id: number
    name?: $Enums.LEAVE_APPROVAL
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutStatusInput
  }

  export type leave_statusCreateOrConnectWithoutLeave_requestsInput = {
    where: leave_statusWhereUniqueInput
    create: XOR<leave_statusCreateWithoutLeave_requestsInput, leave_statusUncheckedCreateWithoutLeave_requestsInput>
  }

  export type leave_request_historyCreateWithoutLeave_requestInput = {
    id?: string
    comments: string
    created_at?: Date | string
    status: leave_statusCreateNestedOneWithoutLeave_request_historiesInput
    user: userCreateNestedOneWithoutLeave_request_historiesInput
  }

  export type leave_request_historyUncheckedCreateWithoutLeave_requestInput = {
    id?: string
    comments: string
    created_at?: Date | string
    status_id: number
    updated_by: string
  }

  export type leave_request_historyCreateOrConnectWithoutLeave_requestInput = {
    where: leave_request_historyWhereUniqueInput
    create: XOR<leave_request_historyCreateWithoutLeave_requestInput, leave_request_historyUncheckedCreateWithoutLeave_requestInput>
  }

  export type leave_request_historyCreateManyLeave_requestInputEnvelope = {
    data: leave_request_historyCreateManyLeave_requestInput | leave_request_historyCreateManyLeave_requestInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutLeave_requestsInput = {
    update: XOR<userUpdateWithoutLeave_requestsInput, userUncheckedUpdateWithoutLeave_requestsInput>
    create: XOR<userCreateWithoutLeave_requestsInput, userUncheckedCreateWithoutLeave_requestsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLeave_requestsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLeave_requestsInput, userUncheckedUpdateWithoutLeave_requestsInput>
  }

  export type userUpdateWithoutLeave_requestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    department?: departmentsUpdateOneRequiredWithoutUsersNestedInput
    manager?: userUpdateOneWithoutSubordinatesNestedInput
    subordinates?: userUpdateManyWithoutManagerNestedInput
    leave_balances?: leave_balanceUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLeave_requestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    subordinates?: userUncheckedUpdateManyWithoutManagerNestedInput
    leave_balances?: leave_balanceUncheckedUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type leave_typesUpsertWithoutLeave_requestsInput = {
    update: XOR<leave_typesUpdateWithoutLeave_requestsInput, leave_typesUncheckedUpdateWithoutLeave_requestsInput>
    create: XOR<leave_typesCreateWithoutLeave_requestsInput, leave_typesUncheckedCreateWithoutLeave_requestsInput>
    where?: leave_typesWhereInput
  }

  export type leave_typesUpdateToOneWithWhereWithoutLeave_requestsInput = {
    where?: leave_typesWhereInput
    data: XOR<leave_typesUpdateWithoutLeave_requestsInput, leave_typesUncheckedUpdateWithoutLeave_requestsInput>
  }

  export type leave_typesUpdateWithoutLeave_requestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    description?: StringFieldUpdateOperationsInput | string
    max_days_per_request?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_policies?: leave_policyUpdateManyWithoutLeave_typeNestedInput
    leave_balances?: leave_balanceUpdateManyWithoutLeave_typeNestedInput
  }

  export type leave_typesUncheckedUpdateWithoutLeave_requestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    description?: StringFieldUpdateOperationsInput | string
    max_days_per_request?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_policies?: leave_policyUncheckedUpdateManyWithoutLeave_typeNestedInput
    leave_balances?: leave_balanceUncheckedUpdateManyWithoutLeave_typeNestedInput
  }

  export type leave_statusUpsertWithoutLeave_requestsInput = {
    update: XOR<leave_statusUpdateWithoutLeave_requestsInput, leave_statusUncheckedUpdateWithoutLeave_requestsInput>
    create: XOR<leave_statusCreateWithoutLeave_requestsInput, leave_statusUncheckedCreateWithoutLeave_requestsInput>
    where?: leave_statusWhereInput
  }

  export type leave_statusUpdateToOneWithWhereWithoutLeave_requestsInput = {
    where?: leave_statusWhereInput
    data: XOR<leave_statusUpdateWithoutLeave_requestsInput, leave_statusUncheckedUpdateWithoutLeave_requestsInput>
  }

  export type leave_statusUpdateWithoutLeave_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumLEAVE_APPROVALFieldUpdateOperationsInput | $Enums.LEAVE_APPROVAL
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_request_histories?: leave_request_historyUpdateManyWithoutStatusNestedInput
  }

  export type leave_statusUncheckedUpdateWithoutLeave_requestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumLEAVE_APPROVALFieldUpdateOperationsInput | $Enums.LEAVE_APPROVAL
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type leave_request_historyUpsertWithWhereUniqueWithoutLeave_requestInput = {
    where: leave_request_historyWhereUniqueInput
    update: XOR<leave_request_historyUpdateWithoutLeave_requestInput, leave_request_historyUncheckedUpdateWithoutLeave_requestInput>
    create: XOR<leave_request_historyCreateWithoutLeave_requestInput, leave_request_historyUncheckedCreateWithoutLeave_requestInput>
  }

  export type leave_request_historyUpdateWithWhereUniqueWithoutLeave_requestInput = {
    where: leave_request_historyWhereUniqueInput
    data: XOR<leave_request_historyUpdateWithoutLeave_requestInput, leave_request_historyUncheckedUpdateWithoutLeave_requestInput>
  }

  export type leave_request_historyUpdateManyWithWhereWithoutLeave_requestInput = {
    where: leave_request_historyScalarWhereInput
    data: XOR<leave_request_historyUpdateManyMutationInput, leave_request_historyUncheckedUpdateManyWithoutLeave_requestInput>
  }

  export type leave_requestCreateWithoutLeave_request_historiesInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    user: userCreateNestedOneWithoutLeave_requestsInput
    leave_type: leave_typesCreateNestedOneWithoutLeave_requestsInput
    status: leave_statusCreateNestedOneWithoutLeave_requestsInput
  }

  export type leave_requestUncheckedCreateWithoutLeave_request_historiesInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    user_id: string
    leave_type_id: $Enums.LEAVE_TYPE
    status_id: number
  }

  export type leave_requestCreateOrConnectWithoutLeave_request_historiesInput = {
    where: leave_requestWhereUniqueInput
    create: XOR<leave_requestCreateWithoutLeave_request_historiesInput, leave_requestUncheckedCreateWithoutLeave_request_historiesInput>
  }

  export type leave_statusCreateWithoutLeave_request_historiesInput = {
    id: number
    name?: $Enums.LEAVE_APPROVAL
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_requests?: leave_requestCreateNestedManyWithoutStatusInput
  }

  export type leave_statusUncheckedCreateWithoutLeave_request_historiesInput = {
    id: number
    name?: $Enums.LEAVE_APPROVAL
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_requests?: leave_requestUncheckedCreateNestedManyWithoutStatusInput
  }

  export type leave_statusCreateOrConnectWithoutLeave_request_historiesInput = {
    where: leave_statusWhereUniqueInput
    create: XOR<leave_statusCreateWithoutLeave_request_historiesInput, leave_statusUncheckedCreateWithoutLeave_request_historiesInput>
  }

  export type userCreateWithoutLeave_request_historiesInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    department: departmentsCreateNestedOneWithoutUsersInput
    manager?: userCreateNestedOneWithoutSubordinatesInput
    subordinates?: userCreateNestedManyWithoutManagerInput
    leave_requests?: leave_requestCreateNestedManyWithoutUserInput
    leave_balances?: leave_balanceCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutLeave_request_historiesInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: number
    department_name: string
    manager_id?: string | null
    subordinates?: userUncheckedCreateNestedManyWithoutManagerInput
    leave_requests?: leave_requestUncheckedCreateNestedManyWithoutUserInput
    leave_balances?: leave_balanceUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutLeave_request_historiesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLeave_request_historiesInput, userUncheckedCreateWithoutLeave_request_historiesInput>
  }

  export type leave_requestUpsertWithoutLeave_request_historiesInput = {
    update: XOR<leave_requestUpdateWithoutLeave_request_historiesInput, leave_requestUncheckedUpdateWithoutLeave_request_historiesInput>
    create: XOR<leave_requestCreateWithoutLeave_request_historiesInput, leave_requestUncheckedCreateWithoutLeave_request_historiesInput>
    where?: leave_requestWhereInput
  }

  export type leave_requestUpdateToOneWithWhereWithoutLeave_request_historiesInput = {
    where?: leave_requestWhereInput
    data: XOR<leave_requestUpdateWithoutLeave_request_historiesInput, leave_requestUncheckedUpdateWithoutLeave_request_historiesInput>
  }

  export type leave_requestUpdateWithoutLeave_request_historiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutLeave_requestsNestedInput
    leave_type?: leave_typesUpdateOneRequiredWithoutLeave_requestsNestedInput
    status?: leave_statusUpdateOneRequiredWithoutLeave_requestsNestedInput
  }

  export type leave_requestUncheckedUpdateWithoutLeave_request_historiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    status_id?: IntFieldUpdateOperationsInput | number
  }

  export type leave_statusUpsertWithoutLeave_request_historiesInput = {
    update: XOR<leave_statusUpdateWithoutLeave_request_historiesInput, leave_statusUncheckedUpdateWithoutLeave_request_historiesInput>
    create: XOR<leave_statusCreateWithoutLeave_request_historiesInput, leave_statusUncheckedCreateWithoutLeave_request_historiesInput>
    where?: leave_statusWhereInput
  }

  export type leave_statusUpdateToOneWithWhereWithoutLeave_request_historiesInput = {
    where?: leave_statusWhereInput
    data: XOR<leave_statusUpdateWithoutLeave_request_historiesInput, leave_statusUncheckedUpdateWithoutLeave_request_historiesInput>
  }

  export type leave_statusUpdateWithoutLeave_request_historiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumLEAVE_APPROVALFieldUpdateOperationsInput | $Enums.LEAVE_APPROVAL
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_requests?: leave_requestUpdateManyWithoutStatusNestedInput
  }

  export type leave_statusUncheckedUpdateWithoutLeave_request_historiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumLEAVE_APPROVALFieldUpdateOperationsInput | $Enums.LEAVE_APPROVAL
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_requests?: leave_requestUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type userUpsertWithoutLeave_request_historiesInput = {
    update: XOR<userUpdateWithoutLeave_request_historiesInput, userUncheckedUpdateWithoutLeave_request_historiesInput>
    create: XOR<userCreateWithoutLeave_request_historiesInput, userUncheckedCreateWithoutLeave_request_historiesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLeave_request_historiesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLeave_request_historiesInput, userUncheckedUpdateWithoutLeave_request_historiesInput>
  }

  export type userUpdateWithoutLeave_request_historiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    department?: departmentsUpdateOneRequiredWithoutUsersNestedInput
    manager?: userUpdateOneWithoutSubordinatesNestedInput
    subordinates?: userUpdateManyWithoutManagerNestedInput
    leave_requests?: leave_requestUpdateManyWithoutUserNestedInput
    leave_balances?: leave_balanceUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLeave_request_historiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    subordinates?: userUncheckedUpdateManyWithoutManagerNestedInput
    leave_requests?: leave_requestUncheckedUpdateManyWithoutUserNestedInput
    leave_balances?: leave_balanceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateWithoutLeave_balancesInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    department: departmentsCreateNestedOneWithoutUsersInput
    manager?: userCreateNestedOneWithoutSubordinatesInput
    subordinates?: userCreateNestedManyWithoutManagerInput
    leave_requests?: leave_requestCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutLeave_balancesInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: number
    department_name: string
    manager_id?: string | null
    subordinates?: userUncheckedCreateNestedManyWithoutManagerInput
    leave_requests?: leave_requestUncheckedCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutLeave_balancesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutLeave_balancesInput, userUncheckedCreateWithoutLeave_balancesInput>
  }

  export type leave_typesCreateWithoutLeave_balancesInput = {
    id?: string
    name: $Enums.LEAVE_TYPE
    description: string
    max_days_per_request: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_requests?: leave_requestCreateNestedManyWithoutLeave_typeInput
    leave_policies?: leave_policyCreateNestedManyWithoutLeave_typeInput
  }

  export type leave_typesUncheckedCreateWithoutLeave_balancesInput = {
    id?: string
    name: $Enums.LEAVE_TYPE
    description: string
    max_days_per_request: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_requests?: leave_requestUncheckedCreateNestedManyWithoutLeave_typeInput
    leave_policies?: leave_policyUncheckedCreateNestedManyWithoutLeave_typeInput
  }

  export type leave_typesCreateOrConnectWithoutLeave_balancesInput = {
    where: leave_typesWhereUniqueInput
    create: XOR<leave_typesCreateWithoutLeave_balancesInput, leave_typesUncheckedCreateWithoutLeave_balancesInput>
  }

  export type userUpsertWithoutLeave_balancesInput = {
    update: XOR<userUpdateWithoutLeave_balancesInput, userUncheckedUpdateWithoutLeave_balancesInput>
    create: XOR<userCreateWithoutLeave_balancesInput, userUncheckedCreateWithoutLeave_balancesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutLeave_balancesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutLeave_balancesInput, userUncheckedUpdateWithoutLeave_balancesInput>
  }

  export type userUpdateWithoutLeave_balancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    department?: departmentsUpdateOneRequiredWithoutUsersNestedInput
    manager?: userUpdateOneWithoutSubordinatesNestedInput
    subordinates?: userUpdateManyWithoutManagerNestedInput
    leave_requests?: leave_requestUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutLeave_balancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    subordinates?: userUncheckedUpdateManyWithoutManagerNestedInput
    leave_requests?: leave_requestUncheckedUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type leave_typesUpsertWithoutLeave_balancesInput = {
    update: XOR<leave_typesUpdateWithoutLeave_balancesInput, leave_typesUncheckedUpdateWithoutLeave_balancesInput>
    create: XOR<leave_typesCreateWithoutLeave_balancesInput, leave_typesUncheckedCreateWithoutLeave_balancesInput>
    where?: leave_typesWhereInput
  }

  export type leave_typesUpdateToOneWithWhereWithoutLeave_balancesInput = {
    where?: leave_typesWhereInput
    data: XOR<leave_typesUpdateWithoutLeave_balancesInput, leave_typesUncheckedUpdateWithoutLeave_balancesInput>
  }

  export type leave_typesUpdateWithoutLeave_balancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    description?: StringFieldUpdateOperationsInput | string
    max_days_per_request?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_requests?: leave_requestUpdateManyWithoutLeave_typeNestedInput
    leave_policies?: leave_policyUpdateManyWithoutLeave_typeNestedInput
  }

  export type leave_typesUncheckedUpdateWithoutLeave_balancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    description?: StringFieldUpdateOperationsInput | string
    max_days_per_request?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_requests?: leave_requestUncheckedUpdateManyWithoutLeave_typeNestedInput
    leave_policies?: leave_policyUncheckedUpdateManyWithoutLeave_typeNestedInput
  }

  export type leave_typesCreateWithoutLeave_policiesInput = {
    id?: string
    name: $Enums.LEAVE_TYPE
    description: string
    max_days_per_request: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_requests?: leave_requestCreateNestedManyWithoutLeave_typeInput
    leave_balances?: leave_balanceCreateNestedManyWithoutLeave_typeInput
  }

  export type leave_typesUncheckedCreateWithoutLeave_policiesInput = {
    id?: string
    name: $Enums.LEAVE_TYPE
    description: string
    max_days_per_request: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_requests?: leave_requestUncheckedCreateNestedManyWithoutLeave_typeInput
    leave_balances?: leave_balanceUncheckedCreateNestedManyWithoutLeave_typeInput
  }

  export type leave_typesCreateOrConnectWithoutLeave_policiesInput = {
    where: leave_typesWhereUniqueInput
    create: XOR<leave_typesCreateWithoutLeave_policiesInput, leave_typesUncheckedCreateWithoutLeave_policiesInput>
  }

  export type departmentsCreateWithoutLeave_policyInput = {
    id?: string
    cus_id: string
    name: string
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: userCreateNestedManyWithoutDepartmentInput
    holiday?: holidayCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsUncheckedCreateWithoutLeave_policyInput = {
    id?: string
    cus_id: string
    name: string
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: userUncheckedCreateNestedManyWithoutDepartmentInput
    holiday?: holidayUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsCreateOrConnectWithoutLeave_policyInput = {
    where: departmentsWhereUniqueInput
    create: XOR<departmentsCreateWithoutLeave_policyInput, departmentsUncheckedCreateWithoutLeave_policyInput>
  }

  export type leave_typesUpsertWithoutLeave_policiesInput = {
    update: XOR<leave_typesUpdateWithoutLeave_policiesInput, leave_typesUncheckedUpdateWithoutLeave_policiesInput>
    create: XOR<leave_typesCreateWithoutLeave_policiesInput, leave_typesUncheckedCreateWithoutLeave_policiesInput>
    where?: leave_typesWhereInput
  }

  export type leave_typesUpdateToOneWithWhereWithoutLeave_policiesInput = {
    where?: leave_typesWhereInput
    data: XOR<leave_typesUpdateWithoutLeave_policiesInput, leave_typesUncheckedUpdateWithoutLeave_policiesInput>
  }

  export type leave_typesUpdateWithoutLeave_policiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    description?: StringFieldUpdateOperationsInput | string
    max_days_per_request?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_requests?: leave_requestUpdateManyWithoutLeave_typeNestedInput
    leave_balances?: leave_balanceUpdateManyWithoutLeave_typeNestedInput
  }

  export type leave_typesUncheckedUpdateWithoutLeave_policiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    description?: StringFieldUpdateOperationsInput | string
    max_days_per_request?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_requests?: leave_requestUncheckedUpdateManyWithoutLeave_typeNestedInput
    leave_balances?: leave_balanceUncheckedUpdateManyWithoutLeave_typeNestedInput
  }

  export type departmentsUpsertWithoutLeave_policyInput = {
    update: XOR<departmentsUpdateWithoutLeave_policyInput, departmentsUncheckedUpdateWithoutLeave_policyInput>
    create: XOR<departmentsCreateWithoutLeave_policyInput, departmentsUncheckedCreateWithoutLeave_policyInput>
    where?: departmentsWhereInput
  }

  export type departmentsUpdateToOneWithWhereWithoutLeave_policyInput = {
    where?: departmentsWhereInput
    data: XOR<departmentsUpdateWithoutLeave_policyInput, departmentsUncheckedUpdateWithoutLeave_policyInput>
  }

  export type departmentsUpdateWithoutLeave_policyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateManyWithoutDepartmentNestedInput
    holiday?: holidayUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentsUncheckedUpdateWithoutLeave_policyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUncheckedUpdateManyWithoutDepartmentNestedInput
    holiday?: holidayUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentsCreateWithoutHolidayInput = {
    id?: string
    cus_id: string
    name: string
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: userCreateNestedManyWithoutDepartmentInput
    leave_policy?: leave_policyCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsUncheckedCreateWithoutHolidayInput = {
    id?: string
    cus_id: string
    name: string
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    users?: userUncheckedCreateNestedManyWithoutDepartmentInput
    leave_policy?: leave_policyUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsCreateOrConnectWithoutHolidayInput = {
    where: departmentsWhereUniqueInput
    create: XOR<departmentsCreateWithoutHolidayInput, departmentsUncheckedCreateWithoutHolidayInput>
  }

  export type departmentsUpsertWithoutHolidayInput = {
    update: XOR<departmentsUpdateWithoutHolidayInput, departmentsUncheckedUpdateWithoutHolidayInput>
    create: XOR<departmentsCreateWithoutHolidayInput, departmentsUncheckedCreateWithoutHolidayInput>
    where?: departmentsWhereInput
  }

  export type departmentsUpdateToOneWithWhereWithoutHolidayInput = {
    where?: departmentsWhereInput
    data: XOR<departmentsUpdateWithoutHolidayInput, departmentsUncheckedUpdateWithoutHolidayInput>
  }

  export type departmentsUpdateWithoutHolidayInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUpdateManyWithoutDepartmentNestedInput
    leave_policy?: leave_policyUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentsUncheckedUpdateWithoutHolidayInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: userUncheckedUpdateManyWithoutDepartmentNestedInput
    leave_policy?: leave_policyUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type rolesCreateWithoutUsersInput = {
    id: number
    name?: $Enums.Role
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type rolesUncheckedCreateWithoutUsersInput = {
    id: number
    name?: $Enums.Role
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type rolesCreateOrConnectWithoutUsersInput = {
    where: rolesWhereUniqueInput
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
  }

  export type departmentsCreateWithoutUsersInput = {
    id?: string
    cus_id: string
    name: string
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_policy?: leave_policyCreateNestedManyWithoutDepartmentInput
    holiday?: holidayCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsUncheckedCreateWithoutUsersInput = {
    id?: string
    cus_id: string
    name: string
    description: string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    leave_policy?: leave_policyUncheckedCreateNestedManyWithoutDepartmentInput
    holiday?: holidayUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentsCreateOrConnectWithoutUsersInput = {
    where: departmentsWhereUniqueInput
    create: XOR<departmentsCreateWithoutUsersInput, departmentsUncheckedCreateWithoutUsersInput>
  }

  export type userCreateWithoutSubordinatesInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    department: departmentsCreateNestedOneWithoutUsersInput
    manager?: userCreateNestedOneWithoutSubordinatesInput
    leave_requests?: leave_requestCreateNestedManyWithoutUserInput
    leave_balances?: leave_balanceCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutSubordinatesInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: number
    department_name: string
    manager_id?: string | null
    leave_requests?: leave_requestUncheckedCreateNestedManyWithoutUserInput
    leave_balances?: leave_balanceUncheckedCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutSubordinatesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSubordinatesInput, userUncheckedCreateWithoutSubordinatesInput>
  }

  export type userCreateWithoutManagerInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role: rolesCreateNestedOneWithoutUsersInput
    department: departmentsCreateNestedOneWithoutUsersInput
    subordinates?: userCreateNestedManyWithoutManagerInput
    leave_requests?: leave_requestCreateNestedManyWithoutUserInput
    leave_balances?: leave_balanceCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutManagerInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: number
    department_name: string
    subordinates?: userUncheckedCreateNestedManyWithoutManagerInput
    leave_requests?: leave_requestUncheckedCreateNestedManyWithoutUserInput
    leave_balances?: leave_balanceUncheckedCreateNestedManyWithoutUserInput
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutManagerInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutManagerInput, userUncheckedCreateWithoutManagerInput>
  }

  export type userCreateManyManagerInputEnvelope = {
    data: userCreateManyManagerInput | userCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type leave_requestCreateWithoutUserInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    leave_type: leave_typesCreateNestedOneWithoutLeave_requestsInput
    status: leave_statusCreateNestedOneWithoutLeave_requestsInput
    leave_request_histories?: leave_request_historyCreateNestedManyWithoutLeave_requestInput
  }

  export type leave_requestUncheckedCreateWithoutUserInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    leave_type_id: $Enums.LEAVE_TYPE
    status_id: number
    leave_request_histories?: leave_request_historyUncheckedCreateNestedManyWithoutLeave_requestInput
  }

  export type leave_requestCreateOrConnectWithoutUserInput = {
    where: leave_requestWhereUniqueInput
    create: XOR<leave_requestCreateWithoutUserInput, leave_requestUncheckedCreateWithoutUserInput>
  }

  export type leave_requestCreateManyUserInputEnvelope = {
    data: leave_requestCreateManyUserInput | leave_requestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type leave_balanceCreateWithoutUserInput = {
    id?: string
    yearly: number
    totalEntitlement: number
    year: number
    used: number
    pending: number
    carried_over: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
    leave_type: leave_typesCreateNestedOneWithoutLeave_balancesInput
  }

  export type leave_balanceUncheckedCreateWithoutUserInput = {
    id?: string
    yearly: number
    totalEntitlement: number
    year: number
    used: number
    pending: number
    carried_over: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
    leave_type_id: $Enums.LEAVE_TYPE
  }

  export type leave_balanceCreateOrConnectWithoutUserInput = {
    where: leave_balanceWhereUniqueInput
    create: XOR<leave_balanceCreateWithoutUserInput, leave_balanceUncheckedCreateWithoutUserInput>
  }

  export type leave_balanceCreateManyUserInputEnvelope = {
    data: leave_balanceCreateManyUserInput | leave_balanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type leave_request_historyCreateWithoutUserInput = {
    id?: string
    comments: string
    created_at?: Date | string
    leave_request: leave_requestCreateNestedOneWithoutLeave_request_historiesInput
    status: leave_statusCreateNestedOneWithoutLeave_request_historiesInput
  }

  export type leave_request_historyUncheckedCreateWithoutUserInput = {
    id?: string
    comments: string
    created_at?: Date | string
    leave_request_id: string
    status_id: number
  }

  export type leave_request_historyCreateOrConnectWithoutUserInput = {
    where: leave_request_historyWhereUniqueInput
    create: XOR<leave_request_historyCreateWithoutUserInput, leave_request_historyUncheckedCreateWithoutUserInput>
  }

  export type leave_request_historyCreateManyUserInputEnvelope = {
    data: leave_request_historyCreateManyUserInput | leave_request_historyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type rolesUpsertWithoutUsersInput = {
    update: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
    create: XOR<rolesCreateWithoutUsersInput, rolesUncheckedCreateWithoutUsersInput>
    where?: rolesWhereInput
  }

  export type rolesUpdateToOneWithWhereWithoutUsersInput = {
    where?: rolesWhereInput
    data: XOR<rolesUpdateWithoutUsersInput, rolesUncheckedUpdateWithoutUsersInput>
  }

  export type rolesUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type rolesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type departmentsUpsertWithoutUsersInput = {
    update: XOR<departmentsUpdateWithoutUsersInput, departmentsUncheckedUpdateWithoutUsersInput>
    create: XOR<departmentsCreateWithoutUsersInput, departmentsUncheckedCreateWithoutUsersInput>
    where?: departmentsWhereInput
  }

  export type departmentsUpdateToOneWithWhereWithoutUsersInput = {
    where?: departmentsWhereInput
    data: XOR<departmentsUpdateWithoutUsersInput, departmentsUncheckedUpdateWithoutUsersInput>
  }

  export type departmentsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_policy?: leave_policyUpdateManyWithoutDepartmentNestedInput
    holiday?: holidayUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_policy?: leave_policyUncheckedUpdateManyWithoutDepartmentNestedInput
    holiday?: holidayUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type userUpsertWithoutSubordinatesInput = {
    update: XOR<userUpdateWithoutSubordinatesInput, userUncheckedUpdateWithoutSubordinatesInput>
    create: XOR<userCreateWithoutSubordinatesInput, userUncheckedCreateWithoutSubordinatesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSubordinatesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSubordinatesInput, userUncheckedUpdateWithoutSubordinatesInput>
  }

  export type userUpdateWithoutSubordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    department?: departmentsUpdateOneRequiredWithoutUsersNestedInput
    manager?: userUpdateOneWithoutSubordinatesNestedInput
    leave_requests?: leave_requestUpdateManyWithoutUserNestedInput
    leave_balances?: leave_balanceUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutSubordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    leave_requests?: leave_requestUncheckedUpdateManyWithoutUserNestedInput
    leave_balances?: leave_balanceUncheckedUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUpsertWithWhereUniqueWithoutManagerInput = {
    where: userWhereUniqueInput
    update: XOR<userUpdateWithoutManagerInput, userUncheckedUpdateWithoutManagerInput>
    create: XOR<userCreateWithoutManagerInput, userUncheckedCreateWithoutManagerInput>
  }

  export type userUpdateWithWhereUniqueWithoutManagerInput = {
    where: userWhereUniqueInput
    data: XOR<userUpdateWithoutManagerInput, userUncheckedUpdateWithoutManagerInput>
  }

  export type userUpdateManyWithWhereWithoutManagerInput = {
    where: userScalarWhereInput
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutManagerInput>
  }

  export type leave_requestUpsertWithWhereUniqueWithoutUserInput = {
    where: leave_requestWhereUniqueInput
    update: XOR<leave_requestUpdateWithoutUserInput, leave_requestUncheckedUpdateWithoutUserInput>
    create: XOR<leave_requestCreateWithoutUserInput, leave_requestUncheckedCreateWithoutUserInput>
  }

  export type leave_requestUpdateWithWhereUniqueWithoutUserInput = {
    where: leave_requestWhereUniqueInput
    data: XOR<leave_requestUpdateWithoutUserInput, leave_requestUncheckedUpdateWithoutUserInput>
  }

  export type leave_requestUpdateManyWithWhereWithoutUserInput = {
    where: leave_requestScalarWhereInput
    data: XOR<leave_requestUpdateManyMutationInput, leave_requestUncheckedUpdateManyWithoutUserInput>
  }

  export type leave_balanceUpsertWithWhereUniqueWithoutUserInput = {
    where: leave_balanceWhereUniqueInput
    update: XOR<leave_balanceUpdateWithoutUserInput, leave_balanceUncheckedUpdateWithoutUserInput>
    create: XOR<leave_balanceCreateWithoutUserInput, leave_balanceUncheckedCreateWithoutUserInput>
  }

  export type leave_balanceUpdateWithWhereUniqueWithoutUserInput = {
    where: leave_balanceWhereUniqueInput
    data: XOR<leave_balanceUpdateWithoutUserInput, leave_balanceUncheckedUpdateWithoutUserInput>
  }

  export type leave_balanceUpdateManyWithWhereWithoutUserInput = {
    where: leave_balanceScalarWhereInput
    data: XOR<leave_balanceUpdateManyMutationInput, leave_balanceUncheckedUpdateManyWithoutUserInput>
  }

  export type leave_request_historyUpsertWithWhereUniqueWithoutUserInput = {
    where: leave_request_historyWhereUniqueInput
    update: XOR<leave_request_historyUpdateWithoutUserInput, leave_request_historyUncheckedUpdateWithoutUserInput>
    create: XOR<leave_request_historyCreateWithoutUserInput, leave_request_historyUncheckedCreateWithoutUserInput>
  }

  export type leave_request_historyUpdateWithWhereUniqueWithoutUserInput = {
    where: leave_request_historyWhereUniqueInput
    data: XOR<leave_request_historyUpdateWithoutUserInput, leave_request_historyUncheckedUpdateWithoutUserInput>
  }

  export type leave_request_historyUpdateManyWithWhereWithoutUserInput = {
    where: leave_request_historyScalarWhereInput
    data: XOR<leave_request_historyUpdateManyMutationInput, leave_request_historyUncheckedUpdateManyWithoutUserInput>
  }

  export type userCreateManyRoleInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    department_name: string
    manager_id?: string | null
  }

  export type userUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: departmentsUpdateOneRequiredWithoutUsersNestedInput
    manager?: userUpdateOneWithoutSubordinatesNestedInput
    subordinates?: userUpdateManyWithoutManagerNestedInput
    leave_requests?: leave_requestUpdateManyWithoutUserNestedInput
    leave_balances?: leave_balanceUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    department_name?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    subordinates?: userUncheckedUpdateManyWithoutManagerNestedInput
    leave_requests?: leave_requestUncheckedUpdateManyWithoutUserNestedInput
    leave_balances?: leave_balanceUncheckedUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    department_name?: StringFieldUpdateOperationsInput | string
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type leave_requestCreateManyLeave_typeInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    user_id: string
    status_id: number
  }

  export type leave_policyCreateManyLeave_typeInput = {
    id?: string
    max_days_per_year: number
    max_days_per_request: number
    carry_over_limit: number
    carry_over_expiry: number
    is_Active: boolean
    effective_from: Date | string
    effective_to: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    department_id?: string | null
  }

  export type leave_balanceCreateManyLeave_typeInput = {
    id?: string
    yearly: number
    totalEntitlement: number
    year: number
    used: number
    pending: number
    carried_over: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
    user_id: string
  }

  export type leave_requestUpdateWithoutLeave_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutLeave_requestsNestedInput
    status?: leave_statusUpdateOneRequiredWithoutLeave_requestsNestedInput
    leave_request_histories?: leave_request_historyUpdateManyWithoutLeave_requestNestedInput
  }

  export type leave_requestUncheckedUpdateWithoutLeave_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutLeave_requestNestedInput
  }

  export type leave_requestUncheckedUpdateManyWithoutLeave_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
  }

  export type leave_policyUpdateWithoutLeave_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    max_days_per_year?: IntFieldUpdateOperationsInput | number
    max_days_per_request?: IntFieldUpdateOperationsInput | number
    carry_over_limit?: IntFieldUpdateOperationsInput | number
    carry_over_expiry?: IntFieldUpdateOperationsInput | number
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    effective_from?: DateTimeFieldUpdateOperationsInput | Date | string
    effective_to?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: departmentsUpdateOneWithoutLeave_policyNestedInput
  }

  export type leave_policyUncheckedUpdateWithoutLeave_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    max_days_per_year?: IntFieldUpdateOperationsInput | number
    max_days_per_request?: IntFieldUpdateOperationsInput | number
    carry_over_limit?: IntFieldUpdateOperationsInput | number
    carry_over_expiry?: IntFieldUpdateOperationsInput | number
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    effective_from?: DateTimeFieldUpdateOperationsInput | Date | string
    effective_to?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type leave_policyUncheckedUpdateManyWithoutLeave_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    max_days_per_year?: IntFieldUpdateOperationsInput | number
    max_days_per_request?: IntFieldUpdateOperationsInput | number
    carry_over_limit?: IntFieldUpdateOperationsInput | number
    carry_over_expiry?: IntFieldUpdateOperationsInput | number
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    effective_from?: DateTimeFieldUpdateOperationsInput | Date | string
    effective_to?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    department_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type leave_balanceUpdateWithoutLeave_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearly?: IntFieldUpdateOperationsInput | number
    totalEntitlement?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    carried_over?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutLeave_balancesNestedInput
  }

  export type leave_balanceUncheckedUpdateWithoutLeave_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearly?: IntFieldUpdateOperationsInput | number
    totalEntitlement?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    carried_over?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type leave_balanceUncheckedUpdateManyWithoutLeave_typeInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearly?: IntFieldUpdateOperationsInput | number
    totalEntitlement?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    carried_over?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type leave_requestCreateManyStatusInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    user_id: string
    leave_type_id: $Enums.LEAVE_TYPE
  }

  export type leave_request_historyCreateManyStatusInput = {
    id?: string
    comments: string
    created_at?: Date | string
    leave_request_id: string
    updated_by: string
  }

  export type leave_requestUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: userUpdateOneRequiredWithoutLeave_requestsNestedInput
    leave_type?: leave_typesUpdateOneRequiredWithoutLeave_requestsNestedInput
    leave_request_histories?: leave_request_historyUpdateManyWithoutLeave_requestNestedInput
  }

  export type leave_requestUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutLeave_requestNestedInput
  }

  export type leave_requestUncheckedUpdateManyWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
  }

  export type leave_request_historyUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_request?: leave_requestUpdateOneRequiredWithoutLeave_request_historiesNestedInput
    user?: userUpdateOneRequiredWithoutLeave_request_historiesNestedInput
  }

  export type leave_request_historyUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_request_id?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type leave_request_historyUncheckedUpdateManyWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_request_id?: StringFieldUpdateOperationsInput | string
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateManyDepartmentInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: number
    manager_id?: string | null
  }

  export type leave_policyCreateManyDepartmentInput = {
    id?: string
    max_days_per_year: number
    max_days_per_request: number
    carry_over_limit: number
    carry_over_expiry: number
    is_Active: boolean
    effective_from: Date | string
    effective_to: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    leave_type_id: $Enums.LEAVE_TYPE
  }

  export type holidayCreateManyDepartmentInput = {
    id?: string
    name: string
    date: Date | string
    is_Recurring: boolean
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    manager?: userUpdateOneWithoutSubordinatesNestedInput
    subordinates?: userUpdateManyWithoutManagerNestedInput
    leave_requests?: leave_requestUpdateManyWithoutUserNestedInput
    leave_balances?: leave_balanceUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: IntFieldUpdateOperationsInput | number
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
    subordinates?: userUncheckedUpdateManyWithoutManagerNestedInput
    leave_requests?: leave_requestUncheckedUpdateManyWithoutUserNestedInput
    leave_balances?: leave_balanceUncheckedUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: IntFieldUpdateOperationsInput | number
    manager_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type leave_policyUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    max_days_per_year?: IntFieldUpdateOperationsInput | number
    max_days_per_request?: IntFieldUpdateOperationsInput | number
    carry_over_limit?: IntFieldUpdateOperationsInput | number
    carry_over_expiry?: IntFieldUpdateOperationsInput | number
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    effective_from?: DateTimeFieldUpdateOperationsInput | Date | string
    effective_to?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_type?: leave_typesUpdateOneRequiredWithoutLeave_policiesNestedInput
  }

  export type leave_policyUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    max_days_per_year?: IntFieldUpdateOperationsInput | number
    max_days_per_request?: IntFieldUpdateOperationsInput | number
    carry_over_limit?: IntFieldUpdateOperationsInput | number
    carry_over_expiry?: IntFieldUpdateOperationsInput | number
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    effective_from?: DateTimeFieldUpdateOperationsInput | Date | string
    effective_to?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
  }

  export type leave_policyUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    max_days_per_year?: IntFieldUpdateOperationsInput | number
    max_days_per_request?: IntFieldUpdateOperationsInput | number
    carry_over_limit?: IntFieldUpdateOperationsInput | number
    carry_over_expiry?: IntFieldUpdateOperationsInput | number
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    effective_from?: DateTimeFieldUpdateOperationsInput | Date | string
    effective_to?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
  }

  export type holidayUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Recurring?: BoolFieldUpdateOperationsInput | boolean
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type holidayUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Recurring?: BoolFieldUpdateOperationsInput | boolean
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type holidayUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Recurring?: BoolFieldUpdateOperationsInput | boolean
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type leave_request_historyCreateManyLeave_requestInput = {
    id?: string
    comments: string
    created_at?: Date | string
    status_id: number
    updated_by: string
  }

  export type leave_request_historyUpdateWithoutLeave_requestInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: leave_statusUpdateOneRequiredWithoutLeave_request_historiesNestedInput
    user?: userUpdateOneRequiredWithoutLeave_request_historiesNestedInput
  }

  export type leave_request_historyUncheckedUpdateWithoutLeave_requestInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_id?: IntFieldUpdateOperationsInput | number
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type leave_request_historyUncheckedUpdateManyWithoutLeave_requestInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status_id?: IntFieldUpdateOperationsInput | number
    updated_by?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateManyManagerInput = {
    id?: string
    cus_id: string
    first_name: string
    last_name: string
    email: string
    password: string
    joined_date?: Date | string
    is_Active: boolean
    created_at?: Date | string
    updated_at?: Date | string
    role_id: number
    department_name: string
  }

  export type leave_requestCreateManyUserInput = {
    id?: string
    cus_id: string
    start_date: Date | string
    end_date: Date | string
    no_of_days: number
    reason: string
    applied_date?: Date | string
    leave_type_id: $Enums.LEAVE_TYPE
    status_id: number
  }

  export type leave_balanceCreateManyUserInput = {
    id?: string
    yearly: number
    totalEntitlement: number
    year: number
    used: number
    pending: number
    carried_over: number
    balance: number
    created_at?: Date | string
    updated_at?: Date | string
    leave_type_id: $Enums.LEAVE_TYPE
  }

  export type leave_request_historyCreateManyUserInput = {
    id?: string
    comments: string
    created_at?: Date | string
    leave_request_id: string
    status_id: number
  }

  export type userUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: rolesUpdateOneRequiredWithoutUsersNestedInput
    department?: departmentsUpdateOneRequiredWithoutUsersNestedInput
    subordinates?: userUpdateManyWithoutManagerNestedInput
    leave_requests?: leave_requestUpdateManyWithoutUserNestedInput
    leave_balances?: leave_balanceUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    subordinates?: userUncheckedUpdateManyWithoutManagerNestedInput
    leave_requests?: leave_requestUncheckedUpdateManyWithoutUserNestedInput
    leave_balances?: leave_balanceUncheckedUpdateManyWithoutUserNestedInput
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    joined_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_Active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
  }

  export type leave_requestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_type?: leave_typesUpdateOneRequiredWithoutLeave_requestsNestedInput
    status?: leave_statusUpdateOneRequiredWithoutLeave_requestsNestedInput
    leave_request_histories?: leave_request_historyUpdateManyWithoutLeave_requestNestedInput
  }

  export type leave_requestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    status_id?: IntFieldUpdateOperationsInput | number
    leave_request_histories?: leave_request_historyUncheckedUpdateManyWithoutLeave_requestNestedInput
  }

  export type leave_requestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cus_id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    no_of_days?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    applied_date?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
    status_id?: IntFieldUpdateOperationsInput | number
  }

  export type leave_balanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearly?: IntFieldUpdateOperationsInput | number
    totalEntitlement?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    carried_over?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_type?: leave_typesUpdateOneRequiredWithoutLeave_balancesNestedInput
  }

  export type leave_balanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearly?: IntFieldUpdateOperationsInput | number
    totalEntitlement?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    carried_over?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
  }

  export type leave_balanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    yearly?: IntFieldUpdateOperationsInput | number
    totalEntitlement?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    pending?: IntFieldUpdateOperationsInput | number
    carried_over?: IntFieldUpdateOperationsInput | number
    balance?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_type_id?: EnumLEAVE_TYPEFieldUpdateOperationsInput | $Enums.LEAVE_TYPE
  }

  export type leave_request_historyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_request?: leave_requestUpdateOneRequiredWithoutLeave_request_historiesNestedInput
    status?: leave_statusUpdateOneRequiredWithoutLeave_request_historiesNestedInput
  }

  export type leave_request_historyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_request_id?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
  }

  export type leave_request_historyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    leave_request_id?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}