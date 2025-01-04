
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
 * Model table
 * 
 */
export type table = $Result.DefaultSelection<Prisma.$tablePayload>
/**
 * Model command
 * 
 */
export type command = $Result.DefaultSelection<Prisma.$commandPayload>
/**
 * Model client
 * 
 */
export type client = $Result.DefaultSelection<Prisma.$clientPayload>
/**
 * Model product
 * 
 */
export type product = $Result.DefaultSelection<Prisma.$productPayload>
/**
 * Model waiter
 * 
 */
export type waiter = $Result.DefaultSelection<Prisma.$waiterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  CHOPP: 'CHOPP',
  FOOD: 'FOOD'
};

export type Category = (typeof Category)[keyof typeof Category]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tables
 * const tables = await prisma.table.findMany()
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
   * // Fetch zero or more Tables
   * const tables = await prisma.table.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.table`: Exposes CRUD operations for the **table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.tableDelegate<ExtArgs>;

  /**
   * `prisma.command`: Exposes CRUD operations for the **command** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commands
    * const commands = await prisma.command.findMany()
    * ```
    */
  get command(): Prisma.commandDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.clientDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.productDelegate<ExtArgs>;

  /**
   * `prisma.waiter`: Exposes CRUD operations for the **waiter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Waiters
    * const waiters = await prisma.waiter.findMany()
    * ```
    */
  get waiter(): Prisma.waiterDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    table: 'table',
    command: 'command',
    client: 'client',
    product: 'product',
    waiter: 'waiter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "table" | "command" | "client" | "product" | "waiter"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      table: {
        payload: Prisma.$tablePayload<ExtArgs>
        fields: Prisma.tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>
          }
          findFirst: {
            args: Prisma.tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>
          }
          findMany: {
            args: Prisma.tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>[]
          }
          create: {
            args: Prisma.tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>
          }
          createMany: {
            args: Prisma.tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>[]
          }
          delete: {
            args: Prisma.tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>
          }
          update: {
            args: Prisma.tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>
          }
          deleteMany: {
            args: Prisma.tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.tableCountArgs<ExtArgs>
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      command: {
        payload: Prisma.$commandPayload<ExtArgs>
        fields: Prisma.commandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.commandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.commandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandPayload>
          }
          findFirst: {
            args: Prisma.commandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.commandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandPayload>
          }
          findMany: {
            args: Prisma.commandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandPayload>[]
          }
          create: {
            args: Prisma.commandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandPayload>
          }
          createMany: {
            args: Prisma.commandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.commandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandPayload>[]
          }
          delete: {
            args: Prisma.commandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandPayload>
          }
          update: {
            args: Prisma.commandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandPayload>
          }
          deleteMany: {
            args: Prisma.commandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.commandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.commandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$commandPayload>
          }
          aggregate: {
            args: Prisma.CommandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommand>
          }
          groupBy: {
            args: Prisma.commandGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandGroupByOutputType>[]
          }
          count: {
            args: Prisma.commandCountArgs<ExtArgs>
            result: $Utils.Optional<CommandCountAggregateOutputType> | number
          }
        }
      }
      client: {
        payload: Prisma.$clientPayload<ExtArgs>
        fields: Prisma.clientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          findFirst: {
            args: Prisma.clientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          findMany: {
            args: Prisma.clientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[]
          }
          create: {
            args: Prisma.clientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          createMany: {
            args: Prisma.clientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>[]
          }
          delete: {
            args: Prisma.clientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          update: {
            args: Prisma.clientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          deleteMany: {
            args: Prisma.clientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.clientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.clientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      product: {
        payload: Prisma.$productPayload<ExtArgs>
        fields: Prisma.productFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findFirst: {
            args: Prisma.productFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          findMany: {
            args: Prisma.productFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          create: {
            args: Prisma.productCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          createMany: {
            args: Prisma.productCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>[]
          }
          delete: {
            args: Prisma.productDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          update: {
            args: Prisma.productUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          deleteMany: {
            args: Prisma.productDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.productGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.productCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      waiter: {
        payload: Prisma.$waiterPayload<ExtArgs>
        fields: Prisma.waiterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.waiterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.waiterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiterPayload>
          }
          findFirst: {
            args: Prisma.waiterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.waiterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiterPayload>
          }
          findMany: {
            args: Prisma.waiterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiterPayload>[]
          }
          create: {
            args: Prisma.waiterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiterPayload>
          }
          createMany: {
            args: Prisma.waiterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.waiterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiterPayload>[]
          }
          delete: {
            args: Prisma.waiterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiterPayload>
          }
          update: {
            args: Prisma.waiterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiterPayload>
          }
          deleteMany: {
            args: Prisma.waiterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.waiterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.waiterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$waiterPayload>
          }
          aggregate: {
            args: Prisma.WaiterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaiter>
          }
          groupBy: {
            args: Prisma.waiterGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaiterGroupByOutputType>[]
          }
          count: {
            args: Prisma.waiterCountArgs<ExtArgs>
            result: $Utils.Optional<WaiterCountAggregateOutputType> | number
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
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    command: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    command?: boolean | TableCountOutputTypeCountCommandArgs
  }

  // Custom InputTypes
  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountCommandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commandWhereInput
  }


  /**
   * Models
   */

  /**
   * Model table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableAvgAggregateOutputType = {
    tableNumber: number | null
  }

  export type TableSumAggregateOutputType = {
    tableNumber: number | null
  }

  export type TableMinAggregateOutputType = {
    tableNumber: number | null
    tableDescription: string | null
  }

  export type TableMaxAggregateOutputType = {
    tableNumber: number | null
    tableDescription: string | null
  }

  export type TableCountAggregateOutputType = {
    tableNumber: number
    tableDescription: number
    _all: number
  }


  export type TableAvgAggregateInputType = {
    tableNumber?: true
  }

  export type TableSumAggregateInputType = {
    tableNumber?: true
  }

  export type TableMinAggregateInputType = {
    tableNumber?: true
    tableDescription?: true
  }

  export type TableMaxAggregateInputType = {
    tableNumber?: true
    tableDescription?: true
  }

  export type TableCountAggregateInputType = {
    tableNumber?: true
    tableDescription?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which table to aggregate.
     */
    where?: tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tableWhereInput
    orderBy?: tableOrderByWithAggregationInput | tableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _avg?: TableAvgAggregateInputType
    _sum?: TableSumAggregateInputType
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    tableNumber: number
    tableDescription: string
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tableNumber?: boolean
    tableDescription?: boolean
    command?: boolean | table$commandArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type tableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tableNumber?: boolean
    tableDescription?: boolean
  }, ExtArgs["result"]["table"]>

  export type tableSelectScalar = {
    tableNumber?: boolean
    tableDescription?: boolean
  }

  export type tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    command?: boolean | table$commandArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "table"
    objects: {
      command: Prisma.$commandPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tableNumber: number
      tableDescription: string
    }, ExtArgs["result"]["table"]>
    composites: {}
  }

  type tableGetPayload<S extends boolean | null | undefined | tableDefaultArgs> = $Result.GetResult<Prisma.$tablePayload, S>

  type tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tableFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['table'], meta: { name: 'table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {tableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tableFindUniqueArgs>(args: SelectSubset<T, tableFindUniqueArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Table that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tableFindUniqueOrThrowArgs>(args: SelectSubset<T, tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tableFindFirstArgs>(args?: SelectSubset<T, tableFindFirstArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tableFindFirstOrThrowArgs>(args?: SelectSubset<T, tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `tableNumber`
     * const tableWithTableNumberOnly = await prisma.table.findMany({ select: { tableNumber: true } })
     * 
     */
    findMany<T extends tableFindManyArgs>(args?: SelectSubset<T, tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Table.
     * @param {tableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
     */
    create<T extends tableCreateArgs>(args: SelectSubset<T, tableCreateArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tables.
     * @param {tableCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tableCreateManyArgs>(args?: SelectSubset<T, tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {tableCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `tableNumber`
     * const tableWithTableNumberOnly = await prisma.table.createManyAndReturn({ 
     *   select: { tableNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tableCreateManyAndReturnArgs>(args?: SelectSubset<T, tableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Table.
     * @param {tableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
     */
    delete<T extends tableDeleteArgs>(args: SelectSubset<T, tableDeleteArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Table.
     * @param {tableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tableUpdateArgs>(args: SelectSubset<T, tableUpdateArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tables.
     * @param {tableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tableDeleteManyArgs>(args?: SelectSubset<T, tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tableUpdateManyArgs>(args: SelectSubset<T, tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Table.
     * @param {tableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     */
    upsert<T extends tableUpsertArgs>(args: SelectSubset<T, tableUpsertArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends tableCountArgs>(
      args?: Subset<T, tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tableGroupByArgs} args - Group by arguments.
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
      T extends tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tableGroupByArgs['orderBy'] }
        : { orderBy?: tableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the table model
   */
  readonly fields: tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    command<T extends table$commandArgs<ExtArgs> = {}>(args?: Subset<T, table$commandArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commandPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the table model
   */ 
  interface tableFieldRefs {
    readonly tableNumber: FieldRef<"table", 'Int'>
    readonly tableDescription: FieldRef<"table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * table findUnique
   */
  export type tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * Filter, which table to fetch.
     */
    where: tableWhereUniqueInput
  }

  /**
   * table findUniqueOrThrow
   */
  export type tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * Filter, which table to fetch.
     */
    where: tableWhereUniqueInput
  }

  /**
   * table findFirst
   */
  export type tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * Filter, which table to fetch.
     */
    where?: tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tables.
     */
    cursor?: tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * table findFirstOrThrow
   */
  export type tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * Filter, which table to fetch.
     */
    where?: tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tables.
     */
    cursor?: tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * table findMany
   */
  export type tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * Filter, which tables to fetch.
     */
    where?: tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tables to fetch.
     */
    orderBy?: tableOrderByWithRelationInput | tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tables.
     */
    cursor?: tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * table create
   */
  export type tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * The data needed to create a table.
     */
    data: XOR<tableCreateInput, tableUncheckedCreateInput>
  }

  /**
   * table createMany
   */
  export type tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tables.
     */
    data: tableCreateManyInput | tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * table createManyAndReturn
   */
  export type tableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many tables.
     */
    data: tableCreateManyInput | tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * table update
   */
  export type tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * The data needed to update a table.
     */
    data: XOR<tableUpdateInput, tableUncheckedUpdateInput>
    /**
     * Choose, which table to update.
     */
    where: tableWhereUniqueInput
  }

  /**
   * table updateMany
   */
  export type tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tables.
     */
    data: XOR<tableUpdateManyMutationInput, tableUncheckedUpdateManyInput>
    /**
     * Filter which tables to update
     */
    where?: tableWhereInput
  }

  /**
   * table upsert
   */
  export type tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * The filter to search for the table to update in case it exists.
     */
    where: tableWhereUniqueInput
    /**
     * In case the table found by the `where` argument doesn't exist, create a new table with this data.
     */
    create: XOR<tableCreateInput, tableUncheckedCreateInput>
    /**
     * In case the table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tableUpdateInput, tableUncheckedUpdateInput>
  }

  /**
   * table delete
   */
  export type tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    /**
     * Filter which table to delete.
     */
    where: tableWhereUniqueInput
  }

  /**
   * table deleteMany
   */
  export type tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tables to delete
     */
    where?: tableWhereInput
  }

  /**
   * table.command
   */
  export type table$commandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the command
     */
    select?: commandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandInclude<ExtArgs> | null
    where?: commandWhereInput
    orderBy?: commandOrderByWithRelationInput | commandOrderByWithRelationInput[]
    cursor?: commandWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * table without action
   */
  export type tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
  }


  /**
   * Model command
   */

  export type AggregateCommand = {
    _count: CommandCountAggregateOutputType | null
    _avg: CommandAvgAggregateOutputType | null
    _sum: CommandSumAggregateOutputType | null
    _min: CommandMinAggregateOutputType | null
    _max: CommandMaxAggregateOutputType | null
  }

  export type CommandAvgAggregateOutputType = {
    commandNumber: number | null
    tableNumber: number | null
  }

  export type CommandSumAggregateOutputType = {
    commandNumber: number | null
    tableNumber: number | null
  }

  export type CommandMinAggregateOutputType = {
    commandNumber: number | null
    tableNumber: number | null
  }

  export type CommandMaxAggregateOutputType = {
    commandNumber: number | null
    tableNumber: number | null
  }

  export type CommandCountAggregateOutputType = {
    commandNumber: number
    tableNumber: number
    _all: number
  }


  export type CommandAvgAggregateInputType = {
    commandNumber?: true
    tableNumber?: true
  }

  export type CommandSumAggregateInputType = {
    commandNumber?: true
    tableNumber?: true
  }

  export type CommandMinAggregateInputType = {
    commandNumber?: true
    tableNumber?: true
  }

  export type CommandMaxAggregateInputType = {
    commandNumber?: true
    tableNumber?: true
  }

  export type CommandCountAggregateInputType = {
    commandNumber?: true
    tableNumber?: true
    _all?: true
  }

  export type CommandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which command to aggregate.
     */
    where?: commandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: commandOrderByWithRelationInput | commandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: commandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned commands
    **/
    _count?: true | CommandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommandAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommandSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandMaxAggregateInputType
  }

  export type GetCommandAggregateType<T extends CommandAggregateArgs> = {
        [P in keyof T & keyof AggregateCommand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommand[P]>
      : GetScalarType<T[P], AggregateCommand[P]>
  }




  export type commandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: commandWhereInput
    orderBy?: commandOrderByWithAggregationInput | commandOrderByWithAggregationInput[]
    by: CommandScalarFieldEnum[] | CommandScalarFieldEnum
    having?: commandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandCountAggregateInputType | true
    _avg?: CommandAvgAggregateInputType
    _sum?: CommandSumAggregateInputType
    _min?: CommandMinAggregateInputType
    _max?: CommandMaxAggregateInputType
  }

  export type CommandGroupByOutputType = {
    commandNumber: number
    tableNumber: number | null
    _count: CommandCountAggregateOutputType | null
    _avg: CommandAvgAggregateOutputType | null
    _sum: CommandSumAggregateOutputType | null
    _min: CommandMinAggregateOutputType | null
    _max: CommandMaxAggregateOutputType | null
  }

  type GetCommandGroupByPayload<T extends commandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandGroupByOutputType[P]>
            : GetScalarType<T[P], CommandGroupByOutputType[P]>
        }
      >
    >


  export type commandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commandNumber?: boolean
    tableNumber?: boolean
    table?: boolean | command$tableArgs<ExtArgs>
    client?: boolean | command$clientArgs<ExtArgs>
  }, ExtArgs["result"]["command"]>

  export type commandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    commandNumber?: boolean
    tableNumber?: boolean
    table?: boolean | command$tableArgs<ExtArgs>
  }, ExtArgs["result"]["command"]>

  export type commandSelectScalar = {
    commandNumber?: boolean
    tableNumber?: boolean
  }

  export type commandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | command$tableArgs<ExtArgs>
    client?: boolean | command$clientArgs<ExtArgs>
  }
  export type commandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | command$tableArgs<ExtArgs>
  }

  export type $commandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "command"
    objects: {
      table: Prisma.$tablePayload<ExtArgs> | null
      client: Prisma.$clientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      commandNumber: number
      tableNumber: number | null
    }, ExtArgs["result"]["command"]>
    composites: {}
  }

  type commandGetPayload<S extends boolean | null | undefined | commandDefaultArgs> = $Result.GetResult<Prisma.$commandPayload, S>

  type commandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<commandFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommandCountAggregateInputType | true
    }

  export interface commandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['command'], meta: { name: 'command' } }
    /**
     * Find zero or one Command that matches the filter.
     * @param {commandFindUniqueArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends commandFindUniqueArgs>(args: SelectSubset<T, commandFindUniqueArgs<ExtArgs>>): Prisma__commandClient<$Result.GetResult<Prisma.$commandPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Command that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {commandFindUniqueOrThrowArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends commandFindUniqueOrThrowArgs>(args: SelectSubset<T, commandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__commandClient<$Result.GetResult<Prisma.$commandPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Command that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandFindFirstArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends commandFindFirstArgs>(args?: SelectSubset<T, commandFindFirstArgs<ExtArgs>>): Prisma__commandClient<$Result.GetResult<Prisma.$commandPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Command that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandFindFirstOrThrowArgs} args - Arguments to find a Command
     * @example
     * // Get one Command
     * const command = await prisma.command.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends commandFindFirstOrThrowArgs>(args?: SelectSubset<T, commandFindFirstOrThrowArgs<ExtArgs>>): Prisma__commandClient<$Result.GetResult<Prisma.$commandPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Commands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commands
     * const commands = await prisma.command.findMany()
     * 
     * // Get first 10 Commands
     * const commands = await prisma.command.findMany({ take: 10 })
     * 
     * // Only select the `commandNumber`
     * const commandWithCommandNumberOnly = await prisma.command.findMany({ select: { commandNumber: true } })
     * 
     */
    findMany<T extends commandFindManyArgs>(args?: SelectSubset<T, commandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commandPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Command.
     * @param {commandCreateArgs} args - Arguments to create a Command.
     * @example
     * // Create one Command
     * const Command = await prisma.command.create({
     *   data: {
     *     // ... data to create a Command
     *   }
     * })
     * 
     */
    create<T extends commandCreateArgs>(args: SelectSubset<T, commandCreateArgs<ExtArgs>>): Prisma__commandClient<$Result.GetResult<Prisma.$commandPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Commands.
     * @param {commandCreateManyArgs} args - Arguments to create many Commands.
     * @example
     * // Create many Commands
     * const command = await prisma.command.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends commandCreateManyArgs>(args?: SelectSubset<T, commandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commands and returns the data saved in the database.
     * @param {commandCreateManyAndReturnArgs} args - Arguments to create many Commands.
     * @example
     * // Create many Commands
     * const command = await prisma.command.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commands and only return the `commandNumber`
     * const commandWithCommandNumberOnly = await prisma.command.createManyAndReturn({ 
     *   select: { commandNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends commandCreateManyAndReturnArgs>(args?: SelectSubset<T, commandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$commandPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Command.
     * @param {commandDeleteArgs} args - Arguments to delete one Command.
     * @example
     * // Delete one Command
     * const Command = await prisma.command.delete({
     *   where: {
     *     // ... filter to delete one Command
     *   }
     * })
     * 
     */
    delete<T extends commandDeleteArgs>(args: SelectSubset<T, commandDeleteArgs<ExtArgs>>): Prisma__commandClient<$Result.GetResult<Prisma.$commandPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Command.
     * @param {commandUpdateArgs} args - Arguments to update one Command.
     * @example
     * // Update one Command
     * const command = await prisma.command.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends commandUpdateArgs>(args: SelectSubset<T, commandUpdateArgs<ExtArgs>>): Prisma__commandClient<$Result.GetResult<Prisma.$commandPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Commands.
     * @param {commandDeleteManyArgs} args - Arguments to filter Commands to delete.
     * @example
     * // Delete a few Commands
     * const { count } = await prisma.command.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends commandDeleteManyArgs>(args?: SelectSubset<T, commandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commands
     * const command = await prisma.command.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends commandUpdateManyArgs>(args: SelectSubset<T, commandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Command.
     * @param {commandUpsertArgs} args - Arguments to update or create a Command.
     * @example
     * // Update or create a Command
     * const command = await prisma.command.upsert({
     *   create: {
     *     // ... data to create a Command
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Command we want to update
     *   }
     * })
     */
    upsert<T extends commandUpsertArgs>(args: SelectSubset<T, commandUpsertArgs<ExtArgs>>): Prisma__commandClient<$Result.GetResult<Prisma.$commandPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Commands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandCountArgs} args - Arguments to filter Commands to count.
     * @example
     * // Count the number of Commands
     * const count = await prisma.command.count({
     *   where: {
     *     // ... the filter for the Commands we want to count
     *   }
     * })
    **/
    count<T extends commandCountArgs>(
      args?: Subset<T, commandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Command.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandAggregateArgs>(args: Subset<T, CommandAggregateArgs>): Prisma.PrismaPromise<GetCommandAggregateType<T>>

    /**
     * Group by Command.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {commandGroupByArgs} args - Group by arguments.
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
      T extends commandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: commandGroupByArgs['orderBy'] }
        : { orderBy?: commandGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, commandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the command model
   */
  readonly fields: commandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for command.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__commandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends command$tableArgs<ExtArgs> = {}>(args?: Subset<T, command$tableArgs<ExtArgs>>): Prisma__tableClient<$Result.GetResult<Prisma.$tablePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    client<T extends command$clientArgs<ExtArgs> = {}>(args?: Subset<T, command$clientArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the command model
   */ 
  interface commandFieldRefs {
    readonly commandNumber: FieldRef<"command", 'Int'>
    readonly tableNumber: FieldRef<"command", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * command findUnique
   */
  export type commandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the command
     */
    select?: commandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandInclude<ExtArgs> | null
    /**
     * Filter, which command to fetch.
     */
    where: commandWhereUniqueInput
  }

  /**
   * command findUniqueOrThrow
   */
  export type commandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the command
     */
    select?: commandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandInclude<ExtArgs> | null
    /**
     * Filter, which command to fetch.
     */
    where: commandWhereUniqueInput
  }

  /**
   * command findFirst
   */
  export type commandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the command
     */
    select?: commandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandInclude<ExtArgs> | null
    /**
     * Filter, which command to fetch.
     */
    where?: commandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: commandOrderByWithRelationInput | commandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commands.
     */
    cursor?: commandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commands.
     */
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * command findFirstOrThrow
   */
  export type commandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the command
     */
    select?: commandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandInclude<ExtArgs> | null
    /**
     * Filter, which command to fetch.
     */
    where?: commandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: commandOrderByWithRelationInput | commandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for commands.
     */
    cursor?: commandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of commands.
     */
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * command findMany
   */
  export type commandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the command
     */
    select?: commandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandInclude<ExtArgs> | null
    /**
     * Filter, which commands to fetch.
     */
    where?: commandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of commands to fetch.
     */
    orderBy?: commandOrderByWithRelationInput | commandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing commands.
     */
    cursor?: commandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` commands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` commands.
     */
    skip?: number
    distinct?: CommandScalarFieldEnum | CommandScalarFieldEnum[]
  }

  /**
   * command create
   */
  export type commandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the command
     */
    select?: commandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandInclude<ExtArgs> | null
    /**
     * The data needed to create a command.
     */
    data: XOR<commandCreateInput, commandUncheckedCreateInput>
  }

  /**
   * command createMany
   */
  export type commandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many commands.
     */
    data: commandCreateManyInput | commandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * command createManyAndReturn
   */
  export type commandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the command
     */
    select?: commandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many commands.
     */
    data: commandCreateManyInput | commandCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * command update
   */
  export type commandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the command
     */
    select?: commandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandInclude<ExtArgs> | null
    /**
     * The data needed to update a command.
     */
    data: XOR<commandUpdateInput, commandUncheckedUpdateInput>
    /**
     * Choose, which command to update.
     */
    where: commandWhereUniqueInput
  }

  /**
   * command updateMany
   */
  export type commandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update commands.
     */
    data: XOR<commandUpdateManyMutationInput, commandUncheckedUpdateManyInput>
    /**
     * Filter which commands to update
     */
    where?: commandWhereInput
  }

  /**
   * command upsert
   */
  export type commandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the command
     */
    select?: commandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandInclude<ExtArgs> | null
    /**
     * The filter to search for the command to update in case it exists.
     */
    where: commandWhereUniqueInput
    /**
     * In case the command found by the `where` argument doesn't exist, create a new command with this data.
     */
    create: XOR<commandCreateInput, commandUncheckedCreateInput>
    /**
     * In case the command was found with the provided `where` argument, update it with this data.
     */
    update: XOR<commandUpdateInput, commandUncheckedUpdateInput>
  }

  /**
   * command delete
   */
  export type commandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the command
     */
    select?: commandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandInclude<ExtArgs> | null
    /**
     * Filter which command to delete.
     */
    where: commandWhereUniqueInput
  }

  /**
   * command deleteMany
   */
  export type commandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which commands to delete
     */
    where?: commandWhereInput
  }

  /**
   * command.table
   */
  export type command$tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the table
     */
    select?: tableSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tableInclude<ExtArgs> | null
    where?: tableWhereInput
  }

  /**
   * command.client
   */
  export type command$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    where?: clientWhereInput
  }

  /**
   * command without action
   */
  export type commandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the command
     */
    select?: commandSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: commandInclude<ExtArgs> | null
  }


  /**
   * Model client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    clientId: number | null
  }

  export type ClientSumAggregateOutputType = {
    clientId: number | null
  }

  export type ClientMinAggregateOutputType = {
    clientId: number | null
    name: string | null
  }

  export type ClientMaxAggregateOutputType = {
    clientId: number | null
    name: string | null
  }

  export type ClientCountAggregateOutputType = {
    clientId: number
    name: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    clientId?: true
  }

  export type ClientSumAggregateInputType = {
    clientId?: true
  }

  export type ClientMinAggregateInputType = {
    clientId?: true
    name?: true
  }

  export type ClientMaxAggregateInputType = {
    clientId?: true
    name?: true
  }

  export type ClientCountAggregateInputType = {
    clientId?: true
    name?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which client to aggregate.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type clientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clientWhereInput
    orderBy?: clientOrderByWithAggregationInput | clientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: clientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    clientId: number
    name: string
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends clientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type clientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    name?: boolean
    command?: boolean | commandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type clientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    clientId?: boolean
    name?: boolean
    command?: boolean | commandDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type clientSelectScalar = {
    clientId?: boolean
    name?: boolean
  }

  export type clientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    command?: boolean | commandDefaultArgs<ExtArgs>
  }
  export type clientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    command?: boolean | commandDefaultArgs<ExtArgs>
  }

  export type $clientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "client"
    objects: {
      command: Prisma.$commandPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      clientId: number
      name: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type clientGetPayload<S extends boolean | null | undefined | clientDefaultArgs> = $Result.GetResult<Prisma.$clientPayload, S>

  type clientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface clientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['client'], meta: { name: 'client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {clientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clientFindUniqueArgs>(args: SelectSubset<T, clientFindUniqueArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {clientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clientFindUniqueOrThrowArgs>(args: SelectSubset<T, clientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clientFindFirstArgs>(args?: SelectSubset<T, clientFindFirstArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clientFindFirstOrThrowArgs>(args?: SelectSubset<T, clientFindFirstOrThrowArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `clientId`
     * const clientWithClientIdOnly = await prisma.client.findMany({ select: { clientId: true } })
     * 
     */
    findMany<T extends clientFindManyArgs>(args?: SelectSubset<T, clientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Client.
     * @param {clientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends clientCreateArgs>(args: SelectSubset<T, clientCreateArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clients.
     * @param {clientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clientCreateManyArgs>(args?: SelectSubset<T, clientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {clientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `clientId`
     * const clientWithClientIdOnly = await prisma.client.createManyAndReturn({ 
     *   select: { clientId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clientCreateManyAndReturnArgs>(args?: SelectSubset<T, clientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Client.
     * @param {clientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends clientDeleteArgs>(args: SelectSubset<T, clientDeleteArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Client.
     * @param {clientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clientUpdateArgs>(args: SelectSubset<T, clientUpdateArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {clientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clientDeleteManyArgs>(args?: SelectSubset<T, clientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clientUpdateManyArgs>(args: SelectSubset<T, clientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {clientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends clientUpsertArgs>(args: SelectSubset<T, clientUpsertArgs<ExtArgs>>): Prisma__clientClient<$Result.GetResult<Prisma.$clientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends clientCountArgs>(
      args?: Subset<T, clientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clientGroupByArgs} args - Group by arguments.
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
      T extends clientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clientGroupByArgs['orderBy'] }
        : { orderBy?: clientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the client model
   */
  readonly fields: clientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    command<T extends commandDefaultArgs<ExtArgs> = {}>(args?: Subset<T, commandDefaultArgs<ExtArgs>>): Prisma__commandClient<$Result.GetResult<Prisma.$commandPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the client model
   */ 
  interface clientFieldRefs {
    readonly clientId: FieldRef<"client", 'Int'>
    readonly name: FieldRef<"client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * client findUnique
   */
  export type clientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client findUniqueOrThrow
   */
  export type clientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client findFirst
   */
  export type clientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client findFirstOrThrow
   */
  export type clientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which client to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client findMany
   */
  export type clientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter, which clients to fetch.
     */
    where?: clientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clients to fetch.
     */
    orderBy?: clientOrderByWithRelationInput | clientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clients.
     */
    cursor?: clientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * client create
   */
  export type clientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The data needed to create a client.
     */
    data: XOR<clientCreateInput, clientUncheckedCreateInput>
  }

  /**
   * client createMany
   */
  export type clientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clients.
     */
    data: clientCreateManyInput | clientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * client createManyAndReturn
   */
  export type clientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many clients.
     */
    data: clientCreateManyInput | clientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * client update
   */
  export type clientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The data needed to update a client.
     */
    data: XOR<clientUpdateInput, clientUncheckedUpdateInput>
    /**
     * Choose, which client to update.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client updateMany
   */
  export type clientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clients.
     */
    data: XOR<clientUpdateManyMutationInput, clientUncheckedUpdateManyInput>
    /**
     * Filter which clients to update
     */
    where?: clientWhereInput
  }

  /**
   * client upsert
   */
  export type clientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * The filter to search for the client to update in case it exists.
     */
    where: clientWhereUniqueInput
    /**
     * In case the client found by the `where` argument doesn't exist, create a new client with this data.
     */
    create: XOR<clientCreateInput, clientUncheckedCreateInput>
    /**
     * In case the client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clientUpdateInput, clientUncheckedUpdateInput>
  }

  /**
   * client delete
   */
  export type clientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
    /**
     * Filter which client to delete.
     */
    where: clientWhereUniqueInput
  }

  /**
   * client deleteMany
   */
  export type clientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clients to delete
     */
    where?: clientWhereInput
  }

  /**
   * client without action
   */
  export type clientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the client
     */
    select?: clientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: clientInclude<ExtArgs> | null
  }


  /**
   * Model product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    productId: number | null
    price: number | null
  }

  export type ProductSumAggregateOutputType = {
    productId: number | null
    price: number | null
  }

  export type ProductMinAggregateOutputType = {
    productId: number | null
    name: string | null
    category: $Enums.Category | null
    price: number | null
  }

  export type ProductMaxAggregateOutputType = {
    productId: number | null
    name: string | null
    category: $Enums.Category | null
    price: number | null
  }

  export type ProductCountAggregateOutputType = {
    productId: number
    name: number
    category: number
    price: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    productId?: true
    price?: true
  }

  export type ProductSumAggregateInputType = {
    productId?: true
    price?: true
  }

  export type ProductMinAggregateInputType = {
    productId?: true
    name?: true
    category?: true
    price?: true
  }

  export type ProductMaxAggregateInputType = {
    productId?: true
    name?: true
    category?: true
    price?: true
  }

  export type ProductCountAggregateInputType = {
    productId?: true
    name?: true
    category?: true
    price?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product to aggregate.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type productGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productWhereInput
    orderBy?: productOrderByWithAggregationInput | productOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: productScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    productId: number
    name: string
    category: $Enums.Category
    price: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends productGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type productSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
  }, ExtArgs["result"]["product"]>

  export type productSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
  }, ExtArgs["result"]["product"]>

  export type productSelectScalar = {
    productId?: boolean
    name?: boolean
    category?: boolean
    price?: boolean
  }


  export type $productPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      name: string
      category: $Enums.Category
      price: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type productGetPayload<S extends boolean | null | undefined | productDefaultArgs> = $Result.GetResult<Prisma.$productPayload, S>

  type productCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<productFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface productDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product'], meta: { name: 'product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {productFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productFindUniqueArgs>(args: SelectSubset<T, productFindUniqueArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {productFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productFindUniqueOrThrowArgs>(args: SelectSubset<T, productFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productFindFirstArgs>(args?: SelectSubset<T, productFindFirstArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productFindFirstOrThrowArgs>(args?: SelectSubset<T, productFindFirstOrThrowArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productWithProductIdOnly = await prisma.product.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends productFindManyArgs>(args?: SelectSubset<T, productFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {productCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends productCreateArgs>(args: SelectSubset<T, productCreateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {productCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productCreateManyArgs>(args?: SelectSubset<T, productCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `productId`
     * const productWithProductIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productCreateManyAndReturnArgs>(args?: SelectSubset<T, productCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {productDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends productDeleteArgs>(args: SelectSubset<T, productDeleteArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {productUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productUpdateArgs>(args: SelectSubset<T, productUpdateArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {productDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productDeleteManyArgs>(args?: SelectSubset<T, productDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productUpdateManyArgs>(args: SelectSubset<T, productUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {productUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends productUpsertArgs>(args: SelectSubset<T, productUpsertArgs<ExtArgs>>): Prisma__productClient<$Result.GetResult<Prisma.$productPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productCountArgs>(
      args?: Subset<T, productCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productGroupByArgs} args - Group by arguments.
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
      T extends productGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productGroupByArgs['orderBy'] }
        : { orderBy?: productGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product model
   */
  readonly fields: productFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the product model
   */ 
  interface productFieldRefs {
    readonly productId: FieldRef<"product", 'Int'>
    readonly name: FieldRef<"product", 'String'>
    readonly category: FieldRef<"product", 'Category'>
    readonly price: FieldRef<"product", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * product findUnique
   */
  export type productFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findUniqueOrThrow
   */
  export type productFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where: productWhereUniqueInput
  }

  /**
   * product findFirst
   */
  export type productFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findFirstOrThrow
   */
  export type productFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Filter, which product to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product findMany
   */
  export type productFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productOrderByWithRelationInput | productOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * product create
   */
  export type productCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * The data needed to create a product.
     */
    data: XOR<productCreateInput, productUncheckedCreateInput>
  }

  /**
   * product createMany
   */
  export type productCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product createManyAndReturn
   */
  export type productCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productCreateManyInput | productCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product update
   */
  export type productUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * The data needed to update a product.
     */
    data: XOR<productUpdateInput, productUncheckedUpdateInput>
    /**
     * Choose, which product to update.
     */
    where: productWhereUniqueInput
  }

  /**
   * product updateMany
   */
  export type productUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productUpdateManyMutationInput, productUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productWhereInput
  }

  /**
   * product upsert
   */
  export type productUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * The filter to search for the product to update in case it exists.
     */
    where: productWhereUniqueInput
    /**
     * In case the product found by the `where` argument doesn't exist, create a new product with this data.
     */
    create: XOR<productCreateInput, productUncheckedCreateInput>
    /**
     * In case the product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productUpdateInput, productUncheckedUpdateInput>
  }

  /**
   * product delete
   */
  export type productDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
    /**
     * Filter which product to delete.
     */
    where: productWhereUniqueInput
  }

  /**
   * product deleteMany
   */
  export type productDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productWhereInput
  }

  /**
   * product without action
   */
  export type productDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product
     */
    select?: productSelect<ExtArgs> | null
  }


  /**
   * Model waiter
   */

  export type AggregateWaiter = {
    _count: WaiterCountAggregateOutputType | null
    _avg: WaiterAvgAggregateOutputType | null
    _sum: WaiterSumAggregateOutputType | null
    _min: WaiterMinAggregateOutputType | null
    _max: WaiterMaxAggregateOutputType | null
  }

  export type WaiterAvgAggregateOutputType = {
    waiterId: number | null
  }

  export type WaiterSumAggregateOutputType = {
    waiterId: number | null
  }

  export type WaiterMinAggregateOutputType = {
    waiterId: number | null
    username: string | null
    password: string | null
    name: string | null
  }

  export type WaiterMaxAggregateOutputType = {
    waiterId: number | null
    username: string | null
    password: string | null
    name: string | null
  }

  export type WaiterCountAggregateOutputType = {
    waiterId: number
    username: number
    password: number
    name: number
    _all: number
  }


  export type WaiterAvgAggregateInputType = {
    waiterId?: true
  }

  export type WaiterSumAggregateInputType = {
    waiterId?: true
  }

  export type WaiterMinAggregateInputType = {
    waiterId?: true
    username?: true
    password?: true
    name?: true
  }

  export type WaiterMaxAggregateInputType = {
    waiterId?: true
    username?: true
    password?: true
    name?: true
  }

  export type WaiterCountAggregateInputType = {
    waiterId?: true
    username?: true
    password?: true
    name?: true
    _all?: true
  }

  export type WaiterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which waiter to aggregate.
     */
    where?: waiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waiters to fetch.
     */
    orderBy?: waiterOrderByWithRelationInput | waiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: waiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waiters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned waiters
    **/
    _count?: true | WaiterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaiterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaiterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaiterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaiterMaxAggregateInputType
  }

  export type GetWaiterAggregateType<T extends WaiterAggregateArgs> = {
        [P in keyof T & keyof AggregateWaiter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaiter[P]>
      : GetScalarType<T[P], AggregateWaiter[P]>
  }




  export type waiterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: waiterWhereInput
    orderBy?: waiterOrderByWithAggregationInput | waiterOrderByWithAggregationInput[]
    by: WaiterScalarFieldEnum[] | WaiterScalarFieldEnum
    having?: waiterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaiterCountAggregateInputType | true
    _avg?: WaiterAvgAggregateInputType
    _sum?: WaiterSumAggregateInputType
    _min?: WaiterMinAggregateInputType
    _max?: WaiterMaxAggregateInputType
  }

  export type WaiterGroupByOutputType = {
    waiterId: number
    username: string
    password: string
    name: string
    _count: WaiterCountAggregateOutputType | null
    _avg: WaiterAvgAggregateOutputType | null
    _sum: WaiterSumAggregateOutputType | null
    _min: WaiterMinAggregateOutputType | null
    _max: WaiterMaxAggregateOutputType | null
  }

  type GetWaiterGroupByPayload<T extends waiterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaiterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaiterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaiterGroupByOutputType[P]>
            : GetScalarType<T[P], WaiterGroupByOutputType[P]>
        }
      >
    >


  export type waiterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    waiterId?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["waiter"]>

  export type waiterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    waiterId?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
  }, ExtArgs["result"]["waiter"]>

  export type waiterSelectScalar = {
    waiterId?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
  }


  export type $waiterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "waiter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      waiterId: number
      username: string
      password: string
      name: string
    }, ExtArgs["result"]["waiter"]>
    composites: {}
  }

  type waiterGetPayload<S extends boolean | null | undefined | waiterDefaultArgs> = $Result.GetResult<Prisma.$waiterPayload, S>

  type waiterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<waiterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WaiterCountAggregateInputType | true
    }

  export interface waiterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['waiter'], meta: { name: 'waiter' } }
    /**
     * Find zero or one Waiter that matches the filter.
     * @param {waiterFindUniqueArgs} args - Arguments to find a Waiter
     * @example
     * // Get one Waiter
     * const waiter = await prisma.waiter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends waiterFindUniqueArgs>(args: SelectSubset<T, waiterFindUniqueArgs<ExtArgs>>): Prisma__waiterClient<$Result.GetResult<Prisma.$waiterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Waiter that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {waiterFindUniqueOrThrowArgs} args - Arguments to find a Waiter
     * @example
     * // Get one Waiter
     * const waiter = await prisma.waiter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends waiterFindUniqueOrThrowArgs>(args: SelectSubset<T, waiterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__waiterClient<$Result.GetResult<Prisma.$waiterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Waiter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waiterFindFirstArgs} args - Arguments to find a Waiter
     * @example
     * // Get one Waiter
     * const waiter = await prisma.waiter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends waiterFindFirstArgs>(args?: SelectSubset<T, waiterFindFirstArgs<ExtArgs>>): Prisma__waiterClient<$Result.GetResult<Prisma.$waiterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Waiter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waiterFindFirstOrThrowArgs} args - Arguments to find a Waiter
     * @example
     * // Get one Waiter
     * const waiter = await prisma.waiter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends waiterFindFirstOrThrowArgs>(args?: SelectSubset<T, waiterFindFirstOrThrowArgs<ExtArgs>>): Prisma__waiterClient<$Result.GetResult<Prisma.$waiterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Waiters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waiterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Waiters
     * const waiters = await prisma.waiter.findMany()
     * 
     * // Get first 10 Waiters
     * const waiters = await prisma.waiter.findMany({ take: 10 })
     * 
     * // Only select the `waiterId`
     * const waiterWithWaiterIdOnly = await prisma.waiter.findMany({ select: { waiterId: true } })
     * 
     */
    findMany<T extends waiterFindManyArgs>(args?: SelectSubset<T, waiterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waiterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Waiter.
     * @param {waiterCreateArgs} args - Arguments to create a Waiter.
     * @example
     * // Create one Waiter
     * const Waiter = await prisma.waiter.create({
     *   data: {
     *     // ... data to create a Waiter
     *   }
     * })
     * 
     */
    create<T extends waiterCreateArgs>(args: SelectSubset<T, waiterCreateArgs<ExtArgs>>): Prisma__waiterClient<$Result.GetResult<Prisma.$waiterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Waiters.
     * @param {waiterCreateManyArgs} args - Arguments to create many Waiters.
     * @example
     * // Create many Waiters
     * const waiter = await prisma.waiter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends waiterCreateManyArgs>(args?: SelectSubset<T, waiterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Waiters and returns the data saved in the database.
     * @param {waiterCreateManyAndReturnArgs} args - Arguments to create many Waiters.
     * @example
     * // Create many Waiters
     * const waiter = await prisma.waiter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Waiters and only return the `waiterId`
     * const waiterWithWaiterIdOnly = await prisma.waiter.createManyAndReturn({ 
     *   select: { waiterId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends waiterCreateManyAndReturnArgs>(args?: SelectSubset<T, waiterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$waiterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Waiter.
     * @param {waiterDeleteArgs} args - Arguments to delete one Waiter.
     * @example
     * // Delete one Waiter
     * const Waiter = await prisma.waiter.delete({
     *   where: {
     *     // ... filter to delete one Waiter
     *   }
     * })
     * 
     */
    delete<T extends waiterDeleteArgs>(args: SelectSubset<T, waiterDeleteArgs<ExtArgs>>): Prisma__waiterClient<$Result.GetResult<Prisma.$waiterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Waiter.
     * @param {waiterUpdateArgs} args - Arguments to update one Waiter.
     * @example
     * // Update one Waiter
     * const waiter = await prisma.waiter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends waiterUpdateArgs>(args: SelectSubset<T, waiterUpdateArgs<ExtArgs>>): Prisma__waiterClient<$Result.GetResult<Prisma.$waiterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Waiters.
     * @param {waiterDeleteManyArgs} args - Arguments to filter Waiters to delete.
     * @example
     * // Delete a few Waiters
     * const { count } = await prisma.waiter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends waiterDeleteManyArgs>(args?: SelectSubset<T, waiterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Waiters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waiterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Waiters
     * const waiter = await prisma.waiter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends waiterUpdateManyArgs>(args: SelectSubset<T, waiterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Waiter.
     * @param {waiterUpsertArgs} args - Arguments to update or create a Waiter.
     * @example
     * // Update or create a Waiter
     * const waiter = await prisma.waiter.upsert({
     *   create: {
     *     // ... data to create a Waiter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Waiter we want to update
     *   }
     * })
     */
    upsert<T extends waiterUpsertArgs>(args: SelectSubset<T, waiterUpsertArgs<ExtArgs>>): Prisma__waiterClient<$Result.GetResult<Prisma.$waiterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Waiters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waiterCountArgs} args - Arguments to filter Waiters to count.
     * @example
     * // Count the number of Waiters
     * const count = await prisma.waiter.count({
     *   where: {
     *     // ... the filter for the Waiters we want to count
     *   }
     * })
    **/
    count<T extends waiterCountArgs>(
      args?: Subset<T, waiterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaiterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Waiter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaiterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaiterAggregateArgs>(args: Subset<T, WaiterAggregateArgs>): Prisma.PrismaPromise<GetWaiterAggregateType<T>>

    /**
     * Group by Waiter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {waiterGroupByArgs} args - Group by arguments.
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
      T extends waiterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: waiterGroupByArgs['orderBy'] }
        : { orderBy?: waiterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, waiterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaiterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the waiter model
   */
  readonly fields: waiterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for waiter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__waiterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the waiter model
   */ 
  interface waiterFieldRefs {
    readonly waiterId: FieldRef<"waiter", 'Int'>
    readonly username: FieldRef<"waiter", 'String'>
    readonly password: FieldRef<"waiter", 'String'>
    readonly name: FieldRef<"waiter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * waiter findUnique
   */
  export type waiterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiter
     */
    select?: waiterSelect<ExtArgs> | null
    /**
     * Filter, which waiter to fetch.
     */
    where: waiterWhereUniqueInput
  }

  /**
   * waiter findUniqueOrThrow
   */
  export type waiterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiter
     */
    select?: waiterSelect<ExtArgs> | null
    /**
     * Filter, which waiter to fetch.
     */
    where: waiterWhereUniqueInput
  }

  /**
   * waiter findFirst
   */
  export type waiterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiter
     */
    select?: waiterSelect<ExtArgs> | null
    /**
     * Filter, which waiter to fetch.
     */
    where?: waiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waiters to fetch.
     */
    orderBy?: waiterOrderByWithRelationInput | waiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for waiters.
     */
    cursor?: waiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waiters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waiters.
     */
    distinct?: WaiterScalarFieldEnum | WaiterScalarFieldEnum[]
  }

  /**
   * waiter findFirstOrThrow
   */
  export type waiterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiter
     */
    select?: waiterSelect<ExtArgs> | null
    /**
     * Filter, which waiter to fetch.
     */
    where?: waiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waiters to fetch.
     */
    orderBy?: waiterOrderByWithRelationInput | waiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for waiters.
     */
    cursor?: waiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waiters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of waiters.
     */
    distinct?: WaiterScalarFieldEnum | WaiterScalarFieldEnum[]
  }

  /**
   * waiter findMany
   */
  export type waiterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiter
     */
    select?: waiterSelect<ExtArgs> | null
    /**
     * Filter, which waiters to fetch.
     */
    where?: waiterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of waiters to fetch.
     */
    orderBy?: waiterOrderByWithRelationInput | waiterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing waiters.
     */
    cursor?: waiterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` waiters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` waiters.
     */
    skip?: number
    distinct?: WaiterScalarFieldEnum | WaiterScalarFieldEnum[]
  }

  /**
   * waiter create
   */
  export type waiterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiter
     */
    select?: waiterSelect<ExtArgs> | null
    /**
     * The data needed to create a waiter.
     */
    data: XOR<waiterCreateInput, waiterUncheckedCreateInput>
  }

  /**
   * waiter createMany
   */
  export type waiterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many waiters.
     */
    data: waiterCreateManyInput | waiterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * waiter createManyAndReturn
   */
  export type waiterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiter
     */
    select?: waiterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many waiters.
     */
    data: waiterCreateManyInput | waiterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * waiter update
   */
  export type waiterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiter
     */
    select?: waiterSelect<ExtArgs> | null
    /**
     * The data needed to update a waiter.
     */
    data: XOR<waiterUpdateInput, waiterUncheckedUpdateInput>
    /**
     * Choose, which waiter to update.
     */
    where: waiterWhereUniqueInput
  }

  /**
   * waiter updateMany
   */
  export type waiterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update waiters.
     */
    data: XOR<waiterUpdateManyMutationInput, waiterUncheckedUpdateManyInput>
    /**
     * Filter which waiters to update
     */
    where?: waiterWhereInput
  }

  /**
   * waiter upsert
   */
  export type waiterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiter
     */
    select?: waiterSelect<ExtArgs> | null
    /**
     * The filter to search for the waiter to update in case it exists.
     */
    where: waiterWhereUniqueInput
    /**
     * In case the waiter found by the `where` argument doesn't exist, create a new waiter with this data.
     */
    create: XOR<waiterCreateInput, waiterUncheckedCreateInput>
    /**
     * In case the waiter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<waiterUpdateInput, waiterUncheckedUpdateInput>
  }

  /**
   * waiter delete
   */
  export type waiterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiter
     */
    select?: waiterSelect<ExtArgs> | null
    /**
     * Filter which waiter to delete.
     */
    where: waiterWhereUniqueInput
  }

  /**
   * waiter deleteMany
   */
  export type waiterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which waiters to delete
     */
    where?: waiterWhereInput
  }

  /**
   * waiter without action
   */
  export type waiterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the waiter
     */
    select?: waiterSelect<ExtArgs> | null
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


  export const TableScalarFieldEnum: {
    tableNumber: 'tableNumber',
    tableDescription: 'tableDescription'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const CommandScalarFieldEnum: {
    commandNumber: 'commandNumber',
    tableNumber: 'tableNumber'
  };

  export type CommandScalarFieldEnum = (typeof CommandScalarFieldEnum)[keyof typeof CommandScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    clientId: 'clientId',
    name: 'name'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    productId: 'productId',
    name: 'name',
    category: 'category',
    price: 'price'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const WaiterScalarFieldEnum: {
    waiterId: 'waiterId',
    username: 'username',
    password: 'password',
    name: 'name'
  };

  export type WaiterScalarFieldEnum = (typeof WaiterScalarFieldEnum)[keyof typeof WaiterScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


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


  export type tableWhereInput = {
    AND?: tableWhereInput | tableWhereInput[]
    OR?: tableWhereInput[]
    NOT?: tableWhereInput | tableWhereInput[]
    tableNumber?: IntFilter<"table"> | number
    tableDescription?: StringFilter<"table"> | string
    command?: CommandListRelationFilter
  }

  export type tableOrderByWithRelationInput = {
    tableNumber?: SortOrder
    tableDescription?: SortOrder
    command?: commandOrderByRelationAggregateInput
  }

  export type tableWhereUniqueInput = Prisma.AtLeast<{
    tableNumber?: number
    AND?: tableWhereInput | tableWhereInput[]
    OR?: tableWhereInput[]
    NOT?: tableWhereInput | tableWhereInput[]
    tableDescription?: StringFilter<"table"> | string
    command?: CommandListRelationFilter
  }, "tableNumber">

  export type tableOrderByWithAggregationInput = {
    tableNumber?: SortOrder
    tableDescription?: SortOrder
    _count?: tableCountOrderByAggregateInput
    _avg?: tableAvgOrderByAggregateInput
    _max?: tableMaxOrderByAggregateInput
    _min?: tableMinOrderByAggregateInput
    _sum?: tableSumOrderByAggregateInput
  }

  export type tableScalarWhereWithAggregatesInput = {
    AND?: tableScalarWhereWithAggregatesInput | tableScalarWhereWithAggregatesInput[]
    OR?: tableScalarWhereWithAggregatesInput[]
    NOT?: tableScalarWhereWithAggregatesInput | tableScalarWhereWithAggregatesInput[]
    tableNumber?: IntWithAggregatesFilter<"table"> | number
    tableDescription?: StringWithAggregatesFilter<"table"> | string
  }

  export type commandWhereInput = {
    AND?: commandWhereInput | commandWhereInput[]
    OR?: commandWhereInput[]
    NOT?: commandWhereInput | commandWhereInput[]
    commandNumber?: IntFilter<"command"> | number
    tableNumber?: IntNullableFilter<"command"> | number | null
    table?: XOR<TableNullableScalarRelationFilter, tableWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, clientWhereInput> | null
  }

  export type commandOrderByWithRelationInput = {
    commandNumber?: SortOrder
    tableNumber?: SortOrderInput | SortOrder
    table?: tableOrderByWithRelationInput
    client?: clientOrderByWithRelationInput
  }

  export type commandWhereUniqueInput = Prisma.AtLeast<{
    commandNumber?: number
    AND?: commandWhereInput | commandWhereInput[]
    OR?: commandWhereInput[]
    NOT?: commandWhereInput | commandWhereInput[]
    tableNumber?: IntNullableFilter<"command"> | number | null
    table?: XOR<TableNullableScalarRelationFilter, tableWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, clientWhereInput> | null
  }, "commandNumber">

  export type commandOrderByWithAggregationInput = {
    commandNumber?: SortOrder
    tableNumber?: SortOrderInput | SortOrder
    _count?: commandCountOrderByAggregateInput
    _avg?: commandAvgOrderByAggregateInput
    _max?: commandMaxOrderByAggregateInput
    _min?: commandMinOrderByAggregateInput
    _sum?: commandSumOrderByAggregateInput
  }

  export type commandScalarWhereWithAggregatesInput = {
    AND?: commandScalarWhereWithAggregatesInput | commandScalarWhereWithAggregatesInput[]
    OR?: commandScalarWhereWithAggregatesInput[]
    NOT?: commandScalarWhereWithAggregatesInput | commandScalarWhereWithAggregatesInput[]
    commandNumber?: IntWithAggregatesFilter<"command"> | number
    tableNumber?: IntNullableWithAggregatesFilter<"command"> | number | null
  }

  export type clientWhereInput = {
    AND?: clientWhereInput | clientWhereInput[]
    OR?: clientWhereInput[]
    NOT?: clientWhereInput | clientWhereInput[]
    clientId?: IntFilter<"client"> | number
    name?: StringFilter<"client"> | string
    command?: XOR<CommandScalarRelationFilter, commandWhereInput>
  }

  export type clientOrderByWithRelationInput = {
    clientId?: SortOrder
    name?: SortOrder
    command?: commandOrderByWithRelationInput
  }

  export type clientWhereUniqueInput = Prisma.AtLeast<{
    clientId?: number
    AND?: clientWhereInput | clientWhereInput[]
    OR?: clientWhereInput[]
    NOT?: clientWhereInput | clientWhereInput[]
    name?: StringFilter<"client"> | string
    command?: XOR<CommandScalarRelationFilter, commandWhereInput>
  }, "clientId">

  export type clientOrderByWithAggregationInput = {
    clientId?: SortOrder
    name?: SortOrder
    _count?: clientCountOrderByAggregateInput
    _avg?: clientAvgOrderByAggregateInput
    _max?: clientMaxOrderByAggregateInput
    _min?: clientMinOrderByAggregateInput
    _sum?: clientSumOrderByAggregateInput
  }

  export type clientScalarWhereWithAggregatesInput = {
    AND?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[]
    OR?: clientScalarWhereWithAggregatesInput[]
    NOT?: clientScalarWhereWithAggregatesInput | clientScalarWhereWithAggregatesInput[]
    clientId?: IntWithAggregatesFilter<"client"> | number
    name?: StringWithAggregatesFilter<"client"> | string
  }

  export type productWhereInput = {
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    productId?: IntFilter<"product"> | number
    name?: StringFilter<"product"> | string
    category?: EnumCategoryFilter<"product"> | $Enums.Category
    price?: FloatFilter<"product"> | number
  }

  export type productOrderByWithRelationInput = {
    productId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
  }

  export type productWhereUniqueInput = Prisma.AtLeast<{
    productId?: number
    AND?: productWhereInput | productWhereInput[]
    OR?: productWhereInput[]
    NOT?: productWhereInput | productWhereInput[]
    name?: StringFilter<"product"> | string
    category?: EnumCategoryFilter<"product"> | $Enums.Category
    price?: FloatFilter<"product"> | number
  }, "productId">

  export type productOrderByWithAggregationInput = {
    productId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
    _count?: productCountOrderByAggregateInput
    _avg?: productAvgOrderByAggregateInput
    _max?: productMaxOrderByAggregateInput
    _min?: productMinOrderByAggregateInput
    _sum?: productSumOrderByAggregateInput
  }

  export type productScalarWhereWithAggregatesInput = {
    AND?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    OR?: productScalarWhereWithAggregatesInput[]
    NOT?: productScalarWhereWithAggregatesInput | productScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"product"> | number
    name?: StringWithAggregatesFilter<"product"> | string
    category?: EnumCategoryWithAggregatesFilter<"product"> | $Enums.Category
    price?: FloatWithAggregatesFilter<"product"> | number
  }

  export type waiterWhereInput = {
    AND?: waiterWhereInput | waiterWhereInput[]
    OR?: waiterWhereInput[]
    NOT?: waiterWhereInput | waiterWhereInput[]
    waiterId?: IntFilter<"waiter"> | number
    username?: StringFilter<"waiter"> | string
    password?: StringFilter<"waiter"> | string
    name?: StringFilter<"waiter"> | string
  }

  export type waiterOrderByWithRelationInput = {
    waiterId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type waiterWhereUniqueInput = Prisma.AtLeast<{
    waiterId?: number
    AND?: waiterWhereInput | waiterWhereInput[]
    OR?: waiterWhereInput[]
    NOT?: waiterWhereInput | waiterWhereInput[]
    username?: StringFilter<"waiter"> | string
    password?: StringFilter<"waiter"> | string
    name?: StringFilter<"waiter"> | string
  }, "waiterId">

  export type waiterOrderByWithAggregationInput = {
    waiterId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    _count?: waiterCountOrderByAggregateInput
    _avg?: waiterAvgOrderByAggregateInput
    _max?: waiterMaxOrderByAggregateInput
    _min?: waiterMinOrderByAggregateInput
    _sum?: waiterSumOrderByAggregateInput
  }

  export type waiterScalarWhereWithAggregatesInput = {
    AND?: waiterScalarWhereWithAggregatesInput | waiterScalarWhereWithAggregatesInput[]
    OR?: waiterScalarWhereWithAggregatesInput[]
    NOT?: waiterScalarWhereWithAggregatesInput | waiterScalarWhereWithAggregatesInput[]
    waiterId?: IntWithAggregatesFilter<"waiter"> | number
    username?: StringWithAggregatesFilter<"waiter"> | string
    password?: StringWithAggregatesFilter<"waiter"> | string
    name?: StringWithAggregatesFilter<"waiter"> | string
  }

  export type tableCreateInput = {
    tableNumber: number
    tableDescription: string
    command?: commandCreateNestedManyWithoutTableInput
  }

  export type tableUncheckedCreateInput = {
    tableNumber: number
    tableDescription: string
    command?: commandUncheckedCreateNestedManyWithoutTableInput
  }

  export type tableUpdateInput = {
    tableNumber?: IntFieldUpdateOperationsInput | number
    tableDescription?: StringFieldUpdateOperationsInput | string
    command?: commandUpdateManyWithoutTableNestedInput
  }

  export type tableUncheckedUpdateInput = {
    tableNumber?: IntFieldUpdateOperationsInput | number
    tableDescription?: StringFieldUpdateOperationsInput | string
    command?: commandUncheckedUpdateManyWithoutTableNestedInput
  }

  export type tableCreateManyInput = {
    tableNumber: number
    tableDescription: string
  }

  export type tableUpdateManyMutationInput = {
    tableNumber?: IntFieldUpdateOperationsInput | number
    tableDescription?: StringFieldUpdateOperationsInput | string
  }

  export type tableUncheckedUpdateManyInput = {
    tableNumber?: IntFieldUpdateOperationsInput | number
    tableDescription?: StringFieldUpdateOperationsInput | string
  }

  export type commandCreateInput = {
    commandNumber: number
    table?: tableCreateNestedOneWithoutCommandInput
    client?: clientCreateNestedOneWithoutCommandInput
  }

  export type commandUncheckedCreateInput = {
    commandNumber: number
    tableNumber?: number | null
    client?: clientUncheckedCreateNestedOneWithoutCommandInput
  }

  export type commandUpdateInput = {
    commandNumber?: IntFieldUpdateOperationsInput | number
    table?: tableUpdateOneWithoutCommandNestedInput
    client?: clientUpdateOneWithoutCommandNestedInput
  }

  export type commandUncheckedUpdateInput = {
    commandNumber?: IntFieldUpdateOperationsInput | number
    tableNumber?: NullableIntFieldUpdateOperationsInput | number | null
    client?: clientUncheckedUpdateOneWithoutCommandNestedInput
  }

  export type commandCreateManyInput = {
    commandNumber: number
    tableNumber?: number | null
  }

  export type commandUpdateManyMutationInput = {
    commandNumber?: IntFieldUpdateOperationsInput | number
  }

  export type commandUncheckedUpdateManyInput = {
    commandNumber?: IntFieldUpdateOperationsInput | number
    tableNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type clientCreateInput = {
    name: string
    command?: commandCreateNestedOneWithoutClientInput
  }

  export type clientUncheckedCreateInput = {
    clientId?: number
    name: string
  }

  export type clientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    command?: commandUpdateOneRequiredWithoutClientNestedInput
  }

  export type clientUncheckedUpdateInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type clientCreateManyInput = {
    clientId?: number
    name: string
  }

  export type clientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type clientUncheckedUpdateManyInput = {
    clientId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type productCreateInput = {
    name: string
    category: $Enums.Category
    price: number
  }

  export type productUncheckedCreateInput = {
    productId?: number
    name: string
    category: $Enums.Category
    price: number
  }

  export type productUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type productUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type productCreateManyInput = {
    productId?: number
    name: string
    category: $Enums.Category
    price: number
  }

  export type productUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type productUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type waiterCreateInput = {
    username: string
    password: string
    name: string
  }

  export type waiterUncheckedCreateInput = {
    waiterId?: number
    username: string
    password: string
    name: string
  }

  export type waiterUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type waiterUncheckedUpdateInput = {
    waiterId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type waiterCreateManyInput = {
    waiterId?: number
    username: string
    password: string
    name: string
  }

  export type waiterUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type waiterUncheckedUpdateManyInput = {
    waiterId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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

  export type CommandListRelationFilter = {
    every?: commandWhereInput
    some?: commandWhereInput
    none?: commandWhereInput
  }

  export type commandOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tableCountOrderByAggregateInput = {
    tableNumber?: SortOrder
    tableDescription?: SortOrder
  }

  export type tableAvgOrderByAggregateInput = {
    tableNumber?: SortOrder
  }

  export type tableMaxOrderByAggregateInput = {
    tableNumber?: SortOrder
    tableDescription?: SortOrder
  }

  export type tableMinOrderByAggregateInput = {
    tableNumber?: SortOrder
    tableDescription?: SortOrder
  }

  export type tableSumOrderByAggregateInput = {
    tableNumber?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TableNullableScalarRelationFilter = {
    is?: tableWhereInput | null
    isNot?: tableWhereInput | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: clientWhereInput | null
    isNot?: clientWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type commandCountOrderByAggregateInput = {
    commandNumber?: SortOrder
    tableNumber?: SortOrder
  }

  export type commandAvgOrderByAggregateInput = {
    commandNumber?: SortOrder
    tableNumber?: SortOrder
  }

  export type commandMaxOrderByAggregateInput = {
    commandNumber?: SortOrder
    tableNumber?: SortOrder
  }

  export type commandMinOrderByAggregateInput = {
    commandNumber?: SortOrder
    tableNumber?: SortOrder
  }

  export type commandSumOrderByAggregateInput = {
    commandNumber?: SortOrder
    tableNumber?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CommandScalarRelationFilter = {
    is?: commandWhereInput
    isNot?: commandWhereInput
  }

  export type clientCountOrderByAggregateInput = {
    clientId?: SortOrder
    name?: SortOrder
  }

  export type clientAvgOrderByAggregateInput = {
    clientId?: SortOrder
  }

  export type clientMaxOrderByAggregateInput = {
    clientId?: SortOrder
    name?: SortOrder
  }

  export type clientMinOrderByAggregateInput = {
    clientId?: SortOrder
    name?: SortOrder
  }

  export type clientSumOrderByAggregateInput = {
    clientId?: SortOrder
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type productCountOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
  }

  export type productAvgOrderByAggregateInput = {
    productId?: SortOrder
    price?: SortOrder
  }

  export type productMaxOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
  }

  export type productMinOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    category?: SortOrder
    price?: SortOrder
  }

  export type productSumOrderByAggregateInput = {
    productId?: SortOrder
    price?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type waiterCountOrderByAggregateInput = {
    waiterId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type waiterAvgOrderByAggregateInput = {
    waiterId?: SortOrder
  }

  export type waiterMaxOrderByAggregateInput = {
    waiterId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type waiterMinOrderByAggregateInput = {
    waiterId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
  }

  export type waiterSumOrderByAggregateInput = {
    waiterId?: SortOrder
  }

  export type commandCreateNestedManyWithoutTableInput = {
    create?: XOR<commandCreateWithoutTableInput, commandUncheckedCreateWithoutTableInput> | commandCreateWithoutTableInput[] | commandUncheckedCreateWithoutTableInput[]
    connectOrCreate?: commandCreateOrConnectWithoutTableInput | commandCreateOrConnectWithoutTableInput[]
    createMany?: commandCreateManyTableInputEnvelope
    connect?: commandWhereUniqueInput | commandWhereUniqueInput[]
  }

  export type commandUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<commandCreateWithoutTableInput, commandUncheckedCreateWithoutTableInput> | commandCreateWithoutTableInput[] | commandUncheckedCreateWithoutTableInput[]
    connectOrCreate?: commandCreateOrConnectWithoutTableInput | commandCreateOrConnectWithoutTableInput[]
    createMany?: commandCreateManyTableInputEnvelope
    connect?: commandWhereUniqueInput | commandWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type commandUpdateManyWithoutTableNestedInput = {
    create?: XOR<commandCreateWithoutTableInput, commandUncheckedCreateWithoutTableInput> | commandCreateWithoutTableInput[] | commandUncheckedCreateWithoutTableInput[]
    connectOrCreate?: commandCreateOrConnectWithoutTableInput | commandCreateOrConnectWithoutTableInput[]
    upsert?: commandUpsertWithWhereUniqueWithoutTableInput | commandUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: commandCreateManyTableInputEnvelope
    set?: commandWhereUniqueInput | commandWhereUniqueInput[]
    disconnect?: commandWhereUniqueInput | commandWhereUniqueInput[]
    delete?: commandWhereUniqueInput | commandWhereUniqueInput[]
    connect?: commandWhereUniqueInput | commandWhereUniqueInput[]
    update?: commandUpdateWithWhereUniqueWithoutTableInput | commandUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: commandUpdateManyWithWhereWithoutTableInput | commandUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: commandScalarWhereInput | commandScalarWhereInput[]
  }

  export type commandUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<commandCreateWithoutTableInput, commandUncheckedCreateWithoutTableInput> | commandCreateWithoutTableInput[] | commandUncheckedCreateWithoutTableInput[]
    connectOrCreate?: commandCreateOrConnectWithoutTableInput | commandCreateOrConnectWithoutTableInput[]
    upsert?: commandUpsertWithWhereUniqueWithoutTableInput | commandUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: commandCreateManyTableInputEnvelope
    set?: commandWhereUniqueInput | commandWhereUniqueInput[]
    disconnect?: commandWhereUniqueInput | commandWhereUniqueInput[]
    delete?: commandWhereUniqueInput | commandWhereUniqueInput[]
    connect?: commandWhereUniqueInput | commandWhereUniqueInput[]
    update?: commandUpdateWithWhereUniqueWithoutTableInput | commandUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: commandUpdateManyWithWhereWithoutTableInput | commandUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: commandScalarWhereInput | commandScalarWhereInput[]
  }

  export type tableCreateNestedOneWithoutCommandInput = {
    create?: XOR<tableCreateWithoutCommandInput, tableUncheckedCreateWithoutCommandInput>
    connectOrCreate?: tableCreateOrConnectWithoutCommandInput
    connect?: tableWhereUniqueInput
  }

  export type clientCreateNestedOneWithoutCommandInput = {
    create?: XOR<clientCreateWithoutCommandInput, clientUncheckedCreateWithoutCommandInput>
    connectOrCreate?: clientCreateOrConnectWithoutCommandInput
    connect?: clientWhereUniqueInput
  }

  export type clientUncheckedCreateNestedOneWithoutCommandInput = {
    create?: XOR<clientCreateWithoutCommandInput, clientUncheckedCreateWithoutCommandInput>
    connectOrCreate?: clientCreateOrConnectWithoutCommandInput
    connect?: clientWhereUniqueInput
  }

  export type tableUpdateOneWithoutCommandNestedInput = {
    create?: XOR<tableCreateWithoutCommandInput, tableUncheckedCreateWithoutCommandInput>
    connectOrCreate?: tableCreateOrConnectWithoutCommandInput
    upsert?: tableUpsertWithoutCommandInput
    disconnect?: tableWhereInput | boolean
    delete?: tableWhereInput | boolean
    connect?: tableWhereUniqueInput
    update?: XOR<XOR<tableUpdateToOneWithWhereWithoutCommandInput, tableUpdateWithoutCommandInput>, tableUncheckedUpdateWithoutCommandInput>
  }

  export type clientUpdateOneWithoutCommandNestedInput = {
    create?: XOR<clientCreateWithoutCommandInput, clientUncheckedCreateWithoutCommandInput>
    connectOrCreate?: clientCreateOrConnectWithoutCommandInput
    upsert?: clientUpsertWithoutCommandInput
    disconnect?: clientWhereInput | boolean
    delete?: clientWhereInput | boolean
    connect?: clientWhereUniqueInput
    update?: XOR<XOR<clientUpdateToOneWithWhereWithoutCommandInput, clientUpdateWithoutCommandInput>, clientUncheckedUpdateWithoutCommandInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type clientUncheckedUpdateOneWithoutCommandNestedInput = {
    create?: XOR<clientCreateWithoutCommandInput, clientUncheckedCreateWithoutCommandInput>
    connectOrCreate?: clientCreateOrConnectWithoutCommandInput
    upsert?: clientUpsertWithoutCommandInput
    disconnect?: clientWhereInput | boolean
    delete?: clientWhereInput | boolean
    connect?: clientWhereUniqueInput
    update?: XOR<XOR<clientUpdateToOneWithWhereWithoutCommandInput, clientUpdateWithoutCommandInput>, clientUncheckedUpdateWithoutCommandInput>
  }

  export type commandCreateNestedOneWithoutClientInput = {
    create?: XOR<commandCreateWithoutClientInput, commandUncheckedCreateWithoutClientInput>
    connectOrCreate?: commandCreateOrConnectWithoutClientInput
    connect?: commandWhereUniqueInput
  }

  export type commandUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<commandCreateWithoutClientInput, commandUncheckedCreateWithoutClientInput>
    connectOrCreate?: commandCreateOrConnectWithoutClientInput
    upsert?: commandUpsertWithoutClientInput
    connect?: commandWhereUniqueInput
    update?: XOR<XOR<commandUpdateToOneWithWhereWithoutClientInput, commandUpdateWithoutClientInput>, commandUncheckedUpdateWithoutClientInput>
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type commandCreateWithoutTableInput = {
    commandNumber: number
    client?: clientCreateNestedOneWithoutCommandInput
  }

  export type commandUncheckedCreateWithoutTableInput = {
    commandNumber: number
    client?: clientUncheckedCreateNestedOneWithoutCommandInput
  }

  export type commandCreateOrConnectWithoutTableInput = {
    where: commandWhereUniqueInput
    create: XOR<commandCreateWithoutTableInput, commandUncheckedCreateWithoutTableInput>
  }

  export type commandCreateManyTableInputEnvelope = {
    data: commandCreateManyTableInput | commandCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type commandUpsertWithWhereUniqueWithoutTableInput = {
    where: commandWhereUniqueInput
    update: XOR<commandUpdateWithoutTableInput, commandUncheckedUpdateWithoutTableInput>
    create: XOR<commandCreateWithoutTableInput, commandUncheckedCreateWithoutTableInput>
  }

  export type commandUpdateWithWhereUniqueWithoutTableInput = {
    where: commandWhereUniqueInput
    data: XOR<commandUpdateWithoutTableInput, commandUncheckedUpdateWithoutTableInput>
  }

  export type commandUpdateManyWithWhereWithoutTableInput = {
    where: commandScalarWhereInput
    data: XOR<commandUpdateManyMutationInput, commandUncheckedUpdateManyWithoutTableInput>
  }

  export type commandScalarWhereInput = {
    AND?: commandScalarWhereInput | commandScalarWhereInput[]
    OR?: commandScalarWhereInput[]
    NOT?: commandScalarWhereInput | commandScalarWhereInput[]
    commandNumber?: IntFilter<"command"> | number
    tableNumber?: IntNullableFilter<"command"> | number | null
  }

  export type tableCreateWithoutCommandInput = {
    tableNumber: number
    tableDescription: string
  }

  export type tableUncheckedCreateWithoutCommandInput = {
    tableNumber: number
    tableDescription: string
  }

  export type tableCreateOrConnectWithoutCommandInput = {
    where: tableWhereUniqueInput
    create: XOR<tableCreateWithoutCommandInput, tableUncheckedCreateWithoutCommandInput>
  }

  export type clientCreateWithoutCommandInput = {
    name: string
  }

  export type clientUncheckedCreateWithoutCommandInput = {
    name: string
  }

  export type clientCreateOrConnectWithoutCommandInput = {
    where: clientWhereUniqueInput
    create: XOR<clientCreateWithoutCommandInput, clientUncheckedCreateWithoutCommandInput>
  }

  export type tableUpsertWithoutCommandInput = {
    update: XOR<tableUpdateWithoutCommandInput, tableUncheckedUpdateWithoutCommandInput>
    create: XOR<tableCreateWithoutCommandInput, tableUncheckedCreateWithoutCommandInput>
    where?: tableWhereInput
  }

  export type tableUpdateToOneWithWhereWithoutCommandInput = {
    where?: tableWhereInput
    data: XOR<tableUpdateWithoutCommandInput, tableUncheckedUpdateWithoutCommandInput>
  }

  export type tableUpdateWithoutCommandInput = {
    tableNumber?: IntFieldUpdateOperationsInput | number
    tableDescription?: StringFieldUpdateOperationsInput | string
  }

  export type tableUncheckedUpdateWithoutCommandInput = {
    tableNumber?: IntFieldUpdateOperationsInput | number
    tableDescription?: StringFieldUpdateOperationsInput | string
  }

  export type clientUpsertWithoutCommandInput = {
    update: XOR<clientUpdateWithoutCommandInput, clientUncheckedUpdateWithoutCommandInput>
    create: XOR<clientCreateWithoutCommandInput, clientUncheckedCreateWithoutCommandInput>
    where?: clientWhereInput
  }

  export type clientUpdateToOneWithWhereWithoutCommandInput = {
    where?: clientWhereInput
    data: XOR<clientUpdateWithoutCommandInput, clientUncheckedUpdateWithoutCommandInput>
  }

  export type clientUpdateWithoutCommandInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type clientUncheckedUpdateWithoutCommandInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type commandCreateWithoutClientInput = {
    commandNumber: number
    table?: tableCreateNestedOneWithoutCommandInput
  }

  export type commandUncheckedCreateWithoutClientInput = {
    commandNumber: number
    tableNumber?: number | null
  }

  export type commandCreateOrConnectWithoutClientInput = {
    where: commandWhereUniqueInput
    create: XOR<commandCreateWithoutClientInput, commandUncheckedCreateWithoutClientInput>
  }

  export type commandUpsertWithoutClientInput = {
    update: XOR<commandUpdateWithoutClientInput, commandUncheckedUpdateWithoutClientInput>
    create: XOR<commandCreateWithoutClientInput, commandUncheckedCreateWithoutClientInput>
    where?: commandWhereInput
  }

  export type commandUpdateToOneWithWhereWithoutClientInput = {
    where?: commandWhereInput
    data: XOR<commandUpdateWithoutClientInput, commandUncheckedUpdateWithoutClientInput>
  }

  export type commandUpdateWithoutClientInput = {
    commandNumber?: IntFieldUpdateOperationsInput | number
    table?: tableUpdateOneWithoutCommandNestedInput
  }

  export type commandUncheckedUpdateWithoutClientInput = {
    commandNumber?: IntFieldUpdateOperationsInput | number
    tableNumber?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type commandCreateManyTableInput = {
    commandNumber: number
  }

  export type commandUpdateWithoutTableInput = {
    commandNumber?: IntFieldUpdateOperationsInput | number
    client?: clientUpdateOneWithoutCommandNestedInput
  }

  export type commandUncheckedUpdateWithoutTableInput = {
    commandNumber?: IntFieldUpdateOperationsInput | number
    client?: clientUncheckedUpdateOneWithoutCommandNestedInput
  }

  export type commandUncheckedUpdateManyWithoutTableInput = {
    commandNumber?: IntFieldUpdateOperationsInput | number
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