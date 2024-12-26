
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
 * Model tb_pessoas
 * 
 */
export type tb_pessoas = $Result.DefaultSelection<Prisma.$tb_pessoasPayload>
/**
 * Model tb_produtos
 * 
 */
export type tb_produtos = $Result.DefaultSelection<Prisma.$tb_produtosPayload>
/**
 * Model tb_produtos_setor
 * 
 */
export type tb_produtos_setor = $Result.DefaultSelection<Prisma.$tb_produtos_setorPayload>
/**
 * Model tb_comanda
 * 
 */
export type tb_comanda = $Result.DefaultSelection<Prisma.$tb_comandaPayload>
/**
 * Model tb_mesa
 * 
 */
export type tb_mesa = $Result.DefaultSelection<Prisma.$tb_mesaPayload>
/**
 * Model tb_mesa_comanda
 * 
 */
export type tb_mesa_comanda = $Result.DefaultSelection<Prisma.$tb_mesa_comandaPayload>
/**
 * Model tb_pedido
 * 
 */
export type tb_pedido = $Result.DefaultSelection<Prisma.$tb_pedidoPayload>
/**
 * Model tb_pedido_item
 * 
 */
export type tb_pedido_item = $Result.DefaultSelection<Prisma.$tb_pedido_itemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tb_pessoas
 * const tb_pessoas = await prisma.tb_pessoas.findMany()
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
   * // Fetch zero or more Tb_pessoas
   * const tb_pessoas = await prisma.tb_pessoas.findMany()
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
   * `prisma.tb_pessoas`: Exposes CRUD operations for the **tb_pessoas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_pessoas
    * const tb_pessoas = await prisma.tb_pessoas.findMany()
    * ```
    */
  get tb_pessoas(): Prisma.tb_pessoasDelegate<ExtArgs>;

  /**
   * `prisma.tb_produtos`: Exposes CRUD operations for the **tb_produtos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_produtos
    * const tb_produtos = await prisma.tb_produtos.findMany()
    * ```
    */
  get tb_produtos(): Prisma.tb_produtosDelegate<ExtArgs>;

  /**
   * `prisma.tb_produtos_setor`: Exposes CRUD operations for the **tb_produtos_setor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_produtos_setors
    * const tb_produtos_setors = await prisma.tb_produtos_setor.findMany()
    * ```
    */
  get tb_produtos_setor(): Prisma.tb_produtos_setorDelegate<ExtArgs>;

  /**
   * `prisma.tb_comanda`: Exposes CRUD operations for the **tb_comanda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_comandas
    * const tb_comandas = await prisma.tb_comanda.findMany()
    * ```
    */
  get tb_comanda(): Prisma.tb_comandaDelegate<ExtArgs>;

  /**
   * `prisma.tb_mesa`: Exposes CRUD operations for the **tb_mesa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_mesas
    * const tb_mesas = await prisma.tb_mesa.findMany()
    * ```
    */
  get tb_mesa(): Prisma.tb_mesaDelegate<ExtArgs>;

  /**
   * `prisma.tb_mesa_comanda`: Exposes CRUD operations for the **tb_mesa_comanda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_mesa_comandas
    * const tb_mesa_comandas = await prisma.tb_mesa_comanda.findMany()
    * ```
    */
  get tb_mesa_comanda(): Prisma.tb_mesa_comandaDelegate<ExtArgs>;

  /**
   * `prisma.tb_pedido`: Exposes CRUD operations for the **tb_pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_pedidos
    * const tb_pedidos = await prisma.tb_pedido.findMany()
    * ```
    */
  get tb_pedido(): Prisma.tb_pedidoDelegate<ExtArgs>;

  /**
   * `prisma.tb_pedido_item`: Exposes CRUD operations for the **tb_pedido_item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_pedido_items
    * const tb_pedido_items = await prisma.tb_pedido_item.findMany()
    * ```
    */
  get tb_pedido_item(): Prisma.tb_pedido_itemDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    tb_pessoas: 'tb_pessoas',
    tb_produtos: 'tb_produtos',
    tb_produtos_setor: 'tb_produtos_setor',
    tb_comanda: 'tb_comanda',
    tb_mesa: 'tb_mesa',
    tb_mesa_comanda: 'tb_mesa_comanda',
    tb_pedido: 'tb_pedido',
    tb_pedido_item: 'tb_pedido_item'
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
      modelProps: "tb_pessoas" | "tb_produtos" | "tb_produtos_setor" | "tb_comanda" | "tb_mesa" | "tb_mesa_comanda" | "tb_pedido" | "tb_pedido_item"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tb_pessoas: {
        payload: Prisma.$tb_pessoasPayload<ExtArgs>
        fields: Prisma.tb_pessoasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_pessoasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pessoasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_pessoasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pessoasPayload>
          }
          findFirst: {
            args: Prisma.tb_pessoasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pessoasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_pessoasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pessoasPayload>
          }
          findMany: {
            args: Prisma.tb_pessoasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pessoasPayload>[]
          }
          create: {
            args: Prisma.tb_pessoasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pessoasPayload>
          }
          createMany: {
            args: Prisma.tb_pessoasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_pessoasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pessoasPayload>
          }
          update: {
            args: Prisma.tb_pessoasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pessoasPayload>
          }
          deleteMany: {
            args: Prisma.tb_pessoasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_pessoasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_pessoasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pessoasPayload>
          }
          aggregate: {
            args: Prisma.Tb_pessoasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_pessoas>
          }
          groupBy: {
            args: Prisma.tb_pessoasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_pessoasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_pessoasCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_pessoasCountAggregateOutputType> | number
          }
        }
      }
      tb_produtos: {
        payload: Prisma.$tb_produtosPayload<ExtArgs>
        fields: Prisma.tb_produtosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_produtosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_produtosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtosPayload>
          }
          findFirst: {
            args: Prisma.tb_produtosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_produtosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtosPayload>
          }
          findMany: {
            args: Prisma.tb_produtosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtosPayload>[]
          }
          create: {
            args: Prisma.tb_produtosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtosPayload>
          }
          createMany: {
            args: Prisma.tb_produtosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_produtosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtosPayload>
          }
          update: {
            args: Prisma.tb_produtosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtosPayload>
          }
          deleteMany: {
            args: Prisma.tb_produtosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_produtosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_produtosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtosPayload>
          }
          aggregate: {
            args: Prisma.Tb_produtosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_produtos>
          }
          groupBy: {
            args: Prisma.tb_produtosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_produtosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_produtosCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_produtosCountAggregateOutputType> | number
          }
        }
      }
      tb_produtos_setor: {
        payload: Prisma.$tb_produtos_setorPayload<ExtArgs>
        fields: Prisma.tb_produtos_setorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_produtos_setorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_setorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_produtos_setorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_setorPayload>
          }
          findFirst: {
            args: Prisma.tb_produtos_setorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_setorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_produtos_setorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_setorPayload>
          }
          findMany: {
            args: Prisma.tb_produtos_setorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_setorPayload>[]
          }
          create: {
            args: Prisma.tb_produtos_setorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_setorPayload>
          }
          createMany: {
            args: Prisma.tb_produtos_setorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_produtos_setorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_setorPayload>
          }
          update: {
            args: Prisma.tb_produtos_setorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_setorPayload>
          }
          deleteMany: {
            args: Prisma.tb_produtos_setorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_produtos_setorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_produtos_setorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_produtos_setorPayload>
          }
          aggregate: {
            args: Prisma.Tb_produtos_setorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_produtos_setor>
          }
          groupBy: {
            args: Prisma.tb_produtos_setorGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_produtos_setorGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_produtos_setorCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_produtos_setorCountAggregateOutputType> | number
          }
        }
      }
      tb_comanda: {
        payload: Prisma.$tb_comandaPayload<ExtArgs>
        fields: Prisma.tb_comandaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_comandaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_comandaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_comandaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_comandaPayload>
          }
          findFirst: {
            args: Prisma.tb_comandaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_comandaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_comandaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_comandaPayload>
          }
          findMany: {
            args: Prisma.tb_comandaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_comandaPayload>[]
          }
          create: {
            args: Prisma.tb_comandaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_comandaPayload>
          }
          createMany: {
            args: Prisma.tb_comandaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_comandaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_comandaPayload>
          }
          update: {
            args: Prisma.tb_comandaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_comandaPayload>
          }
          deleteMany: {
            args: Prisma.tb_comandaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_comandaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_comandaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_comandaPayload>
          }
          aggregate: {
            args: Prisma.Tb_comandaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_comanda>
          }
          groupBy: {
            args: Prisma.tb_comandaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_comandaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_comandaCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_comandaCountAggregateOutputType> | number
          }
        }
      }
      tb_mesa: {
        payload: Prisma.$tb_mesaPayload<ExtArgs>
        fields: Prisma.tb_mesaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_mesaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_mesaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesaPayload>
          }
          findFirst: {
            args: Prisma.tb_mesaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_mesaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesaPayload>
          }
          findMany: {
            args: Prisma.tb_mesaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesaPayload>[]
          }
          create: {
            args: Prisma.tb_mesaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesaPayload>
          }
          createMany: {
            args: Prisma.tb_mesaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_mesaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesaPayload>
          }
          update: {
            args: Prisma.tb_mesaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesaPayload>
          }
          deleteMany: {
            args: Prisma.tb_mesaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_mesaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_mesaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesaPayload>
          }
          aggregate: {
            args: Prisma.Tb_mesaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_mesa>
          }
          groupBy: {
            args: Prisma.tb_mesaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_mesaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_mesaCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_mesaCountAggregateOutputType> | number
          }
        }
      }
      tb_mesa_comanda: {
        payload: Prisma.$tb_mesa_comandaPayload<ExtArgs>
        fields: Prisma.tb_mesa_comandaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_mesa_comandaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesa_comandaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_mesa_comandaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesa_comandaPayload>
          }
          findFirst: {
            args: Prisma.tb_mesa_comandaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesa_comandaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_mesa_comandaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesa_comandaPayload>
          }
          findMany: {
            args: Prisma.tb_mesa_comandaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesa_comandaPayload>[]
          }
          create: {
            args: Prisma.tb_mesa_comandaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesa_comandaPayload>
          }
          createMany: {
            args: Prisma.tb_mesa_comandaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_mesa_comandaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesa_comandaPayload>
          }
          update: {
            args: Prisma.tb_mesa_comandaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesa_comandaPayload>
          }
          deleteMany: {
            args: Prisma.tb_mesa_comandaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_mesa_comandaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_mesa_comandaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_mesa_comandaPayload>
          }
          aggregate: {
            args: Prisma.Tb_mesa_comandaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_mesa_comanda>
          }
          groupBy: {
            args: Prisma.tb_mesa_comandaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_mesa_comandaGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_mesa_comandaCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_mesa_comandaCountAggregateOutputType> | number
          }
        }
      }
      tb_pedido: {
        payload: Prisma.$tb_pedidoPayload<ExtArgs>
        fields: Prisma.tb_pedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_pedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_pedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedidoPayload>
          }
          findFirst: {
            args: Prisma.tb_pedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_pedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedidoPayload>
          }
          findMany: {
            args: Prisma.tb_pedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedidoPayload>[]
          }
          create: {
            args: Prisma.tb_pedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedidoPayload>
          }
          createMany: {
            args: Prisma.tb_pedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_pedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedidoPayload>
          }
          update: {
            args: Prisma.tb_pedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedidoPayload>
          }
          deleteMany: {
            args: Prisma.tb_pedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_pedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_pedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedidoPayload>
          }
          aggregate: {
            args: Prisma.Tb_pedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_pedido>
          }
          groupBy: {
            args: Prisma.tb_pedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_pedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_pedidoCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_pedidoCountAggregateOutputType> | number
          }
        }
      }
      tb_pedido_item: {
        payload: Prisma.$tb_pedido_itemPayload<ExtArgs>
        fields: Prisma.tb_pedido_itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_pedido_itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedido_itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_pedido_itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedido_itemPayload>
          }
          findFirst: {
            args: Prisma.tb_pedido_itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedido_itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_pedido_itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedido_itemPayload>
          }
          findMany: {
            args: Prisma.tb_pedido_itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedido_itemPayload>[]
          }
          create: {
            args: Prisma.tb_pedido_itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedido_itemPayload>
          }
          createMany: {
            args: Prisma.tb_pedido_itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tb_pedido_itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedido_itemPayload>
          }
          update: {
            args: Prisma.tb_pedido_itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedido_itemPayload>
          }
          deleteMany: {
            args: Prisma.tb_pedido_itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_pedido_itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tb_pedido_itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_pedido_itemPayload>
          }
          aggregate: {
            args: Prisma.Tb_pedido_itemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_pedido_item>
          }
          groupBy: {
            args: Prisma.tb_pedido_itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_pedido_itemGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_pedido_itemCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_pedido_itemCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model tb_pessoas
   */

  export type AggregateTb_pessoas = {
    _count: Tb_pessoasCountAggregateOutputType | null
    _avg: Tb_pessoasAvgAggregateOutputType | null
    _sum: Tb_pessoasSumAggregateOutputType | null
    _min: Tb_pessoasMinAggregateOutputType | null
    _max: Tb_pessoasMaxAggregateOutputType | null
  }

  export type Tb_pessoasAvgAggregateOutputType = {
    Codigo: number | null
    Tipo_Contribuinte: number | null
    Id_Tabela_Preco: number | null
    IDEmpresa: number | null
    IDUser: number | null
    Id_Operacao_Movimento: number | null
    Limite: number | null
  }

  export type Tb_pessoasSumAggregateOutputType = {
    Codigo: number | null
    Tipo_Contribuinte: number | null
    Id_Tabela_Preco: number | null
    IDEmpresa: number | null
    IDUser: number | null
    Id_Operacao_Movimento: number | null
    Limite: number | null
  }

  export type Tb_pessoasMinAggregateOutputType = {
    Codigo: number | null
    Tipo_Pessoa: string | null
    CPF: string | null
    CNPJ: string | null
    RG: string | null
    IE: string | null
    CadPro: string | null
    Tipo_Contribuinte: number | null
    Pessoa: string | null
    Fantasia: string | null
    CEP: string | null
    Endereco: string | null
    Numero: string | null
    Bairro: string | null
    UF: string | null
    cUF: string | null
    xMun: string | null
    cMun: string | null
    xPais: string | null
    cPais: string | null
    Complemento: string | null
    Data_Nascimento: Date | null
    Fone1: string | null
    Fone2: string | null
    Fone3: string | null
    Fone4: string | null
    Fone5: string | null
    Id_Tabela_Preco: number | null
    RegExcluido: string | null
    Ativo: string | null
    IDEmpresa: number | null
    DHU: string | null
    IDUser: number | null
    Email: string | null
    Id_Operacao_Movimento: number | null
    Apelido: string | null
    Limite: number | null
    Liberado_Contas_Em_Atraso: string | null
    WhatsApp: string | null
  }

  export type Tb_pessoasMaxAggregateOutputType = {
    Codigo: number | null
    Tipo_Pessoa: string | null
    CPF: string | null
    CNPJ: string | null
    RG: string | null
    IE: string | null
    CadPro: string | null
    Tipo_Contribuinte: number | null
    Pessoa: string | null
    Fantasia: string | null
    CEP: string | null
    Endereco: string | null
    Numero: string | null
    Bairro: string | null
    UF: string | null
    cUF: string | null
    xMun: string | null
    cMun: string | null
    xPais: string | null
    cPais: string | null
    Complemento: string | null
    Data_Nascimento: Date | null
    Fone1: string | null
    Fone2: string | null
    Fone3: string | null
    Fone4: string | null
    Fone5: string | null
    Id_Tabela_Preco: number | null
    RegExcluido: string | null
    Ativo: string | null
    IDEmpresa: number | null
    DHU: string | null
    IDUser: number | null
    Email: string | null
    Id_Operacao_Movimento: number | null
    Apelido: string | null
    Limite: number | null
    Liberado_Contas_Em_Atraso: string | null
    WhatsApp: string | null
  }

  export type Tb_pessoasCountAggregateOutputType = {
    Codigo: number
    Tipo_Pessoa: number
    CPF: number
    CNPJ: number
    RG: number
    IE: number
    CadPro: number
    Tipo_Contribuinte: number
    Pessoa: number
    Fantasia: number
    CEP: number
    Endereco: number
    Numero: number
    Bairro: number
    UF: number
    cUF: number
    xMun: number
    cMun: number
    xPais: number
    cPais: number
    Complemento: number
    Data_Nascimento: number
    Fone1: number
    Fone2: number
    Fone3: number
    Fone4: number
    Fone5: number
    Id_Tabela_Preco: number
    RegExcluido: number
    Ativo: number
    IDEmpresa: number
    DHU: number
    IDUser: number
    Email: number
    Id_Operacao_Movimento: number
    Apelido: number
    Limite: number
    Liberado_Contas_Em_Atraso: number
    WhatsApp: number
    _all: number
  }


  export type Tb_pessoasAvgAggregateInputType = {
    Codigo?: true
    Tipo_Contribuinte?: true
    Id_Tabela_Preco?: true
    IDEmpresa?: true
    IDUser?: true
    Id_Operacao_Movimento?: true
    Limite?: true
  }

  export type Tb_pessoasSumAggregateInputType = {
    Codigo?: true
    Tipo_Contribuinte?: true
    Id_Tabela_Preco?: true
    IDEmpresa?: true
    IDUser?: true
    Id_Operacao_Movimento?: true
    Limite?: true
  }

  export type Tb_pessoasMinAggregateInputType = {
    Codigo?: true
    Tipo_Pessoa?: true
    CPF?: true
    CNPJ?: true
    RG?: true
    IE?: true
    CadPro?: true
    Tipo_Contribuinte?: true
    Pessoa?: true
    Fantasia?: true
    CEP?: true
    Endereco?: true
    Numero?: true
    Bairro?: true
    UF?: true
    cUF?: true
    xMun?: true
    cMun?: true
    xPais?: true
    cPais?: true
    Complemento?: true
    Data_Nascimento?: true
    Fone1?: true
    Fone2?: true
    Fone3?: true
    Fone4?: true
    Fone5?: true
    Id_Tabela_Preco?: true
    RegExcluido?: true
    Ativo?: true
    IDEmpresa?: true
    DHU?: true
    IDUser?: true
    Email?: true
    Id_Operacao_Movimento?: true
    Apelido?: true
    Limite?: true
    Liberado_Contas_Em_Atraso?: true
    WhatsApp?: true
  }

  export type Tb_pessoasMaxAggregateInputType = {
    Codigo?: true
    Tipo_Pessoa?: true
    CPF?: true
    CNPJ?: true
    RG?: true
    IE?: true
    CadPro?: true
    Tipo_Contribuinte?: true
    Pessoa?: true
    Fantasia?: true
    CEP?: true
    Endereco?: true
    Numero?: true
    Bairro?: true
    UF?: true
    cUF?: true
    xMun?: true
    cMun?: true
    xPais?: true
    cPais?: true
    Complemento?: true
    Data_Nascimento?: true
    Fone1?: true
    Fone2?: true
    Fone3?: true
    Fone4?: true
    Fone5?: true
    Id_Tabela_Preco?: true
    RegExcluido?: true
    Ativo?: true
    IDEmpresa?: true
    DHU?: true
    IDUser?: true
    Email?: true
    Id_Operacao_Movimento?: true
    Apelido?: true
    Limite?: true
    Liberado_Contas_Em_Atraso?: true
    WhatsApp?: true
  }

  export type Tb_pessoasCountAggregateInputType = {
    Codigo?: true
    Tipo_Pessoa?: true
    CPF?: true
    CNPJ?: true
    RG?: true
    IE?: true
    CadPro?: true
    Tipo_Contribuinte?: true
    Pessoa?: true
    Fantasia?: true
    CEP?: true
    Endereco?: true
    Numero?: true
    Bairro?: true
    UF?: true
    cUF?: true
    xMun?: true
    cMun?: true
    xPais?: true
    cPais?: true
    Complemento?: true
    Data_Nascimento?: true
    Fone1?: true
    Fone2?: true
    Fone3?: true
    Fone4?: true
    Fone5?: true
    Id_Tabela_Preco?: true
    RegExcluido?: true
    Ativo?: true
    IDEmpresa?: true
    DHU?: true
    IDUser?: true
    Email?: true
    Id_Operacao_Movimento?: true
    Apelido?: true
    Limite?: true
    Liberado_Contas_Em_Atraso?: true
    WhatsApp?: true
    _all?: true
  }

  export type Tb_pessoasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_pessoas to aggregate.
     */
    where?: tb_pessoasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pessoas to fetch.
     */
    orderBy?: tb_pessoasOrderByWithRelationInput | tb_pessoasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_pessoasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_pessoas
    **/
    _count?: true | Tb_pessoasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_pessoasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_pessoasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_pessoasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_pessoasMaxAggregateInputType
  }

  export type GetTb_pessoasAggregateType<T extends Tb_pessoasAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_pessoas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_pessoas[P]>
      : GetScalarType<T[P], AggregateTb_pessoas[P]>
  }




  export type tb_pessoasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_pessoasWhereInput
    orderBy?: tb_pessoasOrderByWithAggregationInput | tb_pessoasOrderByWithAggregationInput[]
    by: Tb_pessoasScalarFieldEnum[] | Tb_pessoasScalarFieldEnum
    having?: tb_pessoasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_pessoasCountAggregateInputType | true
    _avg?: Tb_pessoasAvgAggregateInputType
    _sum?: Tb_pessoasSumAggregateInputType
    _min?: Tb_pessoasMinAggregateInputType
    _max?: Tb_pessoasMaxAggregateInputType
  }

  export type Tb_pessoasGroupByOutputType = {
    Codigo: number
    Tipo_Pessoa: string | null
    CPF: string | null
    CNPJ: string | null
    RG: string | null
    IE: string | null
    CadPro: string | null
    Tipo_Contribuinte: number | null
    Pessoa: string | null
    Fantasia: string | null
    CEP: string | null
    Endereco: string | null
    Numero: string | null
    Bairro: string | null
    UF: string | null
    cUF: string | null
    xMun: string | null
    cMun: string | null
    xPais: string | null
    cPais: string | null
    Complemento: string | null
    Data_Nascimento: Date | null
    Fone1: string | null
    Fone2: string | null
    Fone3: string | null
    Fone4: string | null
    Fone5: string | null
    Id_Tabela_Preco: number | null
    RegExcluido: string | null
    Ativo: string | null
    IDEmpresa: number | null
    DHU: string | null
    IDUser: number | null
    Email: string | null
    Id_Operacao_Movimento: number | null
    Apelido: string | null
    Limite: number | null
    Liberado_Contas_Em_Atraso: string | null
    WhatsApp: string | null
    _count: Tb_pessoasCountAggregateOutputType | null
    _avg: Tb_pessoasAvgAggregateOutputType | null
    _sum: Tb_pessoasSumAggregateOutputType | null
    _min: Tb_pessoasMinAggregateOutputType | null
    _max: Tb_pessoasMaxAggregateOutputType | null
  }

  type GetTb_pessoasGroupByPayload<T extends tb_pessoasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_pessoasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_pessoasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_pessoasGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_pessoasGroupByOutputType[P]>
        }
      >
    >


  export type tb_pessoasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Codigo?: boolean
    Tipo_Pessoa?: boolean
    CPF?: boolean
    CNPJ?: boolean
    RG?: boolean
    IE?: boolean
    CadPro?: boolean
    Tipo_Contribuinte?: boolean
    Pessoa?: boolean
    Fantasia?: boolean
    CEP?: boolean
    Endereco?: boolean
    Numero?: boolean
    Bairro?: boolean
    UF?: boolean
    cUF?: boolean
    xMun?: boolean
    cMun?: boolean
    xPais?: boolean
    cPais?: boolean
    Complemento?: boolean
    Data_Nascimento?: boolean
    Fone1?: boolean
    Fone2?: boolean
    Fone3?: boolean
    Fone4?: boolean
    Fone5?: boolean
    Id_Tabela_Preco?: boolean
    RegExcluido?: boolean
    Ativo?: boolean
    IDEmpresa?: boolean
    DHU?: boolean
    IDUser?: boolean
    Email?: boolean
    Id_Operacao_Movimento?: boolean
    Apelido?: boolean
    Limite?: boolean
    Liberado_Contas_Em_Atraso?: boolean
    WhatsApp?: boolean
  }, ExtArgs["result"]["tb_pessoas"]>


  export type tb_pessoasSelectScalar = {
    Codigo?: boolean
    Tipo_Pessoa?: boolean
    CPF?: boolean
    CNPJ?: boolean
    RG?: boolean
    IE?: boolean
    CadPro?: boolean
    Tipo_Contribuinte?: boolean
    Pessoa?: boolean
    Fantasia?: boolean
    CEP?: boolean
    Endereco?: boolean
    Numero?: boolean
    Bairro?: boolean
    UF?: boolean
    cUF?: boolean
    xMun?: boolean
    cMun?: boolean
    xPais?: boolean
    cPais?: boolean
    Complemento?: boolean
    Data_Nascimento?: boolean
    Fone1?: boolean
    Fone2?: boolean
    Fone3?: boolean
    Fone4?: boolean
    Fone5?: boolean
    Id_Tabela_Preco?: boolean
    RegExcluido?: boolean
    Ativo?: boolean
    IDEmpresa?: boolean
    DHU?: boolean
    IDUser?: boolean
    Email?: boolean
    Id_Operacao_Movimento?: boolean
    Apelido?: boolean
    Limite?: boolean
    Liberado_Contas_Em_Atraso?: boolean
    WhatsApp?: boolean
  }


  export type $tb_pessoasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_pessoas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Codigo: number
      Tipo_Pessoa: string | null
      CPF: string | null
      CNPJ: string | null
      RG: string | null
      IE: string | null
      CadPro: string | null
      Tipo_Contribuinte: number | null
      Pessoa: string | null
      Fantasia: string | null
      CEP: string | null
      Endereco: string | null
      Numero: string | null
      Bairro: string | null
      UF: string | null
      cUF: string | null
      xMun: string | null
      cMun: string | null
      xPais: string | null
      cPais: string | null
      Complemento: string | null
      Data_Nascimento: Date | null
      Fone1: string | null
      Fone2: string | null
      Fone3: string | null
      Fone4: string | null
      Fone5: string | null
      Id_Tabela_Preco: number | null
      RegExcluido: string | null
      Ativo: string | null
      IDEmpresa: number | null
      DHU: string | null
      IDUser: number | null
      Email: string | null
      Id_Operacao_Movimento: number | null
      Apelido: string | null
      Limite: number | null
      Liberado_Contas_Em_Atraso: string | null
      WhatsApp: string | null
    }, ExtArgs["result"]["tb_pessoas"]>
    composites: {}
  }

  type tb_pessoasGetPayload<S extends boolean | null | undefined | tb_pessoasDefaultArgs> = $Result.GetResult<Prisma.$tb_pessoasPayload, S>

  type tb_pessoasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tb_pessoasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tb_pessoasCountAggregateInputType | true
    }

  export interface tb_pessoasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_pessoas'], meta: { name: 'tb_pessoas' } }
    /**
     * Find zero or one Tb_pessoas that matches the filter.
     * @param {tb_pessoasFindUniqueArgs} args - Arguments to find a Tb_pessoas
     * @example
     * // Get one Tb_pessoas
     * const tb_pessoas = await prisma.tb_pessoas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_pessoasFindUniqueArgs>(args: SelectSubset<T, tb_pessoasFindUniqueArgs<ExtArgs>>): Prisma__tb_pessoasClient<$Result.GetResult<Prisma.$tb_pessoasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tb_pessoas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tb_pessoasFindUniqueOrThrowArgs} args - Arguments to find a Tb_pessoas
     * @example
     * // Get one Tb_pessoas
     * const tb_pessoas = await prisma.tb_pessoas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_pessoasFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_pessoasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_pessoasClient<$Result.GetResult<Prisma.$tb_pessoasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tb_pessoas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pessoasFindFirstArgs} args - Arguments to find a Tb_pessoas
     * @example
     * // Get one Tb_pessoas
     * const tb_pessoas = await prisma.tb_pessoas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_pessoasFindFirstArgs>(args?: SelectSubset<T, tb_pessoasFindFirstArgs<ExtArgs>>): Prisma__tb_pessoasClient<$Result.GetResult<Prisma.$tb_pessoasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tb_pessoas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pessoasFindFirstOrThrowArgs} args - Arguments to find a Tb_pessoas
     * @example
     * // Get one Tb_pessoas
     * const tb_pessoas = await prisma.tb_pessoas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_pessoasFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_pessoasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_pessoasClient<$Result.GetResult<Prisma.$tb_pessoasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tb_pessoas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pessoasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_pessoas
     * const tb_pessoas = await prisma.tb_pessoas.findMany()
     * 
     * // Get first 10 Tb_pessoas
     * const tb_pessoas = await prisma.tb_pessoas.findMany({ take: 10 })
     * 
     * // Only select the `Codigo`
     * const tb_pessoasWithCodigoOnly = await prisma.tb_pessoas.findMany({ select: { Codigo: true } })
     * 
     */
    findMany<T extends tb_pessoasFindManyArgs>(args?: SelectSubset<T, tb_pessoasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_pessoasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tb_pessoas.
     * @param {tb_pessoasCreateArgs} args - Arguments to create a Tb_pessoas.
     * @example
     * // Create one Tb_pessoas
     * const Tb_pessoas = await prisma.tb_pessoas.create({
     *   data: {
     *     // ... data to create a Tb_pessoas
     *   }
     * })
     * 
     */
    create<T extends tb_pessoasCreateArgs>(args: SelectSubset<T, tb_pessoasCreateArgs<ExtArgs>>): Prisma__tb_pessoasClient<$Result.GetResult<Prisma.$tb_pessoasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tb_pessoas.
     * @param {tb_pessoasCreateManyArgs} args - Arguments to create many Tb_pessoas.
     * @example
     * // Create many Tb_pessoas
     * const tb_pessoas = await prisma.tb_pessoas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_pessoasCreateManyArgs>(args?: SelectSubset<T, tb_pessoasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_pessoas.
     * @param {tb_pessoasDeleteArgs} args - Arguments to delete one Tb_pessoas.
     * @example
     * // Delete one Tb_pessoas
     * const Tb_pessoas = await prisma.tb_pessoas.delete({
     *   where: {
     *     // ... filter to delete one Tb_pessoas
     *   }
     * })
     * 
     */
    delete<T extends tb_pessoasDeleteArgs>(args: SelectSubset<T, tb_pessoasDeleteArgs<ExtArgs>>): Prisma__tb_pessoasClient<$Result.GetResult<Prisma.$tb_pessoasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tb_pessoas.
     * @param {tb_pessoasUpdateArgs} args - Arguments to update one Tb_pessoas.
     * @example
     * // Update one Tb_pessoas
     * const tb_pessoas = await prisma.tb_pessoas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_pessoasUpdateArgs>(args: SelectSubset<T, tb_pessoasUpdateArgs<ExtArgs>>): Prisma__tb_pessoasClient<$Result.GetResult<Prisma.$tb_pessoasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tb_pessoas.
     * @param {tb_pessoasDeleteManyArgs} args - Arguments to filter Tb_pessoas to delete.
     * @example
     * // Delete a few Tb_pessoas
     * const { count } = await prisma.tb_pessoas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_pessoasDeleteManyArgs>(args?: SelectSubset<T, tb_pessoasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pessoasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_pessoas
     * const tb_pessoas = await prisma.tb_pessoas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_pessoasUpdateManyArgs>(args: SelectSubset<T, tb_pessoasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_pessoas.
     * @param {tb_pessoasUpsertArgs} args - Arguments to update or create a Tb_pessoas.
     * @example
     * // Update or create a Tb_pessoas
     * const tb_pessoas = await prisma.tb_pessoas.upsert({
     *   create: {
     *     // ... data to create a Tb_pessoas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_pessoas we want to update
     *   }
     * })
     */
    upsert<T extends tb_pessoasUpsertArgs>(args: SelectSubset<T, tb_pessoasUpsertArgs<ExtArgs>>): Prisma__tb_pessoasClient<$Result.GetResult<Prisma.$tb_pessoasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tb_pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pessoasCountArgs} args - Arguments to filter Tb_pessoas to count.
     * @example
     * // Count the number of Tb_pessoas
     * const count = await prisma.tb_pessoas.count({
     *   where: {
     *     // ... the filter for the Tb_pessoas we want to count
     *   }
     * })
    **/
    count<T extends tb_pessoasCountArgs>(
      args?: Subset<T, tb_pessoasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_pessoasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_pessoasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_pessoasAggregateArgs>(args: Subset<T, Tb_pessoasAggregateArgs>): Prisma.PrismaPromise<GetTb_pessoasAggregateType<T>>

    /**
     * Group by Tb_pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pessoasGroupByArgs} args - Group by arguments.
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
      T extends tb_pessoasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_pessoasGroupByArgs['orderBy'] }
        : { orderBy?: tb_pessoasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_pessoasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_pessoasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_pessoas model
   */
  readonly fields: tb_pessoasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_pessoas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_pessoasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_pessoas model
   */ 
  interface tb_pessoasFieldRefs {
    readonly Codigo: FieldRef<"tb_pessoas", 'Int'>
    readonly Tipo_Pessoa: FieldRef<"tb_pessoas", 'String'>
    readonly CPF: FieldRef<"tb_pessoas", 'String'>
    readonly CNPJ: FieldRef<"tb_pessoas", 'String'>
    readonly RG: FieldRef<"tb_pessoas", 'String'>
    readonly IE: FieldRef<"tb_pessoas", 'String'>
    readonly CadPro: FieldRef<"tb_pessoas", 'String'>
    readonly Tipo_Contribuinte: FieldRef<"tb_pessoas", 'Int'>
    readonly Pessoa: FieldRef<"tb_pessoas", 'String'>
    readonly Fantasia: FieldRef<"tb_pessoas", 'String'>
    readonly CEP: FieldRef<"tb_pessoas", 'String'>
    readonly Endereco: FieldRef<"tb_pessoas", 'String'>
    readonly Numero: FieldRef<"tb_pessoas", 'String'>
    readonly Bairro: FieldRef<"tb_pessoas", 'String'>
    readonly UF: FieldRef<"tb_pessoas", 'String'>
    readonly cUF: FieldRef<"tb_pessoas", 'String'>
    readonly xMun: FieldRef<"tb_pessoas", 'String'>
    readonly cMun: FieldRef<"tb_pessoas", 'String'>
    readonly xPais: FieldRef<"tb_pessoas", 'String'>
    readonly cPais: FieldRef<"tb_pessoas", 'String'>
    readonly Complemento: FieldRef<"tb_pessoas", 'String'>
    readonly Data_Nascimento: FieldRef<"tb_pessoas", 'DateTime'>
    readonly Fone1: FieldRef<"tb_pessoas", 'String'>
    readonly Fone2: FieldRef<"tb_pessoas", 'String'>
    readonly Fone3: FieldRef<"tb_pessoas", 'String'>
    readonly Fone4: FieldRef<"tb_pessoas", 'String'>
    readonly Fone5: FieldRef<"tb_pessoas", 'String'>
    readonly Id_Tabela_Preco: FieldRef<"tb_pessoas", 'Int'>
    readonly RegExcluido: FieldRef<"tb_pessoas", 'String'>
    readonly Ativo: FieldRef<"tb_pessoas", 'String'>
    readonly IDEmpresa: FieldRef<"tb_pessoas", 'Int'>
    readonly DHU: FieldRef<"tb_pessoas", 'String'>
    readonly IDUser: FieldRef<"tb_pessoas", 'Int'>
    readonly Email: FieldRef<"tb_pessoas", 'String'>
    readonly Id_Operacao_Movimento: FieldRef<"tb_pessoas", 'Int'>
    readonly Apelido: FieldRef<"tb_pessoas", 'String'>
    readonly Limite: FieldRef<"tb_pessoas", 'Float'>
    readonly Liberado_Contas_Em_Atraso: FieldRef<"tb_pessoas", 'String'>
    readonly WhatsApp: FieldRef<"tb_pessoas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_pessoas findUnique
   */
  export type tb_pessoasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pessoas
     */
    select?: tb_pessoasSelect<ExtArgs> | null
    /**
     * Filter, which tb_pessoas to fetch.
     */
    where: tb_pessoasWhereUniqueInput
  }

  /**
   * tb_pessoas findUniqueOrThrow
   */
  export type tb_pessoasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pessoas
     */
    select?: tb_pessoasSelect<ExtArgs> | null
    /**
     * Filter, which tb_pessoas to fetch.
     */
    where: tb_pessoasWhereUniqueInput
  }

  /**
   * tb_pessoas findFirst
   */
  export type tb_pessoasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pessoas
     */
    select?: tb_pessoasSelect<ExtArgs> | null
    /**
     * Filter, which tb_pessoas to fetch.
     */
    where?: tb_pessoasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pessoas to fetch.
     */
    orderBy?: tb_pessoasOrderByWithRelationInput | tb_pessoasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_pessoas.
     */
    cursor?: tb_pessoasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_pessoas.
     */
    distinct?: Tb_pessoasScalarFieldEnum | Tb_pessoasScalarFieldEnum[]
  }

  /**
   * tb_pessoas findFirstOrThrow
   */
  export type tb_pessoasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pessoas
     */
    select?: tb_pessoasSelect<ExtArgs> | null
    /**
     * Filter, which tb_pessoas to fetch.
     */
    where?: tb_pessoasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pessoas to fetch.
     */
    orderBy?: tb_pessoasOrderByWithRelationInput | tb_pessoasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_pessoas.
     */
    cursor?: tb_pessoasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_pessoas.
     */
    distinct?: Tb_pessoasScalarFieldEnum | Tb_pessoasScalarFieldEnum[]
  }

  /**
   * tb_pessoas findMany
   */
  export type tb_pessoasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pessoas
     */
    select?: tb_pessoasSelect<ExtArgs> | null
    /**
     * Filter, which tb_pessoas to fetch.
     */
    where?: tb_pessoasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pessoas to fetch.
     */
    orderBy?: tb_pessoasOrderByWithRelationInput | tb_pessoasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_pessoas.
     */
    cursor?: tb_pessoasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pessoas.
     */
    skip?: number
    distinct?: Tb_pessoasScalarFieldEnum | Tb_pessoasScalarFieldEnum[]
  }

  /**
   * tb_pessoas create
   */
  export type tb_pessoasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pessoas
     */
    select?: tb_pessoasSelect<ExtArgs> | null
    /**
     * The data needed to create a tb_pessoas.
     */
    data: XOR<tb_pessoasCreateInput, tb_pessoasUncheckedCreateInput>
  }

  /**
   * tb_pessoas createMany
   */
  export type tb_pessoasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_pessoas.
     */
    data: tb_pessoasCreateManyInput | tb_pessoasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_pessoas update
   */
  export type tb_pessoasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pessoas
     */
    select?: tb_pessoasSelect<ExtArgs> | null
    /**
     * The data needed to update a tb_pessoas.
     */
    data: XOR<tb_pessoasUpdateInput, tb_pessoasUncheckedUpdateInput>
    /**
     * Choose, which tb_pessoas to update.
     */
    where: tb_pessoasWhereUniqueInput
  }

  /**
   * tb_pessoas updateMany
   */
  export type tb_pessoasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_pessoas.
     */
    data: XOR<tb_pessoasUpdateManyMutationInput, tb_pessoasUncheckedUpdateManyInput>
    /**
     * Filter which tb_pessoas to update
     */
    where?: tb_pessoasWhereInput
  }

  /**
   * tb_pessoas upsert
   */
  export type tb_pessoasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pessoas
     */
    select?: tb_pessoasSelect<ExtArgs> | null
    /**
     * The filter to search for the tb_pessoas to update in case it exists.
     */
    where: tb_pessoasWhereUniqueInput
    /**
     * In case the tb_pessoas found by the `where` argument doesn't exist, create a new tb_pessoas with this data.
     */
    create: XOR<tb_pessoasCreateInput, tb_pessoasUncheckedCreateInput>
    /**
     * In case the tb_pessoas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_pessoasUpdateInput, tb_pessoasUncheckedUpdateInput>
  }

  /**
   * tb_pessoas delete
   */
  export type tb_pessoasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pessoas
     */
    select?: tb_pessoasSelect<ExtArgs> | null
    /**
     * Filter which tb_pessoas to delete.
     */
    where: tb_pessoasWhereUniqueInput
  }

  /**
   * tb_pessoas deleteMany
   */
  export type tb_pessoasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_pessoas to delete
     */
    where?: tb_pessoasWhereInput
  }

  /**
   * tb_pessoas without action
   */
  export type tb_pessoasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pessoas
     */
    select?: tb_pessoasSelect<ExtArgs> | null
  }


  /**
   * Model tb_produtos
   */

  export type AggregateTb_produtos = {
    _count: Tb_produtosCountAggregateOutputType | null
    _avg: Tb_produtosAvgAggregateOutputType | null
    _sum: Tb_produtosSumAggregateOutputType | null
    _min: Tb_produtosMinAggregateOutputType | null
    _max: Tb_produtosMaxAggregateOutputType | null
  }

  export type Tb_produtosAvgAggregateOutputType = {
    Codigo: number | null
    Id_Departamento: number | null
    Id_Setor: number | null
    Id_Marca: number | null
    Id_Grupo: number | null
    Id_SubGrupo: number | null
    Id_Unidade: number | null
    Id_Familia: number | null
    Peso: number | null
    Capacidade: number | null
    ID_Alocacao: number | null
    Comissao: number | null
    NCM: number | null
    Estoque: number | null
    Estoque_Reservado: number | null
    Estoque_Disponivel: number | null
    Tipo: number | null
    Preco_Atribuido: number | null
    Preco_Venda: number | null
    Preco_Compra: number | null
    Preco_Medio: number | null
    Margem: number | null
    Markup: number | null
    Id_Produto_Vinculado: number | null
    IDEmpresa: number | null
    Id_Importacao_Sistema: number | null
    Id_SubFamilia: number | null
    Estoque_Maximo: number | null
    Estoque_Minimo: number | null
    IDUser: number | null
    Id_DCB: number | null
    Fidelidade_Credito: number | null
    Fidelidade_Resgate: number | null
    Dias_Validade: number | null
  }

  export type Tb_produtosSumAggregateOutputType = {
    Codigo: number | null
    Id_Departamento: number | null
    Id_Setor: number | null
    Id_Marca: number | null
    Id_Grupo: number | null
    Id_SubGrupo: number | null
    Id_Unidade: number | null
    Id_Familia: number | null
    Peso: number | null
    Capacidade: number | null
    ID_Alocacao: number | null
    Comissao: number | null
    NCM: number | null
    Estoque: number | null
    Estoque_Reservado: number | null
    Estoque_Disponivel: number | null
    Tipo: number | null
    Preco_Atribuido: number | null
    Preco_Venda: number | null
    Preco_Compra: number | null
    Preco_Medio: number | null
    Margem: number | null
    Markup: number | null
    Id_Produto_Vinculado: number | null
    IDEmpresa: number | null
    Id_Importacao_Sistema: number | null
    Id_SubFamilia: number | null
    Estoque_Maximo: number | null
    Estoque_Minimo: number | null
    IDUser: number | null
    Id_DCB: number | null
    Fidelidade_Credito: number | null
    Fidelidade_Resgate: number | null
    Dias_Validade: number | null
  }

  export type Tb_produtosMinAggregateOutputType = {
    Codigo: number | null
    Produto: string | null
    Produto_Curto: string | null
    Produto_PDV: string | null
    Complemento: string | null
    Pesquisa_Rapida_PDV: string | null
    Id_Departamento: number | null
    Id_Setor: number | null
    Id_Marca: number | null
    Id_Grupo: number | null
    Id_SubGrupo: number | null
    Id_Unidade: number | null
    Id_Familia: number | null
    Codigo_Interno: string | null
    Peso: number | null
    Capacidade: number | null
    ID_Alocacao: number | null
    Comissao: number | null
    Balanca: string | null
    Tipo_Balanca: string | null
    Descricao_Balanca: string | null
    NCM: number | null
    Genero: string | null
    cEAN_Trib: string | null
    CEST: string | null
    Estoque: number | null
    Estoque_Reservado: number | null
    Estoque_Disponivel: number | null
    Tipo: number | null
    Deposito: string | null
    Fraciona: string | null
    Controle_Lote: string | null
    Requer_Observacao: string | null
    Nao_Controla_Estoque: string | null
    Nunca_Agrupa_Venda: string | null
    Preco_Atribuido: number | null
    Preco_Venda: number | null
    Preco_Compra: number | null
    Preco_Medio: number | null
    Data_Preco_Venda: Date | null
    Data_Custo: Date | null
    Margem: number | null
    Markup: number | null
    Classificacao: string | null
    Id_Produto_Vinculado: number | null
    Ultima_Venda: Date | null
    Ultima_Compra: Date | null
    Data_Alterado: Date | null
    Ativo: string | null
    RegExcluido: string | null
    IDEmpresa: number | null
    DHU: string | null
    Id_Importacao_Sistema: number | null
    Id_SubFamilia: number | null
    Estoque_Maximo: number | null
    Estoque_Minimo: number | null
    IDUser: number | null
    Cad_ViaXML: string | null
    Funcao: string | null
    Alterado: string | null
    N_Licenca_ANVISA: string | null
    Id_DCB: number | null
    Fidelidade_Credito: number | null
    Fidelidade_Resgate: number | null
    Dias_Validade: number | null
  }

  export type Tb_produtosMaxAggregateOutputType = {
    Codigo: number | null
    Produto: string | null
    Produto_Curto: string | null
    Produto_PDV: string | null
    Complemento: string | null
    Pesquisa_Rapida_PDV: string | null
    Id_Departamento: number | null
    Id_Setor: number | null
    Id_Marca: number | null
    Id_Grupo: number | null
    Id_SubGrupo: number | null
    Id_Unidade: number | null
    Id_Familia: number | null
    Codigo_Interno: string | null
    Peso: number | null
    Capacidade: number | null
    ID_Alocacao: number | null
    Comissao: number | null
    Balanca: string | null
    Tipo_Balanca: string | null
    Descricao_Balanca: string | null
    NCM: number | null
    Genero: string | null
    cEAN_Trib: string | null
    CEST: string | null
    Estoque: number | null
    Estoque_Reservado: number | null
    Estoque_Disponivel: number | null
    Tipo: number | null
    Deposito: string | null
    Fraciona: string | null
    Controle_Lote: string | null
    Requer_Observacao: string | null
    Nao_Controla_Estoque: string | null
    Nunca_Agrupa_Venda: string | null
    Preco_Atribuido: number | null
    Preco_Venda: number | null
    Preco_Compra: number | null
    Preco_Medio: number | null
    Data_Preco_Venda: Date | null
    Data_Custo: Date | null
    Margem: number | null
    Markup: number | null
    Classificacao: string | null
    Id_Produto_Vinculado: number | null
    Ultima_Venda: Date | null
    Ultima_Compra: Date | null
    Data_Alterado: Date | null
    Ativo: string | null
    RegExcluido: string | null
    IDEmpresa: number | null
    DHU: string | null
    Id_Importacao_Sistema: number | null
    Id_SubFamilia: number | null
    Estoque_Maximo: number | null
    Estoque_Minimo: number | null
    IDUser: number | null
    Cad_ViaXML: string | null
    Funcao: string | null
    Alterado: string | null
    N_Licenca_ANVISA: string | null
    Id_DCB: number | null
    Fidelidade_Credito: number | null
    Fidelidade_Resgate: number | null
    Dias_Validade: number | null
  }

  export type Tb_produtosCountAggregateOutputType = {
    Codigo: number
    Produto: number
    Produto_Curto: number
    Produto_PDV: number
    Complemento: number
    Pesquisa_Rapida_PDV: number
    Id_Departamento: number
    Id_Setor: number
    Id_Marca: number
    Id_Grupo: number
    Id_SubGrupo: number
    Id_Unidade: number
    Id_Familia: number
    Codigo_Interno: number
    Peso: number
    Capacidade: number
    ID_Alocacao: number
    Comissao: number
    Balanca: number
    Tipo_Balanca: number
    Descricao_Balanca: number
    NCM: number
    Genero: number
    cEAN_Trib: number
    CEST: number
    Estoque: number
    Estoque_Reservado: number
    Estoque_Disponivel: number
    Tipo: number
    Deposito: number
    Fraciona: number
    Controle_Lote: number
    Requer_Observacao: number
    Nao_Controla_Estoque: number
    Nunca_Agrupa_Venda: number
    Preco_Atribuido: number
    Preco_Venda: number
    Preco_Compra: number
    Preco_Medio: number
    Data_Preco_Venda: number
    Data_Custo: number
    Margem: number
    Markup: number
    Classificacao: number
    Id_Produto_Vinculado: number
    Ultima_Venda: number
    Ultima_Compra: number
    Data_Alterado: number
    Ativo: number
    RegExcluido: number
    IDEmpresa: number
    DHU: number
    Id_Importacao_Sistema: number
    Id_SubFamilia: number
    Estoque_Maximo: number
    Estoque_Minimo: number
    IDUser: number
    Cad_ViaXML: number
    Funcao: number
    Alterado: number
    N_Licenca_ANVISA: number
    Id_DCB: number
    Fidelidade_Credito: number
    Fidelidade_Resgate: number
    Dias_Validade: number
    _all: number
  }


  export type Tb_produtosAvgAggregateInputType = {
    Codigo?: true
    Id_Departamento?: true
    Id_Setor?: true
    Id_Marca?: true
    Id_Grupo?: true
    Id_SubGrupo?: true
    Id_Unidade?: true
    Id_Familia?: true
    Peso?: true
    Capacidade?: true
    ID_Alocacao?: true
    Comissao?: true
    NCM?: true
    Estoque?: true
    Estoque_Reservado?: true
    Estoque_Disponivel?: true
    Tipo?: true
    Preco_Atribuido?: true
    Preco_Venda?: true
    Preco_Compra?: true
    Preco_Medio?: true
    Margem?: true
    Markup?: true
    Id_Produto_Vinculado?: true
    IDEmpresa?: true
    Id_Importacao_Sistema?: true
    Id_SubFamilia?: true
    Estoque_Maximo?: true
    Estoque_Minimo?: true
    IDUser?: true
    Id_DCB?: true
    Fidelidade_Credito?: true
    Fidelidade_Resgate?: true
    Dias_Validade?: true
  }

  export type Tb_produtosSumAggregateInputType = {
    Codigo?: true
    Id_Departamento?: true
    Id_Setor?: true
    Id_Marca?: true
    Id_Grupo?: true
    Id_SubGrupo?: true
    Id_Unidade?: true
    Id_Familia?: true
    Peso?: true
    Capacidade?: true
    ID_Alocacao?: true
    Comissao?: true
    NCM?: true
    Estoque?: true
    Estoque_Reservado?: true
    Estoque_Disponivel?: true
    Tipo?: true
    Preco_Atribuido?: true
    Preco_Venda?: true
    Preco_Compra?: true
    Preco_Medio?: true
    Margem?: true
    Markup?: true
    Id_Produto_Vinculado?: true
    IDEmpresa?: true
    Id_Importacao_Sistema?: true
    Id_SubFamilia?: true
    Estoque_Maximo?: true
    Estoque_Minimo?: true
    IDUser?: true
    Id_DCB?: true
    Fidelidade_Credito?: true
    Fidelidade_Resgate?: true
    Dias_Validade?: true
  }

  export type Tb_produtosMinAggregateInputType = {
    Codigo?: true
    Produto?: true
    Produto_Curto?: true
    Produto_PDV?: true
    Complemento?: true
    Pesquisa_Rapida_PDV?: true
    Id_Departamento?: true
    Id_Setor?: true
    Id_Marca?: true
    Id_Grupo?: true
    Id_SubGrupo?: true
    Id_Unidade?: true
    Id_Familia?: true
    Codigo_Interno?: true
    Peso?: true
    Capacidade?: true
    ID_Alocacao?: true
    Comissao?: true
    Balanca?: true
    Tipo_Balanca?: true
    Descricao_Balanca?: true
    NCM?: true
    Genero?: true
    cEAN_Trib?: true
    CEST?: true
    Estoque?: true
    Estoque_Reservado?: true
    Estoque_Disponivel?: true
    Tipo?: true
    Deposito?: true
    Fraciona?: true
    Controle_Lote?: true
    Requer_Observacao?: true
    Nao_Controla_Estoque?: true
    Nunca_Agrupa_Venda?: true
    Preco_Atribuido?: true
    Preco_Venda?: true
    Preco_Compra?: true
    Preco_Medio?: true
    Data_Preco_Venda?: true
    Data_Custo?: true
    Margem?: true
    Markup?: true
    Classificacao?: true
    Id_Produto_Vinculado?: true
    Ultima_Venda?: true
    Ultima_Compra?: true
    Data_Alterado?: true
    Ativo?: true
    RegExcluido?: true
    IDEmpresa?: true
    DHU?: true
    Id_Importacao_Sistema?: true
    Id_SubFamilia?: true
    Estoque_Maximo?: true
    Estoque_Minimo?: true
    IDUser?: true
    Cad_ViaXML?: true
    Funcao?: true
    Alterado?: true
    N_Licenca_ANVISA?: true
    Id_DCB?: true
    Fidelidade_Credito?: true
    Fidelidade_Resgate?: true
    Dias_Validade?: true
  }

  export type Tb_produtosMaxAggregateInputType = {
    Codigo?: true
    Produto?: true
    Produto_Curto?: true
    Produto_PDV?: true
    Complemento?: true
    Pesquisa_Rapida_PDV?: true
    Id_Departamento?: true
    Id_Setor?: true
    Id_Marca?: true
    Id_Grupo?: true
    Id_SubGrupo?: true
    Id_Unidade?: true
    Id_Familia?: true
    Codigo_Interno?: true
    Peso?: true
    Capacidade?: true
    ID_Alocacao?: true
    Comissao?: true
    Balanca?: true
    Tipo_Balanca?: true
    Descricao_Balanca?: true
    NCM?: true
    Genero?: true
    cEAN_Trib?: true
    CEST?: true
    Estoque?: true
    Estoque_Reservado?: true
    Estoque_Disponivel?: true
    Tipo?: true
    Deposito?: true
    Fraciona?: true
    Controle_Lote?: true
    Requer_Observacao?: true
    Nao_Controla_Estoque?: true
    Nunca_Agrupa_Venda?: true
    Preco_Atribuido?: true
    Preco_Venda?: true
    Preco_Compra?: true
    Preco_Medio?: true
    Data_Preco_Venda?: true
    Data_Custo?: true
    Margem?: true
    Markup?: true
    Classificacao?: true
    Id_Produto_Vinculado?: true
    Ultima_Venda?: true
    Ultima_Compra?: true
    Data_Alterado?: true
    Ativo?: true
    RegExcluido?: true
    IDEmpresa?: true
    DHU?: true
    Id_Importacao_Sistema?: true
    Id_SubFamilia?: true
    Estoque_Maximo?: true
    Estoque_Minimo?: true
    IDUser?: true
    Cad_ViaXML?: true
    Funcao?: true
    Alterado?: true
    N_Licenca_ANVISA?: true
    Id_DCB?: true
    Fidelidade_Credito?: true
    Fidelidade_Resgate?: true
    Dias_Validade?: true
  }

  export type Tb_produtosCountAggregateInputType = {
    Codigo?: true
    Produto?: true
    Produto_Curto?: true
    Produto_PDV?: true
    Complemento?: true
    Pesquisa_Rapida_PDV?: true
    Id_Departamento?: true
    Id_Setor?: true
    Id_Marca?: true
    Id_Grupo?: true
    Id_SubGrupo?: true
    Id_Unidade?: true
    Id_Familia?: true
    Codigo_Interno?: true
    Peso?: true
    Capacidade?: true
    ID_Alocacao?: true
    Comissao?: true
    Balanca?: true
    Tipo_Balanca?: true
    Descricao_Balanca?: true
    NCM?: true
    Genero?: true
    cEAN_Trib?: true
    CEST?: true
    Estoque?: true
    Estoque_Reservado?: true
    Estoque_Disponivel?: true
    Tipo?: true
    Deposito?: true
    Fraciona?: true
    Controle_Lote?: true
    Requer_Observacao?: true
    Nao_Controla_Estoque?: true
    Nunca_Agrupa_Venda?: true
    Preco_Atribuido?: true
    Preco_Venda?: true
    Preco_Compra?: true
    Preco_Medio?: true
    Data_Preco_Venda?: true
    Data_Custo?: true
    Margem?: true
    Markup?: true
    Classificacao?: true
    Id_Produto_Vinculado?: true
    Ultima_Venda?: true
    Ultima_Compra?: true
    Data_Alterado?: true
    Ativo?: true
    RegExcluido?: true
    IDEmpresa?: true
    DHU?: true
    Id_Importacao_Sistema?: true
    Id_SubFamilia?: true
    Estoque_Maximo?: true
    Estoque_Minimo?: true
    IDUser?: true
    Cad_ViaXML?: true
    Funcao?: true
    Alterado?: true
    N_Licenca_ANVISA?: true
    Id_DCB?: true
    Fidelidade_Credito?: true
    Fidelidade_Resgate?: true
    Dias_Validade?: true
    _all?: true
  }

  export type Tb_produtosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_produtos to aggregate.
     */
    where?: tb_produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_produtos to fetch.
     */
    orderBy?: tb_produtosOrderByWithRelationInput | tb_produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_produtos
    **/
    _count?: true | Tb_produtosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_produtosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_produtosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_produtosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_produtosMaxAggregateInputType
  }

  export type GetTb_produtosAggregateType<T extends Tb_produtosAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_produtos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_produtos[P]>
      : GetScalarType<T[P], AggregateTb_produtos[P]>
  }




  export type tb_produtosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_produtosWhereInput
    orderBy?: tb_produtosOrderByWithAggregationInput | tb_produtosOrderByWithAggregationInput[]
    by: Tb_produtosScalarFieldEnum[] | Tb_produtosScalarFieldEnum
    having?: tb_produtosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_produtosCountAggregateInputType | true
    _avg?: Tb_produtosAvgAggregateInputType
    _sum?: Tb_produtosSumAggregateInputType
    _min?: Tb_produtosMinAggregateInputType
    _max?: Tb_produtosMaxAggregateInputType
  }

  export type Tb_produtosGroupByOutputType = {
    Codigo: number
    Produto: string | null
    Produto_Curto: string | null
    Produto_PDV: string | null
    Complemento: string | null
    Pesquisa_Rapida_PDV: string | null
    Id_Departamento: number | null
    Id_Setor: number | null
    Id_Marca: number | null
    Id_Grupo: number | null
    Id_SubGrupo: number | null
    Id_Unidade: number | null
    Id_Familia: number | null
    Codigo_Interno: string | null
    Peso: number | null
    Capacidade: number | null
    ID_Alocacao: number | null
    Comissao: number | null
    Balanca: string | null
    Tipo_Balanca: string | null
    Descricao_Balanca: string | null
    NCM: number | null
    Genero: string | null
    cEAN_Trib: string | null
    CEST: string | null
    Estoque: number | null
    Estoque_Reservado: number | null
    Estoque_Disponivel: number | null
    Tipo: number | null
    Deposito: string | null
    Fraciona: string | null
    Controle_Lote: string | null
    Requer_Observacao: string | null
    Nao_Controla_Estoque: string | null
    Nunca_Agrupa_Venda: string | null
    Preco_Atribuido: number | null
    Preco_Venda: number | null
    Preco_Compra: number | null
    Preco_Medio: number | null
    Data_Preco_Venda: Date | null
    Data_Custo: Date | null
    Margem: number | null
    Markup: number | null
    Classificacao: string | null
    Id_Produto_Vinculado: number | null
    Ultima_Venda: Date | null
    Ultima_Compra: Date | null
    Data_Alterado: Date | null
    Ativo: string | null
    RegExcluido: string | null
    IDEmpresa: number | null
    DHU: string | null
    Id_Importacao_Sistema: number | null
    Id_SubFamilia: number | null
    Estoque_Maximo: number | null
    Estoque_Minimo: number | null
    IDUser: number | null
    Cad_ViaXML: string | null
    Funcao: string | null
    Alterado: string | null
    N_Licenca_ANVISA: string | null
    Id_DCB: number | null
    Fidelidade_Credito: number | null
    Fidelidade_Resgate: number | null
    Dias_Validade: number | null
    _count: Tb_produtosCountAggregateOutputType | null
    _avg: Tb_produtosAvgAggregateOutputType | null
    _sum: Tb_produtosSumAggregateOutputType | null
    _min: Tb_produtosMinAggregateOutputType | null
    _max: Tb_produtosMaxAggregateOutputType | null
  }

  type GetTb_produtosGroupByPayload<T extends tb_produtosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_produtosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_produtosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_produtosGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_produtosGroupByOutputType[P]>
        }
      >
    >


  export type tb_produtosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Codigo?: boolean
    Produto?: boolean
    Produto_Curto?: boolean
    Produto_PDV?: boolean
    Complemento?: boolean
    Pesquisa_Rapida_PDV?: boolean
    Id_Departamento?: boolean
    Id_Setor?: boolean
    Id_Marca?: boolean
    Id_Grupo?: boolean
    Id_SubGrupo?: boolean
    Id_Unidade?: boolean
    Id_Familia?: boolean
    Codigo_Interno?: boolean
    Peso?: boolean
    Capacidade?: boolean
    ID_Alocacao?: boolean
    Comissao?: boolean
    Balanca?: boolean
    Tipo_Balanca?: boolean
    Descricao_Balanca?: boolean
    NCM?: boolean
    Genero?: boolean
    cEAN_Trib?: boolean
    CEST?: boolean
    Estoque?: boolean
    Estoque_Reservado?: boolean
    Estoque_Disponivel?: boolean
    Tipo?: boolean
    Deposito?: boolean
    Fraciona?: boolean
    Controle_Lote?: boolean
    Requer_Observacao?: boolean
    Nao_Controla_Estoque?: boolean
    Nunca_Agrupa_Venda?: boolean
    Preco_Atribuido?: boolean
    Preco_Venda?: boolean
    Preco_Compra?: boolean
    Preco_Medio?: boolean
    Data_Preco_Venda?: boolean
    Data_Custo?: boolean
    Margem?: boolean
    Markup?: boolean
    Classificacao?: boolean
    Id_Produto_Vinculado?: boolean
    Ultima_Venda?: boolean
    Ultima_Compra?: boolean
    Data_Alterado?: boolean
    Ativo?: boolean
    RegExcluido?: boolean
    IDEmpresa?: boolean
    DHU?: boolean
    Id_Importacao_Sistema?: boolean
    Id_SubFamilia?: boolean
    Estoque_Maximo?: boolean
    Estoque_Minimo?: boolean
    IDUser?: boolean
    Cad_ViaXML?: boolean
    Funcao?: boolean
    Alterado?: boolean
    N_Licenca_ANVISA?: boolean
    Id_DCB?: boolean
    Fidelidade_Credito?: boolean
    Fidelidade_Resgate?: boolean
    Dias_Validade?: boolean
  }, ExtArgs["result"]["tb_produtos"]>


  export type tb_produtosSelectScalar = {
    Codigo?: boolean
    Produto?: boolean
    Produto_Curto?: boolean
    Produto_PDV?: boolean
    Complemento?: boolean
    Pesquisa_Rapida_PDV?: boolean
    Id_Departamento?: boolean
    Id_Setor?: boolean
    Id_Marca?: boolean
    Id_Grupo?: boolean
    Id_SubGrupo?: boolean
    Id_Unidade?: boolean
    Id_Familia?: boolean
    Codigo_Interno?: boolean
    Peso?: boolean
    Capacidade?: boolean
    ID_Alocacao?: boolean
    Comissao?: boolean
    Balanca?: boolean
    Tipo_Balanca?: boolean
    Descricao_Balanca?: boolean
    NCM?: boolean
    Genero?: boolean
    cEAN_Trib?: boolean
    CEST?: boolean
    Estoque?: boolean
    Estoque_Reservado?: boolean
    Estoque_Disponivel?: boolean
    Tipo?: boolean
    Deposito?: boolean
    Fraciona?: boolean
    Controle_Lote?: boolean
    Requer_Observacao?: boolean
    Nao_Controla_Estoque?: boolean
    Nunca_Agrupa_Venda?: boolean
    Preco_Atribuido?: boolean
    Preco_Venda?: boolean
    Preco_Compra?: boolean
    Preco_Medio?: boolean
    Data_Preco_Venda?: boolean
    Data_Custo?: boolean
    Margem?: boolean
    Markup?: boolean
    Classificacao?: boolean
    Id_Produto_Vinculado?: boolean
    Ultima_Venda?: boolean
    Ultima_Compra?: boolean
    Data_Alterado?: boolean
    Ativo?: boolean
    RegExcluido?: boolean
    IDEmpresa?: boolean
    DHU?: boolean
    Id_Importacao_Sistema?: boolean
    Id_SubFamilia?: boolean
    Estoque_Maximo?: boolean
    Estoque_Minimo?: boolean
    IDUser?: boolean
    Cad_ViaXML?: boolean
    Funcao?: boolean
    Alterado?: boolean
    N_Licenca_ANVISA?: boolean
    Id_DCB?: boolean
    Fidelidade_Credito?: boolean
    Fidelidade_Resgate?: boolean
    Dias_Validade?: boolean
  }


  export type $tb_produtosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_produtos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Codigo: number
      Produto: string | null
      Produto_Curto: string | null
      Produto_PDV: string | null
      Complemento: string | null
      Pesquisa_Rapida_PDV: string | null
      Id_Departamento: number | null
      Id_Setor: number | null
      Id_Marca: number | null
      Id_Grupo: number | null
      Id_SubGrupo: number | null
      Id_Unidade: number | null
      Id_Familia: number | null
      Codigo_Interno: string | null
      Peso: number | null
      Capacidade: number | null
      ID_Alocacao: number | null
      Comissao: number | null
      Balanca: string | null
      Tipo_Balanca: string | null
      Descricao_Balanca: string | null
      NCM: number | null
      Genero: string | null
      cEAN_Trib: string | null
      CEST: string | null
      Estoque: number | null
      Estoque_Reservado: number | null
      Estoque_Disponivel: number | null
      Tipo: number | null
      Deposito: string | null
      Fraciona: string | null
      Controle_Lote: string | null
      Requer_Observacao: string | null
      Nao_Controla_Estoque: string | null
      Nunca_Agrupa_Venda: string | null
      Preco_Atribuido: number | null
      Preco_Venda: number | null
      Preco_Compra: number | null
      Preco_Medio: number | null
      Data_Preco_Venda: Date | null
      Data_Custo: Date | null
      Margem: number | null
      Markup: number | null
      Classificacao: string | null
      Id_Produto_Vinculado: number | null
      Ultima_Venda: Date | null
      Ultima_Compra: Date | null
      Data_Alterado: Date | null
      Ativo: string | null
      RegExcluido: string | null
      IDEmpresa: number | null
      DHU: string | null
      Id_Importacao_Sistema: number | null
      Id_SubFamilia: number | null
      Estoque_Maximo: number | null
      Estoque_Minimo: number | null
      IDUser: number | null
      Cad_ViaXML: string | null
      Funcao: string | null
      Alterado: string | null
      N_Licenca_ANVISA: string | null
      Id_DCB: number | null
      Fidelidade_Credito: number | null
      Fidelidade_Resgate: number | null
      Dias_Validade: number | null
    }, ExtArgs["result"]["tb_produtos"]>
    composites: {}
  }

  type tb_produtosGetPayload<S extends boolean | null | undefined | tb_produtosDefaultArgs> = $Result.GetResult<Prisma.$tb_produtosPayload, S>

  type tb_produtosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tb_produtosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tb_produtosCountAggregateInputType | true
    }

  export interface tb_produtosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_produtos'], meta: { name: 'tb_produtos' } }
    /**
     * Find zero or one Tb_produtos that matches the filter.
     * @param {tb_produtosFindUniqueArgs} args - Arguments to find a Tb_produtos
     * @example
     * // Get one Tb_produtos
     * const tb_produtos = await prisma.tb_produtos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_produtosFindUniqueArgs>(args: SelectSubset<T, tb_produtosFindUniqueArgs<ExtArgs>>): Prisma__tb_produtosClient<$Result.GetResult<Prisma.$tb_produtosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tb_produtos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tb_produtosFindUniqueOrThrowArgs} args - Arguments to find a Tb_produtos
     * @example
     * // Get one Tb_produtos
     * const tb_produtos = await prisma.tb_produtos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_produtosFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_produtosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_produtosClient<$Result.GetResult<Prisma.$tb_produtosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tb_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtosFindFirstArgs} args - Arguments to find a Tb_produtos
     * @example
     * // Get one Tb_produtos
     * const tb_produtos = await prisma.tb_produtos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_produtosFindFirstArgs>(args?: SelectSubset<T, tb_produtosFindFirstArgs<ExtArgs>>): Prisma__tb_produtosClient<$Result.GetResult<Prisma.$tb_produtosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tb_produtos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtosFindFirstOrThrowArgs} args - Arguments to find a Tb_produtos
     * @example
     * // Get one Tb_produtos
     * const tb_produtos = await prisma.tb_produtos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_produtosFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_produtosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_produtosClient<$Result.GetResult<Prisma.$tb_produtosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tb_produtos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_produtos
     * const tb_produtos = await prisma.tb_produtos.findMany()
     * 
     * // Get first 10 Tb_produtos
     * const tb_produtos = await prisma.tb_produtos.findMany({ take: 10 })
     * 
     * // Only select the `Codigo`
     * const tb_produtosWithCodigoOnly = await prisma.tb_produtos.findMany({ select: { Codigo: true } })
     * 
     */
    findMany<T extends tb_produtosFindManyArgs>(args?: SelectSubset<T, tb_produtosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_produtosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tb_produtos.
     * @param {tb_produtosCreateArgs} args - Arguments to create a Tb_produtos.
     * @example
     * // Create one Tb_produtos
     * const Tb_produtos = await prisma.tb_produtos.create({
     *   data: {
     *     // ... data to create a Tb_produtos
     *   }
     * })
     * 
     */
    create<T extends tb_produtosCreateArgs>(args: SelectSubset<T, tb_produtosCreateArgs<ExtArgs>>): Prisma__tb_produtosClient<$Result.GetResult<Prisma.$tb_produtosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tb_produtos.
     * @param {tb_produtosCreateManyArgs} args - Arguments to create many Tb_produtos.
     * @example
     * // Create many Tb_produtos
     * const tb_produtos = await prisma.tb_produtos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_produtosCreateManyArgs>(args?: SelectSubset<T, tb_produtosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_produtos.
     * @param {tb_produtosDeleteArgs} args - Arguments to delete one Tb_produtos.
     * @example
     * // Delete one Tb_produtos
     * const Tb_produtos = await prisma.tb_produtos.delete({
     *   where: {
     *     // ... filter to delete one Tb_produtos
     *   }
     * })
     * 
     */
    delete<T extends tb_produtosDeleteArgs>(args: SelectSubset<T, tb_produtosDeleteArgs<ExtArgs>>): Prisma__tb_produtosClient<$Result.GetResult<Prisma.$tb_produtosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tb_produtos.
     * @param {tb_produtosUpdateArgs} args - Arguments to update one Tb_produtos.
     * @example
     * // Update one Tb_produtos
     * const tb_produtos = await prisma.tb_produtos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_produtosUpdateArgs>(args: SelectSubset<T, tb_produtosUpdateArgs<ExtArgs>>): Prisma__tb_produtosClient<$Result.GetResult<Prisma.$tb_produtosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tb_produtos.
     * @param {tb_produtosDeleteManyArgs} args - Arguments to filter Tb_produtos to delete.
     * @example
     * // Delete a few Tb_produtos
     * const { count } = await prisma.tb_produtos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_produtosDeleteManyArgs>(args?: SelectSubset<T, tb_produtosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_produtos
     * const tb_produtos = await prisma.tb_produtos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_produtosUpdateManyArgs>(args: SelectSubset<T, tb_produtosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_produtos.
     * @param {tb_produtosUpsertArgs} args - Arguments to update or create a Tb_produtos.
     * @example
     * // Update or create a Tb_produtos
     * const tb_produtos = await prisma.tb_produtos.upsert({
     *   create: {
     *     // ... data to create a Tb_produtos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_produtos we want to update
     *   }
     * })
     */
    upsert<T extends tb_produtosUpsertArgs>(args: SelectSubset<T, tb_produtosUpsertArgs<ExtArgs>>): Prisma__tb_produtosClient<$Result.GetResult<Prisma.$tb_produtosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tb_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtosCountArgs} args - Arguments to filter Tb_produtos to count.
     * @example
     * // Count the number of Tb_produtos
     * const count = await prisma.tb_produtos.count({
     *   where: {
     *     // ... the filter for the Tb_produtos we want to count
     *   }
     * })
    **/
    count<T extends tb_produtosCountArgs>(
      args?: Subset<T, tb_produtosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_produtosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_produtosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_produtosAggregateArgs>(args: Subset<T, Tb_produtosAggregateArgs>): Prisma.PrismaPromise<GetTb_produtosAggregateType<T>>

    /**
     * Group by Tb_produtos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtosGroupByArgs} args - Group by arguments.
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
      T extends tb_produtosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_produtosGroupByArgs['orderBy'] }
        : { orderBy?: tb_produtosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_produtosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_produtosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_produtos model
   */
  readonly fields: tb_produtosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_produtos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_produtosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_produtos model
   */ 
  interface tb_produtosFieldRefs {
    readonly Codigo: FieldRef<"tb_produtos", 'Int'>
    readonly Produto: FieldRef<"tb_produtos", 'String'>
    readonly Produto_Curto: FieldRef<"tb_produtos", 'String'>
    readonly Produto_PDV: FieldRef<"tb_produtos", 'String'>
    readonly Complemento: FieldRef<"tb_produtos", 'String'>
    readonly Pesquisa_Rapida_PDV: FieldRef<"tb_produtos", 'String'>
    readonly Id_Departamento: FieldRef<"tb_produtos", 'Int'>
    readonly Id_Setor: FieldRef<"tb_produtos", 'Int'>
    readonly Id_Marca: FieldRef<"tb_produtos", 'Int'>
    readonly Id_Grupo: FieldRef<"tb_produtos", 'Int'>
    readonly Id_SubGrupo: FieldRef<"tb_produtos", 'Int'>
    readonly Id_Unidade: FieldRef<"tb_produtos", 'Int'>
    readonly Id_Familia: FieldRef<"tb_produtos", 'Int'>
    readonly Codigo_Interno: FieldRef<"tb_produtos", 'String'>
    readonly Peso: FieldRef<"tb_produtos", 'Float'>
    readonly Capacidade: FieldRef<"tb_produtos", 'Float'>
    readonly ID_Alocacao: FieldRef<"tb_produtos", 'Int'>
    readonly Comissao: FieldRef<"tb_produtos", 'Float'>
    readonly Balanca: FieldRef<"tb_produtos", 'String'>
    readonly Tipo_Balanca: FieldRef<"tb_produtos", 'String'>
    readonly Descricao_Balanca: FieldRef<"tb_produtos", 'String'>
    readonly NCM: FieldRef<"tb_produtos", 'Int'>
    readonly Genero: FieldRef<"tb_produtos", 'String'>
    readonly cEAN_Trib: FieldRef<"tb_produtos", 'String'>
    readonly CEST: FieldRef<"tb_produtos", 'String'>
    readonly Estoque: FieldRef<"tb_produtos", 'Float'>
    readonly Estoque_Reservado: FieldRef<"tb_produtos", 'Float'>
    readonly Estoque_Disponivel: FieldRef<"tb_produtos", 'Float'>
    readonly Tipo: FieldRef<"tb_produtos", 'Float'>
    readonly Deposito: FieldRef<"tb_produtos", 'String'>
    readonly Fraciona: FieldRef<"tb_produtos", 'String'>
    readonly Controle_Lote: FieldRef<"tb_produtos", 'String'>
    readonly Requer_Observacao: FieldRef<"tb_produtos", 'String'>
    readonly Nao_Controla_Estoque: FieldRef<"tb_produtos", 'String'>
    readonly Nunca_Agrupa_Venda: FieldRef<"tb_produtos", 'String'>
    readonly Preco_Atribuido: FieldRef<"tb_produtos", 'Float'>
    readonly Preco_Venda: FieldRef<"tb_produtos", 'Float'>
    readonly Preco_Compra: FieldRef<"tb_produtos", 'Float'>
    readonly Preco_Medio: FieldRef<"tb_produtos", 'Float'>
    readonly Data_Preco_Venda: FieldRef<"tb_produtos", 'DateTime'>
    readonly Data_Custo: FieldRef<"tb_produtos", 'DateTime'>
    readonly Margem: FieldRef<"tb_produtos", 'Float'>
    readonly Markup: FieldRef<"tb_produtos", 'Float'>
    readonly Classificacao: FieldRef<"tb_produtos", 'String'>
    readonly Id_Produto_Vinculado: FieldRef<"tb_produtos", 'Int'>
    readonly Ultima_Venda: FieldRef<"tb_produtos", 'DateTime'>
    readonly Ultima_Compra: FieldRef<"tb_produtos", 'DateTime'>
    readonly Data_Alterado: FieldRef<"tb_produtos", 'DateTime'>
    readonly Ativo: FieldRef<"tb_produtos", 'String'>
    readonly RegExcluido: FieldRef<"tb_produtos", 'String'>
    readonly IDEmpresa: FieldRef<"tb_produtos", 'Int'>
    readonly DHU: FieldRef<"tb_produtos", 'String'>
    readonly Id_Importacao_Sistema: FieldRef<"tb_produtos", 'Int'>
    readonly Id_SubFamilia: FieldRef<"tb_produtos", 'Int'>
    readonly Estoque_Maximo: FieldRef<"tb_produtos", 'Float'>
    readonly Estoque_Minimo: FieldRef<"tb_produtos", 'Float'>
    readonly IDUser: FieldRef<"tb_produtos", 'Int'>
    readonly Cad_ViaXML: FieldRef<"tb_produtos", 'String'>
    readonly Funcao: FieldRef<"tb_produtos", 'String'>
    readonly Alterado: FieldRef<"tb_produtos", 'String'>
    readonly N_Licenca_ANVISA: FieldRef<"tb_produtos", 'String'>
    readonly Id_DCB: FieldRef<"tb_produtos", 'Int'>
    readonly Fidelidade_Credito: FieldRef<"tb_produtos", 'Float'>
    readonly Fidelidade_Resgate: FieldRef<"tb_produtos", 'Float'>
    readonly Dias_Validade: FieldRef<"tb_produtos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tb_produtos findUnique
   */
  export type tb_produtosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos
     */
    select?: tb_produtosSelect<ExtArgs> | null
    /**
     * Filter, which tb_produtos to fetch.
     */
    where: tb_produtosWhereUniqueInput
  }

  /**
   * tb_produtos findUniqueOrThrow
   */
  export type tb_produtosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos
     */
    select?: tb_produtosSelect<ExtArgs> | null
    /**
     * Filter, which tb_produtos to fetch.
     */
    where: tb_produtosWhereUniqueInput
  }

  /**
   * tb_produtos findFirst
   */
  export type tb_produtosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos
     */
    select?: tb_produtosSelect<ExtArgs> | null
    /**
     * Filter, which tb_produtos to fetch.
     */
    where?: tb_produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_produtos to fetch.
     */
    orderBy?: tb_produtosOrderByWithRelationInput | tb_produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_produtos.
     */
    cursor?: tb_produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_produtos.
     */
    distinct?: Tb_produtosScalarFieldEnum | Tb_produtosScalarFieldEnum[]
  }

  /**
   * tb_produtos findFirstOrThrow
   */
  export type tb_produtosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos
     */
    select?: tb_produtosSelect<ExtArgs> | null
    /**
     * Filter, which tb_produtos to fetch.
     */
    where?: tb_produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_produtos to fetch.
     */
    orderBy?: tb_produtosOrderByWithRelationInput | tb_produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_produtos.
     */
    cursor?: tb_produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_produtos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_produtos.
     */
    distinct?: Tb_produtosScalarFieldEnum | Tb_produtosScalarFieldEnum[]
  }

  /**
   * tb_produtos findMany
   */
  export type tb_produtosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos
     */
    select?: tb_produtosSelect<ExtArgs> | null
    /**
     * Filter, which tb_produtos to fetch.
     */
    where?: tb_produtosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_produtos to fetch.
     */
    orderBy?: tb_produtosOrderByWithRelationInput | tb_produtosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_produtos.
     */
    cursor?: tb_produtosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_produtos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_produtos.
     */
    skip?: number
    distinct?: Tb_produtosScalarFieldEnum | Tb_produtosScalarFieldEnum[]
  }

  /**
   * tb_produtos create
   */
  export type tb_produtosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos
     */
    select?: tb_produtosSelect<ExtArgs> | null
    /**
     * The data needed to create a tb_produtos.
     */
    data: XOR<tb_produtosCreateInput, tb_produtosUncheckedCreateInput>
  }

  /**
   * tb_produtos createMany
   */
  export type tb_produtosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_produtos.
     */
    data: tb_produtosCreateManyInput | tb_produtosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_produtos update
   */
  export type tb_produtosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos
     */
    select?: tb_produtosSelect<ExtArgs> | null
    /**
     * The data needed to update a tb_produtos.
     */
    data: XOR<tb_produtosUpdateInput, tb_produtosUncheckedUpdateInput>
    /**
     * Choose, which tb_produtos to update.
     */
    where: tb_produtosWhereUniqueInput
  }

  /**
   * tb_produtos updateMany
   */
  export type tb_produtosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_produtos.
     */
    data: XOR<tb_produtosUpdateManyMutationInput, tb_produtosUncheckedUpdateManyInput>
    /**
     * Filter which tb_produtos to update
     */
    where?: tb_produtosWhereInput
  }

  /**
   * tb_produtos upsert
   */
  export type tb_produtosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos
     */
    select?: tb_produtosSelect<ExtArgs> | null
    /**
     * The filter to search for the tb_produtos to update in case it exists.
     */
    where: tb_produtosWhereUniqueInput
    /**
     * In case the tb_produtos found by the `where` argument doesn't exist, create a new tb_produtos with this data.
     */
    create: XOR<tb_produtosCreateInput, tb_produtosUncheckedCreateInput>
    /**
     * In case the tb_produtos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_produtosUpdateInput, tb_produtosUncheckedUpdateInput>
  }

  /**
   * tb_produtos delete
   */
  export type tb_produtosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos
     */
    select?: tb_produtosSelect<ExtArgs> | null
    /**
     * Filter which tb_produtos to delete.
     */
    where: tb_produtosWhereUniqueInput
  }

  /**
   * tb_produtos deleteMany
   */
  export type tb_produtosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_produtos to delete
     */
    where?: tb_produtosWhereInput
  }

  /**
   * tb_produtos without action
   */
  export type tb_produtosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos
     */
    select?: tb_produtosSelect<ExtArgs> | null
  }


  /**
   * Model tb_produtos_setor
   */

  export type AggregateTb_produtos_setor = {
    _count: Tb_produtos_setorCountAggregateOutputType | null
    _avg: Tb_produtos_setorAvgAggregateOutputType | null
    _sum: Tb_produtos_setorSumAggregateOutputType | null
    _min: Tb_produtos_setorMinAggregateOutputType | null
    _max: Tb_produtos_setorMaxAggregateOutputType | null
  }

  export type Tb_produtos_setorAvgAggregateOutputType = {
    Codigo: number | null
    IDEmpresa: number | null
    IDUser: number | null
  }

  export type Tb_produtos_setorSumAggregateOutputType = {
    Codigo: number | null
    IDEmpresa: number | null
    IDUser: number | null
  }

  export type Tb_produtos_setorMinAggregateOutputType = {
    Codigo: number | null
    Setor: string | null
    Ativo: string | null
    RegExcluido: string | null
    IDEmpresa: number | null
    DHU: string | null
    IDUser: number | null
  }

  export type Tb_produtos_setorMaxAggregateOutputType = {
    Codigo: number | null
    Setor: string | null
    Ativo: string | null
    RegExcluido: string | null
    IDEmpresa: number | null
    DHU: string | null
    IDUser: number | null
  }

  export type Tb_produtos_setorCountAggregateOutputType = {
    Codigo: number
    Setor: number
    Ativo: number
    RegExcluido: number
    IDEmpresa: number
    DHU: number
    IDUser: number
    _all: number
  }


  export type Tb_produtos_setorAvgAggregateInputType = {
    Codigo?: true
    IDEmpresa?: true
    IDUser?: true
  }

  export type Tb_produtos_setorSumAggregateInputType = {
    Codigo?: true
    IDEmpresa?: true
    IDUser?: true
  }

  export type Tb_produtos_setorMinAggregateInputType = {
    Codigo?: true
    Setor?: true
    Ativo?: true
    RegExcluido?: true
    IDEmpresa?: true
    DHU?: true
    IDUser?: true
  }

  export type Tb_produtos_setorMaxAggregateInputType = {
    Codigo?: true
    Setor?: true
    Ativo?: true
    RegExcluido?: true
    IDEmpresa?: true
    DHU?: true
    IDUser?: true
  }

  export type Tb_produtos_setorCountAggregateInputType = {
    Codigo?: true
    Setor?: true
    Ativo?: true
    RegExcluido?: true
    IDEmpresa?: true
    DHU?: true
    IDUser?: true
    _all?: true
  }

  export type Tb_produtos_setorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_produtos_setor to aggregate.
     */
    where?: tb_produtos_setorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_produtos_setors to fetch.
     */
    orderBy?: tb_produtos_setorOrderByWithRelationInput | tb_produtos_setorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_produtos_setorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_produtos_setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_produtos_setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_produtos_setors
    **/
    _count?: true | Tb_produtos_setorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_produtos_setorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_produtos_setorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_produtos_setorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_produtos_setorMaxAggregateInputType
  }

  export type GetTb_produtos_setorAggregateType<T extends Tb_produtos_setorAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_produtos_setor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_produtos_setor[P]>
      : GetScalarType<T[P], AggregateTb_produtos_setor[P]>
  }




  export type tb_produtos_setorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_produtos_setorWhereInput
    orderBy?: tb_produtos_setorOrderByWithAggregationInput | tb_produtos_setorOrderByWithAggregationInput[]
    by: Tb_produtos_setorScalarFieldEnum[] | Tb_produtos_setorScalarFieldEnum
    having?: tb_produtos_setorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_produtos_setorCountAggregateInputType | true
    _avg?: Tb_produtos_setorAvgAggregateInputType
    _sum?: Tb_produtos_setorSumAggregateInputType
    _min?: Tb_produtos_setorMinAggregateInputType
    _max?: Tb_produtos_setorMaxAggregateInputType
  }

  export type Tb_produtos_setorGroupByOutputType = {
    Codigo: number
    Setor: string | null
    Ativo: string | null
    RegExcluido: string | null
    IDEmpresa: number | null
    DHU: string | null
    IDUser: number | null
    _count: Tb_produtos_setorCountAggregateOutputType | null
    _avg: Tb_produtos_setorAvgAggregateOutputType | null
    _sum: Tb_produtos_setorSumAggregateOutputType | null
    _min: Tb_produtos_setorMinAggregateOutputType | null
    _max: Tb_produtos_setorMaxAggregateOutputType | null
  }

  type GetTb_produtos_setorGroupByPayload<T extends tb_produtos_setorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_produtos_setorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_produtos_setorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_produtos_setorGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_produtos_setorGroupByOutputType[P]>
        }
      >
    >


  export type tb_produtos_setorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Codigo?: boolean
    Setor?: boolean
    Ativo?: boolean
    RegExcluido?: boolean
    IDEmpresa?: boolean
    DHU?: boolean
    IDUser?: boolean
  }, ExtArgs["result"]["tb_produtos_setor"]>


  export type tb_produtos_setorSelectScalar = {
    Codigo?: boolean
    Setor?: boolean
    Ativo?: boolean
    RegExcluido?: boolean
    IDEmpresa?: boolean
    DHU?: boolean
    IDUser?: boolean
  }


  export type $tb_produtos_setorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_produtos_setor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Codigo: number
      Setor: string | null
      Ativo: string | null
      RegExcluido: string | null
      IDEmpresa: number | null
      DHU: string | null
      IDUser: number | null
    }, ExtArgs["result"]["tb_produtos_setor"]>
    composites: {}
  }

  type tb_produtos_setorGetPayload<S extends boolean | null | undefined | tb_produtos_setorDefaultArgs> = $Result.GetResult<Prisma.$tb_produtos_setorPayload, S>

  type tb_produtos_setorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tb_produtos_setorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tb_produtos_setorCountAggregateInputType | true
    }

  export interface tb_produtos_setorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_produtos_setor'], meta: { name: 'tb_produtos_setor' } }
    /**
     * Find zero or one Tb_produtos_setor that matches the filter.
     * @param {tb_produtos_setorFindUniqueArgs} args - Arguments to find a Tb_produtos_setor
     * @example
     * // Get one Tb_produtos_setor
     * const tb_produtos_setor = await prisma.tb_produtos_setor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_produtos_setorFindUniqueArgs>(args: SelectSubset<T, tb_produtos_setorFindUniqueArgs<ExtArgs>>): Prisma__tb_produtos_setorClient<$Result.GetResult<Prisma.$tb_produtos_setorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tb_produtos_setor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tb_produtos_setorFindUniqueOrThrowArgs} args - Arguments to find a Tb_produtos_setor
     * @example
     * // Get one Tb_produtos_setor
     * const tb_produtos_setor = await prisma.tb_produtos_setor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_produtos_setorFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_produtos_setorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_produtos_setorClient<$Result.GetResult<Prisma.$tb_produtos_setorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tb_produtos_setor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtos_setorFindFirstArgs} args - Arguments to find a Tb_produtos_setor
     * @example
     * // Get one Tb_produtos_setor
     * const tb_produtos_setor = await prisma.tb_produtos_setor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_produtos_setorFindFirstArgs>(args?: SelectSubset<T, tb_produtos_setorFindFirstArgs<ExtArgs>>): Prisma__tb_produtos_setorClient<$Result.GetResult<Prisma.$tb_produtos_setorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tb_produtos_setor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtos_setorFindFirstOrThrowArgs} args - Arguments to find a Tb_produtos_setor
     * @example
     * // Get one Tb_produtos_setor
     * const tb_produtos_setor = await prisma.tb_produtos_setor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_produtos_setorFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_produtos_setorFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_produtos_setorClient<$Result.GetResult<Prisma.$tb_produtos_setorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tb_produtos_setors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtos_setorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_produtos_setors
     * const tb_produtos_setors = await prisma.tb_produtos_setor.findMany()
     * 
     * // Get first 10 Tb_produtos_setors
     * const tb_produtos_setors = await prisma.tb_produtos_setor.findMany({ take: 10 })
     * 
     * // Only select the `Codigo`
     * const tb_produtos_setorWithCodigoOnly = await prisma.tb_produtos_setor.findMany({ select: { Codigo: true } })
     * 
     */
    findMany<T extends tb_produtos_setorFindManyArgs>(args?: SelectSubset<T, tb_produtos_setorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_produtos_setorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tb_produtos_setor.
     * @param {tb_produtos_setorCreateArgs} args - Arguments to create a Tb_produtos_setor.
     * @example
     * // Create one Tb_produtos_setor
     * const Tb_produtos_setor = await prisma.tb_produtos_setor.create({
     *   data: {
     *     // ... data to create a Tb_produtos_setor
     *   }
     * })
     * 
     */
    create<T extends tb_produtos_setorCreateArgs>(args: SelectSubset<T, tb_produtos_setorCreateArgs<ExtArgs>>): Prisma__tb_produtos_setorClient<$Result.GetResult<Prisma.$tb_produtos_setorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tb_produtos_setors.
     * @param {tb_produtos_setorCreateManyArgs} args - Arguments to create many Tb_produtos_setors.
     * @example
     * // Create many Tb_produtos_setors
     * const tb_produtos_setor = await prisma.tb_produtos_setor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_produtos_setorCreateManyArgs>(args?: SelectSubset<T, tb_produtos_setorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_produtos_setor.
     * @param {tb_produtos_setorDeleteArgs} args - Arguments to delete one Tb_produtos_setor.
     * @example
     * // Delete one Tb_produtos_setor
     * const Tb_produtos_setor = await prisma.tb_produtos_setor.delete({
     *   where: {
     *     // ... filter to delete one Tb_produtos_setor
     *   }
     * })
     * 
     */
    delete<T extends tb_produtos_setorDeleteArgs>(args: SelectSubset<T, tb_produtos_setorDeleteArgs<ExtArgs>>): Prisma__tb_produtos_setorClient<$Result.GetResult<Prisma.$tb_produtos_setorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tb_produtos_setor.
     * @param {tb_produtos_setorUpdateArgs} args - Arguments to update one Tb_produtos_setor.
     * @example
     * // Update one Tb_produtos_setor
     * const tb_produtos_setor = await prisma.tb_produtos_setor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_produtos_setorUpdateArgs>(args: SelectSubset<T, tb_produtos_setorUpdateArgs<ExtArgs>>): Prisma__tb_produtos_setorClient<$Result.GetResult<Prisma.$tb_produtos_setorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tb_produtos_setors.
     * @param {tb_produtos_setorDeleteManyArgs} args - Arguments to filter Tb_produtos_setors to delete.
     * @example
     * // Delete a few Tb_produtos_setors
     * const { count } = await prisma.tb_produtos_setor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_produtos_setorDeleteManyArgs>(args?: SelectSubset<T, tb_produtos_setorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_produtos_setors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtos_setorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_produtos_setors
     * const tb_produtos_setor = await prisma.tb_produtos_setor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_produtos_setorUpdateManyArgs>(args: SelectSubset<T, tb_produtos_setorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_produtos_setor.
     * @param {tb_produtos_setorUpsertArgs} args - Arguments to update or create a Tb_produtos_setor.
     * @example
     * // Update or create a Tb_produtos_setor
     * const tb_produtos_setor = await prisma.tb_produtos_setor.upsert({
     *   create: {
     *     // ... data to create a Tb_produtos_setor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_produtos_setor we want to update
     *   }
     * })
     */
    upsert<T extends tb_produtos_setorUpsertArgs>(args: SelectSubset<T, tb_produtos_setorUpsertArgs<ExtArgs>>): Prisma__tb_produtos_setorClient<$Result.GetResult<Prisma.$tb_produtos_setorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tb_produtos_setors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtos_setorCountArgs} args - Arguments to filter Tb_produtos_setors to count.
     * @example
     * // Count the number of Tb_produtos_setors
     * const count = await prisma.tb_produtos_setor.count({
     *   where: {
     *     // ... the filter for the Tb_produtos_setors we want to count
     *   }
     * })
    **/
    count<T extends tb_produtos_setorCountArgs>(
      args?: Subset<T, tb_produtos_setorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_produtos_setorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_produtos_setor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_produtos_setorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_produtos_setorAggregateArgs>(args: Subset<T, Tb_produtos_setorAggregateArgs>): Prisma.PrismaPromise<GetTb_produtos_setorAggregateType<T>>

    /**
     * Group by Tb_produtos_setor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_produtos_setorGroupByArgs} args - Group by arguments.
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
      T extends tb_produtos_setorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_produtos_setorGroupByArgs['orderBy'] }
        : { orderBy?: tb_produtos_setorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_produtos_setorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_produtos_setorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_produtos_setor model
   */
  readonly fields: tb_produtos_setorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_produtos_setor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_produtos_setorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_produtos_setor model
   */ 
  interface tb_produtos_setorFieldRefs {
    readonly Codigo: FieldRef<"tb_produtos_setor", 'Int'>
    readonly Setor: FieldRef<"tb_produtos_setor", 'String'>
    readonly Ativo: FieldRef<"tb_produtos_setor", 'String'>
    readonly RegExcluido: FieldRef<"tb_produtos_setor", 'String'>
    readonly IDEmpresa: FieldRef<"tb_produtos_setor", 'Int'>
    readonly DHU: FieldRef<"tb_produtos_setor", 'String'>
    readonly IDUser: FieldRef<"tb_produtos_setor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tb_produtos_setor findUnique
   */
  export type tb_produtos_setorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_setor
     */
    select?: tb_produtos_setorSelect<ExtArgs> | null
    /**
     * Filter, which tb_produtos_setor to fetch.
     */
    where: tb_produtos_setorWhereUniqueInput
  }

  /**
   * tb_produtos_setor findUniqueOrThrow
   */
  export type tb_produtos_setorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_setor
     */
    select?: tb_produtos_setorSelect<ExtArgs> | null
    /**
     * Filter, which tb_produtos_setor to fetch.
     */
    where: tb_produtos_setorWhereUniqueInput
  }

  /**
   * tb_produtos_setor findFirst
   */
  export type tb_produtos_setorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_setor
     */
    select?: tb_produtos_setorSelect<ExtArgs> | null
    /**
     * Filter, which tb_produtos_setor to fetch.
     */
    where?: tb_produtos_setorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_produtos_setors to fetch.
     */
    orderBy?: tb_produtos_setorOrderByWithRelationInput | tb_produtos_setorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_produtos_setors.
     */
    cursor?: tb_produtos_setorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_produtos_setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_produtos_setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_produtos_setors.
     */
    distinct?: Tb_produtos_setorScalarFieldEnum | Tb_produtos_setorScalarFieldEnum[]
  }

  /**
   * tb_produtos_setor findFirstOrThrow
   */
  export type tb_produtos_setorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_setor
     */
    select?: tb_produtos_setorSelect<ExtArgs> | null
    /**
     * Filter, which tb_produtos_setor to fetch.
     */
    where?: tb_produtos_setorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_produtos_setors to fetch.
     */
    orderBy?: tb_produtos_setorOrderByWithRelationInput | tb_produtos_setorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_produtos_setors.
     */
    cursor?: tb_produtos_setorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_produtos_setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_produtos_setors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_produtos_setors.
     */
    distinct?: Tb_produtos_setorScalarFieldEnum | Tb_produtos_setorScalarFieldEnum[]
  }

  /**
   * tb_produtos_setor findMany
   */
  export type tb_produtos_setorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_setor
     */
    select?: tb_produtos_setorSelect<ExtArgs> | null
    /**
     * Filter, which tb_produtos_setors to fetch.
     */
    where?: tb_produtos_setorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_produtos_setors to fetch.
     */
    orderBy?: tb_produtos_setorOrderByWithRelationInput | tb_produtos_setorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_produtos_setors.
     */
    cursor?: tb_produtos_setorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_produtos_setors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_produtos_setors.
     */
    skip?: number
    distinct?: Tb_produtos_setorScalarFieldEnum | Tb_produtos_setorScalarFieldEnum[]
  }

  /**
   * tb_produtos_setor create
   */
  export type tb_produtos_setorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_setor
     */
    select?: tb_produtos_setorSelect<ExtArgs> | null
    /**
     * The data needed to create a tb_produtos_setor.
     */
    data: XOR<tb_produtos_setorCreateInput, tb_produtos_setorUncheckedCreateInput>
  }

  /**
   * tb_produtos_setor createMany
   */
  export type tb_produtos_setorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_produtos_setors.
     */
    data: tb_produtos_setorCreateManyInput | tb_produtos_setorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_produtos_setor update
   */
  export type tb_produtos_setorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_setor
     */
    select?: tb_produtos_setorSelect<ExtArgs> | null
    /**
     * The data needed to update a tb_produtos_setor.
     */
    data: XOR<tb_produtos_setorUpdateInput, tb_produtos_setorUncheckedUpdateInput>
    /**
     * Choose, which tb_produtos_setor to update.
     */
    where: tb_produtos_setorWhereUniqueInput
  }

  /**
   * tb_produtos_setor updateMany
   */
  export type tb_produtos_setorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_produtos_setors.
     */
    data: XOR<tb_produtos_setorUpdateManyMutationInput, tb_produtos_setorUncheckedUpdateManyInput>
    /**
     * Filter which tb_produtos_setors to update
     */
    where?: tb_produtos_setorWhereInput
  }

  /**
   * tb_produtos_setor upsert
   */
  export type tb_produtos_setorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_setor
     */
    select?: tb_produtos_setorSelect<ExtArgs> | null
    /**
     * The filter to search for the tb_produtos_setor to update in case it exists.
     */
    where: tb_produtos_setorWhereUniqueInput
    /**
     * In case the tb_produtos_setor found by the `where` argument doesn't exist, create a new tb_produtos_setor with this data.
     */
    create: XOR<tb_produtos_setorCreateInput, tb_produtos_setorUncheckedCreateInput>
    /**
     * In case the tb_produtos_setor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_produtos_setorUpdateInput, tb_produtos_setorUncheckedUpdateInput>
  }

  /**
   * tb_produtos_setor delete
   */
  export type tb_produtos_setorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_setor
     */
    select?: tb_produtos_setorSelect<ExtArgs> | null
    /**
     * Filter which tb_produtos_setor to delete.
     */
    where: tb_produtos_setorWhereUniqueInput
  }

  /**
   * tb_produtos_setor deleteMany
   */
  export type tb_produtos_setorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_produtos_setors to delete
     */
    where?: tb_produtos_setorWhereInput
  }

  /**
   * tb_produtos_setor without action
   */
  export type tb_produtos_setorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_produtos_setor
     */
    select?: tb_produtos_setorSelect<ExtArgs> | null
  }


  /**
   * Model tb_comanda
   */

  export type AggregateTb_comanda = {
    _count: Tb_comandaCountAggregateOutputType | null
    _avg: Tb_comandaAvgAggregateOutputType | null
    _sum: Tb_comandaSumAggregateOutputType | null
    _min: Tb_comandaMinAggregateOutputType | null
    _max: Tb_comandaMaxAggregateOutputType | null
  }

  export type Tb_comandaAvgAggregateOutputType = {
    Codigo: number | null
  }

  export type Tb_comandaSumAggregateOutputType = {
    Codigo: number | null
  }

  export type Tb_comandaMinAggregateOutputType = {
    Codigo: number | null
    Ativo: string | null
  }

  export type Tb_comandaMaxAggregateOutputType = {
    Codigo: number | null
    Ativo: string | null
  }

  export type Tb_comandaCountAggregateOutputType = {
    Codigo: number
    Ativo: number
    _all: number
  }


  export type Tb_comandaAvgAggregateInputType = {
    Codigo?: true
  }

  export type Tb_comandaSumAggregateInputType = {
    Codigo?: true
  }

  export type Tb_comandaMinAggregateInputType = {
    Codigo?: true
    Ativo?: true
  }

  export type Tb_comandaMaxAggregateInputType = {
    Codigo?: true
    Ativo?: true
  }

  export type Tb_comandaCountAggregateInputType = {
    Codigo?: true
    Ativo?: true
    _all?: true
  }

  export type Tb_comandaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_comanda to aggregate.
     */
    where?: tb_comandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_comandas to fetch.
     */
    orderBy?: tb_comandaOrderByWithRelationInput | tb_comandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_comandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_comandas
    **/
    _count?: true | Tb_comandaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_comandaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_comandaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_comandaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_comandaMaxAggregateInputType
  }

  export type GetTb_comandaAggregateType<T extends Tb_comandaAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_comanda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_comanda[P]>
      : GetScalarType<T[P], AggregateTb_comanda[P]>
  }




  export type tb_comandaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_comandaWhereInput
    orderBy?: tb_comandaOrderByWithAggregationInput | tb_comandaOrderByWithAggregationInput[]
    by: Tb_comandaScalarFieldEnum[] | Tb_comandaScalarFieldEnum
    having?: tb_comandaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_comandaCountAggregateInputType | true
    _avg?: Tb_comandaAvgAggregateInputType
    _sum?: Tb_comandaSumAggregateInputType
    _min?: Tb_comandaMinAggregateInputType
    _max?: Tb_comandaMaxAggregateInputType
  }

  export type Tb_comandaGroupByOutputType = {
    Codigo: number
    Ativo: string | null
    _count: Tb_comandaCountAggregateOutputType | null
    _avg: Tb_comandaAvgAggregateOutputType | null
    _sum: Tb_comandaSumAggregateOutputType | null
    _min: Tb_comandaMinAggregateOutputType | null
    _max: Tb_comandaMaxAggregateOutputType | null
  }

  type GetTb_comandaGroupByPayload<T extends tb_comandaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_comandaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_comandaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_comandaGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_comandaGroupByOutputType[P]>
        }
      >
    >


  export type tb_comandaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Codigo?: boolean
    Ativo?: boolean
  }, ExtArgs["result"]["tb_comanda"]>


  export type tb_comandaSelectScalar = {
    Codigo?: boolean
    Ativo?: boolean
  }


  export type $tb_comandaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_comanda"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Codigo: number
      Ativo: string | null
    }, ExtArgs["result"]["tb_comanda"]>
    composites: {}
  }

  type tb_comandaGetPayload<S extends boolean | null | undefined | tb_comandaDefaultArgs> = $Result.GetResult<Prisma.$tb_comandaPayload, S>

  type tb_comandaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tb_comandaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tb_comandaCountAggregateInputType | true
    }

  export interface tb_comandaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_comanda'], meta: { name: 'tb_comanda' } }
    /**
     * Find zero or one Tb_comanda that matches the filter.
     * @param {tb_comandaFindUniqueArgs} args - Arguments to find a Tb_comanda
     * @example
     * // Get one Tb_comanda
     * const tb_comanda = await prisma.tb_comanda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_comandaFindUniqueArgs>(args: SelectSubset<T, tb_comandaFindUniqueArgs<ExtArgs>>): Prisma__tb_comandaClient<$Result.GetResult<Prisma.$tb_comandaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tb_comanda that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tb_comandaFindUniqueOrThrowArgs} args - Arguments to find a Tb_comanda
     * @example
     * // Get one Tb_comanda
     * const tb_comanda = await prisma.tb_comanda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_comandaFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_comandaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_comandaClient<$Result.GetResult<Prisma.$tb_comandaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tb_comanda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_comandaFindFirstArgs} args - Arguments to find a Tb_comanda
     * @example
     * // Get one Tb_comanda
     * const tb_comanda = await prisma.tb_comanda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_comandaFindFirstArgs>(args?: SelectSubset<T, tb_comandaFindFirstArgs<ExtArgs>>): Prisma__tb_comandaClient<$Result.GetResult<Prisma.$tb_comandaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tb_comanda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_comandaFindFirstOrThrowArgs} args - Arguments to find a Tb_comanda
     * @example
     * // Get one Tb_comanda
     * const tb_comanda = await prisma.tb_comanda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_comandaFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_comandaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_comandaClient<$Result.GetResult<Prisma.$tb_comandaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tb_comandas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_comandaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_comandas
     * const tb_comandas = await prisma.tb_comanda.findMany()
     * 
     * // Get first 10 Tb_comandas
     * const tb_comandas = await prisma.tb_comanda.findMany({ take: 10 })
     * 
     * // Only select the `Codigo`
     * const tb_comandaWithCodigoOnly = await prisma.tb_comanda.findMany({ select: { Codigo: true } })
     * 
     */
    findMany<T extends tb_comandaFindManyArgs>(args?: SelectSubset<T, tb_comandaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_comandaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tb_comanda.
     * @param {tb_comandaCreateArgs} args - Arguments to create a Tb_comanda.
     * @example
     * // Create one Tb_comanda
     * const Tb_comanda = await prisma.tb_comanda.create({
     *   data: {
     *     // ... data to create a Tb_comanda
     *   }
     * })
     * 
     */
    create<T extends tb_comandaCreateArgs>(args: SelectSubset<T, tb_comandaCreateArgs<ExtArgs>>): Prisma__tb_comandaClient<$Result.GetResult<Prisma.$tb_comandaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tb_comandas.
     * @param {tb_comandaCreateManyArgs} args - Arguments to create many Tb_comandas.
     * @example
     * // Create many Tb_comandas
     * const tb_comanda = await prisma.tb_comanda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_comandaCreateManyArgs>(args?: SelectSubset<T, tb_comandaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_comanda.
     * @param {tb_comandaDeleteArgs} args - Arguments to delete one Tb_comanda.
     * @example
     * // Delete one Tb_comanda
     * const Tb_comanda = await prisma.tb_comanda.delete({
     *   where: {
     *     // ... filter to delete one Tb_comanda
     *   }
     * })
     * 
     */
    delete<T extends tb_comandaDeleteArgs>(args: SelectSubset<T, tb_comandaDeleteArgs<ExtArgs>>): Prisma__tb_comandaClient<$Result.GetResult<Prisma.$tb_comandaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tb_comanda.
     * @param {tb_comandaUpdateArgs} args - Arguments to update one Tb_comanda.
     * @example
     * // Update one Tb_comanda
     * const tb_comanda = await prisma.tb_comanda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_comandaUpdateArgs>(args: SelectSubset<T, tb_comandaUpdateArgs<ExtArgs>>): Prisma__tb_comandaClient<$Result.GetResult<Prisma.$tb_comandaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tb_comandas.
     * @param {tb_comandaDeleteManyArgs} args - Arguments to filter Tb_comandas to delete.
     * @example
     * // Delete a few Tb_comandas
     * const { count } = await prisma.tb_comanda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_comandaDeleteManyArgs>(args?: SelectSubset<T, tb_comandaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_comandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_comandaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_comandas
     * const tb_comanda = await prisma.tb_comanda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_comandaUpdateManyArgs>(args: SelectSubset<T, tb_comandaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_comanda.
     * @param {tb_comandaUpsertArgs} args - Arguments to update or create a Tb_comanda.
     * @example
     * // Update or create a Tb_comanda
     * const tb_comanda = await prisma.tb_comanda.upsert({
     *   create: {
     *     // ... data to create a Tb_comanda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_comanda we want to update
     *   }
     * })
     */
    upsert<T extends tb_comandaUpsertArgs>(args: SelectSubset<T, tb_comandaUpsertArgs<ExtArgs>>): Prisma__tb_comandaClient<$Result.GetResult<Prisma.$tb_comandaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tb_comandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_comandaCountArgs} args - Arguments to filter Tb_comandas to count.
     * @example
     * // Count the number of Tb_comandas
     * const count = await prisma.tb_comanda.count({
     *   where: {
     *     // ... the filter for the Tb_comandas we want to count
     *   }
     * })
    **/
    count<T extends tb_comandaCountArgs>(
      args?: Subset<T, tb_comandaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_comandaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_comanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_comandaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_comandaAggregateArgs>(args: Subset<T, Tb_comandaAggregateArgs>): Prisma.PrismaPromise<GetTb_comandaAggregateType<T>>

    /**
     * Group by Tb_comanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_comandaGroupByArgs} args - Group by arguments.
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
      T extends tb_comandaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_comandaGroupByArgs['orderBy'] }
        : { orderBy?: tb_comandaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_comandaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_comandaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_comanda model
   */
  readonly fields: tb_comandaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_comanda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_comandaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_comanda model
   */ 
  interface tb_comandaFieldRefs {
    readonly Codigo: FieldRef<"tb_comanda", 'Int'>
    readonly Ativo: FieldRef<"tb_comanda", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_comanda findUnique
   */
  export type tb_comandaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_comanda
     */
    select?: tb_comandaSelect<ExtArgs> | null
    /**
     * Filter, which tb_comanda to fetch.
     */
    where: tb_comandaWhereUniqueInput
  }

  /**
   * tb_comanda findUniqueOrThrow
   */
  export type tb_comandaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_comanda
     */
    select?: tb_comandaSelect<ExtArgs> | null
    /**
     * Filter, which tb_comanda to fetch.
     */
    where: tb_comandaWhereUniqueInput
  }

  /**
   * tb_comanda findFirst
   */
  export type tb_comandaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_comanda
     */
    select?: tb_comandaSelect<ExtArgs> | null
    /**
     * Filter, which tb_comanda to fetch.
     */
    where?: tb_comandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_comandas to fetch.
     */
    orderBy?: tb_comandaOrderByWithRelationInput | tb_comandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_comandas.
     */
    cursor?: tb_comandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_comandas.
     */
    distinct?: Tb_comandaScalarFieldEnum | Tb_comandaScalarFieldEnum[]
  }

  /**
   * tb_comanda findFirstOrThrow
   */
  export type tb_comandaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_comanda
     */
    select?: tb_comandaSelect<ExtArgs> | null
    /**
     * Filter, which tb_comanda to fetch.
     */
    where?: tb_comandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_comandas to fetch.
     */
    orderBy?: tb_comandaOrderByWithRelationInput | tb_comandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_comandas.
     */
    cursor?: tb_comandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_comandas.
     */
    distinct?: Tb_comandaScalarFieldEnum | Tb_comandaScalarFieldEnum[]
  }

  /**
   * tb_comanda findMany
   */
  export type tb_comandaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_comanda
     */
    select?: tb_comandaSelect<ExtArgs> | null
    /**
     * Filter, which tb_comandas to fetch.
     */
    where?: tb_comandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_comandas to fetch.
     */
    orderBy?: tb_comandaOrderByWithRelationInput | tb_comandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_comandas.
     */
    cursor?: tb_comandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_comandas.
     */
    skip?: number
    distinct?: Tb_comandaScalarFieldEnum | Tb_comandaScalarFieldEnum[]
  }

  /**
   * tb_comanda create
   */
  export type tb_comandaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_comanda
     */
    select?: tb_comandaSelect<ExtArgs> | null
    /**
     * The data needed to create a tb_comanda.
     */
    data: XOR<tb_comandaCreateInput, tb_comandaUncheckedCreateInput>
  }

  /**
   * tb_comanda createMany
   */
  export type tb_comandaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_comandas.
     */
    data: tb_comandaCreateManyInput | tb_comandaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_comanda update
   */
  export type tb_comandaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_comanda
     */
    select?: tb_comandaSelect<ExtArgs> | null
    /**
     * The data needed to update a tb_comanda.
     */
    data: XOR<tb_comandaUpdateInput, tb_comandaUncheckedUpdateInput>
    /**
     * Choose, which tb_comanda to update.
     */
    where: tb_comandaWhereUniqueInput
  }

  /**
   * tb_comanda updateMany
   */
  export type tb_comandaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_comandas.
     */
    data: XOR<tb_comandaUpdateManyMutationInput, tb_comandaUncheckedUpdateManyInput>
    /**
     * Filter which tb_comandas to update
     */
    where?: tb_comandaWhereInput
  }

  /**
   * tb_comanda upsert
   */
  export type tb_comandaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_comanda
     */
    select?: tb_comandaSelect<ExtArgs> | null
    /**
     * The filter to search for the tb_comanda to update in case it exists.
     */
    where: tb_comandaWhereUniqueInput
    /**
     * In case the tb_comanda found by the `where` argument doesn't exist, create a new tb_comanda with this data.
     */
    create: XOR<tb_comandaCreateInput, tb_comandaUncheckedCreateInput>
    /**
     * In case the tb_comanda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_comandaUpdateInput, tb_comandaUncheckedUpdateInput>
  }

  /**
   * tb_comanda delete
   */
  export type tb_comandaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_comanda
     */
    select?: tb_comandaSelect<ExtArgs> | null
    /**
     * Filter which tb_comanda to delete.
     */
    where: tb_comandaWhereUniqueInput
  }

  /**
   * tb_comanda deleteMany
   */
  export type tb_comandaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_comandas to delete
     */
    where?: tb_comandaWhereInput
  }

  /**
   * tb_comanda without action
   */
  export type tb_comandaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_comanda
     */
    select?: tb_comandaSelect<ExtArgs> | null
  }


  /**
   * Model tb_mesa
   */

  export type AggregateTb_mesa = {
    _count: Tb_mesaCountAggregateOutputType | null
    _avg: Tb_mesaAvgAggregateOutputType | null
    _sum: Tb_mesaSumAggregateOutputType | null
    _min: Tb_mesaMinAggregateOutputType | null
    _max: Tb_mesaMaxAggregateOutputType | null
  }

  export type Tb_mesaAvgAggregateOutputType = {
    Codigo: number | null
  }

  export type Tb_mesaSumAggregateOutputType = {
    Codigo: number | null
  }

  export type Tb_mesaMinAggregateOutputType = {
    Codigo: number | null
    Ativo: string | null
  }

  export type Tb_mesaMaxAggregateOutputType = {
    Codigo: number | null
    Ativo: string | null
  }

  export type Tb_mesaCountAggregateOutputType = {
    Codigo: number
    Ativo: number
    _all: number
  }


  export type Tb_mesaAvgAggregateInputType = {
    Codigo?: true
  }

  export type Tb_mesaSumAggregateInputType = {
    Codigo?: true
  }

  export type Tb_mesaMinAggregateInputType = {
    Codigo?: true
    Ativo?: true
  }

  export type Tb_mesaMaxAggregateInputType = {
    Codigo?: true
    Ativo?: true
  }

  export type Tb_mesaCountAggregateInputType = {
    Codigo?: true
    Ativo?: true
    _all?: true
  }

  export type Tb_mesaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_mesa to aggregate.
     */
    where?: tb_mesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_mesas to fetch.
     */
    orderBy?: tb_mesaOrderByWithRelationInput | tb_mesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_mesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_mesas
    **/
    _count?: true | Tb_mesaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_mesaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_mesaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_mesaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_mesaMaxAggregateInputType
  }

  export type GetTb_mesaAggregateType<T extends Tb_mesaAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_mesa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_mesa[P]>
      : GetScalarType<T[P], AggregateTb_mesa[P]>
  }




  export type tb_mesaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_mesaWhereInput
    orderBy?: tb_mesaOrderByWithAggregationInput | tb_mesaOrderByWithAggregationInput[]
    by: Tb_mesaScalarFieldEnum[] | Tb_mesaScalarFieldEnum
    having?: tb_mesaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_mesaCountAggregateInputType | true
    _avg?: Tb_mesaAvgAggregateInputType
    _sum?: Tb_mesaSumAggregateInputType
    _min?: Tb_mesaMinAggregateInputType
    _max?: Tb_mesaMaxAggregateInputType
  }

  export type Tb_mesaGroupByOutputType = {
    Codigo: number
    Ativo: string | null
    _count: Tb_mesaCountAggregateOutputType | null
    _avg: Tb_mesaAvgAggregateOutputType | null
    _sum: Tb_mesaSumAggregateOutputType | null
    _min: Tb_mesaMinAggregateOutputType | null
    _max: Tb_mesaMaxAggregateOutputType | null
  }

  type GetTb_mesaGroupByPayload<T extends tb_mesaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_mesaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_mesaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_mesaGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_mesaGroupByOutputType[P]>
        }
      >
    >


  export type tb_mesaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Codigo?: boolean
    Ativo?: boolean
  }, ExtArgs["result"]["tb_mesa"]>


  export type tb_mesaSelectScalar = {
    Codigo?: boolean
    Ativo?: boolean
  }


  export type $tb_mesaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_mesa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Codigo: number
      Ativo: string | null
    }, ExtArgs["result"]["tb_mesa"]>
    composites: {}
  }

  type tb_mesaGetPayload<S extends boolean | null | undefined | tb_mesaDefaultArgs> = $Result.GetResult<Prisma.$tb_mesaPayload, S>

  type tb_mesaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tb_mesaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tb_mesaCountAggregateInputType | true
    }

  export interface tb_mesaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_mesa'], meta: { name: 'tb_mesa' } }
    /**
     * Find zero or one Tb_mesa that matches the filter.
     * @param {tb_mesaFindUniqueArgs} args - Arguments to find a Tb_mesa
     * @example
     * // Get one Tb_mesa
     * const tb_mesa = await prisma.tb_mesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_mesaFindUniqueArgs>(args: SelectSubset<T, tb_mesaFindUniqueArgs<ExtArgs>>): Prisma__tb_mesaClient<$Result.GetResult<Prisma.$tb_mesaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tb_mesa that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tb_mesaFindUniqueOrThrowArgs} args - Arguments to find a Tb_mesa
     * @example
     * // Get one Tb_mesa
     * const tb_mesa = await prisma.tb_mesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_mesaFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_mesaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_mesaClient<$Result.GetResult<Prisma.$tb_mesaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tb_mesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mesaFindFirstArgs} args - Arguments to find a Tb_mesa
     * @example
     * // Get one Tb_mesa
     * const tb_mesa = await prisma.tb_mesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_mesaFindFirstArgs>(args?: SelectSubset<T, tb_mesaFindFirstArgs<ExtArgs>>): Prisma__tb_mesaClient<$Result.GetResult<Prisma.$tb_mesaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tb_mesa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mesaFindFirstOrThrowArgs} args - Arguments to find a Tb_mesa
     * @example
     * // Get one Tb_mesa
     * const tb_mesa = await prisma.tb_mesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_mesaFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_mesaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_mesaClient<$Result.GetResult<Prisma.$tb_mesaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tb_mesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mesaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_mesas
     * const tb_mesas = await prisma.tb_mesa.findMany()
     * 
     * // Get first 10 Tb_mesas
     * const tb_mesas = await prisma.tb_mesa.findMany({ take: 10 })
     * 
     * // Only select the `Codigo`
     * const tb_mesaWithCodigoOnly = await prisma.tb_mesa.findMany({ select: { Codigo: true } })
     * 
     */
    findMany<T extends tb_mesaFindManyArgs>(args?: SelectSubset<T, tb_mesaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_mesaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tb_mesa.
     * @param {tb_mesaCreateArgs} args - Arguments to create a Tb_mesa.
     * @example
     * // Create one Tb_mesa
     * const Tb_mesa = await prisma.tb_mesa.create({
     *   data: {
     *     // ... data to create a Tb_mesa
     *   }
     * })
     * 
     */
    create<T extends tb_mesaCreateArgs>(args: SelectSubset<T, tb_mesaCreateArgs<ExtArgs>>): Prisma__tb_mesaClient<$Result.GetResult<Prisma.$tb_mesaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tb_mesas.
     * @param {tb_mesaCreateManyArgs} args - Arguments to create many Tb_mesas.
     * @example
     * // Create many Tb_mesas
     * const tb_mesa = await prisma.tb_mesa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_mesaCreateManyArgs>(args?: SelectSubset<T, tb_mesaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_mesa.
     * @param {tb_mesaDeleteArgs} args - Arguments to delete one Tb_mesa.
     * @example
     * // Delete one Tb_mesa
     * const Tb_mesa = await prisma.tb_mesa.delete({
     *   where: {
     *     // ... filter to delete one Tb_mesa
     *   }
     * })
     * 
     */
    delete<T extends tb_mesaDeleteArgs>(args: SelectSubset<T, tb_mesaDeleteArgs<ExtArgs>>): Prisma__tb_mesaClient<$Result.GetResult<Prisma.$tb_mesaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tb_mesa.
     * @param {tb_mesaUpdateArgs} args - Arguments to update one Tb_mesa.
     * @example
     * // Update one Tb_mesa
     * const tb_mesa = await prisma.tb_mesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_mesaUpdateArgs>(args: SelectSubset<T, tb_mesaUpdateArgs<ExtArgs>>): Prisma__tb_mesaClient<$Result.GetResult<Prisma.$tb_mesaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tb_mesas.
     * @param {tb_mesaDeleteManyArgs} args - Arguments to filter Tb_mesas to delete.
     * @example
     * // Delete a few Tb_mesas
     * const { count } = await prisma.tb_mesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_mesaDeleteManyArgs>(args?: SelectSubset<T, tb_mesaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_mesas
     * const tb_mesa = await prisma.tb_mesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_mesaUpdateManyArgs>(args: SelectSubset<T, tb_mesaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_mesa.
     * @param {tb_mesaUpsertArgs} args - Arguments to update or create a Tb_mesa.
     * @example
     * // Update or create a Tb_mesa
     * const tb_mesa = await prisma.tb_mesa.upsert({
     *   create: {
     *     // ... data to create a Tb_mesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_mesa we want to update
     *   }
     * })
     */
    upsert<T extends tb_mesaUpsertArgs>(args: SelectSubset<T, tb_mesaUpsertArgs<ExtArgs>>): Prisma__tb_mesaClient<$Result.GetResult<Prisma.$tb_mesaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tb_mesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mesaCountArgs} args - Arguments to filter Tb_mesas to count.
     * @example
     * // Count the number of Tb_mesas
     * const count = await prisma.tb_mesa.count({
     *   where: {
     *     // ... the filter for the Tb_mesas we want to count
     *   }
     * })
    **/
    count<T extends tb_mesaCountArgs>(
      args?: Subset<T, tb_mesaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_mesaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_mesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_mesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_mesaAggregateArgs>(args: Subset<T, Tb_mesaAggregateArgs>): Prisma.PrismaPromise<GetTb_mesaAggregateType<T>>

    /**
     * Group by Tb_mesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mesaGroupByArgs} args - Group by arguments.
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
      T extends tb_mesaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_mesaGroupByArgs['orderBy'] }
        : { orderBy?: tb_mesaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_mesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_mesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_mesa model
   */
  readonly fields: tb_mesaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_mesa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_mesaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_mesa model
   */ 
  interface tb_mesaFieldRefs {
    readonly Codigo: FieldRef<"tb_mesa", 'Int'>
    readonly Ativo: FieldRef<"tb_mesa", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_mesa findUnique
   */
  export type tb_mesaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa
     */
    select?: tb_mesaSelect<ExtArgs> | null
    /**
     * Filter, which tb_mesa to fetch.
     */
    where: tb_mesaWhereUniqueInput
  }

  /**
   * tb_mesa findUniqueOrThrow
   */
  export type tb_mesaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa
     */
    select?: tb_mesaSelect<ExtArgs> | null
    /**
     * Filter, which tb_mesa to fetch.
     */
    where: tb_mesaWhereUniqueInput
  }

  /**
   * tb_mesa findFirst
   */
  export type tb_mesaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa
     */
    select?: tb_mesaSelect<ExtArgs> | null
    /**
     * Filter, which tb_mesa to fetch.
     */
    where?: tb_mesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_mesas to fetch.
     */
    orderBy?: tb_mesaOrderByWithRelationInput | tb_mesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_mesas.
     */
    cursor?: tb_mesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_mesas.
     */
    distinct?: Tb_mesaScalarFieldEnum | Tb_mesaScalarFieldEnum[]
  }

  /**
   * tb_mesa findFirstOrThrow
   */
  export type tb_mesaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa
     */
    select?: tb_mesaSelect<ExtArgs> | null
    /**
     * Filter, which tb_mesa to fetch.
     */
    where?: tb_mesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_mesas to fetch.
     */
    orderBy?: tb_mesaOrderByWithRelationInput | tb_mesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_mesas.
     */
    cursor?: tb_mesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_mesas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_mesas.
     */
    distinct?: Tb_mesaScalarFieldEnum | Tb_mesaScalarFieldEnum[]
  }

  /**
   * tb_mesa findMany
   */
  export type tb_mesaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa
     */
    select?: tb_mesaSelect<ExtArgs> | null
    /**
     * Filter, which tb_mesas to fetch.
     */
    where?: tb_mesaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_mesas to fetch.
     */
    orderBy?: tb_mesaOrderByWithRelationInput | tb_mesaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_mesas.
     */
    cursor?: tb_mesaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_mesas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_mesas.
     */
    skip?: number
    distinct?: Tb_mesaScalarFieldEnum | Tb_mesaScalarFieldEnum[]
  }

  /**
   * tb_mesa create
   */
  export type tb_mesaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa
     */
    select?: tb_mesaSelect<ExtArgs> | null
    /**
     * The data needed to create a tb_mesa.
     */
    data: XOR<tb_mesaCreateInput, tb_mesaUncheckedCreateInput>
  }

  /**
   * tb_mesa createMany
   */
  export type tb_mesaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_mesas.
     */
    data: tb_mesaCreateManyInput | tb_mesaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_mesa update
   */
  export type tb_mesaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa
     */
    select?: tb_mesaSelect<ExtArgs> | null
    /**
     * The data needed to update a tb_mesa.
     */
    data: XOR<tb_mesaUpdateInput, tb_mesaUncheckedUpdateInput>
    /**
     * Choose, which tb_mesa to update.
     */
    where: tb_mesaWhereUniqueInput
  }

  /**
   * tb_mesa updateMany
   */
  export type tb_mesaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_mesas.
     */
    data: XOR<tb_mesaUpdateManyMutationInput, tb_mesaUncheckedUpdateManyInput>
    /**
     * Filter which tb_mesas to update
     */
    where?: tb_mesaWhereInput
  }

  /**
   * tb_mesa upsert
   */
  export type tb_mesaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa
     */
    select?: tb_mesaSelect<ExtArgs> | null
    /**
     * The filter to search for the tb_mesa to update in case it exists.
     */
    where: tb_mesaWhereUniqueInput
    /**
     * In case the tb_mesa found by the `where` argument doesn't exist, create a new tb_mesa with this data.
     */
    create: XOR<tb_mesaCreateInput, tb_mesaUncheckedCreateInput>
    /**
     * In case the tb_mesa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_mesaUpdateInput, tb_mesaUncheckedUpdateInput>
  }

  /**
   * tb_mesa delete
   */
  export type tb_mesaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa
     */
    select?: tb_mesaSelect<ExtArgs> | null
    /**
     * Filter which tb_mesa to delete.
     */
    where: tb_mesaWhereUniqueInput
  }

  /**
   * tb_mesa deleteMany
   */
  export type tb_mesaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_mesas to delete
     */
    where?: tb_mesaWhereInput
  }

  /**
   * tb_mesa without action
   */
  export type tb_mesaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa
     */
    select?: tb_mesaSelect<ExtArgs> | null
  }


  /**
   * Model tb_mesa_comanda
   */

  export type AggregateTb_mesa_comanda = {
    _count: Tb_mesa_comandaCountAggregateOutputType | null
    _avg: Tb_mesa_comandaAvgAggregateOutputType | null
    _sum: Tb_mesa_comandaSumAggregateOutputType | null
    _min: Tb_mesa_comandaMinAggregateOutputType | null
    _max: Tb_mesa_comandaMaxAggregateOutputType | null
  }

  export type Tb_mesa_comandaAvgAggregateOutputType = {
    Codigo: number | null
    Id_Mesa: number | null
    Id_Comanda: number | null
  }

  export type Tb_mesa_comandaSumAggregateOutputType = {
    Codigo: number | null
    Id_Mesa: number | null
    Id_Comanda: number | null
  }

  export type Tb_mesa_comandaMinAggregateOutputType = {
    Codigo: number | null
    Id_Mesa: number | null
    Id_Comanda: number | null
  }

  export type Tb_mesa_comandaMaxAggregateOutputType = {
    Codigo: number | null
    Id_Mesa: number | null
    Id_Comanda: number | null
  }

  export type Tb_mesa_comandaCountAggregateOutputType = {
    Codigo: number
    Id_Mesa: number
    Id_Comanda: number
    _all: number
  }


  export type Tb_mesa_comandaAvgAggregateInputType = {
    Codigo?: true
    Id_Mesa?: true
    Id_Comanda?: true
  }

  export type Tb_mesa_comandaSumAggregateInputType = {
    Codigo?: true
    Id_Mesa?: true
    Id_Comanda?: true
  }

  export type Tb_mesa_comandaMinAggregateInputType = {
    Codigo?: true
    Id_Mesa?: true
    Id_Comanda?: true
  }

  export type Tb_mesa_comandaMaxAggregateInputType = {
    Codigo?: true
    Id_Mesa?: true
    Id_Comanda?: true
  }

  export type Tb_mesa_comandaCountAggregateInputType = {
    Codigo?: true
    Id_Mesa?: true
    Id_Comanda?: true
    _all?: true
  }

  export type Tb_mesa_comandaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_mesa_comanda to aggregate.
     */
    where?: tb_mesa_comandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_mesa_comandas to fetch.
     */
    orderBy?: tb_mesa_comandaOrderByWithRelationInput | tb_mesa_comandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_mesa_comandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_mesa_comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_mesa_comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_mesa_comandas
    **/
    _count?: true | Tb_mesa_comandaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_mesa_comandaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_mesa_comandaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_mesa_comandaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_mesa_comandaMaxAggregateInputType
  }

  export type GetTb_mesa_comandaAggregateType<T extends Tb_mesa_comandaAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_mesa_comanda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_mesa_comanda[P]>
      : GetScalarType<T[P], AggregateTb_mesa_comanda[P]>
  }




  export type tb_mesa_comandaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_mesa_comandaWhereInput
    orderBy?: tb_mesa_comandaOrderByWithAggregationInput | tb_mesa_comandaOrderByWithAggregationInput[]
    by: Tb_mesa_comandaScalarFieldEnum[] | Tb_mesa_comandaScalarFieldEnum
    having?: tb_mesa_comandaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_mesa_comandaCountAggregateInputType | true
    _avg?: Tb_mesa_comandaAvgAggregateInputType
    _sum?: Tb_mesa_comandaSumAggregateInputType
    _min?: Tb_mesa_comandaMinAggregateInputType
    _max?: Tb_mesa_comandaMaxAggregateInputType
  }

  export type Tb_mesa_comandaGroupByOutputType = {
    Codigo: number
    Id_Mesa: number | null
    Id_Comanda: number | null
    _count: Tb_mesa_comandaCountAggregateOutputType | null
    _avg: Tb_mesa_comandaAvgAggregateOutputType | null
    _sum: Tb_mesa_comandaSumAggregateOutputType | null
    _min: Tb_mesa_comandaMinAggregateOutputType | null
    _max: Tb_mesa_comandaMaxAggregateOutputType | null
  }

  type GetTb_mesa_comandaGroupByPayload<T extends tb_mesa_comandaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_mesa_comandaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_mesa_comandaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_mesa_comandaGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_mesa_comandaGroupByOutputType[P]>
        }
      >
    >


  export type tb_mesa_comandaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Codigo?: boolean
    Id_Mesa?: boolean
    Id_Comanda?: boolean
  }, ExtArgs["result"]["tb_mesa_comanda"]>


  export type tb_mesa_comandaSelectScalar = {
    Codigo?: boolean
    Id_Mesa?: boolean
    Id_Comanda?: boolean
  }


  export type $tb_mesa_comandaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_mesa_comanda"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Codigo: number
      Id_Mesa: number | null
      Id_Comanda: number | null
    }, ExtArgs["result"]["tb_mesa_comanda"]>
    composites: {}
  }

  type tb_mesa_comandaGetPayload<S extends boolean | null | undefined | tb_mesa_comandaDefaultArgs> = $Result.GetResult<Prisma.$tb_mesa_comandaPayload, S>

  type tb_mesa_comandaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tb_mesa_comandaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tb_mesa_comandaCountAggregateInputType | true
    }

  export interface tb_mesa_comandaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_mesa_comanda'], meta: { name: 'tb_mesa_comanda' } }
    /**
     * Find zero or one Tb_mesa_comanda that matches the filter.
     * @param {tb_mesa_comandaFindUniqueArgs} args - Arguments to find a Tb_mesa_comanda
     * @example
     * // Get one Tb_mesa_comanda
     * const tb_mesa_comanda = await prisma.tb_mesa_comanda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_mesa_comandaFindUniqueArgs>(args: SelectSubset<T, tb_mesa_comandaFindUniqueArgs<ExtArgs>>): Prisma__tb_mesa_comandaClient<$Result.GetResult<Prisma.$tb_mesa_comandaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tb_mesa_comanda that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tb_mesa_comandaFindUniqueOrThrowArgs} args - Arguments to find a Tb_mesa_comanda
     * @example
     * // Get one Tb_mesa_comanda
     * const tb_mesa_comanda = await prisma.tb_mesa_comanda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_mesa_comandaFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_mesa_comandaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_mesa_comandaClient<$Result.GetResult<Prisma.$tb_mesa_comandaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tb_mesa_comanda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mesa_comandaFindFirstArgs} args - Arguments to find a Tb_mesa_comanda
     * @example
     * // Get one Tb_mesa_comanda
     * const tb_mesa_comanda = await prisma.tb_mesa_comanda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_mesa_comandaFindFirstArgs>(args?: SelectSubset<T, tb_mesa_comandaFindFirstArgs<ExtArgs>>): Prisma__tb_mesa_comandaClient<$Result.GetResult<Prisma.$tb_mesa_comandaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tb_mesa_comanda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mesa_comandaFindFirstOrThrowArgs} args - Arguments to find a Tb_mesa_comanda
     * @example
     * // Get one Tb_mesa_comanda
     * const tb_mesa_comanda = await prisma.tb_mesa_comanda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_mesa_comandaFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_mesa_comandaFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_mesa_comandaClient<$Result.GetResult<Prisma.$tb_mesa_comandaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tb_mesa_comandas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mesa_comandaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_mesa_comandas
     * const tb_mesa_comandas = await prisma.tb_mesa_comanda.findMany()
     * 
     * // Get first 10 Tb_mesa_comandas
     * const tb_mesa_comandas = await prisma.tb_mesa_comanda.findMany({ take: 10 })
     * 
     * // Only select the `Codigo`
     * const tb_mesa_comandaWithCodigoOnly = await prisma.tb_mesa_comanda.findMany({ select: { Codigo: true } })
     * 
     */
    findMany<T extends tb_mesa_comandaFindManyArgs>(args?: SelectSubset<T, tb_mesa_comandaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_mesa_comandaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tb_mesa_comanda.
     * @param {tb_mesa_comandaCreateArgs} args - Arguments to create a Tb_mesa_comanda.
     * @example
     * // Create one Tb_mesa_comanda
     * const Tb_mesa_comanda = await prisma.tb_mesa_comanda.create({
     *   data: {
     *     // ... data to create a Tb_mesa_comanda
     *   }
     * })
     * 
     */
    create<T extends tb_mesa_comandaCreateArgs>(args: SelectSubset<T, tb_mesa_comandaCreateArgs<ExtArgs>>): Prisma__tb_mesa_comandaClient<$Result.GetResult<Prisma.$tb_mesa_comandaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tb_mesa_comandas.
     * @param {tb_mesa_comandaCreateManyArgs} args - Arguments to create many Tb_mesa_comandas.
     * @example
     * // Create many Tb_mesa_comandas
     * const tb_mesa_comanda = await prisma.tb_mesa_comanda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_mesa_comandaCreateManyArgs>(args?: SelectSubset<T, tb_mesa_comandaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_mesa_comanda.
     * @param {tb_mesa_comandaDeleteArgs} args - Arguments to delete one Tb_mesa_comanda.
     * @example
     * // Delete one Tb_mesa_comanda
     * const Tb_mesa_comanda = await prisma.tb_mesa_comanda.delete({
     *   where: {
     *     // ... filter to delete one Tb_mesa_comanda
     *   }
     * })
     * 
     */
    delete<T extends tb_mesa_comandaDeleteArgs>(args: SelectSubset<T, tb_mesa_comandaDeleteArgs<ExtArgs>>): Prisma__tb_mesa_comandaClient<$Result.GetResult<Prisma.$tb_mesa_comandaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tb_mesa_comanda.
     * @param {tb_mesa_comandaUpdateArgs} args - Arguments to update one Tb_mesa_comanda.
     * @example
     * // Update one Tb_mesa_comanda
     * const tb_mesa_comanda = await prisma.tb_mesa_comanda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_mesa_comandaUpdateArgs>(args: SelectSubset<T, tb_mesa_comandaUpdateArgs<ExtArgs>>): Prisma__tb_mesa_comandaClient<$Result.GetResult<Prisma.$tb_mesa_comandaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tb_mesa_comandas.
     * @param {tb_mesa_comandaDeleteManyArgs} args - Arguments to filter Tb_mesa_comandas to delete.
     * @example
     * // Delete a few Tb_mesa_comandas
     * const { count } = await prisma.tb_mesa_comanda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_mesa_comandaDeleteManyArgs>(args?: SelectSubset<T, tb_mesa_comandaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_mesa_comandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mesa_comandaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_mesa_comandas
     * const tb_mesa_comanda = await prisma.tb_mesa_comanda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_mesa_comandaUpdateManyArgs>(args: SelectSubset<T, tb_mesa_comandaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_mesa_comanda.
     * @param {tb_mesa_comandaUpsertArgs} args - Arguments to update or create a Tb_mesa_comanda.
     * @example
     * // Update or create a Tb_mesa_comanda
     * const tb_mesa_comanda = await prisma.tb_mesa_comanda.upsert({
     *   create: {
     *     // ... data to create a Tb_mesa_comanda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_mesa_comanda we want to update
     *   }
     * })
     */
    upsert<T extends tb_mesa_comandaUpsertArgs>(args: SelectSubset<T, tb_mesa_comandaUpsertArgs<ExtArgs>>): Prisma__tb_mesa_comandaClient<$Result.GetResult<Prisma.$tb_mesa_comandaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tb_mesa_comandas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mesa_comandaCountArgs} args - Arguments to filter Tb_mesa_comandas to count.
     * @example
     * // Count the number of Tb_mesa_comandas
     * const count = await prisma.tb_mesa_comanda.count({
     *   where: {
     *     // ... the filter for the Tb_mesa_comandas we want to count
     *   }
     * })
    **/
    count<T extends tb_mesa_comandaCountArgs>(
      args?: Subset<T, tb_mesa_comandaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_mesa_comandaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_mesa_comanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_mesa_comandaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_mesa_comandaAggregateArgs>(args: Subset<T, Tb_mesa_comandaAggregateArgs>): Prisma.PrismaPromise<GetTb_mesa_comandaAggregateType<T>>

    /**
     * Group by Tb_mesa_comanda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_mesa_comandaGroupByArgs} args - Group by arguments.
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
      T extends tb_mesa_comandaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_mesa_comandaGroupByArgs['orderBy'] }
        : { orderBy?: tb_mesa_comandaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_mesa_comandaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_mesa_comandaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_mesa_comanda model
   */
  readonly fields: tb_mesa_comandaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_mesa_comanda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_mesa_comandaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_mesa_comanda model
   */ 
  interface tb_mesa_comandaFieldRefs {
    readonly Codigo: FieldRef<"tb_mesa_comanda", 'Int'>
    readonly Id_Mesa: FieldRef<"tb_mesa_comanda", 'Int'>
    readonly Id_Comanda: FieldRef<"tb_mesa_comanda", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tb_mesa_comanda findUnique
   */
  export type tb_mesa_comandaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa_comanda
     */
    select?: tb_mesa_comandaSelect<ExtArgs> | null
    /**
     * Filter, which tb_mesa_comanda to fetch.
     */
    where: tb_mesa_comandaWhereUniqueInput
  }

  /**
   * tb_mesa_comanda findUniqueOrThrow
   */
  export type tb_mesa_comandaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa_comanda
     */
    select?: tb_mesa_comandaSelect<ExtArgs> | null
    /**
     * Filter, which tb_mesa_comanda to fetch.
     */
    where: tb_mesa_comandaWhereUniqueInput
  }

  /**
   * tb_mesa_comanda findFirst
   */
  export type tb_mesa_comandaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa_comanda
     */
    select?: tb_mesa_comandaSelect<ExtArgs> | null
    /**
     * Filter, which tb_mesa_comanda to fetch.
     */
    where?: tb_mesa_comandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_mesa_comandas to fetch.
     */
    orderBy?: tb_mesa_comandaOrderByWithRelationInput | tb_mesa_comandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_mesa_comandas.
     */
    cursor?: tb_mesa_comandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_mesa_comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_mesa_comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_mesa_comandas.
     */
    distinct?: Tb_mesa_comandaScalarFieldEnum | Tb_mesa_comandaScalarFieldEnum[]
  }

  /**
   * tb_mesa_comanda findFirstOrThrow
   */
  export type tb_mesa_comandaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa_comanda
     */
    select?: tb_mesa_comandaSelect<ExtArgs> | null
    /**
     * Filter, which tb_mesa_comanda to fetch.
     */
    where?: tb_mesa_comandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_mesa_comandas to fetch.
     */
    orderBy?: tb_mesa_comandaOrderByWithRelationInput | tb_mesa_comandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_mesa_comandas.
     */
    cursor?: tb_mesa_comandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_mesa_comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_mesa_comandas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_mesa_comandas.
     */
    distinct?: Tb_mesa_comandaScalarFieldEnum | Tb_mesa_comandaScalarFieldEnum[]
  }

  /**
   * tb_mesa_comanda findMany
   */
  export type tb_mesa_comandaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa_comanda
     */
    select?: tb_mesa_comandaSelect<ExtArgs> | null
    /**
     * Filter, which tb_mesa_comandas to fetch.
     */
    where?: tb_mesa_comandaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_mesa_comandas to fetch.
     */
    orderBy?: tb_mesa_comandaOrderByWithRelationInput | tb_mesa_comandaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_mesa_comandas.
     */
    cursor?: tb_mesa_comandaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_mesa_comandas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_mesa_comandas.
     */
    skip?: number
    distinct?: Tb_mesa_comandaScalarFieldEnum | Tb_mesa_comandaScalarFieldEnum[]
  }

  /**
   * tb_mesa_comanda create
   */
  export type tb_mesa_comandaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa_comanda
     */
    select?: tb_mesa_comandaSelect<ExtArgs> | null
    /**
     * The data needed to create a tb_mesa_comanda.
     */
    data: XOR<tb_mesa_comandaCreateInput, tb_mesa_comandaUncheckedCreateInput>
  }

  /**
   * tb_mesa_comanda createMany
   */
  export type tb_mesa_comandaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_mesa_comandas.
     */
    data: tb_mesa_comandaCreateManyInput | tb_mesa_comandaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_mesa_comanda update
   */
  export type tb_mesa_comandaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa_comanda
     */
    select?: tb_mesa_comandaSelect<ExtArgs> | null
    /**
     * The data needed to update a tb_mesa_comanda.
     */
    data: XOR<tb_mesa_comandaUpdateInput, tb_mesa_comandaUncheckedUpdateInput>
    /**
     * Choose, which tb_mesa_comanda to update.
     */
    where: tb_mesa_comandaWhereUniqueInput
  }

  /**
   * tb_mesa_comanda updateMany
   */
  export type tb_mesa_comandaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_mesa_comandas.
     */
    data: XOR<tb_mesa_comandaUpdateManyMutationInput, tb_mesa_comandaUncheckedUpdateManyInput>
    /**
     * Filter which tb_mesa_comandas to update
     */
    where?: tb_mesa_comandaWhereInput
  }

  /**
   * tb_mesa_comanda upsert
   */
  export type tb_mesa_comandaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa_comanda
     */
    select?: tb_mesa_comandaSelect<ExtArgs> | null
    /**
     * The filter to search for the tb_mesa_comanda to update in case it exists.
     */
    where: tb_mesa_comandaWhereUniqueInput
    /**
     * In case the tb_mesa_comanda found by the `where` argument doesn't exist, create a new tb_mesa_comanda with this data.
     */
    create: XOR<tb_mesa_comandaCreateInput, tb_mesa_comandaUncheckedCreateInput>
    /**
     * In case the tb_mesa_comanda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_mesa_comandaUpdateInput, tb_mesa_comandaUncheckedUpdateInput>
  }

  /**
   * tb_mesa_comanda delete
   */
  export type tb_mesa_comandaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa_comanda
     */
    select?: tb_mesa_comandaSelect<ExtArgs> | null
    /**
     * Filter which tb_mesa_comanda to delete.
     */
    where: tb_mesa_comandaWhereUniqueInput
  }

  /**
   * tb_mesa_comanda deleteMany
   */
  export type tb_mesa_comandaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_mesa_comandas to delete
     */
    where?: tb_mesa_comandaWhereInput
  }

  /**
   * tb_mesa_comanda without action
   */
  export type tb_mesa_comandaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_mesa_comanda
     */
    select?: tb_mesa_comandaSelect<ExtArgs> | null
  }


  /**
   * Model tb_pedido
   */

  export type AggregateTb_pedido = {
    _count: Tb_pedidoCountAggregateOutputType | null
    _avg: Tb_pedidoAvgAggregateOutputType | null
    _sum: Tb_pedidoSumAggregateOutputType | null
    _min: Tb_pedidoMinAggregateOutputType | null
    _max: Tb_pedidoMaxAggregateOutputType | null
  }

  export type Tb_pedidoAvgAggregateOutputType = {
    Codigo: number | null
    ID_Activity: number | null
    Id_Mesa: number | null
    Id_Comanda: number | null
  }

  export type Tb_pedidoSumAggregateOutputType = {
    Codigo: number | null
    ID_Activity: number | null
    Id_Mesa: number | null
    Id_Comanda: number | null
  }

  export type Tb_pedidoMinAggregateOutputType = {
    Codigo: number | null
    ID_Activity: number | null
    Id_Mesa: number | null
    Id_Comanda: number | null
    Importado_ERP: string | null
  }

  export type Tb_pedidoMaxAggregateOutputType = {
    Codigo: number | null
    ID_Activity: number | null
    Id_Mesa: number | null
    Id_Comanda: number | null
    Importado_ERP: string | null
  }

  export type Tb_pedidoCountAggregateOutputType = {
    Codigo: number
    ID_Activity: number
    Id_Mesa: number
    Id_Comanda: number
    Importado_ERP: number
    _all: number
  }


  export type Tb_pedidoAvgAggregateInputType = {
    Codigo?: true
    ID_Activity?: true
    Id_Mesa?: true
    Id_Comanda?: true
  }

  export type Tb_pedidoSumAggregateInputType = {
    Codigo?: true
    ID_Activity?: true
    Id_Mesa?: true
    Id_Comanda?: true
  }

  export type Tb_pedidoMinAggregateInputType = {
    Codigo?: true
    ID_Activity?: true
    Id_Mesa?: true
    Id_Comanda?: true
    Importado_ERP?: true
  }

  export type Tb_pedidoMaxAggregateInputType = {
    Codigo?: true
    ID_Activity?: true
    Id_Mesa?: true
    Id_Comanda?: true
    Importado_ERP?: true
  }

  export type Tb_pedidoCountAggregateInputType = {
    Codigo?: true
    ID_Activity?: true
    Id_Mesa?: true
    Id_Comanda?: true
    Importado_ERP?: true
    _all?: true
  }

  export type Tb_pedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_pedido to aggregate.
     */
    where?: tb_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pedidos to fetch.
     */
    orderBy?: tb_pedidoOrderByWithRelationInput | tb_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_pedidos
    **/
    _count?: true | Tb_pedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_pedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_pedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_pedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_pedidoMaxAggregateInputType
  }

  export type GetTb_pedidoAggregateType<T extends Tb_pedidoAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_pedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_pedido[P]>
      : GetScalarType<T[P], AggregateTb_pedido[P]>
  }




  export type tb_pedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_pedidoWhereInput
    orderBy?: tb_pedidoOrderByWithAggregationInput | tb_pedidoOrderByWithAggregationInput[]
    by: Tb_pedidoScalarFieldEnum[] | Tb_pedidoScalarFieldEnum
    having?: tb_pedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_pedidoCountAggregateInputType | true
    _avg?: Tb_pedidoAvgAggregateInputType
    _sum?: Tb_pedidoSumAggregateInputType
    _min?: Tb_pedidoMinAggregateInputType
    _max?: Tb_pedidoMaxAggregateInputType
  }

  export type Tb_pedidoGroupByOutputType = {
    Codigo: number
    ID_Activity: number | null
    Id_Mesa: number | null
    Id_Comanda: number | null
    Importado_ERP: string | null
    _count: Tb_pedidoCountAggregateOutputType | null
    _avg: Tb_pedidoAvgAggregateOutputType | null
    _sum: Tb_pedidoSumAggregateOutputType | null
    _min: Tb_pedidoMinAggregateOutputType | null
    _max: Tb_pedidoMaxAggregateOutputType | null
  }

  type GetTb_pedidoGroupByPayload<T extends tb_pedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_pedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_pedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_pedidoGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_pedidoGroupByOutputType[P]>
        }
      >
    >


  export type tb_pedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Codigo?: boolean
    ID_Activity?: boolean
    Id_Mesa?: boolean
    Id_Comanda?: boolean
    Importado_ERP?: boolean
  }, ExtArgs["result"]["tb_pedido"]>


  export type tb_pedidoSelectScalar = {
    Codigo?: boolean
    ID_Activity?: boolean
    Id_Mesa?: boolean
    Id_Comanda?: boolean
    Importado_ERP?: boolean
  }


  export type $tb_pedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_pedido"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Codigo: number
      ID_Activity: number | null
      Id_Mesa: number | null
      Id_Comanda: number | null
      Importado_ERP: string | null
    }, ExtArgs["result"]["tb_pedido"]>
    composites: {}
  }

  type tb_pedidoGetPayload<S extends boolean | null | undefined | tb_pedidoDefaultArgs> = $Result.GetResult<Prisma.$tb_pedidoPayload, S>

  type tb_pedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tb_pedidoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tb_pedidoCountAggregateInputType | true
    }

  export interface tb_pedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_pedido'], meta: { name: 'tb_pedido' } }
    /**
     * Find zero or one Tb_pedido that matches the filter.
     * @param {tb_pedidoFindUniqueArgs} args - Arguments to find a Tb_pedido
     * @example
     * // Get one Tb_pedido
     * const tb_pedido = await prisma.tb_pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_pedidoFindUniqueArgs>(args: SelectSubset<T, tb_pedidoFindUniqueArgs<ExtArgs>>): Prisma__tb_pedidoClient<$Result.GetResult<Prisma.$tb_pedidoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tb_pedido that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tb_pedidoFindUniqueOrThrowArgs} args - Arguments to find a Tb_pedido
     * @example
     * // Get one Tb_pedido
     * const tb_pedido = await prisma.tb_pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_pedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_pedidoClient<$Result.GetResult<Prisma.$tb_pedidoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tb_pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pedidoFindFirstArgs} args - Arguments to find a Tb_pedido
     * @example
     * // Get one Tb_pedido
     * const tb_pedido = await prisma.tb_pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_pedidoFindFirstArgs>(args?: SelectSubset<T, tb_pedidoFindFirstArgs<ExtArgs>>): Prisma__tb_pedidoClient<$Result.GetResult<Prisma.$tb_pedidoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tb_pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pedidoFindFirstOrThrowArgs} args - Arguments to find a Tb_pedido
     * @example
     * // Get one Tb_pedido
     * const tb_pedido = await prisma.tb_pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_pedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_pedidoClient<$Result.GetResult<Prisma.$tb_pedidoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tb_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_pedidos
     * const tb_pedidos = await prisma.tb_pedido.findMany()
     * 
     * // Get first 10 Tb_pedidos
     * const tb_pedidos = await prisma.tb_pedido.findMany({ take: 10 })
     * 
     * // Only select the `Codigo`
     * const tb_pedidoWithCodigoOnly = await prisma.tb_pedido.findMany({ select: { Codigo: true } })
     * 
     */
    findMany<T extends tb_pedidoFindManyArgs>(args?: SelectSubset<T, tb_pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_pedidoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tb_pedido.
     * @param {tb_pedidoCreateArgs} args - Arguments to create a Tb_pedido.
     * @example
     * // Create one Tb_pedido
     * const Tb_pedido = await prisma.tb_pedido.create({
     *   data: {
     *     // ... data to create a Tb_pedido
     *   }
     * })
     * 
     */
    create<T extends tb_pedidoCreateArgs>(args: SelectSubset<T, tb_pedidoCreateArgs<ExtArgs>>): Prisma__tb_pedidoClient<$Result.GetResult<Prisma.$tb_pedidoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tb_pedidos.
     * @param {tb_pedidoCreateManyArgs} args - Arguments to create many Tb_pedidos.
     * @example
     * // Create many Tb_pedidos
     * const tb_pedido = await prisma.tb_pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_pedidoCreateManyArgs>(args?: SelectSubset<T, tb_pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_pedido.
     * @param {tb_pedidoDeleteArgs} args - Arguments to delete one Tb_pedido.
     * @example
     * // Delete one Tb_pedido
     * const Tb_pedido = await prisma.tb_pedido.delete({
     *   where: {
     *     // ... filter to delete one Tb_pedido
     *   }
     * })
     * 
     */
    delete<T extends tb_pedidoDeleteArgs>(args: SelectSubset<T, tb_pedidoDeleteArgs<ExtArgs>>): Prisma__tb_pedidoClient<$Result.GetResult<Prisma.$tb_pedidoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tb_pedido.
     * @param {tb_pedidoUpdateArgs} args - Arguments to update one Tb_pedido.
     * @example
     * // Update one Tb_pedido
     * const tb_pedido = await prisma.tb_pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_pedidoUpdateArgs>(args: SelectSubset<T, tb_pedidoUpdateArgs<ExtArgs>>): Prisma__tb_pedidoClient<$Result.GetResult<Prisma.$tb_pedidoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tb_pedidos.
     * @param {tb_pedidoDeleteManyArgs} args - Arguments to filter Tb_pedidos to delete.
     * @example
     * // Delete a few Tb_pedidos
     * const { count } = await prisma.tb_pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_pedidoDeleteManyArgs>(args?: SelectSubset<T, tb_pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_pedidos
     * const tb_pedido = await prisma.tb_pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_pedidoUpdateManyArgs>(args: SelectSubset<T, tb_pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_pedido.
     * @param {tb_pedidoUpsertArgs} args - Arguments to update or create a Tb_pedido.
     * @example
     * // Update or create a Tb_pedido
     * const tb_pedido = await prisma.tb_pedido.upsert({
     *   create: {
     *     // ... data to create a Tb_pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_pedido we want to update
     *   }
     * })
     */
    upsert<T extends tb_pedidoUpsertArgs>(args: SelectSubset<T, tb_pedidoUpsertArgs<ExtArgs>>): Prisma__tb_pedidoClient<$Result.GetResult<Prisma.$tb_pedidoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tb_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pedidoCountArgs} args - Arguments to filter Tb_pedidos to count.
     * @example
     * // Count the number of Tb_pedidos
     * const count = await prisma.tb_pedido.count({
     *   where: {
     *     // ... the filter for the Tb_pedidos we want to count
     *   }
     * })
    **/
    count<T extends tb_pedidoCountArgs>(
      args?: Subset<T, tb_pedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_pedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_pedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_pedidoAggregateArgs>(args: Subset<T, Tb_pedidoAggregateArgs>): Prisma.PrismaPromise<GetTb_pedidoAggregateType<T>>

    /**
     * Group by Tb_pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pedidoGroupByArgs} args - Group by arguments.
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
      T extends tb_pedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_pedidoGroupByArgs['orderBy'] }
        : { orderBy?: tb_pedidoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_pedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_pedido model
   */
  readonly fields: tb_pedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_pedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_pedido model
   */ 
  interface tb_pedidoFieldRefs {
    readonly Codigo: FieldRef<"tb_pedido", 'Int'>
    readonly ID_Activity: FieldRef<"tb_pedido", 'Int'>
    readonly Id_Mesa: FieldRef<"tb_pedido", 'Int'>
    readonly Id_Comanda: FieldRef<"tb_pedido", 'Int'>
    readonly Importado_ERP: FieldRef<"tb_pedido", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_pedido findUnique
   */
  export type tb_pedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido
     */
    select?: tb_pedidoSelect<ExtArgs> | null
    /**
     * Filter, which tb_pedido to fetch.
     */
    where: tb_pedidoWhereUniqueInput
  }

  /**
   * tb_pedido findUniqueOrThrow
   */
  export type tb_pedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido
     */
    select?: tb_pedidoSelect<ExtArgs> | null
    /**
     * Filter, which tb_pedido to fetch.
     */
    where: tb_pedidoWhereUniqueInput
  }

  /**
   * tb_pedido findFirst
   */
  export type tb_pedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido
     */
    select?: tb_pedidoSelect<ExtArgs> | null
    /**
     * Filter, which tb_pedido to fetch.
     */
    where?: tb_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pedidos to fetch.
     */
    orderBy?: tb_pedidoOrderByWithRelationInput | tb_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_pedidos.
     */
    cursor?: tb_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_pedidos.
     */
    distinct?: Tb_pedidoScalarFieldEnum | Tb_pedidoScalarFieldEnum[]
  }

  /**
   * tb_pedido findFirstOrThrow
   */
  export type tb_pedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido
     */
    select?: tb_pedidoSelect<ExtArgs> | null
    /**
     * Filter, which tb_pedido to fetch.
     */
    where?: tb_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pedidos to fetch.
     */
    orderBy?: tb_pedidoOrderByWithRelationInput | tb_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_pedidos.
     */
    cursor?: tb_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_pedidos.
     */
    distinct?: Tb_pedidoScalarFieldEnum | Tb_pedidoScalarFieldEnum[]
  }

  /**
   * tb_pedido findMany
   */
  export type tb_pedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido
     */
    select?: tb_pedidoSelect<ExtArgs> | null
    /**
     * Filter, which tb_pedidos to fetch.
     */
    where?: tb_pedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pedidos to fetch.
     */
    orderBy?: tb_pedidoOrderByWithRelationInput | tb_pedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_pedidos.
     */
    cursor?: tb_pedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pedidos.
     */
    skip?: number
    distinct?: Tb_pedidoScalarFieldEnum | Tb_pedidoScalarFieldEnum[]
  }

  /**
   * tb_pedido create
   */
  export type tb_pedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido
     */
    select?: tb_pedidoSelect<ExtArgs> | null
    /**
     * The data needed to create a tb_pedido.
     */
    data: XOR<tb_pedidoCreateInput, tb_pedidoUncheckedCreateInput>
  }

  /**
   * tb_pedido createMany
   */
  export type tb_pedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_pedidos.
     */
    data: tb_pedidoCreateManyInput | tb_pedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_pedido update
   */
  export type tb_pedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido
     */
    select?: tb_pedidoSelect<ExtArgs> | null
    /**
     * The data needed to update a tb_pedido.
     */
    data: XOR<tb_pedidoUpdateInput, tb_pedidoUncheckedUpdateInput>
    /**
     * Choose, which tb_pedido to update.
     */
    where: tb_pedidoWhereUniqueInput
  }

  /**
   * tb_pedido updateMany
   */
  export type tb_pedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_pedidos.
     */
    data: XOR<tb_pedidoUpdateManyMutationInput, tb_pedidoUncheckedUpdateManyInput>
    /**
     * Filter which tb_pedidos to update
     */
    where?: tb_pedidoWhereInput
  }

  /**
   * tb_pedido upsert
   */
  export type tb_pedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido
     */
    select?: tb_pedidoSelect<ExtArgs> | null
    /**
     * The filter to search for the tb_pedido to update in case it exists.
     */
    where: tb_pedidoWhereUniqueInput
    /**
     * In case the tb_pedido found by the `where` argument doesn't exist, create a new tb_pedido with this data.
     */
    create: XOR<tb_pedidoCreateInput, tb_pedidoUncheckedCreateInput>
    /**
     * In case the tb_pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_pedidoUpdateInput, tb_pedidoUncheckedUpdateInput>
  }

  /**
   * tb_pedido delete
   */
  export type tb_pedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido
     */
    select?: tb_pedidoSelect<ExtArgs> | null
    /**
     * Filter which tb_pedido to delete.
     */
    where: tb_pedidoWhereUniqueInput
  }

  /**
   * tb_pedido deleteMany
   */
  export type tb_pedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_pedidos to delete
     */
    where?: tb_pedidoWhereInput
  }

  /**
   * tb_pedido without action
   */
  export type tb_pedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido
     */
    select?: tb_pedidoSelect<ExtArgs> | null
  }


  /**
   * Model tb_pedido_item
   */

  export type AggregateTb_pedido_item = {
    _count: Tb_pedido_itemCountAggregateOutputType | null
    _avg: Tb_pedido_itemAvgAggregateOutputType | null
    _sum: Tb_pedido_itemSumAggregateOutputType | null
    _min: Tb_pedido_itemMinAggregateOutputType | null
    _max: Tb_pedido_itemMaxAggregateOutputType | null
  }

  export type Tb_pedido_itemAvgAggregateOutputType = {
    Codigo: number | null
    Id_Pedido: number | null
    Id_Produto: number | null
    Quantidade: number | null
    Unitario: number | null
    Total: number | null
  }

  export type Tb_pedido_itemSumAggregateOutputType = {
    Codigo: number | null
    Id_Pedido: number | null
    Id_Produto: number | null
    Quantidade: number | null
    Unitario: number | null
    Total: number | null
  }

  export type Tb_pedido_itemMinAggregateOutputType = {
    Codigo: number | null
    Id_Pedido: number | null
    Id_Produto: number | null
    Quantidade: number | null
    Unitario: number | null
    Total: number | null
    Importado_ERP: string | null
  }

  export type Tb_pedido_itemMaxAggregateOutputType = {
    Codigo: number | null
    Id_Pedido: number | null
    Id_Produto: number | null
    Quantidade: number | null
    Unitario: number | null
    Total: number | null
    Importado_ERP: string | null
  }

  export type Tb_pedido_itemCountAggregateOutputType = {
    Codigo: number
    Id_Pedido: number
    Id_Produto: number
    Quantidade: number
    Unitario: number
    Total: number
    Importado_ERP: number
    _all: number
  }


  export type Tb_pedido_itemAvgAggregateInputType = {
    Codigo?: true
    Id_Pedido?: true
    Id_Produto?: true
    Quantidade?: true
    Unitario?: true
    Total?: true
  }

  export type Tb_pedido_itemSumAggregateInputType = {
    Codigo?: true
    Id_Pedido?: true
    Id_Produto?: true
    Quantidade?: true
    Unitario?: true
    Total?: true
  }

  export type Tb_pedido_itemMinAggregateInputType = {
    Codigo?: true
    Id_Pedido?: true
    Id_Produto?: true
    Quantidade?: true
    Unitario?: true
    Total?: true
    Importado_ERP?: true
  }

  export type Tb_pedido_itemMaxAggregateInputType = {
    Codigo?: true
    Id_Pedido?: true
    Id_Produto?: true
    Quantidade?: true
    Unitario?: true
    Total?: true
    Importado_ERP?: true
  }

  export type Tb_pedido_itemCountAggregateInputType = {
    Codigo?: true
    Id_Pedido?: true
    Id_Produto?: true
    Quantidade?: true
    Unitario?: true
    Total?: true
    Importado_ERP?: true
    _all?: true
  }

  export type Tb_pedido_itemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_pedido_item to aggregate.
     */
    where?: tb_pedido_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pedido_items to fetch.
     */
    orderBy?: tb_pedido_itemOrderByWithRelationInput | tb_pedido_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_pedido_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pedido_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pedido_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_pedido_items
    **/
    _count?: true | Tb_pedido_itemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_pedido_itemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_pedido_itemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_pedido_itemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_pedido_itemMaxAggregateInputType
  }

  export type GetTb_pedido_itemAggregateType<T extends Tb_pedido_itemAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_pedido_item]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_pedido_item[P]>
      : GetScalarType<T[P], AggregateTb_pedido_item[P]>
  }




  export type tb_pedido_itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_pedido_itemWhereInput
    orderBy?: tb_pedido_itemOrderByWithAggregationInput | tb_pedido_itemOrderByWithAggregationInput[]
    by: Tb_pedido_itemScalarFieldEnum[] | Tb_pedido_itemScalarFieldEnum
    having?: tb_pedido_itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_pedido_itemCountAggregateInputType | true
    _avg?: Tb_pedido_itemAvgAggregateInputType
    _sum?: Tb_pedido_itemSumAggregateInputType
    _min?: Tb_pedido_itemMinAggregateInputType
    _max?: Tb_pedido_itemMaxAggregateInputType
  }

  export type Tb_pedido_itemGroupByOutputType = {
    Codigo: number
    Id_Pedido: number | null
    Id_Produto: number | null
    Quantidade: number | null
    Unitario: number | null
    Total: number | null
    Importado_ERP: string | null
    _count: Tb_pedido_itemCountAggregateOutputType | null
    _avg: Tb_pedido_itemAvgAggregateOutputType | null
    _sum: Tb_pedido_itemSumAggregateOutputType | null
    _min: Tb_pedido_itemMinAggregateOutputType | null
    _max: Tb_pedido_itemMaxAggregateOutputType | null
  }

  type GetTb_pedido_itemGroupByPayload<T extends tb_pedido_itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_pedido_itemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_pedido_itemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_pedido_itemGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_pedido_itemGroupByOutputType[P]>
        }
      >
    >


  export type tb_pedido_itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Codigo?: boolean
    Id_Pedido?: boolean
    Id_Produto?: boolean
    Quantidade?: boolean
    Unitario?: boolean
    Total?: boolean
    Importado_ERP?: boolean
  }, ExtArgs["result"]["tb_pedido_item"]>


  export type tb_pedido_itemSelectScalar = {
    Codigo?: boolean
    Id_Pedido?: boolean
    Id_Produto?: boolean
    Quantidade?: boolean
    Unitario?: boolean
    Total?: boolean
    Importado_ERP?: boolean
  }


  export type $tb_pedido_itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_pedido_item"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Codigo: number
      Id_Pedido: number | null
      Id_Produto: number | null
      Quantidade: number | null
      Unitario: number | null
      Total: number | null
      Importado_ERP: string | null
    }, ExtArgs["result"]["tb_pedido_item"]>
    composites: {}
  }

  type tb_pedido_itemGetPayload<S extends boolean | null | undefined | tb_pedido_itemDefaultArgs> = $Result.GetResult<Prisma.$tb_pedido_itemPayload, S>

  type tb_pedido_itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tb_pedido_itemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Tb_pedido_itemCountAggregateInputType | true
    }

  export interface tb_pedido_itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_pedido_item'], meta: { name: 'tb_pedido_item' } }
    /**
     * Find zero or one Tb_pedido_item that matches the filter.
     * @param {tb_pedido_itemFindUniqueArgs} args - Arguments to find a Tb_pedido_item
     * @example
     * // Get one Tb_pedido_item
     * const tb_pedido_item = await prisma.tb_pedido_item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_pedido_itemFindUniqueArgs>(args: SelectSubset<T, tb_pedido_itemFindUniqueArgs<ExtArgs>>): Prisma__tb_pedido_itemClient<$Result.GetResult<Prisma.$tb_pedido_itemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tb_pedido_item that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tb_pedido_itemFindUniqueOrThrowArgs} args - Arguments to find a Tb_pedido_item
     * @example
     * // Get one Tb_pedido_item
     * const tb_pedido_item = await prisma.tb_pedido_item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_pedido_itemFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_pedido_itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_pedido_itemClient<$Result.GetResult<Prisma.$tb_pedido_itemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tb_pedido_item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pedido_itemFindFirstArgs} args - Arguments to find a Tb_pedido_item
     * @example
     * // Get one Tb_pedido_item
     * const tb_pedido_item = await prisma.tb_pedido_item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_pedido_itemFindFirstArgs>(args?: SelectSubset<T, tb_pedido_itemFindFirstArgs<ExtArgs>>): Prisma__tb_pedido_itemClient<$Result.GetResult<Prisma.$tb_pedido_itemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tb_pedido_item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pedido_itemFindFirstOrThrowArgs} args - Arguments to find a Tb_pedido_item
     * @example
     * // Get one Tb_pedido_item
     * const tb_pedido_item = await prisma.tb_pedido_item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_pedido_itemFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_pedido_itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_pedido_itemClient<$Result.GetResult<Prisma.$tb_pedido_itemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tb_pedido_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pedido_itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_pedido_items
     * const tb_pedido_items = await prisma.tb_pedido_item.findMany()
     * 
     * // Get first 10 Tb_pedido_items
     * const tb_pedido_items = await prisma.tb_pedido_item.findMany({ take: 10 })
     * 
     * // Only select the `Codigo`
     * const tb_pedido_itemWithCodigoOnly = await prisma.tb_pedido_item.findMany({ select: { Codigo: true } })
     * 
     */
    findMany<T extends tb_pedido_itemFindManyArgs>(args?: SelectSubset<T, tb_pedido_itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_pedido_itemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tb_pedido_item.
     * @param {tb_pedido_itemCreateArgs} args - Arguments to create a Tb_pedido_item.
     * @example
     * // Create one Tb_pedido_item
     * const Tb_pedido_item = await prisma.tb_pedido_item.create({
     *   data: {
     *     // ... data to create a Tb_pedido_item
     *   }
     * })
     * 
     */
    create<T extends tb_pedido_itemCreateArgs>(args: SelectSubset<T, tb_pedido_itemCreateArgs<ExtArgs>>): Prisma__tb_pedido_itemClient<$Result.GetResult<Prisma.$tb_pedido_itemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tb_pedido_items.
     * @param {tb_pedido_itemCreateManyArgs} args - Arguments to create many Tb_pedido_items.
     * @example
     * // Create many Tb_pedido_items
     * const tb_pedido_item = await prisma.tb_pedido_item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_pedido_itemCreateManyArgs>(args?: SelectSubset<T, tb_pedido_itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tb_pedido_item.
     * @param {tb_pedido_itemDeleteArgs} args - Arguments to delete one Tb_pedido_item.
     * @example
     * // Delete one Tb_pedido_item
     * const Tb_pedido_item = await prisma.tb_pedido_item.delete({
     *   where: {
     *     // ... filter to delete one Tb_pedido_item
     *   }
     * })
     * 
     */
    delete<T extends tb_pedido_itemDeleteArgs>(args: SelectSubset<T, tb_pedido_itemDeleteArgs<ExtArgs>>): Prisma__tb_pedido_itemClient<$Result.GetResult<Prisma.$tb_pedido_itemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tb_pedido_item.
     * @param {tb_pedido_itemUpdateArgs} args - Arguments to update one Tb_pedido_item.
     * @example
     * // Update one Tb_pedido_item
     * const tb_pedido_item = await prisma.tb_pedido_item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_pedido_itemUpdateArgs>(args: SelectSubset<T, tb_pedido_itemUpdateArgs<ExtArgs>>): Prisma__tb_pedido_itemClient<$Result.GetResult<Prisma.$tb_pedido_itemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tb_pedido_items.
     * @param {tb_pedido_itemDeleteManyArgs} args - Arguments to filter Tb_pedido_items to delete.
     * @example
     * // Delete a few Tb_pedido_items
     * const { count } = await prisma.tb_pedido_item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_pedido_itemDeleteManyArgs>(args?: SelectSubset<T, tb_pedido_itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_pedido_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pedido_itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_pedido_items
     * const tb_pedido_item = await prisma.tb_pedido_item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_pedido_itemUpdateManyArgs>(args: SelectSubset<T, tb_pedido_itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tb_pedido_item.
     * @param {tb_pedido_itemUpsertArgs} args - Arguments to update or create a Tb_pedido_item.
     * @example
     * // Update or create a Tb_pedido_item
     * const tb_pedido_item = await prisma.tb_pedido_item.upsert({
     *   create: {
     *     // ... data to create a Tb_pedido_item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_pedido_item we want to update
     *   }
     * })
     */
    upsert<T extends tb_pedido_itemUpsertArgs>(args: SelectSubset<T, tb_pedido_itemUpsertArgs<ExtArgs>>): Prisma__tb_pedido_itemClient<$Result.GetResult<Prisma.$tb_pedido_itemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tb_pedido_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pedido_itemCountArgs} args - Arguments to filter Tb_pedido_items to count.
     * @example
     * // Count the number of Tb_pedido_items
     * const count = await prisma.tb_pedido_item.count({
     *   where: {
     *     // ... the filter for the Tb_pedido_items we want to count
     *   }
     * })
    **/
    count<T extends tb_pedido_itemCountArgs>(
      args?: Subset<T, tb_pedido_itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_pedido_itemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_pedido_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_pedido_itemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tb_pedido_itemAggregateArgs>(args: Subset<T, Tb_pedido_itemAggregateArgs>): Prisma.PrismaPromise<GetTb_pedido_itemAggregateType<T>>

    /**
     * Group by Tb_pedido_item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_pedido_itemGroupByArgs} args - Group by arguments.
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
      T extends tb_pedido_itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_pedido_itemGroupByArgs['orderBy'] }
        : { orderBy?: tb_pedido_itemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tb_pedido_itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_pedido_itemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_pedido_item model
   */
  readonly fields: tb_pedido_itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_pedido_item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_pedido_itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tb_pedido_item model
   */ 
  interface tb_pedido_itemFieldRefs {
    readonly Codigo: FieldRef<"tb_pedido_item", 'Int'>
    readonly Id_Pedido: FieldRef<"tb_pedido_item", 'Int'>
    readonly Id_Produto: FieldRef<"tb_pedido_item", 'Int'>
    readonly Quantidade: FieldRef<"tb_pedido_item", 'Float'>
    readonly Unitario: FieldRef<"tb_pedido_item", 'Float'>
    readonly Total: FieldRef<"tb_pedido_item", 'Float'>
    readonly Importado_ERP: FieldRef<"tb_pedido_item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tb_pedido_item findUnique
   */
  export type tb_pedido_itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido_item
     */
    select?: tb_pedido_itemSelect<ExtArgs> | null
    /**
     * Filter, which tb_pedido_item to fetch.
     */
    where: tb_pedido_itemWhereUniqueInput
  }

  /**
   * tb_pedido_item findUniqueOrThrow
   */
  export type tb_pedido_itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido_item
     */
    select?: tb_pedido_itemSelect<ExtArgs> | null
    /**
     * Filter, which tb_pedido_item to fetch.
     */
    where: tb_pedido_itemWhereUniqueInput
  }

  /**
   * tb_pedido_item findFirst
   */
  export type tb_pedido_itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido_item
     */
    select?: tb_pedido_itemSelect<ExtArgs> | null
    /**
     * Filter, which tb_pedido_item to fetch.
     */
    where?: tb_pedido_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pedido_items to fetch.
     */
    orderBy?: tb_pedido_itemOrderByWithRelationInput | tb_pedido_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_pedido_items.
     */
    cursor?: tb_pedido_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pedido_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pedido_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_pedido_items.
     */
    distinct?: Tb_pedido_itemScalarFieldEnum | Tb_pedido_itemScalarFieldEnum[]
  }

  /**
   * tb_pedido_item findFirstOrThrow
   */
  export type tb_pedido_itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido_item
     */
    select?: tb_pedido_itemSelect<ExtArgs> | null
    /**
     * Filter, which tb_pedido_item to fetch.
     */
    where?: tb_pedido_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pedido_items to fetch.
     */
    orderBy?: tb_pedido_itemOrderByWithRelationInput | tb_pedido_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_pedido_items.
     */
    cursor?: tb_pedido_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pedido_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pedido_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_pedido_items.
     */
    distinct?: Tb_pedido_itemScalarFieldEnum | Tb_pedido_itemScalarFieldEnum[]
  }

  /**
   * tb_pedido_item findMany
   */
  export type tb_pedido_itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido_item
     */
    select?: tb_pedido_itemSelect<ExtArgs> | null
    /**
     * Filter, which tb_pedido_items to fetch.
     */
    where?: tb_pedido_itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_pedido_items to fetch.
     */
    orderBy?: tb_pedido_itemOrderByWithRelationInput | tb_pedido_itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_pedido_items.
     */
    cursor?: tb_pedido_itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_pedido_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_pedido_items.
     */
    skip?: number
    distinct?: Tb_pedido_itemScalarFieldEnum | Tb_pedido_itemScalarFieldEnum[]
  }

  /**
   * tb_pedido_item create
   */
  export type tb_pedido_itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido_item
     */
    select?: tb_pedido_itemSelect<ExtArgs> | null
    /**
     * The data needed to create a tb_pedido_item.
     */
    data: XOR<tb_pedido_itemCreateInput, tb_pedido_itemUncheckedCreateInput>
  }

  /**
   * tb_pedido_item createMany
   */
  export type tb_pedido_itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_pedido_items.
     */
    data: tb_pedido_itemCreateManyInput | tb_pedido_itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_pedido_item update
   */
  export type tb_pedido_itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido_item
     */
    select?: tb_pedido_itemSelect<ExtArgs> | null
    /**
     * The data needed to update a tb_pedido_item.
     */
    data: XOR<tb_pedido_itemUpdateInput, tb_pedido_itemUncheckedUpdateInput>
    /**
     * Choose, which tb_pedido_item to update.
     */
    where: tb_pedido_itemWhereUniqueInput
  }

  /**
   * tb_pedido_item updateMany
   */
  export type tb_pedido_itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_pedido_items.
     */
    data: XOR<tb_pedido_itemUpdateManyMutationInput, tb_pedido_itemUncheckedUpdateManyInput>
    /**
     * Filter which tb_pedido_items to update
     */
    where?: tb_pedido_itemWhereInput
  }

  /**
   * tb_pedido_item upsert
   */
  export type tb_pedido_itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido_item
     */
    select?: tb_pedido_itemSelect<ExtArgs> | null
    /**
     * The filter to search for the tb_pedido_item to update in case it exists.
     */
    where: tb_pedido_itemWhereUniqueInput
    /**
     * In case the tb_pedido_item found by the `where` argument doesn't exist, create a new tb_pedido_item with this data.
     */
    create: XOR<tb_pedido_itemCreateInput, tb_pedido_itemUncheckedCreateInput>
    /**
     * In case the tb_pedido_item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_pedido_itemUpdateInput, tb_pedido_itemUncheckedUpdateInput>
  }

  /**
   * tb_pedido_item delete
   */
  export type tb_pedido_itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido_item
     */
    select?: tb_pedido_itemSelect<ExtArgs> | null
    /**
     * Filter which tb_pedido_item to delete.
     */
    where: tb_pedido_itemWhereUniqueInput
  }

  /**
   * tb_pedido_item deleteMany
   */
  export type tb_pedido_itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_pedido_items to delete
     */
    where?: tb_pedido_itemWhereInput
  }

  /**
   * tb_pedido_item without action
   */
  export type tb_pedido_itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_pedido_item
     */
    select?: tb_pedido_itemSelect<ExtArgs> | null
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


  export const Tb_pessoasScalarFieldEnum: {
    Codigo: 'Codigo',
    Tipo_Pessoa: 'Tipo_Pessoa',
    CPF: 'CPF',
    CNPJ: 'CNPJ',
    RG: 'RG',
    IE: 'IE',
    CadPro: 'CadPro',
    Tipo_Contribuinte: 'Tipo_Contribuinte',
    Pessoa: 'Pessoa',
    Fantasia: 'Fantasia',
    CEP: 'CEP',
    Endereco: 'Endereco',
    Numero: 'Numero',
    Bairro: 'Bairro',
    UF: 'UF',
    cUF: 'cUF',
    xMun: 'xMun',
    cMun: 'cMun',
    xPais: 'xPais',
    cPais: 'cPais',
    Complemento: 'Complemento',
    Data_Nascimento: 'Data_Nascimento',
    Fone1: 'Fone1',
    Fone2: 'Fone2',
    Fone3: 'Fone3',
    Fone4: 'Fone4',
    Fone5: 'Fone5',
    Id_Tabela_Preco: 'Id_Tabela_Preco',
    RegExcluido: 'RegExcluido',
    Ativo: 'Ativo',
    IDEmpresa: 'IDEmpresa',
    DHU: 'DHU',
    IDUser: 'IDUser',
    Email: 'Email',
    Id_Operacao_Movimento: 'Id_Operacao_Movimento',
    Apelido: 'Apelido',
    Limite: 'Limite',
    Liberado_Contas_Em_Atraso: 'Liberado_Contas_Em_Atraso',
    WhatsApp: 'WhatsApp'
  };

  export type Tb_pessoasScalarFieldEnum = (typeof Tb_pessoasScalarFieldEnum)[keyof typeof Tb_pessoasScalarFieldEnum]


  export const Tb_produtosScalarFieldEnum: {
    Codigo: 'Codigo',
    Produto: 'Produto',
    Produto_Curto: 'Produto_Curto',
    Produto_PDV: 'Produto_PDV',
    Complemento: 'Complemento',
    Pesquisa_Rapida_PDV: 'Pesquisa_Rapida_PDV',
    Id_Departamento: 'Id_Departamento',
    Id_Setor: 'Id_Setor',
    Id_Marca: 'Id_Marca',
    Id_Grupo: 'Id_Grupo',
    Id_SubGrupo: 'Id_SubGrupo',
    Id_Unidade: 'Id_Unidade',
    Id_Familia: 'Id_Familia',
    Codigo_Interno: 'Codigo_Interno',
    Peso: 'Peso',
    Capacidade: 'Capacidade',
    ID_Alocacao: 'ID_Alocacao',
    Comissao: 'Comissao',
    Balanca: 'Balanca',
    Tipo_Balanca: 'Tipo_Balanca',
    Descricao_Balanca: 'Descricao_Balanca',
    NCM: 'NCM',
    Genero: 'Genero',
    cEAN_Trib: 'cEAN_Trib',
    CEST: 'CEST',
    Estoque: 'Estoque',
    Estoque_Reservado: 'Estoque_Reservado',
    Estoque_Disponivel: 'Estoque_Disponivel',
    Tipo: 'Tipo',
    Deposito: 'Deposito',
    Fraciona: 'Fraciona',
    Controle_Lote: 'Controle_Lote',
    Requer_Observacao: 'Requer_Observacao',
    Nao_Controla_Estoque: 'Nao_Controla_Estoque',
    Nunca_Agrupa_Venda: 'Nunca_Agrupa_Venda',
    Preco_Atribuido: 'Preco_Atribuido',
    Preco_Venda: 'Preco_Venda',
    Preco_Compra: 'Preco_Compra',
    Preco_Medio: 'Preco_Medio',
    Data_Preco_Venda: 'Data_Preco_Venda',
    Data_Custo: 'Data_Custo',
    Margem: 'Margem',
    Markup: 'Markup',
    Classificacao: 'Classificacao',
    Id_Produto_Vinculado: 'Id_Produto_Vinculado',
    Ultima_Venda: 'Ultima_Venda',
    Ultima_Compra: 'Ultima_Compra',
    Data_Alterado: 'Data_Alterado',
    Ativo: 'Ativo',
    RegExcluido: 'RegExcluido',
    IDEmpresa: 'IDEmpresa',
    DHU: 'DHU',
    Id_Importacao_Sistema: 'Id_Importacao_Sistema',
    Id_SubFamilia: 'Id_SubFamilia',
    Estoque_Maximo: 'Estoque_Maximo',
    Estoque_Minimo: 'Estoque_Minimo',
    IDUser: 'IDUser',
    Cad_ViaXML: 'Cad_ViaXML',
    Funcao: 'Funcao',
    Alterado: 'Alterado',
    N_Licenca_ANVISA: 'N_Licenca_ANVISA',
    Id_DCB: 'Id_DCB',
    Fidelidade_Credito: 'Fidelidade_Credito',
    Fidelidade_Resgate: 'Fidelidade_Resgate',
    Dias_Validade: 'Dias_Validade'
  };

  export type Tb_produtosScalarFieldEnum = (typeof Tb_produtosScalarFieldEnum)[keyof typeof Tb_produtosScalarFieldEnum]


  export const Tb_produtos_setorScalarFieldEnum: {
    Codigo: 'Codigo',
    Setor: 'Setor',
    Ativo: 'Ativo',
    RegExcluido: 'RegExcluido',
    IDEmpresa: 'IDEmpresa',
    DHU: 'DHU',
    IDUser: 'IDUser'
  };

  export type Tb_produtos_setorScalarFieldEnum = (typeof Tb_produtos_setorScalarFieldEnum)[keyof typeof Tb_produtos_setorScalarFieldEnum]


  export const Tb_comandaScalarFieldEnum: {
    Codigo: 'Codigo',
    Ativo: 'Ativo'
  };

  export type Tb_comandaScalarFieldEnum = (typeof Tb_comandaScalarFieldEnum)[keyof typeof Tb_comandaScalarFieldEnum]


  export const Tb_mesaScalarFieldEnum: {
    Codigo: 'Codigo',
    Ativo: 'Ativo'
  };

  export type Tb_mesaScalarFieldEnum = (typeof Tb_mesaScalarFieldEnum)[keyof typeof Tb_mesaScalarFieldEnum]


  export const Tb_mesa_comandaScalarFieldEnum: {
    Codigo: 'Codigo',
    Id_Mesa: 'Id_Mesa',
    Id_Comanda: 'Id_Comanda'
  };

  export type Tb_mesa_comandaScalarFieldEnum = (typeof Tb_mesa_comandaScalarFieldEnum)[keyof typeof Tb_mesa_comandaScalarFieldEnum]


  export const Tb_pedidoScalarFieldEnum: {
    Codigo: 'Codigo',
    ID_Activity: 'ID_Activity',
    Id_Mesa: 'Id_Mesa',
    Id_Comanda: 'Id_Comanda',
    Importado_ERP: 'Importado_ERP'
  };

  export type Tb_pedidoScalarFieldEnum = (typeof Tb_pedidoScalarFieldEnum)[keyof typeof Tb_pedidoScalarFieldEnum]


  export const Tb_pedido_itemScalarFieldEnum: {
    Codigo: 'Codigo',
    Id_Pedido: 'Id_Pedido',
    Id_Produto: 'Id_Produto',
    Quantidade: 'Quantidade',
    Unitario: 'Unitario',
    Total: 'Total',
    Importado_ERP: 'Importado_ERP'
  };

  export type Tb_pedido_itemScalarFieldEnum = (typeof Tb_pedido_itemScalarFieldEnum)[keyof typeof Tb_pedido_itemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type tb_pessoasWhereInput = {
    AND?: tb_pessoasWhereInput | tb_pessoasWhereInput[]
    OR?: tb_pessoasWhereInput[]
    NOT?: tb_pessoasWhereInput | tb_pessoasWhereInput[]
    Codigo?: IntFilter<"tb_pessoas"> | number
    Tipo_Pessoa?: StringNullableFilter<"tb_pessoas"> | string | null
    CPF?: StringNullableFilter<"tb_pessoas"> | string | null
    CNPJ?: StringNullableFilter<"tb_pessoas"> | string | null
    RG?: StringNullableFilter<"tb_pessoas"> | string | null
    IE?: StringNullableFilter<"tb_pessoas"> | string | null
    CadPro?: StringNullableFilter<"tb_pessoas"> | string | null
    Tipo_Contribuinte?: IntNullableFilter<"tb_pessoas"> | number | null
    Pessoa?: StringNullableFilter<"tb_pessoas"> | string | null
    Fantasia?: StringNullableFilter<"tb_pessoas"> | string | null
    CEP?: StringNullableFilter<"tb_pessoas"> | string | null
    Endereco?: StringNullableFilter<"tb_pessoas"> | string | null
    Numero?: StringNullableFilter<"tb_pessoas"> | string | null
    Bairro?: StringNullableFilter<"tb_pessoas"> | string | null
    UF?: StringNullableFilter<"tb_pessoas"> | string | null
    cUF?: StringNullableFilter<"tb_pessoas"> | string | null
    xMun?: StringNullableFilter<"tb_pessoas"> | string | null
    cMun?: StringNullableFilter<"tb_pessoas"> | string | null
    xPais?: StringNullableFilter<"tb_pessoas"> | string | null
    cPais?: StringNullableFilter<"tb_pessoas"> | string | null
    Complemento?: StringNullableFilter<"tb_pessoas"> | string | null
    Data_Nascimento?: DateTimeNullableFilter<"tb_pessoas"> | Date | string | null
    Fone1?: StringNullableFilter<"tb_pessoas"> | string | null
    Fone2?: StringNullableFilter<"tb_pessoas"> | string | null
    Fone3?: StringNullableFilter<"tb_pessoas"> | string | null
    Fone4?: StringNullableFilter<"tb_pessoas"> | string | null
    Fone5?: StringNullableFilter<"tb_pessoas"> | string | null
    Id_Tabela_Preco?: IntNullableFilter<"tb_pessoas"> | number | null
    RegExcluido?: StringNullableFilter<"tb_pessoas"> | string | null
    Ativo?: StringNullableFilter<"tb_pessoas"> | string | null
    IDEmpresa?: IntNullableFilter<"tb_pessoas"> | number | null
    DHU?: StringNullableFilter<"tb_pessoas"> | string | null
    IDUser?: IntNullableFilter<"tb_pessoas"> | number | null
    Email?: StringNullableFilter<"tb_pessoas"> | string | null
    Id_Operacao_Movimento?: IntNullableFilter<"tb_pessoas"> | number | null
    Apelido?: StringNullableFilter<"tb_pessoas"> | string | null
    Limite?: FloatNullableFilter<"tb_pessoas"> | number | null
    Liberado_Contas_Em_Atraso?: StringNullableFilter<"tb_pessoas"> | string | null
    WhatsApp?: StringNullableFilter<"tb_pessoas"> | string | null
  }

  export type tb_pessoasOrderByWithRelationInput = {
    Codigo?: SortOrder
    Tipo_Pessoa?: SortOrderInput | SortOrder
    CPF?: SortOrderInput | SortOrder
    CNPJ?: SortOrderInput | SortOrder
    RG?: SortOrderInput | SortOrder
    IE?: SortOrderInput | SortOrder
    CadPro?: SortOrderInput | SortOrder
    Tipo_Contribuinte?: SortOrderInput | SortOrder
    Pessoa?: SortOrderInput | SortOrder
    Fantasia?: SortOrderInput | SortOrder
    CEP?: SortOrderInput | SortOrder
    Endereco?: SortOrderInput | SortOrder
    Numero?: SortOrderInput | SortOrder
    Bairro?: SortOrderInput | SortOrder
    UF?: SortOrderInput | SortOrder
    cUF?: SortOrderInput | SortOrder
    xMun?: SortOrderInput | SortOrder
    cMun?: SortOrderInput | SortOrder
    xPais?: SortOrderInput | SortOrder
    cPais?: SortOrderInput | SortOrder
    Complemento?: SortOrderInput | SortOrder
    Data_Nascimento?: SortOrderInput | SortOrder
    Fone1?: SortOrderInput | SortOrder
    Fone2?: SortOrderInput | SortOrder
    Fone3?: SortOrderInput | SortOrder
    Fone4?: SortOrderInput | SortOrder
    Fone5?: SortOrderInput | SortOrder
    Id_Tabela_Preco?: SortOrderInput | SortOrder
    RegExcluido?: SortOrderInput | SortOrder
    Ativo?: SortOrderInput | SortOrder
    IDEmpresa?: SortOrderInput | SortOrder
    DHU?: SortOrderInput | SortOrder
    IDUser?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Id_Operacao_Movimento?: SortOrderInput | SortOrder
    Apelido?: SortOrderInput | SortOrder
    Limite?: SortOrderInput | SortOrder
    Liberado_Contas_Em_Atraso?: SortOrderInput | SortOrder
    WhatsApp?: SortOrderInput | SortOrder
  }

  export type tb_pessoasWhereUniqueInput = Prisma.AtLeast<{
    Codigo?: number
    AND?: tb_pessoasWhereInput | tb_pessoasWhereInput[]
    OR?: tb_pessoasWhereInput[]
    NOT?: tb_pessoasWhereInput | tb_pessoasWhereInput[]
    Tipo_Pessoa?: StringNullableFilter<"tb_pessoas"> | string | null
    CPF?: StringNullableFilter<"tb_pessoas"> | string | null
    CNPJ?: StringNullableFilter<"tb_pessoas"> | string | null
    RG?: StringNullableFilter<"tb_pessoas"> | string | null
    IE?: StringNullableFilter<"tb_pessoas"> | string | null
    CadPro?: StringNullableFilter<"tb_pessoas"> | string | null
    Tipo_Contribuinte?: IntNullableFilter<"tb_pessoas"> | number | null
    Pessoa?: StringNullableFilter<"tb_pessoas"> | string | null
    Fantasia?: StringNullableFilter<"tb_pessoas"> | string | null
    CEP?: StringNullableFilter<"tb_pessoas"> | string | null
    Endereco?: StringNullableFilter<"tb_pessoas"> | string | null
    Numero?: StringNullableFilter<"tb_pessoas"> | string | null
    Bairro?: StringNullableFilter<"tb_pessoas"> | string | null
    UF?: StringNullableFilter<"tb_pessoas"> | string | null
    cUF?: StringNullableFilter<"tb_pessoas"> | string | null
    xMun?: StringNullableFilter<"tb_pessoas"> | string | null
    cMun?: StringNullableFilter<"tb_pessoas"> | string | null
    xPais?: StringNullableFilter<"tb_pessoas"> | string | null
    cPais?: StringNullableFilter<"tb_pessoas"> | string | null
    Complemento?: StringNullableFilter<"tb_pessoas"> | string | null
    Data_Nascimento?: DateTimeNullableFilter<"tb_pessoas"> | Date | string | null
    Fone1?: StringNullableFilter<"tb_pessoas"> | string | null
    Fone2?: StringNullableFilter<"tb_pessoas"> | string | null
    Fone3?: StringNullableFilter<"tb_pessoas"> | string | null
    Fone4?: StringNullableFilter<"tb_pessoas"> | string | null
    Fone5?: StringNullableFilter<"tb_pessoas"> | string | null
    Id_Tabela_Preco?: IntNullableFilter<"tb_pessoas"> | number | null
    RegExcluido?: StringNullableFilter<"tb_pessoas"> | string | null
    Ativo?: StringNullableFilter<"tb_pessoas"> | string | null
    IDEmpresa?: IntNullableFilter<"tb_pessoas"> | number | null
    DHU?: StringNullableFilter<"tb_pessoas"> | string | null
    IDUser?: IntNullableFilter<"tb_pessoas"> | number | null
    Email?: StringNullableFilter<"tb_pessoas"> | string | null
    Id_Operacao_Movimento?: IntNullableFilter<"tb_pessoas"> | number | null
    Apelido?: StringNullableFilter<"tb_pessoas"> | string | null
    Limite?: FloatNullableFilter<"tb_pessoas"> | number | null
    Liberado_Contas_Em_Atraso?: StringNullableFilter<"tb_pessoas"> | string | null
    WhatsApp?: StringNullableFilter<"tb_pessoas"> | string | null
  }, "Codigo">

  export type tb_pessoasOrderByWithAggregationInput = {
    Codigo?: SortOrder
    Tipo_Pessoa?: SortOrderInput | SortOrder
    CPF?: SortOrderInput | SortOrder
    CNPJ?: SortOrderInput | SortOrder
    RG?: SortOrderInput | SortOrder
    IE?: SortOrderInput | SortOrder
    CadPro?: SortOrderInput | SortOrder
    Tipo_Contribuinte?: SortOrderInput | SortOrder
    Pessoa?: SortOrderInput | SortOrder
    Fantasia?: SortOrderInput | SortOrder
    CEP?: SortOrderInput | SortOrder
    Endereco?: SortOrderInput | SortOrder
    Numero?: SortOrderInput | SortOrder
    Bairro?: SortOrderInput | SortOrder
    UF?: SortOrderInput | SortOrder
    cUF?: SortOrderInput | SortOrder
    xMun?: SortOrderInput | SortOrder
    cMun?: SortOrderInput | SortOrder
    xPais?: SortOrderInput | SortOrder
    cPais?: SortOrderInput | SortOrder
    Complemento?: SortOrderInput | SortOrder
    Data_Nascimento?: SortOrderInput | SortOrder
    Fone1?: SortOrderInput | SortOrder
    Fone2?: SortOrderInput | SortOrder
    Fone3?: SortOrderInput | SortOrder
    Fone4?: SortOrderInput | SortOrder
    Fone5?: SortOrderInput | SortOrder
    Id_Tabela_Preco?: SortOrderInput | SortOrder
    RegExcluido?: SortOrderInput | SortOrder
    Ativo?: SortOrderInput | SortOrder
    IDEmpresa?: SortOrderInput | SortOrder
    DHU?: SortOrderInput | SortOrder
    IDUser?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    Id_Operacao_Movimento?: SortOrderInput | SortOrder
    Apelido?: SortOrderInput | SortOrder
    Limite?: SortOrderInput | SortOrder
    Liberado_Contas_Em_Atraso?: SortOrderInput | SortOrder
    WhatsApp?: SortOrderInput | SortOrder
    _count?: tb_pessoasCountOrderByAggregateInput
    _avg?: tb_pessoasAvgOrderByAggregateInput
    _max?: tb_pessoasMaxOrderByAggregateInput
    _min?: tb_pessoasMinOrderByAggregateInput
    _sum?: tb_pessoasSumOrderByAggregateInput
  }

  export type tb_pessoasScalarWhereWithAggregatesInput = {
    AND?: tb_pessoasScalarWhereWithAggregatesInput | tb_pessoasScalarWhereWithAggregatesInput[]
    OR?: tb_pessoasScalarWhereWithAggregatesInput[]
    NOT?: tb_pessoasScalarWhereWithAggregatesInput | tb_pessoasScalarWhereWithAggregatesInput[]
    Codigo?: IntWithAggregatesFilter<"tb_pessoas"> | number
    Tipo_Pessoa?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    CPF?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    CNPJ?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    RG?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    IE?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    CadPro?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Tipo_Contribuinte?: IntNullableWithAggregatesFilter<"tb_pessoas"> | number | null
    Pessoa?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Fantasia?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    CEP?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Endereco?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Numero?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Bairro?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    UF?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    cUF?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    xMun?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    cMun?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    xPais?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    cPais?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Complemento?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Data_Nascimento?: DateTimeNullableWithAggregatesFilter<"tb_pessoas"> | Date | string | null
    Fone1?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Fone2?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Fone3?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Fone4?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Fone5?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Id_Tabela_Preco?: IntNullableWithAggregatesFilter<"tb_pessoas"> | number | null
    RegExcluido?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Ativo?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    IDEmpresa?: IntNullableWithAggregatesFilter<"tb_pessoas"> | number | null
    DHU?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    IDUser?: IntNullableWithAggregatesFilter<"tb_pessoas"> | number | null
    Email?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Id_Operacao_Movimento?: IntNullableWithAggregatesFilter<"tb_pessoas"> | number | null
    Apelido?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    Limite?: FloatNullableWithAggregatesFilter<"tb_pessoas"> | number | null
    Liberado_Contas_Em_Atraso?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
    WhatsApp?: StringNullableWithAggregatesFilter<"tb_pessoas"> | string | null
  }

  export type tb_produtosWhereInput = {
    AND?: tb_produtosWhereInput | tb_produtosWhereInput[]
    OR?: tb_produtosWhereInput[]
    NOT?: tb_produtosWhereInput | tb_produtosWhereInput[]
    Codigo?: IntFilter<"tb_produtos"> | number
    Produto?: StringNullableFilter<"tb_produtos"> | string | null
    Produto_Curto?: StringNullableFilter<"tb_produtos"> | string | null
    Produto_PDV?: StringNullableFilter<"tb_produtos"> | string | null
    Complemento?: StringNullableFilter<"tb_produtos"> | string | null
    Pesquisa_Rapida_PDV?: StringNullableFilter<"tb_produtos"> | string | null
    Id_Departamento?: IntNullableFilter<"tb_produtos"> | number | null
    Id_Setor?: IntNullableFilter<"tb_produtos"> | number | null
    Id_Marca?: IntNullableFilter<"tb_produtos"> | number | null
    Id_Grupo?: IntNullableFilter<"tb_produtos"> | number | null
    Id_SubGrupo?: IntNullableFilter<"tb_produtos"> | number | null
    Id_Unidade?: IntNullableFilter<"tb_produtos"> | number | null
    Id_Familia?: IntNullableFilter<"tb_produtos"> | number | null
    Codigo_Interno?: StringNullableFilter<"tb_produtos"> | string | null
    Peso?: FloatNullableFilter<"tb_produtos"> | number | null
    Capacidade?: FloatNullableFilter<"tb_produtos"> | number | null
    ID_Alocacao?: IntNullableFilter<"tb_produtos"> | number | null
    Comissao?: FloatNullableFilter<"tb_produtos"> | number | null
    Balanca?: StringNullableFilter<"tb_produtos"> | string | null
    Tipo_Balanca?: StringNullableFilter<"tb_produtos"> | string | null
    Descricao_Balanca?: StringNullableFilter<"tb_produtos"> | string | null
    NCM?: IntNullableFilter<"tb_produtos"> | number | null
    Genero?: StringNullableFilter<"tb_produtos"> | string | null
    cEAN_Trib?: StringNullableFilter<"tb_produtos"> | string | null
    CEST?: StringNullableFilter<"tb_produtos"> | string | null
    Estoque?: FloatNullableFilter<"tb_produtos"> | number | null
    Estoque_Reservado?: FloatNullableFilter<"tb_produtos"> | number | null
    Estoque_Disponivel?: FloatNullableFilter<"tb_produtos"> | number | null
    Tipo?: FloatNullableFilter<"tb_produtos"> | number | null
    Deposito?: StringNullableFilter<"tb_produtos"> | string | null
    Fraciona?: StringNullableFilter<"tb_produtos"> | string | null
    Controle_Lote?: StringNullableFilter<"tb_produtos"> | string | null
    Requer_Observacao?: StringNullableFilter<"tb_produtos"> | string | null
    Nao_Controla_Estoque?: StringNullableFilter<"tb_produtos"> | string | null
    Nunca_Agrupa_Venda?: StringNullableFilter<"tb_produtos"> | string | null
    Preco_Atribuido?: FloatNullableFilter<"tb_produtos"> | number | null
    Preco_Venda?: FloatNullableFilter<"tb_produtos"> | number | null
    Preco_Compra?: FloatNullableFilter<"tb_produtos"> | number | null
    Preco_Medio?: FloatNullableFilter<"tb_produtos"> | number | null
    Data_Preco_Venda?: DateTimeNullableFilter<"tb_produtos"> | Date | string | null
    Data_Custo?: DateTimeNullableFilter<"tb_produtos"> | Date | string | null
    Margem?: FloatNullableFilter<"tb_produtos"> | number | null
    Markup?: FloatNullableFilter<"tb_produtos"> | number | null
    Classificacao?: StringNullableFilter<"tb_produtos"> | string | null
    Id_Produto_Vinculado?: IntNullableFilter<"tb_produtos"> | number | null
    Ultima_Venda?: DateTimeNullableFilter<"tb_produtos"> | Date | string | null
    Ultima_Compra?: DateTimeNullableFilter<"tb_produtos"> | Date | string | null
    Data_Alterado?: DateTimeNullableFilter<"tb_produtos"> | Date | string | null
    Ativo?: StringNullableFilter<"tb_produtos"> | string | null
    RegExcluido?: StringNullableFilter<"tb_produtos"> | string | null
    IDEmpresa?: IntNullableFilter<"tb_produtos"> | number | null
    DHU?: StringNullableFilter<"tb_produtos"> | string | null
    Id_Importacao_Sistema?: IntNullableFilter<"tb_produtos"> | number | null
    Id_SubFamilia?: IntNullableFilter<"tb_produtos"> | number | null
    Estoque_Maximo?: FloatNullableFilter<"tb_produtos"> | number | null
    Estoque_Minimo?: FloatNullableFilter<"tb_produtos"> | number | null
    IDUser?: IntNullableFilter<"tb_produtos"> | number | null
    Cad_ViaXML?: StringNullableFilter<"tb_produtos"> | string | null
    Funcao?: StringNullableFilter<"tb_produtos"> | string | null
    Alterado?: StringNullableFilter<"tb_produtos"> | string | null
    N_Licenca_ANVISA?: StringNullableFilter<"tb_produtos"> | string | null
    Id_DCB?: IntNullableFilter<"tb_produtos"> | number | null
    Fidelidade_Credito?: FloatNullableFilter<"tb_produtos"> | number | null
    Fidelidade_Resgate?: FloatNullableFilter<"tb_produtos"> | number | null
    Dias_Validade?: IntNullableFilter<"tb_produtos"> | number | null
  }

  export type tb_produtosOrderByWithRelationInput = {
    Codigo?: SortOrder
    Produto?: SortOrderInput | SortOrder
    Produto_Curto?: SortOrderInput | SortOrder
    Produto_PDV?: SortOrderInput | SortOrder
    Complemento?: SortOrderInput | SortOrder
    Pesquisa_Rapida_PDV?: SortOrderInput | SortOrder
    Id_Departamento?: SortOrderInput | SortOrder
    Id_Setor?: SortOrderInput | SortOrder
    Id_Marca?: SortOrderInput | SortOrder
    Id_Grupo?: SortOrderInput | SortOrder
    Id_SubGrupo?: SortOrderInput | SortOrder
    Id_Unidade?: SortOrderInput | SortOrder
    Id_Familia?: SortOrderInput | SortOrder
    Codigo_Interno?: SortOrderInput | SortOrder
    Peso?: SortOrderInput | SortOrder
    Capacidade?: SortOrderInput | SortOrder
    ID_Alocacao?: SortOrderInput | SortOrder
    Comissao?: SortOrderInput | SortOrder
    Balanca?: SortOrderInput | SortOrder
    Tipo_Balanca?: SortOrderInput | SortOrder
    Descricao_Balanca?: SortOrderInput | SortOrder
    NCM?: SortOrderInput | SortOrder
    Genero?: SortOrderInput | SortOrder
    cEAN_Trib?: SortOrderInput | SortOrder
    CEST?: SortOrderInput | SortOrder
    Estoque?: SortOrderInput | SortOrder
    Estoque_Reservado?: SortOrderInput | SortOrder
    Estoque_Disponivel?: SortOrderInput | SortOrder
    Tipo?: SortOrderInput | SortOrder
    Deposito?: SortOrderInput | SortOrder
    Fraciona?: SortOrderInput | SortOrder
    Controle_Lote?: SortOrderInput | SortOrder
    Requer_Observacao?: SortOrderInput | SortOrder
    Nao_Controla_Estoque?: SortOrderInput | SortOrder
    Nunca_Agrupa_Venda?: SortOrderInput | SortOrder
    Preco_Atribuido?: SortOrderInput | SortOrder
    Preco_Venda?: SortOrderInput | SortOrder
    Preco_Compra?: SortOrderInput | SortOrder
    Preco_Medio?: SortOrderInput | SortOrder
    Data_Preco_Venda?: SortOrderInput | SortOrder
    Data_Custo?: SortOrderInput | SortOrder
    Margem?: SortOrderInput | SortOrder
    Markup?: SortOrderInput | SortOrder
    Classificacao?: SortOrderInput | SortOrder
    Id_Produto_Vinculado?: SortOrderInput | SortOrder
    Ultima_Venda?: SortOrderInput | SortOrder
    Ultima_Compra?: SortOrderInput | SortOrder
    Data_Alterado?: SortOrderInput | SortOrder
    Ativo?: SortOrderInput | SortOrder
    RegExcluido?: SortOrderInput | SortOrder
    IDEmpresa?: SortOrderInput | SortOrder
    DHU?: SortOrderInput | SortOrder
    Id_Importacao_Sistema?: SortOrderInput | SortOrder
    Id_SubFamilia?: SortOrderInput | SortOrder
    Estoque_Maximo?: SortOrderInput | SortOrder
    Estoque_Minimo?: SortOrderInput | SortOrder
    IDUser?: SortOrderInput | SortOrder
    Cad_ViaXML?: SortOrderInput | SortOrder
    Funcao?: SortOrderInput | SortOrder
    Alterado?: SortOrderInput | SortOrder
    N_Licenca_ANVISA?: SortOrderInput | SortOrder
    Id_DCB?: SortOrderInput | SortOrder
    Fidelidade_Credito?: SortOrderInput | SortOrder
    Fidelidade_Resgate?: SortOrderInput | SortOrder
    Dias_Validade?: SortOrderInput | SortOrder
  }

  export type tb_produtosWhereUniqueInput = Prisma.AtLeast<{
    Codigo?: number
    AND?: tb_produtosWhereInput | tb_produtosWhereInput[]
    OR?: tb_produtosWhereInput[]
    NOT?: tb_produtosWhereInput | tb_produtosWhereInput[]
    Produto?: StringNullableFilter<"tb_produtos"> | string | null
    Produto_Curto?: StringNullableFilter<"tb_produtos"> | string | null
    Produto_PDV?: StringNullableFilter<"tb_produtos"> | string | null
    Complemento?: StringNullableFilter<"tb_produtos"> | string | null
    Pesquisa_Rapida_PDV?: StringNullableFilter<"tb_produtos"> | string | null
    Id_Departamento?: IntNullableFilter<"tb_produtos"> | number | null
    Id_Setor?: IntNullableFilter<"tb_produtos"> | number | null
    Id_Marca?: IntNullableFilter<"tb_produtos"> | number | null
    Id_Grupo?: IntNullableFilter<"tb_produtos"> | number | null
    Id_SubGrupo?: IntNullableFilter<"tb_produtos"> | number | null
    Id_Unidade?: IntNullableFilter<"tb_produtos"> | number | null
    Id_Familia?: IntNullableFilter<"tb_produtos"> | number | null
    Codigo_Interno?: StringNullableFilter<"tb_produtos"> | string | null
    Peso?: FloatNullableFilter<"tb_produtos"> | number | null
    Capacidade?: FloatNullableFilter<"tb_produtos"> | number | null
    ID_Alocacao?: IntNullableFilter<"tb_produtos"> | number | null
    Comissao?: FloatNullableFilter<"tb_produtos"> | number | null
    Balanca?: StringNullableFilter<"tb_produtos"> | string | null
    Tipo_Balanca?: StringNullableFilter<"tb_produtos"> | string | null
    Descricao_Balanca?: StringNullableFilter<"tb_produtos"> | string | null
    NCM?: IntNullableFilter<"tb_produtos"> | number | null
    Genero?: StringNullableFilter<"tb_produtos"> | string | null
    cEAN_Trib?: StringNullableFilter<"tb_produtos"> | string | null
    CEST?: StringNullableFilter<"tb_produtos"> | string | null
    Estoque?: FloatNullableFilter<"tb_produtos"> | number | null
    Estoque_Reservado?: FloatNullableFilter<"tb_produtos"> | number | null
    Estoque_Disponivel?: FloatNullableFilter<"tb_produtos"> | number | null
    Tipo?: FloatNullableFilter<"tb_produtos"> | number | null
    Deposito?: StringNullableFilter<"tb_produtos"> | string | null
    Fraciona?: StringNullableFilter<"tb_produtos"> | string | null
    Controle_Lote?: StringNullableFilter<"tb_produtos"> | string | null
    Requer_Observacao?: StringNullableFilter<"tb_produtos"> | string | null
    Nao_Controla_Estoque?: StringNullableFilter<"tb_produtos"> | string | null
    Nunca_Agrupa_Venda?: StringNullableFilter<"tb_produtos"> | string | null
    Preco_Atribuido?: FloatNullableFilter<"tb_produtos"> | number | null
    Preco_Venda?: FloatNullableFilter<"tb_produtos"> | number | null
    Preco_Compra?: FloatNullableFilter<"tb_produtos"> | number | null
    Preco_Medio?: FloatNullableFilter<"tb_produtos"> | number | null
    Data_Preco_Venda?: DateTimeNullableFilter<"tb_produtos"> | Date | string | null
    Data_Custo?: DateTimeNullableFilter<"tb_produtos"> | Date | string | null
    Margem?: FloatNullableFilter<"tb_produtos"> | number | null
    Markup?: FloatNullableFilter<"tb_produtos"> | number | null
    Classificacao?: StringNullableFilter<"tb_produtos"> | string | null
    Id_Produto_Vinculado?: IntNullableFilter<"tb_produtos"> | number | null
    Ultima_Venda?: DateTimeNullableFilter<"tb_produtos"> | Date | string | null
    Ultima_Compra?: DateTimeNullableFilter<"tb_produtos"> | Date | string | null
    Data_Alterado?: DateTimeNullableFilter<"tb_produtos"> | Date | string | null
    Ativo?: StringNullableFilter<"tb_produtos"> | string | null
    RegExcluido?: StringNullableFilter<"tb_produtos"> | string | null
    IDEmpresa?: IntNullableFilter<"tb_produtos"> | number | null
    DHU?: StringNullableFilter<"tb_produtos"> | string | null
    Id_Importacao_Sistema?: IntNullableFilter<"tb_produtos"> | number | null
    Id_SubFamilia?: IntNullableFilter<"tb_produtos"> | number | null
    Estoque_Maximo?: FloatNullableFilter<"tb_produtos"> | number | null
    Estoque_Minimo?: FloatNullableFilter<"tb_produtos"> | number | null
    IDUser?: IntNullableFilter<"tb_produtos"> | number | null
    Cad_ViaXML?: StringNullableFilter<"tb_produtos"> | string | null
    Funcao?: StringNullableFilter<"tb_produtos"> | string | null
    Alterado?: StringNullableFilter<"tb_produtos"> | string | null
    N_Licenca_ANVISA?: StringNullableFilter<"tb_produtos"> | string | null
    Id_DCB?: IntNullableFilter<"tb_produtos"> | number | null
    Fidelidade_Credito?: FloatNullableFilter<"tb_produtos"> | number | null
    Fidelidade_Resgate?: FloatNullableFilter<"tb_produtos"> | number | null
    Dias_Validade?: IntNullableFilter<"tb_produtos"> | number | null
  }, "Codigo">

  export type tb_produtosOrderByWithAggregationInput = {
    Codigo?: SortOrder
    Produto?: SortOrderInput | SortOrder
    Produto_Curto?: SortOrderInput | SortOrder
    Produto_PDV?: SortOrderInput | SortOrder
    Complemento?: SortOrderInput | SortOrder
    Pesquisa_Rapida_PDV?: SortOrderInput | SortOrder
    Id_Departamento?: SortOrderInput | SortOrder
    Id_Setor?: SortOrderInput | SortOrder
    Id_Marca?: SortOrderInput | SortOrder
    Id_Grupo?: SortOrderInput | SortOrder
    Id_SubGrupo?: SortOrderInput | SortOrder
    Id_Unidade?: SortOrderInput | SortOrder
    Id_Familia?: SortOrderInput | SortOrder
    Codigo_Interno?: SortOrderInput | SortOrder
    Peso?: SortOrderInput | SortOrder
    Capacidade?: SortOrderInput | SortOrder
    ID_Alocacao?: SortOrderInput | SortOrder
    Comissao?: SortOrderInput | SortOrder
    Balanca?: SortOrderInput | SortOrder
    Tipo_Balanca?: SortOrderInput | SortOrder
    Descricao_Balanca?: SortOrderInput | SortOrder
    NCM?: SortOrderInput | SortOrder
    Genero?: SortOrderInput | SortOrder
    cEAN_Trib?: SortOrderInput | SortOrder
    CEST?: SortOrderInput | SortOrder
    Estoque?: SortOrderInput | SortOrder
    Estoque_Reservado?: SortOrderInput | SortOrder
    Estoque_Disponivel?: SortOrderInput | SortOrder
    Tipo?: SortOrderInput | SortOrder
    Deposito?: SortOrderInput | SortOrder
    Fraciona?: SortOrderInput | SortOrder
    Controle_Lote?: SortOrderInput | SortOrder
    Requer_Observacao?: SortOrderInput | SortOrder
    Nao_Controla_Estoque?: SortOrderInput | SortOrder
    Nunca_Agrupa_Venda?: SortOrderInput | SortOrder
    Preco_Atribuido?: SortOrderInput | SortOrder
    Preco_Venda?: SortOrderInput | SortOrder
    Preco_Compra?: SortOrderInput | SortOrder
    Preco_Medio?: SortOrderInput | SortOrder
    Data_Preco_Venda?: SortOrderInput | SortOrder
    Data_Custo?: SortOrderInput | SortOrder
    Margem?: SortOrderInput | SortOrder
    Markup?: SortOrderInput | SortOrder
    Classificacao?: SortOrderInput | SortOrder
    Id_Produto_Vinculado?: SortOrderInput | SortOrder
    Ultima_Venda?: SortOrderInput | SortOrder
    Ultima_Compra?: SortOrderInput | SortOrder
    Data_Alterado?: SortOrderInput | SortOrder
    Ativo?: SortOrderInput | SortOrder
    RegExcluido?: SortOrderInput | SortOrder
    IDEmpresa?: SortOrderInput | SortOrder
    DHU?: SortOrderInput | SortOrder
    Id_Importacao_Sistema?: SortOrderInput | SortOrder
    Id_SubFamilia?: SortOrderInput | SortOrder
    Estoque_Maximo?: SortOrderInput | SortOrder
    Estoque_Minimo?: SortOrderInput | SortOrder
    IDUser?: SortOrderInput | SortOrder
    Cad_ViaXML?: SortOrderInput | SortOrder
    Funcao?: SortOrderInput | SortOrder
    Alterado?: SortOrderInput | SortOrder
    N_Licenca_ANVISA?: SortOrderInput | SortOrder
    Id_DCB?: SortOrderInput | SortOrder
    Fidelidade_Credito?: SortOrderInput | SortOrder
    Fidelidade_Resgate?: SortOrderInput | SortOrder
    Dias_Validade?: SortOrderInput | SortOrder
    _count?: tb_produtosCountOrderByAggregateInput
    _avg?: tb_produtosAvgOrderByAggregateInput
    _max?: tb_produtosMaxOrderByAggregateInput
    _min?: tb_produtosMinOrderByAggregateInput
    _sum?: tb_produtosSumOrderByAggregateInput
  }

  export type tb_produtosScalarWhereWithAggregatesInput = {
    AND?: tb_produtosScalarWhereWithAggregatesInput | tb_produtosScalarWhereWithAggregatesInput[]
    OR?: tb_produtosScalarWhereWithAggregatesInput[]
    NOT?: tb_produtosScalarWhereWithAggregatesInput | tb_produtosScalarWhereWithAggregatesInput[]
    Codigo?: IntWithAggregatesFilter<"tb_produtos"> | number
    Produto?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Produto_Curto?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Produto_PDV?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Complemento?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Pesquisa_Rapida_PDV?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Id_Departamento?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Id_Setor?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Id_Marca?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Id_Grupo?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Id_SubGrupo?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Id_Unidade?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Id_Familia?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Codigo_Interno?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Peso?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Capacidade?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    ID_Alocacao?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Comissao?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Balanca?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Tipo_Balanca?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Descricao_Balanca?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    NCM?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Genero?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    cEAN_Trib?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    CEST?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Estoque?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Estoque_Reservado?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Estoque_Disponivel?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Tipo?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Deposito?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Fraciona?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Controle_Lote?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Requer_Observacao?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Nao_Controla_Estoque?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Nunca_Agrupa_Venda?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Preco_Atribuido?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Preco_Venda?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Preco_Compra?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Preco_Medio?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Data_Preco_Venda?: DateTimeNullableWithAggregatesFilter<"tb_produtos"> | Date | string | null
    Data_Custo?: DateTimeNullableWithAggregatesFilter<"tb_produtos"> | Date | string | null
    Margem?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Markup?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Classificacao?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Id_Produto_Vinculado?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Ultima_Venda?: DateTimeNullableWithAggregatesFilter<"tb_produtos"> | Date | string | null
    Ultima_Compra?: DateTimeNullableWithAggregatesFilter<"tb_produtos"> | Date | string | null
    Data_Alterado?: DateTimeNullableWithAggregatesFilter<"tb_produtos"> | Date | string | null
    Ativo?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    RegExcluido?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    IDEmpresa?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    DHU?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Id_Importacao_Sistema?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Id_SubFamilia?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Estoque_Maximo?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Estoque_Minimo?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    IDUser?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Cad_ViaXML?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Funcao?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Alterado?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    N_Licenca_ANVISA?: StringNullableWithAggregatesFilter<"tb_produtos"> | string | null
    Id_DCB?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Fidelidade_Credito?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Fidelidade_Resgate?: FloatNullableWithAggregatesFilter<"tb_produtos"> | number | null
    Dias_Validade?: IntNullableWithAggregatesFilter<"tb_produtos"> | number | null
  }

  export type tb_produtos_setorWhereInput = {
    AND?: tb_produtos_setorWhereInput | tb_produtos_setorWhereInput[]
    OR?: tb_produtos_setorWhereInput[]
    NOT?: tb_produtos_setorWhereInput | tb_produtos_setorWhereInput[]
    Codigo?: IntFilter<"tb_produtos_setor"> | number
    Setor?: StringNullableFilter<"tb_produtos_setor"> | string | null
    Ativo?: StringNullableFilter<"tb_produtos_setor"> | string | null
    RegExcluido?: StringNullableFilter<"tb_produtos_setor"> | string | null
    IDEmpresa?: IntNullableFilter<"tb_produtos_setor"> | number | null
    DHU?: StringNullableFilter<"tb_produtos_setor"> | string | null
    IDUser?: IntNullableFilter<"tb_produtos_setor"> | number | null
  }

  export type tb_produtos_setorOrderByWithRelationInput = {
    Codigo?: SortOrder
    Setor?: SortOrderInput | SortOrder
    Ativo?: SortOrderInput | SortOrder
    RegExcluido?: SortOrderInput | SortOrder
    IDEmpresa?: SortOrderInput | SortOrder
    DHU?: SortOrderInput | SortOrder
    IDUser?: SortOrderInput | SortOrder
  }

  export type tb_produtos_setorWhereUniqueInput = Prisma.AtLeast<{
    Codigo?: number
    AND?: tb_produtos_setorWhereInput | tb_produtos_setorWhereInput[]
    OR?: tb_produtos_setorWhereInput[]
    NOT?: tb_produtos_setorWhereInput | tb_produtos_setorWhereInput[]
    Setor?: StringNullableFilter<"tb_produtos_setor"> | string | null
    Ativo?: StringNullableFilter<"tb_produtos_setor"> | string | null
    RegExcluido?: StringNullableFilter<"tb_produtos_setor"> | string | null
    IDEmpresa?: IntNullableFilter<"tb_produtos_setor"> | number | null
    DHU?: StringNullableFilter<"tb_produtos_setor"> | string | null
    IDUser?: IntNullableFilter<"tb_produtos_setor"> | number | null
  }, "Codigo">

  export type tb_produtos_setorOrderByWithAggregationInput = {
    Codigo?: SortOrder
    Setor?: SortOrderInput | SortOrder
    Ativo?: SortOrderInput | SortOrder
    RegExcluido?: SortOrderInput | SortOrder
    IDEmpresa?: SortOrderInput | SortOrder
    DHU?: SortOrderInput | SortOrder
    IDUser?: SortOrderInput | SortOrder
    _count?: tb_produtos_setorCountOrderByAggregateInput
    _avg?: tb_produtos_setorAvgOrderByAggregateInput
    _max?: tb_produtos_setorMaxOrderByAggregateInput
    _min?: tb_produtos_setorMinOrderByAggregateInput
    _sum?: tb_produtos_setorSumOrderByAggregateInput
  }

  export type tb_produtos_setorScalarWhereWithAggregatesInput = {
    AND?: tb_produtos_setorScalarWhereWithAggregatesInput | tb_produtos_setorScalarWhereWithAggregatesInput[]
    OR?: tb_produtos_setorScalarWhereWithAggregatesInput[]
    NOT?: tb_produtos_setorScalarWhereWithAggregatesInput | tb_produtos_setorScalarWhereWithAggregatesInput[]
    Codigo?: IntWithAggregatesFilter<"tb_produtos_setor"> | number
    Setor?: StringNullableWithAggregatesFilter<"tb_produtos_setor"> | string | null
    Ativo?: StringNullableWithAggregatesFilter<"tb_produtos_setor"> | string | null
    RegExcluido?: StringNullableWithAggregatesFilter<"tb_produtos_setor"> | string | null
    IDEmpresa?: IntNullableWithAggregatesFilter<"tb_produtos_setor"> | number | null
    DHU?: StringNullableWithAggregatesFilter<"tb_produtos_setor"> | string | null
    IDUser?: IntNullableWithAggregatesFilter<"tb_produtos_setor"> | number | null
  }

  export type tb_comandaWhereInput = {
    AND?: tb_comandaWhereInput | tb_comandaWhereInput[]
    OR?: tb_comandaWhereInput[]
    NOT?: tb_comandaWhereInput | tb_comandaWhereInput[]
    Codigo?: IntFilter<"tb_comanda"> | number
    Ativo?: StringNullableFilter<"tb_comanda"> | string | null
  }

  export type tb_comandaOrderByWithRelationInput = {
    Codigo?: SortOrder
    Ativo?: SortOrderInput | SortOrder
  }

  export type tb_comandaWhereUniqueInput = Prisma.AtLeast<{
    Codigo?: number
    AND?: tb_comandaWhereInput | tb_comandaWhereInput[]
    OR?: tb_comandaWhereInput[]
    NOT?: tb_comandaWhereInput | tb_comandaWhereInput[]
    Ativo?: StringNullableFilter<"tb_comanda"> | string | null
  }, "Codigo">

  export type tb_comandaOrderByWithAggregationInput = {
    Codigo?: SortOrder
    Ativo?: SortOrderInput | SortOrder
    _count?: tb_comandaCountOrderByAggregateInput
    _avg?: tb_comandaAvgOrderByAggregateInput
    _max?: tb_comandaMaxOrderByAggregateInput
    _min?: tb_comandaMinOrderByAggregateInput
    _sum?: tb_comandaSumOrderByAggregateInput
  }

  export type tb_comandaScalarWhereWithAggregatesInput = {
    AND?: tb_comandaScalarWhereWithAggregatesInput | tb_comandaScalarWhereWithAggregatesInput[]
    OR?: tb_comandaScalarWhereWithAggregatesInput[]
    NOT?: tb_comandaScalarWhereWithAggregatesInput | tb_comandaScalarWhereWithAggregatesInput[]
    Codigo?: IntWithAggregatesFilter<"tb_comanda"> | number
    Ativo?: StringNullableWithAggregatesFilter<"tb_comanda"> | string | null
  }

  export type tb_mesaWhereInput = {
    AND?: tb_mesaWhereInput | tb_mesaWhereInput[]
    OR?: tb_mesaWhereInput[]
    NOT?: tb_mesaWhereInput | tb_mesaWhereInput[]
    Codigo?: IntFilter<"tb_mesa"> | number
    Ativo?: StringNullableFilter<"tb_mesa"> | string | null
  }

  export type tb_mesaOrderByWithRelationInput = {
    Codigo?: SortOrder
    Ativo?: SortOrderInput | SortOrder
  }

  export type tb_mesaWhereUniqueInput = Prisma.AtLeast<{
    Codigo?: number
    AND?: tb_mesaWhereInput | tb_mesaWhereInput[]
    OR?: tb_mesaWhereInput[]
    NOT?: tb_mesaWhereInput | tb_mesaWhereInput[]
    Ativo?: StringNullableFilter<"tb_mesa"> | string | null
  }, "Codigo">

  export type tb_mesaOrderByWithAggregationInput = {
    Codigo?: SortOrder
    Ativo?: SortOrderInput | SortOrder
    _count?: tb_mesaCountOrderByAggregateInput
    _avg?: tb_mesaAvgOrderByAggregateInput
    _max?: tb_mesaMaxOrderByAggregateInput
    _min?: tb_mesaMinOrderByAggregateInput
    _sum?: tb_mesaSumOrderByAggregateInput
  }

  export type tb_mesaScalarWhereWithAggregatesInput = {
    AND?: tb_mesaScalarWhereWithAggregatesInput | tb_mesaScalarWhereWithAggregatesInput[]
    OR?: tb_mesaScalarWhereWithAggregatesInput[]
    NOT?: tb_mesaScalarWhereWithAggregatesInput | tb_mesaScalarWhereWithAggregatesInput[]
    Codigo?: IntWithAggregatesFilter<"tb_mesa"> | number
    Ativo?: StringNullableWithAggregatesFilter<"tb_mesa"> | string | null
  }

  export type tb_mesa_comandaWhereInput = {
    AND?: tb_mesa_comandaWhereInput | tb_mesa_comandaWhereInput[]
    OR?: tb_mesa_comandaWhereInput[]
    NOT?: tb_mesa_comandaWhereInput | tb_mesa_comandaWhereInput[]
    Codigo?: IntFilter<"tb_mesa_comanda"> | number
    Id_Mesa?: IntNullableFilter<"tb_mesa_comanda"> | number | null
    Id_Comanda?: IntNullableFilter<"tb_mesa_comanda"> | number | null
  }

  export type tb_mesa_comandaOrderByWithRelationInput = {
    Codigo?: SortOrder
    Id_Mesa?: SortOrderInput | SortOrder
    Id_Comanda?: SortOrderInput | SortOrder
  }

  export type tb_mesa_comandaWhereUniqueInput = Prisma.AtLeast<{
    Codigo?: number
    AND?: tb_mesa_comandaWhereInput | tb_mesa_comandaWhereInput[]
    OR?: tb_mesa_comandaWhereInput[]
    NOT?: tb_mesa_comandaWhereInput | tb_mesa_comandaWhereInput[]
    Id_Mesa?: IntNullableFilter<"tb_mesa_comanda"> | number | null
    Id_Comanda?: IntNullableFilter<"tb_mesa_comanda"> | number | null
  }, "Codigo">

  export type tb_mesa_comandaOrderByWithAggregationInput = {
    Codigo?: SortOrder
    Id_Mesa?: SortOrderInput | SortOrder
    Id_Comanda?: SortOrderInput | SortOrder
    _count?: tb_mesa_comandaCountOrderByAggregateInput
    _avg?: tb_mesa_comandaAvgOrderByAggregateInput
    _max?: tb_mesa_comandaMaxOrderByAggregateInput
    _min?: tb_mesa_comandaMinOrderByAggregateInput
    _sum?: tb_mesa_comandaSumOrderByAggregateInput
  }

  export type tb_mesa_comandaScalarWhereWithAggregatesInput = {
    AND?: tb_mesa_comandaScalarWhereWithAggregatesInput | tb_mesa_comandaScalarWhereWithAggregatesInput[]
    OR?: tb_mesa_comandaScalarWhereWithAggregatesInput[]
    NOT?: tb_mesa_comandaScalarWhereWithAggregatesInput | tb_mesa_comandaScalarWhereWithAggregatesInput[]
    Codigo?: IntWithAggregatesFilter<"tb_mesa_comanda"> | number
    Id_Mesa?: IntNullableWithAggregatesFilter<"tb_mesa_comanda"> | number | null
    Id_Comanda?: IntNullableWithAggregatesFilter<"tb_mesa_comanda"> | number | null
  }

  export type tb_pedidoWhereInput = {
    AND?: tb_pedidoWhereInput | tb_pedidoWhereInput[]
    OR?: tb_pedidoWhereInput[]
    NOT?: tb_pedidoWhereInput | tb_pedidoWhereInput[]
    Codigo?: IntFilter<"tb_pedido"> | number
    ID_Activity?: IntNullableFilter<"tb_pedido"> | number | null
    Id_Mesa?: IntNullableFilter<"tb_pedido"> | number | null
    Id_Comanda?: IntNullableFilter<"tb_pedido"> | number | null
    Importado_ERP?: StringNullableFilter<"tb_pedido"> | string | null
  }

  export type tb_pedidoOrderByWithRelationInput = {
    Codigo?: SortOrder
    ID_Activity?: SortOrderInput | SortOrder
    Id_Mesa?: SortOrderInput | SortOrder
    Id_Comanda?: SortOrderInput | SortOrder
    Importado_ERP?: SortOrderInput | SortOrder
  }

  export type tb_pedidoWhereUniqueInput = Prisma.AtLeast<{
    Codigo?: number
    AND?: tb_pedidoWhereInput | tb_pedidoWhereInput[]
    OR?: tb_pedidoWhereInput[]
    NOT?: tb_pedidoWhereInput | tb_pedidoWhereInput[]
    ID_Activity?: IntNullableFilter<"tb_pedido"> | number | null
    Id_Mesa?: IntNullableFilter<"tb_pedido"> | number | null
    Id_Comanda?: IntNullableFilter<"tb_pedido"> | number | null
    Importado_ERP?: StringNullableFilter<"tb_pedido"> | string | null
  }, "Codigo">

  export type tb_pedidoOrderByWithAggregationInput = {
    Codigo?: SortOrder
    ID_Activity?: SortOrderInput | SortOrder
    Id_Mesa?: SortOrderInput | SortOrder
    Id_Comanda?: SortOrderInput | SortOrder
    Importado_ERP?: SortOrderInput | SortOrder
    _count?: tb_pedidoCountOrderByAggregateInput
    _avg?: tb_pedidoAvgOrderByAggregateInput
    _max?: tb_pedidoMaxOrderByAggregateInput
    _min?: tb_pedidoMinOrderByAggregateInput
    _sum?: tb_pedidoSumOrderByAggregateInput
  }

  export type tb_pedidoScalarWhereWithAggregatesInput = {
    AND?: tb_pedidoScalarWhereWithAggregatesInput | tb_pedidoScalarWhereWithAggregatesInput[]
    OR?: tb_pedidoScalarWhereWithAggregatesInput[]
    NOT?: tb_pedidoScalarWhereWithAggregatesInput | tb_pedidoScalarWhereWithAggregatesInput[]
    Codigo?: IntWithAggregatesFilter<"tb_pedido"> | number
    ID_Activity?: IntNullableWithAggregatesFilter<"tb_pedido"> | number | null
    Id_Mesa?: IntNullableWithAggregatesFilter<"tb_pedido"> | number | null
    Id_Comanda?: IntNullableWithAggregatesFilter<"tb_pedido"> | number | null
    Importado_ERP?: StringNullableWithAggregatesFilter<"tb_pedido"> | string | null
  }

  export type tb_pedido_itemWhereInput = {
    AND?: tb_pedido_itemWhereInput | tb_pedido_itemWhereInput[]
    OR?: tb_pedido_itemWhereInput[]
    NOT?: tb_pedido_itemWhereInput | tb_pedido_itemWhereInput[]
    Codigo?: IntFilter<"tb_pedido_item"> | number
    Id_Pedido?: IntNullableFilter<"tb_pedido_item"> | number | null
    Id_Produto?: IntNullableFilter<"tb_pedido_item"> | number | null
    Quantidade?: FloatNullableFilter<"tb_pedido_item"> | number | null
    Unitario?: FloatNullableFilter<"tb_pedido_item"> | number | null
    Total?: FloatNullableFilter<"tb_pedido_item"> | number | null
    Importado_ERP?: StringNullableFilter<"tb_pedido_item"> | string | null
  }

  export type tb_pedido_itemOrderByWithRelationInput = {
    Codigo?: SortOrder
    Id_Pedido?: SortOrderInput | SortOrder
    Id_Produto?: SortOrderInput | SortOrder
    Quantidade?: SortOrderInput | SortOrder
    Unitario?: SortOrderInput | SortOrder
    Total?: SortOrderInput | SortOrder
    Importado_ERP?: SortOrderInput | SortOrder
  }

  export type tb_pedido_itemWhereUniqueInput = Prisma.AtLeast<{
    Codigo?: number
    AND?: tb_pedido_itemWhereInput | tb_pedido_itemWhereInput[]
    OR?: tb_pedido_itemWhereInput[]
    NOT?: tb_pedido_itemWhereInput | tb_pedido_itemWhereInput[]
    Id_Pedido?: IntNullableFilter<"tb_pedido_item"> | number | null
    Id_Produto?: IntNullableFilter<"tb_pedido_item"> | number | null
    Quantidade?: FloatNullableFilter<"tb_pedido_item"> | number | null
    Unitario?: FloatNullableFilter<"tb_pedido_item"> | number | null
    Total?: FloatNullableFilter<"tb_pedido_item"> | number | null
    Importado_ERP?: StringNullableFilter<"tb_pedido_item"> | string | null
  }, "Codigo">

  export type tb_pedido_itemOrderByWithAggregationInput = {
    Codigo?: SortOrder
    Id_Pedido?: SortOrderInput | SortOrder
    Id_Produto?: SortOrderInput | SortOrder
    Quantidade?: SortOrderInput | SortOrder
    Unitario?: SortOrderInput | SortOrder
    Total?: SortOrderInput | SortOrder
    Importado_ERP?: SortOrderInput | SortOrder
    _count?: tb_pedido_itemCountOrderByAggregateInput
    _avg?: tb_pedido_itemAvgOrderByAggregateInput
    _max?: tb_pedido_itemMaxOrderByAggregateInput
    _min?: tb_pedido_itemMinOrderByAggregateInput
    _sum?: tb_pedido_itemSumOrderByAggregateInput
  }

  export type tb_pedido_itemScalarWhereWithAggregatesInput = {
    AND?: tb_pedido_itemScalarWhereWithAggregatesInput | tb_pedido_itemScalarWhereWithAggregatesInput[]
    OR?: tb_pedido_itemScalarWhereWithAggregatesInput[]
    NOT?: tb_pedido_itemScalarWhereWithAggregatesInput | tb_pedido_itemScalarWhereWithAggregatesInput[]
    Codigo?: IntWithAggregatesFilter<"tb_pedido_item"> | number
    Id_Pedido?: IntNullableWithAggregatesFilter<"tb_pedido_item"> | number | null
    Id_Produto?: IntNullableWithAggregatesFilter<"tb_pedido_item"> | number | null
    Quantidade?: FloatNullableWithAggregatesFilter<"tb_pedido_item"> | number | null
    Unitario?: FloatNullableWithAggregatesFilter<"tb_pedido_item"> | number | null
    Total?: FloatNullableWithAggregatesFilter<"tb_pedido_item"> | number | null
    Importado_ERP?: StringNullableWithAggregatesFilter<"tb_pedido_item"> | string | null
  }

  export type tb_pessoasCreateInput = {
    Codigo: number
    Tipo_Pessoa?: string | null
    CPF?: string | null
    CNPJ?: string | null
    RG?: string | null
    IE?: string | null
    CadPro?: string | null
    Tipo_Contribuinte?: number | null
    Pessoa?: string | null
    Fantasia?: string | null
    CEP?: string | null
    Endereco?: string | null
    Numero?: string | null
    Bairro?: string | null
    UF?: string | null
    cUF?: string | null
    xMun?: string | null
    cMun?: string | null
    xPais?: string | null
    cPais?: string | null
    Complemento?: string | null
    Data_Nascimento?: Date | string | null
    Fone1?: string | null
    Fone2?: string | null
    Fone3?: string | null
    Fone4?: string | null
    Fone5?: string | null
    Id_Tabela_Preco?: number | null
    RegExcluido?: string | null
    Ativo?: string | null
    IDEmpresa?: number | null
    DHU?: string | null
    IDUser?: number | null
    Email?: string | null
    Id_Operacao_Movimento?: number | null
    Apelido?: string | null
    Limite?: number | null
    Liberado_Contas_Em_Atraso?: string | null
    WhatsApp?: string | null
  }

  export type tb_pessoasUncheckedCreateInput = {
    Codigo: number
    Tipo_Pessoa?: string | null
    CPF?: string | null
    CNPJ?: string | null
    RG?: string | null
    IE?: string | null
    CadPro?: string | null
    Tipo_Contribuinte?: number | null
    Pessoa?: string | null
    Fantasia?: string | null
    CEP?: string | null
    Endereco?: string | null
    Numero?: string | null
    Bairro?: string | null
    UF?: string | null
    cUF?: string | null
    xMun?: string | null
    cMun?: string | null
    xPais?: string | null
    cPais?: string | null
    Complemento?: string | null
    Data_Nascimento?: Date | string | null
    Fone1?: string | null
    Fone2?: string | null
    Fone3?: string | null
    Fone4?: string | null
    Fone5?: string | null
    Id_Tabela_Preco?: number | null
    RegExcluido?: string | null
    Ativo?: string | null
    IDEmpresa?: number | null
    DHU?: string | null
    IDUser?: number | null
    Email?: string | null
    Id_Operacao_Movimento?: number | null
    Apelido?: string | null
    Limite?: number | null
    Liberado_Contas_Em_Atraso?: string | null
    WhatsApp?: string | null
  }

  export type tb_pessoasUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Tipo_Pessoa?: NullableStringFieldUpdateOperationsInput | string | null
    CPF?: NullableStringFieldUpdateOperationsInput | string | null
    CNPJ?: NullableStringFieldUpdateOperationsInput | string | null
    RG?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: NullableStringFieldUpdateOperationsInput | string | null
    CadPro?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Contribuinte?: NullableIntFieldUpdateOperationsInput | number | null
    Pessoa?: NullableStringFieldUpdateOperationsInput | string | null
    Fantasia?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    Endereco?: NullableStringFieldUpdateOperationsInput | string | null
    Numero?: NullableStringFieldUpdateOperationsInput | string | null
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    UF?: NullableStringFieldUpdateOperationsInput | string | null
    cUF?: NullableStringFieldUpdateOperationsInput | string | null
    xMun?: NullableStringFieldUpdateOperationsInput | string | null
    cMun?: NullableStringFieldUpdateOperationsInput | string | null
    xPais?: NullableStringFieldUpdateOperationsInput | string | null
    cPais?: NullableStringFieldUpdateOperationsInput | string | null
    Complemento?: NullableStringFieldUpdateOperationsInput | string | null
    Data_Nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fone1?: NullableStringFieldUpdateOperationsInput | string | null
    Fone2?: NullableStringFieldUpdateOperationsInput | string | null
    Fone3?: NullableStringFieldUpdateOperationsInput | string | null
    Fone4?: NullableStringFieldUpdateOperationsInput | string | null
    Fone5?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Tabela_Preco?: NullableIntFieldUpdateOperationsInput | number | null
    RegExcluido?: NullableStringFieldUpdateOperationsInput | string | null
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
    IDEmpresa?: NullableIntFieldUpdateOperationsInput | number | null
    DHU?: NullableStringFieldUpdateOperationsInput | string | null
    IDUser?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Operacao_Movimento?: NullableIntFieldUpdateOperationsInput | number | null
    Apelido?: NullableStringFieldUpdateOperationsInput | string | null
    Limite?: NullableFloatFieldUpdateOperationsInput | number | null
    Liberado_Contas_Em_Atraso?: NullableStringFieldUpdateOperationsInput | string | null
    WhatsApp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pessoasUncheckedUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Tipo_Pessoa?: NullableStringFieldUpdateOperationsInput | string | null
    CPF?: NullableStringFieldUpdateOperationsInput | string | null
    CNPJ?: NullableStringFieldUpdateOperationsInput | string | null
    RG?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: NullableStringFieldUpdateOperationsInput | string | null
    CadPro?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Contribuinte?: NullableIntFieldUpdateOperationsInput | number | null
    Pessoa?: NullableStringFieldUpdateOperationsInput | string | null
    Fantasia?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    Endereco?: NullableStringFieldUpdateOperationsInput | string | null
    Numero?: NullableStringFieldUpdateOperationsInput | string | null
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    UF?: NullableStringFieldUpdateOperationsInput | string | null
    cUF?: NullableStringFieldUpdateOperationsInput | string | null
    xMun?: NullableStringFieldUpdateOperationsInput | string | null
    cMun?: NullableStringFieldUpdateOperationsInput | string | null
    xPais?: NullableStringFieldUpdateOperationsInput | string | null
    cPais?: NullableStringFieldUpdateOperationsInput | string | null
    Complemento?: NullableStringFieldUpdateOperationsInput | string | null
    Data_Nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fone1?: NullableStringFieldUpdateOperationsInput | string | null
    Fone2?: NullableStringFieldUpdateOperationsInput | string | null
    Fone3?: NullableStringFieldUpdateOperationsInput | string | null
    Fone4?: NullableStringFieldUpdateOperationsInput | string | null
    Fone5?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Tabela_Preco?: NullableIntFieldUpdateOperationsInput | number | null
    RegExcluido?: NullableStringFieldUpdateOperationsInput | string | null
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
    IDEmpresa?: NullableIntFieldUpdateOperationsInput | number | null
    DHU?: NullableStringFieldUpdateOperationsInput | string | null
    IDUser?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Operacao_Movimento?: NullableIntFieldUpdateOperationsInput | number | null
    Apelido?: NullableStringFieldUpdateOperationsInput | string | null
    Limite?: NullableFloatFieldUpdateOperationsInput | number | null
    Liberado_Contas_Em_Atraso?: NullableStringFieldUpdateOperationsInput | string | null
    WhatsApp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pessoasCreateManyInput = {
    Codigo: number
    Tipo_Pessoa?: string | null
    CPF?: string | null
    CNPJ?: string | null
    RG?: string | null
    IE?: string | null
    CadPro?: string | null
    Tipo_Contribuinte?: number | null
    Pessoa?: string | null
    Fantasia?: string | null
    CEP?: string | null
    Endereco?: string | null
    Numero?: string | null
    Bairro?: string | null
    UF?: string | null
    cUF?: string | null
    xMun?: string | null
    cMun?: string | null
    xPais?: string | null
    cPais?: string | null
    Complemento?: string | null
    Data_Nascimento?: Date | string | null
    Fone1?: string | null
    Fone2?: string | null
    Fone3?: string | null
    Fone4?: string | null
    Fone5?: string | null
    Id_Tabela_Preco?: number | null
    RegExcluido?: string | null
    Ativo?: string | null
    IDEmpresa?: number | null
    DHU?: string | null
    IDUser?: number | null
    Email?: string | null
    Id_Operacao_Movimento?: number | null
    Apelido?: string | null
    Limite?: number | null
    Liberado_Contas_Em_Atraso?: string | null
    WhatsApp?: string | null
  }

  export type tb_pessoasUpdateManyMutationInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Tipo_Pessoa?: NullableStringFieldUpdateOperationsInput | string | null
    CPF?: NullableStringFieldUpdateOperationsInput | string | null
    CNPJ?: NullableStringFieldUpdateOperationsInput | string | null
    RG?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: NullableStringFieldUpdateOperationsInput | string | null
    CadPro?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Contribuinte?: NullableIntFieldUpdateOperationsInput | number | null
    Pessoa?: NullableStringFieldUpdateOperationsInput | string | null
    Fantasia?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    Endereco?: NullableStringFieldUpdateOperationsInput | string | null
    Numero?: NullableStringFieldUpdateOperationsInput | string | null
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    UF?: NullableStringFieldUpdateOperationsInput | string | null
    cUF?: NullableStringFieldUpdateOperationsInput | string | null
    xMun?: NullableStringFieldUpdateOperationsInput | string | null
    cMun?: NullableStringFieldUpdateOperationsInput | string | null
    xPais?: NullableStringFieldUpdateOperationsInput | string | null
    cPais?: NullableStringFieldUpdateOperationsInput | string | null
    Complemento?: NullableStringFieldUpdateOperationsInput | string | null
    Data_Nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fone1?: NullableStringFieldUpdateOperationsInput | string | null
    Fone2?: NullableStringFieldUpdateOperationsInput | string | null
    Fone3?: NullableStringFieldUpdateOperationsInput | string | null
    Fone4?: NullableStringFieldUpdateOperationsInput | string | null
    Fone5?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Tabela_Preco?: NullableIntFieldUpdateOperationsInput | number | null
    RegExcluido?: NullableStringFieldUpdateOperationsInput | string | null
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
    IDEmpresa?: NullableIntFieldUpdateOperationsInput | number | null
    DHU?: NullableStringFieldUpdateOperationsInput | string | null
    IDUser?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Operacao_Movimento?: NullableIntFieldUpdateOperationsInput | number | null
    Apelido?: NullableStringFieldUpdateOperationsInput | string | null
    Limite?: NullableFloatFieldUpdateOperationsInput | number | null
    Liberado_Contas_Em_Atraso?: NullableStringFieldUpdateOperationsInput | string | null
    WhatsApp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pessoasUncheckedUpdateManyInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Tipo_Pessoa?: NullableStringFieldUpdateOperationsInput | string | null
    CPF?: NullableStringFieldUpdateOperationsInput | string | null
    CNPJ?: NullableStringFieldUpdateOperationsInput | string | null
    RG?: NullableStringFieldUpdateOperationsInput | string | null
    IE?: NullableStringFieldUpdateOperationsInput | string | null
    CadPro?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Contribuinte?: NullableIntFieldUpdateOperationsInput | number | null
    Pessoa?: NullableStringFieldUpdateOperationsInput | string | null
    Fantasia?: NullableStringFieldUpdateOperationsInput | string | null
    CEP?: NullableStringFieldUpdateOperationsInput | string | null
    Endereco?: NullableStringFieldUpdateOperationsInput | string | null
    Numero?: NullableStringFieldUpdateOperationsInput | string | null
    Bairro?: NullableStringFieldUpdateOperationsInput | string | null
    UF?: NullableStringFieldUpdateOperationsInput | string | null
    cUF?: NullableStringFieldUpdateOperationsInput | string | null
    xMun?: NullableStringFieldUpdateOperationsInput | string | null
    cMun?: NullableStringFieldUpdateOperationsInput | string | null
    xPais?: NullableStringFieldUpdateOperationsInput | string | null
    cPais?: NullableStringFieldUpdateOperationsInput | string | null
    Complemento?: NullableStringFieldUpdateOperationsInput | string | null
    Data_Nascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Fone1?: NullableStringFieldUpdateOperationsInput | string | null
    Fone2?: NullableStringFieldUpdateOperationsInput | string | null
    Fone3?: NullableStringFieldUpdateOperationsInput | string | null
    Fone4?: NullableStringFieldUpdateOperationsInput | string | null
    Fone5?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Tabela_Preco?: NullableIntFieldUpdateOperationsInput | number | null
    RegExcluido?: NullableStringFieldUpdateOperationsInput | string | null
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
    IDEmpresa?: NullableIntFieldUpdateOperationsInput | number | null
    DHU?: NullableStringFieldUpdateOperationsInput | string | null
    IDUser?: NullableIntFieldUpdateOperationsInput | number | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Operacao_Movimento?: NullableIntFieldUpdateOperationsInput | number | null
    Apelido?: NullableStringFieldUpdateOperationsInput | string | null
    Limite?: NullableFloatFieldUpdateOperationsInput | number | null
    Liberado_Contas_Em_Atraso?: NullableStringFieldUpdateOperationsInput | string | null
    WhatsApp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_produtosCreateInput = {
    Codigo: number
    Produto?: string | null
    Produto_Curto?: string | null
    Produto_PDV?: string | null
    Complemento?: string | null
    Pesquisa_Rapida_PDV?: string | null
    Id_Departamento?: number | null
    Id_Setor?: number | null
    Id_Marca?: number | null
    Id_Grupo?: number | null
    Id_SubGrupo?: number | null
    Id_Unidade?: number | null
    Id_Familia?: number | null
    Codigo_Interno?: string | null
    Peso?: number | null
    Capacidade?: number | null
    ID_Alocacao?: number | null
    Comissao?: number | null
    Balanca?: string | null
    Tipo_Balanca?: string | null
    Descricao_Balanca?: string | null
    NCM?: number | null
    Genero?: string | null
    cEAN_Trib?: string | null
    CEST?: string | null
    Estoque?: number | null
    Estoque_Reservado?: number | null
    Estoque_Disponivel?: number | null
    Tipo?: number | null
    Deposito?: string | null
    Fraciona?: string | null
    Controle_Lote?: string | null
    Requer_Observacao?: string | null
    Nao_Controla_Estoque?: string | null
    Nunca_Agrupa_Venda?: string | null
    Preco_Atribuido?: number | null
    Preco_Venda?: number | null
    Preco_Compra?: number | null
    Preco_Medio?: number | null
    Data_Preco_Venda?: Date | string | null
    Data_Custo?: Date | string | null
    Margem?: number | null
    Markup?: number | null
    Classificacao?: string | null
    Id_Produto_Vinculado?: number | null
    Ultima_Venda?: Date | string | null
    Ultima_Compra?: Date | string | null
    Data_Alterado?: Date | string | null
    Ativo?: string | null
    RegExcluido?: string | null
    IDEmpresa?: number | null
    DHU?: string | null
    Id_Importacao_Sistema?: number | null
    Id_SubFamilia?: number | null
    Estoque_Maximo?: number | null
    Estoque_Minimo?: number | null
    IDUser?: number | null
    Cad_ViaXML?: string | null
    Funcao?: string | null
    Alterado?: string | null
    N_Licenca_ANVISA?: string | null
    Id_DCB?: number | null
    Fidelidade_Credito?: number | null
    Fidelidade_Resgate?: number | null
    Dias_Validade?: number | null
  }

  export type tb_produtosUncheckedCreateInput = {
    Codigo: number
    Produto?: string | null
    Produto_Curto?: string | null
    Produto_PDV?: string | null
    Complemento?: string | null
    Pesquisa_Rapida_PDV?: string | null
    Id_Departamento?: number | null
    Id_Setor?: number | null
    Id_Marca?: number | null
    Id_Grupo?: number | null
    Id_SubGrupo?: number | null
    Id_Unidade?: number | null
    Id_Familia?: number | null
    Codigo_Interno?: string | null
    Peso?: number | null
    Capacidade?: number | null
    ID_Alocacao?: number | null
    Comissao?: number | null
    Balanca?: string | null
    Tipo_Balanca?: string | null
    Descricao_Balanca?: string | null
    NCM?: number | null
    Genero?: string | null
    cEAN_Trib?: string | null
    CEST?: string | null
    Estoque?: number | null
    Estoque_Reservado?: number | null
    Estoque_Disponivel?: number | null
    Tipo?: number | null
    Deposito?: string | null
    Fraciona?: string | null
    Controle_Lote?: string | null
    Requer_Observacao?: string | null
    Nao_Controla_Estoque?: string | null
    Nunca_Agrupa_Venda?: string | null
    Preco_Atribuido?: number | null
    Preco_Venda?: number | null
    Preco_Compra?: number | null
    Preco_Medio?: number | null
    Data_Preco_Venda?: Date | string | null
    Data_Custo?: Date | string | null
    Margem?: number | null
    Markup?: number | null
    Classificacao?: string | null
    Id_Produto_Vinculado?: number | null
    Ultima_Venda?: Date | string | null
    Ultima_Compra?: Date | string | null
    Data_Alterado?: Date | string | null
    Ativo?: string | null
    RegExcluido?: string | null
    IDEmpresa?: number | null
    DHU?: string | null
    Id_Importacao_Sistema?: number | null
    Id_SubFamilia?: number | null
    Estoque_Maximo?: number | null
    Estoque_Minimo?: number | null
    IDUser?: number | null
    Cad_ViaXML?: string | null
    Funcao?: string | null
    Alterado?: string | null
    N_Licenca_ANVISA?: string | null
    Id_DCB?: number | null
    Fidelidade_Credito?: number | null
    Fidelidade_Resgate?: number | null
    Dias_Validade?: number | null
  }

  export type tb_produtosUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Produto?: NullableStringFieldUpdateOperationsInput | string | null
    Produto_Curto?: NullableStringFieldUpdateOperationsInput | string | null
    Produto_PDV?: NullableStringFieldUpdateOperationsInput | string | null
    Complemento?: NullableStringFieldUpdateOperationsInput | string | null
    Pesquisa_Rapida_PDV?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Departamento?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Setor?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Marca?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Grupo?: NullableIntFieldUpdateOperationsInput | number | null
    Id_SubGrupo?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Unidade?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Familia?: NullableIntFieldUpdateOperationsInput | number | null
    Codigo_Interno?: NullableStringFieldUpdateOperationsInput | string | null
    Peso?: NullableFloatFieldUpdateOperationsInput | number | null
    Capacidade?: NullableFloatFieldUpdateOperationsInput | number | null
    ID_Alocacao?: NullableIntFieldUpdateOperationsInput | number | null
    Comissao?: NullableFloatFieldUpdateOperationsInput | number | null
    Balanca?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Balanca?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao_Balanca?: NullableStringFieldUpdateOperationsInput | string | null
    NCM?: NullableIntFieldUpdateOperationsInput | number | null
    Genero?: NullableStringFieldUpdateOperationsInput | string | null
    cEAN_Trib?: NullableStringFieldUpdateOperationsInput | string | null
    CEST?: NullableStringFieldUpdateOperationsInput | string | null
    Estoque?: NullableFloatFieldUpdateOperationsInput | number | null
    Estoque_Reservado?: NullableFloatFieldUpdateOperationsInput | number | null
    Estoque_Disponivel?: NullableFloatFieldUpdateOperationsInput | number | null
    Tipo?: NullableFloatFieldUpdateOperationsInput | number | null
    Deposito?: NullableStringFieldUpdateOperationsInput | string | null
    Fraciona?: NullableStringFieldUpdateOperationsInput | string | null
    Controle_Lote?: NullableStringFieldUpdateOperationsInput | string | null
    Requer_Observacao?: NullableStringFieldUpdateOperationsInput | string | null
    Nao_Controla_Estoque?: NullableStringFieldUpdateOperationsInput | string | null
    Nunca_Agrupa_Venda?: NullableStringFieldUpdateOperationsInput | string | null
    Preco_Atribuido?: NullableFloatFieldUpdateOperationsInput | number | null
    Preco_Venda?: NullableFloatFieldUpdateOperationsInput | number | null
    Preco_Compra?: NullableFloatFieldUpdateOperationsInput | number | null
    Preco_Medio?: NullableFloatFieldUpdateOperationsInput | number | null
    Data_Preco_Venda?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Data_Custo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Margem?: NullableFloatFieldUpdateOperationsInput | number | null
    Markup?: NullableFloatFieldUpdateOperationsInput | number | null
    Classificacao?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Produto_Vinculado?: NullableIntFieldUpdateOperationsInput | number | null
    Ultima_Venda?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ultima_Compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Data_Alterado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
    RegExcluido?: NullableStringFieldUpdateOperationsInput | string | null
    IDEmpresa?: NullableIntFieldUpdateOperationsInput | number | null
    DHU?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Importacao_Sistema?: NullableIntFieldUpdateOperationsInput | number | null
    Id_SubFamilia?: NullableIntFieldUpdateOperationsInput | number | null
    Estoque_Maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    Estoque_Minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    IDUser?: NullableIntFieldUpdateOperationsInput | number | null
    Cad_ViaXML?: NullableStringFieldUpdateOperationsInput | string | null
    Funcao?: NullableStringFieldUpdateOperationsInput | string | null
    Alterado?: NullableStringFieldUpdateOperationsInput | string | null
    N_Licenca_ANVISA?: NullableStringFieldUpdateOperationsInput | string | null
    Id_DCB?: NullableIntFieldUpdateOperationsInput | number | null
    Fidelidade_Credito?: NullableFloatFieldUpdateOperationsInput | number | null
    Fidelidade_Resgate?: NullableFloatFieldUpdateOperationsInput | number | null
    Dias_Validade?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_produtosUncheckedUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Produto?: NullableStringFieldUpdateOperationsInput | string | null
    Produto_Curto?: NullableStringFieldUpdateOperationsInput | string | null
    Produto_PDV?: NullableStringFieldUpdateOperationsInput | string | null
    Complemento?: NullableStringFieldUpdateOperationsInput | string | null
    Pesquisa_Rapida_PDV?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Departamento?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Setor?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Marca?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Grupo?: NullableIntFieldUpdateOperationsInput | number | null
    Id_SubGrupo?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Unidade?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Familia?: NullableIntFieldUpdateOperationsInput | number | null
    Codigo_Interno?: NullableStringFieldUpdateOperationsInput | string | null
    Peso?: NullableFloatFieldUpdateOperationsInput | number | null
    Capacidade?: NullableFloatFieldUpdateOperationsInput | number | null
    ID_Alocacao?: NullableIntFieldUpdateOperationsInput | number | null
    Comissao?: NullableFloatFieldUpdateOperationsInput | number | null
    Balanca?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Balanca?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao_Balanca?: NullableStringFieldUpdateOperationsInput | string | null
    NCM?: NullableIntFieldUpdateOperationsInput | number | null
    Genero?: NullableStringFieldUpdateOperationsInput | string | null
    cEAN_Trib?: NullableStringFieldUpdateOperationsInput | string | null
    CEST?: NullableStringFieldUpdateOperationsInput | string | null
    Estoque?: NullableFloatFieldUpdateOperationsInput | number | null
    Estoque_Reservado?: NullableFloatFieldUpdateOperationsInput | number | null
    Estoque_Disponivel?: NullableFloatFieldUpdateOperationsInput | number | null
    Tipo?: NullableFloatFieldUpdateOperationsInput | number | null
    Deposito?: NullableStringFieldUpdateOperationsInput | string | null
    Fraciona?: NullableStringFieldUpdateOperationsInput | string | null
    Controle_Lote?: NullableStringFieldUpdateOperationsInput | string | null
    Requer_Observacao?: NullableStringFieldUpdateOperationsInput | string | null
    Nao_Controla_Estoque?: NullableStringFieldUpdateOperationsInput | string | null
    Nunca_Agrupa_Venda?: NullableStringFieldUpdateOperationsInput | string | null
    Preco_Atribuido?: NullableFloatFieldUpdateOperationsInput | number | null
    Preco_Venda?: NullableFloatFieldUpdateOperationsInput | number | null
    Preco_Compra?: NullableFloatFieldUpdateOperationsInput | number | null
    Preco_Medio?: NullableFloatFieldUpdateOperationsInput | number | null
    Data_Preco_Venda?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Data_Custo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Margem?: NullableFloatFieldUpdateOperationsInput | number | null
    Markup?: NullableFloatFieldUpdateOperationsInput | number | null
    Classificacao?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Produto_Vinculado?: NullableIntFieldUpdateOperationsInput | number | null
    Ultima_Venda?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ultima_Compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Data_Alterado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
    RegExcluido?: NullableStringFieldUpdateOperationsInput | string | null
    IDEmpresa?: NullableIntFieldUpdateOperationsInput | number | null
    DHU?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Importacao_Sistema?: NullableIntFieldUpdateOperationsInput | number | null
    Id_SubFamilia?: NullableIntFieldUpdateOperationsInput | number | null
    Estoque_Maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    Estoque_Minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    IDUser?: NullableIntFieldUpdateOperationsInput | number | null
    Cad_ViaXML?: NullableStringFieldUpdateOperationsInput | string | null
    Funcao?: NullableStringFieldUpdateOperationsInput | string | null
    Alterado?: NullableStringFieldUpdateOperationsInput | string | null
    N_Licenca_ANVISA?: NullableStringFieldUpdateOperationsInput | string | null
    Id_DCB?: NullableIntFieldUpdateOperationsInput | number | null
    Fidelidade_Credito?: NullableFloatFieldUpdateOperationsInput | number | null
    Fidelidade_Resgate?: NullableFloatFieldUpdateOperationsInput | number | null
    Dias_Validade?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_produtosCreateManyInput = {
    Codigo: number
    Produto?: string | null
    Produto_Curto?: string | null
    Produto_PDV?: string | null
    Complemento?: string | null
    Pesquisa_Rapida_PDV?: string | null
    Id_Departamento?: number | null
    Id_Setor?: number | null
    Id_Marca?: number | null
    Id_Grupo?: number | null
    Id_SubGrupo?: number | null
    Id_Unidade?: number | null
    Id_Familia?: number | null
    Codigo_Interno?: string | null
    Peso?: number | null
    Capacidade?: number | null
    ID_Alocacao?: number | null
    Comissao?: number | null
    Balanca?: string | null
    Tipo_Balanca?: string | null
    Descricao_Balanca?: string | null
    NCM?: number | null
    Genero?: string | null
    cEAN_Trib?: string | null
    CEST?: string | null
    Estoque?: number | null
    Estoque_Reservado?: number | null
    Estoque_Disponivel?: number | null
    Tipo?: number | null
    Deposito?: string | null
    Fraciona?: string | null
    Controle_Lote?: string | null
    Requer_Observacao?: string | null
    Nao_Controla_Estoque?: string | null
    Nunca_Agrupa_Venda?: string | null
    Preco_Atribuido?: number | null
    Preco_Venda?: number | null
    Preco_Compra?: number | null
    Preco_Medio?: number | null
    Data_Preco_Venda?: Date | string | null
    Data_Custo?: Date | string | null
    Margem?: number | null
    Markup?: number | null
    Classificacao?: string | null
    Id_Produto_Vinculado?: number | null
    Ultima_Venda?: Date | string | null
    Ultima_Compra?: Date | string | null
    Data_Alterado?: Date | string | null
    Ativo?: string | null
    RegExcluido?: string | null
    IDEmpresa?: number | null
    DHU?: string | null
    Id_Importacao_Sistema?: number | null
    Id_SubFamilia?: number | null
    Estoque_Maximo?: number | null
    Estoque_Minimo?: number | null
    IDUser?: number | null
    Cad_ViaXML?: string | null
    Funcao?: string | null
    Alterado?: string | null
    N_Licenca_ANVISA?: string | null
    Id_DCB?: number | null
    Fidelidade_Credito?: number | null
    Fidelidade_Resgate?: number | null
    Dias_Validade?: number | null
  }

  export type tb_produtosUpdateManyMutationInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Produto?: NullableStringFieldUpdateOperationsInput | string | null
    Produto_Curto?: NullableStringFieldUpdateOperationsInput | string | null
    Produto_PDV?: NullableStringFieldUpdateOperationsInput | string | null
    Complemento?: NullableStringFieldUpdateOperationsInput | string | null
    Pesquisa_Rapida_PDV?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Departamento?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Setor?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Marca?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Grupo?: NullableIntFieldUpdateOperationsInput | number | null
    Id_SubGrupo?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Unidade?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Familia?: NullableIntFieldUpdateOperationsInput | number | null
    Codigo_Interno?: NullableStringFieldUpdateOperationsInput | string | null
    Peso?: NullableFloatFieldUpdateOperationsInput | number | null
    Capacidade?: NullableFloatFieldUpdateOperationsInput | number | null
    ID_Alocacao?: NullableIntFieldUpdateOperationsInput | number | null
    Comissao?: NullableFloatFieldUpdateOperationsInput | number | null
    Balanca?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Balanca?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao_Balanca?: NullableStringFieldUpdateOperationsInput | string | null
    NCM?: NullableIntFieldUpdateOperationsInput | number | null
    Genero?: NullableStringFieldUpdateOperationsInput | string | null
    cEAN_Trib?: NullableStringFieldUpdateOperationsInput | string | null
    CEST?: NullableStringFieldUpdateOperationsInput | string | null
    Estoque?: NullableFloatFieldUpdateOperationsInput | number | null
    Estoque_Reservado?: NullableFloatFieldUpdateOperationsInput | number | null
    Estoque_Disponivel?: NullableFloatFieldUpdateOperationsInput | number | null
    Tipo?: NullableFloatFieldUpdateOperationsInput | number | null
    Deposito?: NullableStringFieldUpdateOperationsInput | string | null
    Fraciona?: NullableStringFieldUpdateOperationsInput | string | null
    Controle_Lote?: NullableStringFieldUpdateOperationsInput | string | null
    Requer_Observacao?: NullableStringFieldUpdateOperationsInput | string | null
    Nao_Controla_Estoque?: NullableStringFieldUpdateOperationsInput | string | null
    Nunca_Agrupa_Venda?: NullableStringFieldUpdateOperationsInput | string | null
    Preco_Atribuido?: NullableFloatFieldUpdateOperationsInput | number | null
    Preco_Venda?: NullableFloatFieldUpdateOperationsInput | number | null
    Preco_Compra?: NullableFloatFieldUpdateOperationsInput | number | null
    Preco_Medio?: NullableFloatFieldUpdateOperationsInput | number | null
    Data_Preco_Venda?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Data_Custo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Margem?: NullableFloatFieldUpdateOperationsInput | number | null
    Markup?: NullableFloatFieldUpdateOperationsInput | number | null
    Classificacao?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Produto_Vinculado?: NullableIntFieldUpdateOperationsInput | number | null
    Ultima_Venda?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ultima_Compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Data_Alterado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
    RegExcluido?: NullableStringFieldUpdateOperationsInput | string | null
    IDEmpresa?: NullableIntFieldUpdateOperationsInput | number | null
    DHU?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Importacao_Sistema?: NullableIntFieldUpdateOperationsInput | number | null
    Id_SubFamilia?: NullableIntFieldUpdateOperationsInput | number | null
    Estoque_Maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    Estoque_Minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    IDUser?: NullableIntFieldUpdateOperationsInput | number | null
    Cad_ViaXML?: NullableStringFieldUpdateOperationsInput | string | null
    Funcao?: NullableStringFieldUpdateOperationsInput | string | null
    Alterado?: NullableStringFieldUpdateOperationsInput | string | null
    N_Licenca_ANVISA?: NullableStringFieldUpdateOperationsInput | string | null
    Id_DCB?: NullableIntFieldUpdateOperationsInput | number | null
    Fidelidade_Credito?: NullableFloatFieldUpdateOperationsInput | number | null
    Fidelidade_Resgate?: NullableFloatFieldUpdateOperationsInput | number | null
    Dias_Validade?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_produtosUncheckedUpdateManyInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Produto?: NullableStringFieldUpdateOperationsInput | string | null
    Produto_Curto?: NullableStringFieldUpdateOperationsInput | string | null
    Produto_PDV?: NullableStringFieldUpdateOperationsInput | string | null
    Complemento?: NullableStringFieldUpdateOperationsInput | string | null
    Pesquisa_Rapida_PDV?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Departamento?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Setor?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Marca?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Grupo?: NullableIntFieldUpdateOperationsInput | number | null
    Id_SubGrupo?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Unidade?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Familia?: NullableIntFieldUpdateOperationsInput | number | null
    Codigo_Interno?: NullableStringFieldUpdateOperationsInput | string | null
    Peso?: NullableFloatFieldUpdateOperationsInput | number | null
    Capacidade?: NullableFloatFieldUpdateOperationsInput | number | null
    ID_Alocacao?: NullableIntFieldUpdateOperationsInput | number | null
    Comissao?: NullableFloatFieldUpdateOperationsInput | number | null
    Balanca?: NullableStringFieldUpdateOperationsInput | string | null
    Tipo_Balanca?: NullableStringFieldUpdateOperationsInput | string | null
    Descricao_Balanca?: NullableStringFieldUpdateOperationsInput | string | null
    NCM?: NullableIntFieldUpdateOperationsInput | number | null
    Genero?: NullableStringFieldUpdateOperationsInput | string | null
    cEAN_Trib?: NullableStringFieldUpdateOperationsInput | string | null
    CEST?: NullableStringFieldUpdateOperationsInput | string | null
    Estoque?: NullableFloatFieldUpdateOperationsInput | number | null
    Estoque_Reservado?: NullableFloatFieldUpdateOperationsInput | number | null
    Estoque_Disponivel?: NullableFloatFieldUpdateOperationsInput | number | null
    Tipo?: NullableFloatFieldUpdateOperationsInput | number | null
    Deposito?: NullableStringFieldUpdateOperationsInput | string | null
    Fraciona?: NullableStringFieldUpdateOperationsInput | string | null
    Controle_Lote?: NullableStringFieldUpdateOperationsInput | string | null
    Requer_Observacao?: NullableStringFieldUpdateOperationsInput | string | null
    Nao_Controla_Estoque?: NullableStringFieldUpdateOperationsInput | string | null
    Nunca_Agrupa_Venda?: NullableStringFieldUpdateOperationsInput | string | null
    Preco_Atribuido?: NullableFloatFieldUpdateOperationsInput | number | null
    Preco_Venda?: NullableFloatFieldUpdateOperationsInput | number | null
    Preco_Compra?: NullableFloatFieldUpdateOperationsInput | number | null
    Preco_Medio?: NullableFloatFieldUpdateOperationsInput | number | null
    Data_Preco_Venda?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Data_Custo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Margem?: NullableFloatFieldUpdateOperationsInput | number | null
    Markup?: NullableFloatFieldUpdateOperationsInput | number | null
    Classificacao?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Produto_Vinculado?: NullableIntFieldUpdateOperationsInput | number | null
    Ultima_Venda?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ultima_Compra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Data_Alterado?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
    RegExcluido?: NullableStringFieldUpdateOperationsInput | string | null
    IDEmpresa?: NullableIntFieldUpdateOperationsInput | number | null
    DHU?: NullableStringFieldUpdateOperationsInput | string | null
    Id_Importacao_Sistema?: NullableIntFieldUpdateOperationsInput | number | null
    Id_SubFamilia?: NullableIntFieldUpdateOperationsInput | number | null
    Estoque_Maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    Estoque_Minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    IDUser?: NullableIntFieldUpdateOperationsInput | number | null
    Cad_ViaXML?: NullableStringFieldUpdateOperationsInput | string | null
    Funcao?: NullableStringFieldUpdateOperationsInput | string | null
    Alterado?: NullableStringFieldUpdateOperationsInput | string | null
    N_Licenca_ANVISA?: NullableStringFieldUpdateOperationsInput | string | null
    Id_DCB?: NullableIntFieldUpdateOperationsInput | number | null
    Fidelidade_Credito?: NullableFloatFieldUpdateOperationsInput | number | null
    Fidelidade_Resgate?: NullableFloatFieldUpdateOperationsInput | number | null
    Dias_Validade?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_produtos_setorCreateInput = {
    Codigo: number
    Setor?: string | null
    Ativo?: string | null
    RegExcluido?: string | null
    IDEmpresa?: number | null
    DHU?: string | null
    IDUser?: number | null
  }

  export type tb_produtos_setorUncheckedCreateInput = {
    Codigo: number
    Setor?: string | null
    Ativo?: string | null
    RegExcluido?: string | null
    IDEmpresa?: number | null
    DHU?: string | null
    IDUser?: number | null
  }

  export type tb_produtos_setorUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Setor?: NullableStringFieldUpdateOperationsInput | string | null
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
    RegExcluido?: NullableStringFieldUpdateOperationsInput | string | null
    IDEmpresa?: NullableIntFieldUpdateOperationsInput | number | null
    DHU?: NullableStringFieldUpdateOperationsInput | string | null
    IDUser?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_produtos_setorUncheckedUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Setor?: NullableStringFieldUpdateOperationsInput | string | null
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
    RegExcluido?: NullableStringFieldUpdateOperationsInput | string | null
    IDEmpresa?: NullableIntFieldUpdateOperationsInput | number | null
    DHU?: NullableStringFieldUpdateOperationsInput | string | null
    IDUser?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_produtos_setorCreateManyInput = {
    Codigo: number
    Setor?: string | null
    Ativo?: string | null
    RegExcluido?: string | null
    IDEmpresa?: number | null
    DHU?: string | null
    IDUser?: number | null
  }

  export type tb_produtos_setorUpdateManyMutationInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Setor?: NullableStringFieldUpdateOperationsInput | string | null
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
    RegExcluido?: NullableStringFieldUpdateOperationsInput | string | null
    IDEmpresa?: NullableIntFieldUpdateOperationsInput | number | null
    DHU?: NullableStringFieldUpdateOperationsInput | string | null
    IDUser?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_produtos_setorUncheckedUpdateManyInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Setor?: NullableStringFieldUpdateOperationsInput | string | null
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
    RegExcluido?: NullableStringFieldUpdateOperationsInput | string | null
    IDEmpresa?: NullableIntFieldUpdateOperationsInput | number | null
    DHU?: NullableStringFieldUpdateOperationsInput | string | null
    IDUser?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_comandaCreateInput = {
    Codigo: number
    Ativo?: string | null
  }

  export type tb_comandaUncheckedCreateInput = {
    Codigo: number
    Ativo?: string | null
  }

  export type tb_comandaUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_comandaUncheckedUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_comandaCreateManyInput = {
    Codigo: number
    Ativo?: string | null
  }

  export type tb_comandaUpdateManyMutationInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_comandaUncheckedUpdateManyInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_mesaCreateInput = {
    Codigo: number
    Ativo?: string | null
  }

  export type tb_mesaUncheckedCreateInput = {
    Codigo: number
    Ativo?: string | null
  }

  export type tb_mesaUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_mesaUncheckedUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_mesaCreateManyInput = {
    Codigo: number
    Ativo?: string | null
  }

  export type tb_mesaUpdateManyMutationInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_mesaUncheckedUpdateManyInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Ativo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_mesa_comandaCreateInput = {
    Codigo: number
    Id_Mesa?: number | null
    Id_Comanda?: number | null
  }

  export type tb_mesa_comandaUncheckedCreateInput = {
    Codigo: number
    Id_Mesa?: number | null
    Id_Comanda?: number | null
  }

  export type tb_mesa_comandaUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Id_Mesa?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Comanda?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_mesa_comandaUncheckedUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Id_Mesa?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Comanda?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_mesa_comandaCreateManyInput = {
    Codigo: number
    Id_Mesa?: number | null
    Id_Comanda?: number | null
  }

  export type tb_mesa_comandaUpdateManyMutationInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Id_Mesa?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Comanda?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_mesa_comandaUncheckedUpdateManyInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Id_Mesa?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Comanda?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type tb_pedidoCreateInput = {
    Codigo: number
    ID_Activity?: number | null
    Id_Mesa?: number | null
    Id_Comanda?: number | null
    Importado_ERP?: string | null
  }

  export type tb_pedidoUncheckedCreateInput = {
    Codigo: number
    ID_Activity?: number | null
    Id_Mesa?: number | null
    Id_Comanda?: number | null
    Importado_ERP?: string | null
  }

  export type tb_pedidoUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    ID_Activity?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Mesa?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Comanda?: NullableIntFieldUpdateOperationsInput | number | null
    Importado_ERP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pedidoUncheckedUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    ID_Activity?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Mesa?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Comanda?: NullableIntFieldUpdateOperationsInput | number | null
    Importado_ERP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pedidoCreateManyInput = {
    Codigo: number
    ID_Activity?: number | null
    Id_Mesa?: number | null
    Id_Comanda?: number | null
    Importado_ERP?: string | null
  }

  export type tb_pedidoUpdateManyMutationInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    ID_Activity?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Mesa?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Comanda?: NullableIntFieldUpdateOperationsInput | number | null
    Importado_ERP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pedidoUncheckedUpdateManyInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    ID_Activity?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Mesa?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Comanda?: NullableIntFieldUpdateOperationsInput | number | null
    Importado_ERP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pedido_itemCreateInput = {
    Codigo: number
    Id_Pedido?: number | null
    Id_Produto?: number | null
    Quantidade?: number | null
    Unitario?: number | null
    Total?: number | null
    Importado_ERP?: string | null
  }

  export type tb_pedido_itemUncheckedCreateInput = {
    Codigo: number
    Id_Pedido?: number | null
    Id_Produto?: number | null
    Quantidade?: number | null
    Unitario?: number | null
    Total?: number | null
    Importado_ERP?: string | null
  }

  export type tb_pedido_itemUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Id_Pedido?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Produto?: NullableIntFieldUpdateOperationsInput | number | null
    Quantidade?: NullableFloatFieldUpdateOperationsInput | number | null
    Unitario?: NullableFloatFieldUpdateOperationsInput | number | null
    Total?: NullableFloatFieldUpdateOperationsInput | number | null
    Importado_ERP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pedido_itemUncheckedUpdateInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Id_Pedido?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Produto?: NullableIntFieldUpdateOperationsInput | number | null
    Quantidade?: NullableFloatFieldUpdateOperationsInput | number | null
    Unitario?: NullableFloatFieldUpdateOperationsInput | number | null
    Total?: NullableFloatFieldUpdateOperationsInput | number | null
    Importado_ERP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pedido_itemCreateManyInput = {
    Codigo: number
    Id_Pedido?: number | null
    Id_Produto?: number | null
    Quantidade?: number | null
    Unitario?: number | null
    Total?: number | null
    Importado_ERP?: string | null
  }

  export type tb_pedido_itemUpdateManyMutationInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Id_Pedido?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Produto?: NullableIntFieldUpdateOperationsInput | number | null
    Quantidade?: NullableFloatFieldUpdateOperationsInput | number | null
    Unitario?: NullableFloatFieldUpdateOperationsInput | number | null
    Total?: NullableFloatFieldUpdateOperationsInput | number | null
    Importado_ERP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tb_pedido_itemUncheckedUpdateManyInput = {
    Codigo?: IntFieldUpdateOperationsInput | number
    Id_Pedido?: NullableIntFieldUpdateOperationsInput | number | null
    Id_Produto?: NullableIntFieldUpdateOperationsInput | number | null
    Quantidade?: NullableFloatFieldUpdateOperationsInput | number | null
    Unitario?: NullableFloatFieldUpdateOperationsInput | number | null
    Total?: NullableFloatFieldUpdateOperationsInput | number | null
    Importado_ERP?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tb_pessoasCountOrderByAggregateInput = {
    Codigo?: SortOrder
    Tipo_Pessoa?: SortOrder
    CPF?: SortOrder
    CNPJ?: SortOrder
    RG?: SortOrder
    IE?: SortOrder
    CadPro?: SortOrder
    Tipo_Contribuinte?: SortOrder
    Pessoa?: SortOrder
    Fantasia?: SortOrder
    CEP?: SortOrder
    Endereco?: SortOrder
    Numero?: SortOrder
    Bairro?: SortOrder
    UF?: SortOrder
    cUF?: SortOrder
    xMun?: SortOrder
    cMun?: SortOrder
    xPais?: SortOrder
    cPais?: SortOrder
    Complemento?: SortOrder
    Data_Nascimento?: SortOrder
    Fone1?: SortOrder
    Fone2?: SortOrder
    Fone3?: SortOrder
    Fone4?: SortOrder
    Fone5?: SortOrder
    Id_Tabela_Preco?: SortOrder
    RegExcluido?: SortOrder
    Ativo?: SortOrder
    IDEmpresa?: SortOrder
    DHU?: SortOrder
    IDUser?: SortOrder
    Email?: SortOrder
    Id_Operacao_Movimento?: SortOrder
    Apelido?: SortOrder
    Limite?: SortOrder
    Liberado_Contas_Em_Atraso?: SortOrder
    WhatsApp?: SortOrder
  }

  export type tb_pessoasAvgOrderByAggregateInput = {
    Codigo?: SortOrder
    Tipo_Contribuinte?: SortOrder
    Id_Tabela_Preco?: SortOrder
    IDEmpresa?: SortOrder
    IDUser?: SortOrder
    Id_Operacao_Movimento?: SortOrder
    Limite?: SortOrder
  }

  export type tb_pessoasMaxOrderByAggregateInput = {
    Codigo?: SortOrder
    Tipo_Pessoa?: SortOrder
    CPF?: SortOrder
    CNPJ?: SortOrder
    RG?: SortOrder
    IE?: SortOrder
    CadPro?: SortOrder
    Tipo_Contribuinte?: SortOrder
    Pessoa?: SortOrder
    Fantasia?: SortOrder
    CEP?: SortOrder
    Endereco?: SortOrder
    Numero?: SortOrder
    Bairro?: SortOrder
    UF?: SortOrder
    cUF?: SortOrder
    xMun?: SortOrder
    cMun?: SortOrder
    xPais?: SortOrder
    cPais?: SortOrder
    Complemento?: SortOrder
    Data_Nascimento?: SortOrder
    Fone1?: SortOrder
    Fone2?: SortOrder
    Fone3?: SortOrder
    Fone4?: SortOrder
    Fone5?: SortOrder
    Id_Tabela_Preco?: SortOrder
    RegExcluido?: SortOrder
    Ativo?: SortOrder
    IDEmpresa?: SortOrder
    DHU?: SortOrder
    IDUser?: SortOrder
    Email?: SortOrder
    Id_Operacao_Movimento?: SortOrder
    Apelido?: SortOrder
    Limite?: SortOrder
    Liberado_Contas_Em_Atraso?: SortOrder
    WhatsApp?: SortOrder
  }

  export type tb_pessoasMinOrderByAggregateInput = {
    Codigo?: SortOrder
    Tipo_Pessoa?: SortOrder
    CPF?: SortOrder
    CNPJ?: SortOrder
    RG?: SortOrder
    IE?: SortOrder
    CadPro?: SortOrder
    Tipo_Contribuinte?: SortOrder
    Pessoa?: SortOrder
    Fantasia?: SortOrder
    CEP?: SortOrder
    Endereco?: SortOrder
    Numero?: SortOrder
    Bairro?: SortOrder
    UF?: SortOrder
    cUF?: SortOrder
    xMun?: SortOrder
    cMun?: SortOrder
    xPais?: SortOrder
    cPais?: SortOrder
    Complemento?: SortOrder
    Data_Nascimento?: SortOrder
    Fone1?: SortOrder
    Fone2?: SortOrder
    Fone3?: SortOrder
    Fone4?: SortOrder
    Fone5?: SortOrder
    Id_Tabela_Preco?: SortOrder
    RegExcluido?: SortOrder
    Ativo?: SortOrder
    IDEmpresa?: SortOrder
    DHU?: SortOrder
    IDUser?: SortOrder
    Email?: SortOrder
    Id_Operacao_Movimento?: SortOrder
    Apelido?: SortOrder
    Limite?: SortOrder
    Liberado_Contas_Em_Atraso?: SortOrder
    WhatsApp?: SortOrder
  }

  export type tb_pessoasSumOrderByAggregateInput = {
    Codigo?: SortOrder
    Tipo_Contribuinte?: SortOrder
    Id_Tabela_Preco?: SortOrder
    IDEmpresa?: SortOrder
    IDUser?: SortOrder
    Id_Operacao_Movimento?: SortOrder
    Limite?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type tb_produtosCountOrderByAggregateInput = {
    Codigo?: SortOrder
    Produto?: SortOrder
    Produto_Curto?: SortOrder
    Produto_PDV?: SortOrder
    Complemento?: SortOrder
    Pesquisa_Rapida_PDV?: SortOrder
    Id_Departamento?: SortOrder
    Id_Setor?: SortOrder
    Id_Marca?: SortOrder
    Id_Grupo?: SortOrder
    Id_SubGrupo?: SortOrder
    Id_Unidade?: SortOrder
    Id_Familia?: SortOrder
    Codigo_Interno?: SortOrder
    Peso?: SortOrder
    Capacidade?: SortOrder
    ID_Alocacao?: SortOrder
    Comissao?: SortOrder
    Balanca?: SortOrder
    Tipo_Balanca?: SortOrder
    Descricao_Balanca?: SortOrder
    NCM?: SortOrder
    Genero?: SortOrder
    cEAN_Trib?: SortOrder
    CEST?: SortOrder
    Estoque?: SortOrder
    Estoque_Reservado?: SortOrder
    Estoque_Disponivel?: SortOrder
    Tipo?: SortOrder
    Deposito?: SortOrder
    Fraciona?: SortOrder
    Controle_Lote?: SortOrder
    Requer_Observacao?: SortOrder
    Nao_Controla_Estoque?: SortOrder
    Nunca_Agrupa_Venda?: SortOrder
    Preco_Atribuido?: SortOrder
    Preco_Venda?: SortOrder
    Preco_Compra?: SortOrder
    Preco_Medio?: SortOrder
    Data_Preco_Venda?: SortOrder
    Data_Custo?: SortOrder
    Margem?: SortOrder
    Markup?: SortOrder
    Classificacao?: SortOrder
    Id_Produto_Vinculado?: SortOrder
    Ultima_Venda?: SortOrder
    Ultima_Compra?: SortOrder
    Data_Alterado?: SortOrder
    Ativo?: SortOrder
    RegExcluido?: SortOrder
    IDEmpresa?: SortOrder
    DHU?: SortOrder
    Id_Importacao_Sistema?: SortOrder
    Id_SubFamilia?: SortOrder
    Estoque_Maximo?: SortOrder
    Estoque_Minimo?: SortOrder
    IDUser?: SortOrder
    Cad_ViaXML?: SortOrder
    Funcao?: SortOrder
    Alterado?: SortOrder
    N_Licenca_ANVISA?: SortOrder
    Id_DCB?: SortOrder
    Fidelidade_Credito?: SortOrder
    Fidelidade_Resgate?: SortOrder
    Dias_Validade?: SortOrder
  }

  export type tb_produtosAvgOrderByAggregateInput = {
    Codigo?: SortOrder
    Id_Departamento?: SortOrder
    Id_Setor?: SortOrder
    Id_Marca?: SortOrder
    Id_Grupo?: SortOrder
    Id_SubGrupo?: SortOrder
    Id_Unidade?: SortOrder
    Id_Familia?: SortOrder
    Peso?: SortOrder
    Capacidade?: SortOrder
    ID_Alocacao?: SortOrder
    Comissao?: SortOrder
    NCM?: SortOrder
    Estoque?: SortOrder
    Estoque_Reservado?: SortOrder
    Estoque_Disponivel?: SortOrder
    Tipo?: SortOrder
    Preco_Atribuido?: SortOrder
    Preco_Venda?: SortOrder
    Preco_Compra?: SortOrder
    Preco_Medio?: SortOrder
    Margem?: SortOrder
    Markup?: SortOrder
    Id_Produto_Vinculado?: SortOrder
    IDEmpresa?: SortOrder
    Id_Importacao_Sistema?: SortOrder
    Id_SubFamilia?: SortOrder
    Estoque_Maximo?: SortOrder
    Estoque_Minimo?: SortOrder
    IDUser?: SortOrder
    Id_DCB?: SortOrder
    Fidelidade_Credito?: SortOrder
    Fidelidade_Resgate?: SortOrder
    Dias_Validade?: SortOrder
  }

  export type tb_produtosMaxOrderByAggregateInput = {
    Codigo?: SortOrder
    Produto?: SortOrder
    Produto_Curto?: SortOrder
    Produto_PDV?: SortOrder
    Complemento?: SortOrder
    Pesquisa_Rapida_PDV?: SortOrder
    Id_Departamento?: SortOrder
    Id_Setor?: SortOrder
    Id_Marca?: SortOrder
    Id_Grupo?: SortOrder
    Id_SubGrupo?: SortOrder
    Id_Unidade?: SortOrder
    Id_Familia?: SortOrder
    Codigo_Interno?: SortOrder
    Peso?: SortOrder
    Capacidade?: SortOrder
    ID_Alocacao?: SortOrder
    Comissao?: SortOrder
    Balanca?: SortOrder
    Tipo_Balanca?: SortOrder
    Descricao_Balanca?: SortOrder
    NCM?: SortOrder
    Genero?: SortOrder
    cEAN_Trib?: SortOrder
    CEST?: SortOrder
    Estoque?: SortOrder
    Estoque_Reservado?: SortOrder
    Estoque_Disponivel?: SortOrder
    Tipo?: SortOrder
    Deposito?: SortOrder
    Fraciona?: SortOrder
    Controle_Lote?: SortOrder
    Requer_Observacao?: SortOrder
    Nao_Controla_Estoque?: SortOrder
    Nunca_Agrupa_Venda?: SortOrder
    Preco_Atribuido?: SortOrder
    Preco_Venda?: SortOrder
    Preco_Compra?: SortOrder
    Preco_Medio?: SortOrder
    Data_Preco_Venda?: SortOrder
    Data_Custo?: SortOrder
    Margem?: SortOrder
    Markup?: SortOrder
    Classificacao?: SortOrder
    Id_Produto_Vinculado?: SortOrder
    Ultima_Venda?: SortOrder
    Ultima_Compra?: SortOrder
    Data_Alterado?: SortOrder
    Ativo?: SortOrder
    RegExcluido?: SortOrder
    IDEmpresa?: SortOrder
    DHU?: SortOrder
    Id_Importacao_Sistema?: SortOrder
    Id_SubFamilia?: SortOrder
    Estoque_Maximo?: SortOrder
    Estoque_Minimo?: SortOrder
    IDUser?: SortOrder
    Cad_ViaXML?: SortOrder
    Funcao?: SortOrder
    Alterado?: SortOrder
    N_Licenca_ANVISA?: SortOrder
    Id_DCB?: SortOrder
    Fidelidade_Credito?: SortOrder
    Fidelidade_Resgate?: SortOrder
    Dias_Validade?: SortOrder
  }

  export type tb_produtosMinOrderByAggregateInput = {
    Codigo?: SortOrder
    Produto?: SortOrder
    Produto_Curto?: SortOrder
    Produto_PDV?: SortOrder
    Complemento?: SortOrder
    Pesquisa_Rapida_PDV?: SortOrder
    Id_Departamento?: SortOrder
    Id_Setor?: SortOrder
    Id_Marca?: SortOrder
    Id_Grupo?: SortOrder
    Id_SubGrupo?: SortOrder
    Id_Unidade?: SortOrder
    Id_Familia?: SortOrder
    Codigo_Interno?: SortOrder
    Peso?: SortOrder
    Capacidade?: SortOrder
    ID_Alocacao?: SortOrder
    Comissao?: SortOrder
    Balanca?: SortOrder
    Tipo_Balanca?: SortOrder
    Descricao_Balanca?: SortOrder
    NCM?: SortOrder
    Genero?: SortOrder
    cEAN_Trib?: SortOrder
    CEST?: SortOrder
    Estoque?: SortOrder
    Estoque_Reservado?: SortOrder
    Estoque_Disponivel?: SortOrder
    Tipo?: SortOrder
    Deposito?: SortOrder
    Fraciona?: SortOrder
    Controle_Lote?: SortOrder
    Requer_Observacao?: SortOrder
    Nao_Controla_Estoque?: SortOrder
    Nunca_Agrupa_Venda?: SortOrder
    Preco_Atribuido?: SortOrder
    Preco_Venda?: SortOrder
    Preco_Compra?: SortOrder
    Preco_Medio?: SortOrder
    Data_Preco_Venda?: SortOrder
    Data_Custo?: SortOrder
    Margem?: SortOrder
    Markup?: SortOrder
    Classificacao?: SortOrder
    Id_Produto_Vinculado?: SortOrder
    Ultima_Venda?: SortOrder
    Ultima_Compra?: SortOrder
    Data_Alterado?: SortOrder
    Ativo?: SortOrder
    RegExcluido?: SortOrder
    IDEmpresa?: SortOrder
    DHU?: SortOrder
    Id_Importacao_Sistema?: SortOrder
    Id_SubFamilia?: SortOrder
    Estoque_Maximo?: SortOrder
    Estoque_Minimo?: SortOrder
    IDUser?: SortOrder
    Cad_ViaXML?: SortOrder
    Funcao?: SortOrder
    Alterado?: SortOrder
    N_Licenca_ANVISA?: SortOrder
    Id_DCB?: SortOrder
    Fidelidade_Credito?: SortOrder
    Fidelidade_Resgate?: SortOrder
    Dias_Validade?: SortOrder
  }

  export type tb_produtosSumOrderByAggregateInput = {
    Codigo?: SortOrder
    Id_Departamento?: SortOrder
    Id_Setor?: SortOrder
    Id_Marca?: SortOrder
    Id_Grupo?: SortOrder
    Id_SubGrupo?: SortOrder
    Id_Unidade?: SortOrder
    Id_Familia?: SortOrder
    Peso?: SortOrder
    Capacidade?: SortOrder
    ID_Alocacao?: SortOrder
    Comissao?: SortOrder
    NCM?: SortOrder
    Estoque?: SortOrder
    Estoque_Reservado?: SortOrder
    Estoque_Disponivel?: SortOrder
    Tipo?: SortOrder
    Preco_Atribuido?: SortOrder
    Preco_Venda?: SortOrder
    Preco_Compra?: SortOrder
    Preco_Medio?: SortOrder
    Margem?: SortOrder
    Markup?: SortOrder
    Id_Produto_Vinculado?: SortOrder
    IDEmpresa?: SortOrder
    Id_Importacao_Sistema?: SortOrder
    Id_SubFamilia?: SortOrder
    Estoque_Maximo?: SortOrder
    Estoque_Minimo?: SortOrder
    IDUser?: SortOrder
    Id_DCB?: SortOrder
    Fidelidade_Credito?: SortOrder
    Fidelidade_Resgate?: SortOrder
    Dias_Validade?: SortOrder
  }

  export type tb_produtos_setorCountOrderByAggregateInput = {
    Codigo?: SortOrder
    Setor?: SortOrder
    Ativo?: SortOrder
    RegExcluido?: SortOrder
    IDEmpresa?: SortOrder
    DHU?: SortOrder
    IDUser?: SortOrder
  }

  export type tb_produtos_setorAvgOrderByAggregateInput = {
    Codigo?: SortOrder
    IDEmpresa?: SortOrder
    IDUser?: SortOrder
  }

  export type tb_produtos_setorMaxOrderByAggregateInput = {
    Codigo?: SortOrder
    Setor?: SortOrder
    Ativo?: SortOrder
    RegExcluido?: SortOrder
    IDEmpresa?: SortOrder
    DHU?: SortOrder
    IDUser?: SortOrder
  }

  export type tb_produtos_setorMinOrderByAggregateInput = {
    Codigo?: SortOrder
    Setor?: SortOrder
    Ativo?: SortOrder
    RegExcluido?: SortOrder
    IDEmpresa?: SortOrder
    DHU?: SortOrder
    IDUser?: SortOrder
  }

  export type tb_produtos_setorSumOrderByAggregateInput = {
    Codigo?: SortOrder
    IDEmpresa?: SortOrder
    IDUser?: SortOrder
  }

  export type tb_comandaCountOrderByAggregateInput = {
    Codigo?: SortOrder
    Ativo?: SortOrder
  }

  export type tb_comandaAvgOrderByAggregateInput = {
    Codigo?: SortOrder
  }

  export type tb_comandaMaxOrderByAggregateInput = {
    Codigo?: SortOrder
    Ativo?: SortOrder
  }

  export type tb_comandaMinOrderByAggregateInput = {
    Codigo?: SortOrder
    Ativo?: SortOrder
  }

  export type tb_comandaSumOrderByAggregateInput = {
    Codigo?: SortOrder
  }

  export type tb_mesaCountOrderByAggregateInput = {
    Codigo?: SortOrder
    Ativo?: SortOrder
  }

  export type tb_mesaAvgOrderByAggregateInput = {
    Codigo?: SortOrder
  }

  export type tb_mesaMaxOrderByAggregateInput = {
    Codigo?: SortOrder
    Ativo?: SortOrder
  }

  export type tb_mesaMinOrderByAggregateInput = {
    Codigo?: SortOrder
    Ativo?: SortOrder
  }

  export type tb_mesaSumOrderByAggregateInput = {
    Codigo?: SortOrder
  }

  export type tb_mesa_comandaCountOrderByAggregateInput = {
    Codigo?: SortOrder
    Id_Mesa?: SortOrder
    Id_Comanda?: SortOrder
  }

  export type tb_mesa_comandaAvgOrderByAggregateInput = {
    Codigo?: SortOrder
    Id_Mesa?: SortOrder
    Id_Comanda?: SortOrder
  }

  export type tb_mesa_comandaMaxOrderByAggregateInput = {
    Codigo?: SortOrder
    Id_Mesa?: SortOrder
    Id_Comanda?: SortOrder
  }

  export type tb_mesa_comandaMinOrderByAggregateInput = {
    Codigo?: SortOrder
    Id_Mesa?: SortOrder
    Id_Comanda?: SortOrder
  }

  export type tb_mesa_comandaSumOrderByAggregateInput = {
    Codigo?: SortOrder
    Id_Mesa?: SortOrder
    Id_Comanda?: SortOrder
  }

  export type tb_pedidoCountOrderByAggregateInput = {
    Codigo?: SortOrder
    ID_Activity?: SortOrder
    Id_Mesa?: SortOrder
    Id_Comanda?: SortOrder
    Importado_ERP?: SortOrder
  }

  export type tb_pedidoAvgOrderByAggregateInput = {
    Codigo?: SortOrder
    ID_Activity?: SortOrder
    Id_Mesa?: SortOrder
    Id_Comanda?: SortOrder
  }

  export type tb_pedidoMaxOrderByAggregateInput = {
    Codigo?: SortOrder
    ID_Activity?: SortOrder
    Id_Mesa?: SortOrder
    Id_Comanda?: SortOrder
    Importado_ERP?: SortOrder
  }

  export type tb_pedidoMinOrderByAggregateInput = {
    Codigo?: SortOrder
    ID_Activity?: SortOrder
    Id_Mesa?: SortOrder
    Id_Comanda?: SortOrder
    Importado_ERP?: SortOrder
  }

  export type tb_pedidoSumOrderByAggregateInput = {
    Codigo?: SortOrder
    ID_Activity?: SortOrder
    Id_Mesa?: SortOrder
    Id_Comanda?: SortOrder
  }

  export type tb_pedido_itemCountOrderByAggregateInput = {
    Codigo?: SortOrder
    Id_Pedido?: SortOrder
    Id_Produto?: SortOrder
    Quantidade?: SortOrder
    Unitario?: SortOrder
    Total?: SortOrder
    Importado_ERP?: SortOrder
  }

  export type tb_pedido_itemAvgOrderByAggregateInput = {
    Codigo?: SortOrder
    Id_Pedido?: SortOrder
    Id_Produto?: SortOrder
    Quantidade?: SortOrder
    Unitario?: SortOrder
    Total?: SortOrder
  }

  export type tb_pedido_itemMaxOrderByAggregateInput = {
    Codigo?: SortOrder
    Id_Pedido?: SortOrder
    Id_Produto?: SortOrder
    Quantidade?: SortOrder
    Unitario?: SortOrder
    Total?: SortOrder
    Importado_ERP?: SortOrder
  }

  export type tb_pedido_itemMinOrderByAggregateInput = {
    Codigo?: SortOrder
    Id_Pedido?: SortOrder
    Id_Produto?: SortOrder
    Quantidade?: SortOrder
    Unitario?: SortOrder
    Total?: SortOrder
    Importado_ERP?: SortOrder
  }

  export type tb_pedido_itemSumOrderByAggregateInput = {
    Codigo?: SortOrder
    Id_Pedido?: SortOrder
    Id_Produto?: SortOrder
    Quantidade?: SortOrder
    Unitario?: SortOrder
    Total?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use tb_pessoasDefaultArgs instead
     */
    export type tb_pessoasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tb_pessoasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tb_produtosDefaultArgs instead
     */
    export type tb_produtosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tb_produtosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tb_produtos_setorDefaultArgs instead
     */
    export type tb_produtos_setorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tb_produtos_setorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tb_comandaDefaultArgs instead
     */
    export type tb_comandaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tb_comandaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tb_mesaDefaultArgs instead
     */
    export type tb_mesaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tb_mesaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tb_mesa_comandaDefaultArgs instead
     */
    export type tb_mesa_comandaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tb_mesa_comandaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tb_pedidoDefaultArgs instead
     */
    export type tb_pedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tb_pedidoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tb_pedido_itemDefaultArgs instead
     */
    export type tb_pedido_itemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tb_pedido_itemDefaultArgs<ExtArgs>

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