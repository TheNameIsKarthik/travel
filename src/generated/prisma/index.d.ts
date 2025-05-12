
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
 * Model UdoUser
 * 
 */
export type UdoUser = $Result.DefaultSelection<Prisma.$UdoUserPayload>
/**
 * Model UdoChat
 * 
 */
export type UdoChat = $Result.DefaultSelection<Prisma.$UdoChatPayload>
/**
 * Model UdoMessage
 * 
 */
export type UdoMessage = $Result.DefaultSelection<Prisma.$UdoMessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UdoUsers
 * const udoUsers = await prisma.udoUser.findMany()
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
   * // Fetch zero or more UdoUsers
   * const udoUsers = await prisma.udoUser.findMany()
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
   * `prisma.udoUser`: Exposes CRUD operations for the **UdoUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UdoUsers
    * const udoUsers = await prisma.udoUser.findMany()
    * ```
    */
  get udoUser(): Prisma.UdoUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.udoChat`: Exposes CRUD operations for the **UdoChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UdoChats
    * const udoChats = await prisma.udoChat.findMany()
    * ```
    */
  get udoChat(): Prisma.UdoChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.udoMessage`: Exposes CRUD operations for the **UdoMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UdoMessages
    * const udoMessages = await prisma.udoMessage.findMany()
    * ```
    */
  get udoMessage(): Prisma.UdoMessageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    UdoUser: 'UdoUser',
    UdoChat: 'UdoChat',
    UdoMessage: 'UdoMessage'
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
      modelProps: "udoUser" | "udoChat" | "udoMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UdoUser: {
        payload: Prisma.$UdoUserPayload<ExtArgs>
        fields: Prisma.UdoUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UdoUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UdoUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoUserPayload>
          }
          findFirst: {
            args: Prisma.UdoUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UdoUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoUserPayload>
          }
          findMany: {
            args: Prisma.UdoUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoUserPayload>[]
          }
          create: {
            args: Prisma.UdoUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoUserPayload>
          }
          createMany: {
            args: Prisma.UdoUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UdoUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoUserPayload>[]
          }
          delete: {
            args: Prisma.UdoUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoUserPayload>
          }
          update: {
            args: Prisma.UdoUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoUserPayload>
          }
          deleteMany: {
            args: Prisma.UdoUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UdoUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UdoUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoUserPayload>[]
          }
          upsert: {
            args: Prisma.UdoUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoUserPayload>
          }
          aggregate: {
            args: Prisma.UdoUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUdoUser>
          }
          groupBy: {
            args: Prisma.UdoUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UdoUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UdoUserCountArgs<ExtArgs>
            result: $Utils.Optional<UdoUserCountAggregateOutputType> | number
          }
        }
      }
      UdoChat: {
        payload: Prisma.$UdoChatPayload<ExtArgs>
        fields: Prisma.UdoChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UdoChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UdoChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoChatPayload>
          }
          findFirst: {
            args: Prisma.UdoChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UdoChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoChatPayload>
          }
          findMany: {
            args: Prisma.UdoChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoChatPayload>[]
          }
          create: {
            args: Prisma.UdoChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoChatPayload>
          }
          createMany: {
            args: Prisma.UdoChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UdoChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoChatPayload>[]
          }
          delete: {
            args: Prisma.UdoChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoChatPayload>
          }
          update: {
            args: Prisma.UdoChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoChatPayload>
          }
          deleteMany: {
            args: Prisma.UdoChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UdoChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UdoChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoChatPayload>[]
          }
          upsert: {
            args: Prisma.UdoChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoChatPayload>
          }
          aggregate: {
            args: Prisma.UdoChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUdoChat>
          }
          groupBy: {
            args: Prisma.UdoChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<UdoChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.UdoChatCountArgs<ExtArgs>
            result: $Utils.Optional<UdoChatCountAggregateOutputType> | number
          }
        }
      }
      UdoMessage: {
        payload: Prisma.$UdoMessagePayload<ExtArgs>
        fields: Prisma.UdoMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UdoMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UdoMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoMessagePayload>
          }
          findFirst: {
            args: Prisma.UdoMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UdoMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoMessagePayload>
          }
          findMany: {
            args: Prisma.UdoMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoMessagePayload>[]
          }
          create: {
            args: Prisma.UdoMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoMessagePayload>
          }
          createMany: {
            args: Prisma.UdoMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UdoMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoMessagePayload>[]
          }
          delete: {
            args: Prisma.UdoMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoMessagePayload>
          }
          update: {
            args: Prisma.UdoMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoMessagePayload>
          }
          deleteMany: {
            args: Prisma.UdoMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UdoMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UdoMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoMessagePayload>[]
          }
          upsert: {
            args: Prisma.UdoMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UdoMessagePayload>
          }
          aggregate: {
            args: Prisma.UdoMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUdoMessage>
          }
          groupBy: {
            args: Prisma.UdoMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<UdoMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.UdoMessageCountArgs<ExtArgs>
            result: $Utils.Optional<UdoMessageCountAggregateOutputType> | number
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
    udoUser?: UdoUserOmit
    udoChat?: UdoChatOmit
    udoMessage?: UdoMessageOmit
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
   * Count Type UdoUserCountOutputType
   */

  export type UdoUserCountOutputType = {
    chats: number
  }

  export type UdoUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | UdoUserCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * UdoUserCountOutputType without action
   */
  export type UdoUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUserCountOutputType
     */
    select?: UdoUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UdoUserCountOutputType without action
   */
  export type UdoUserCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UdoChatWhereInput
  }


  /**
   * Count Type UdoChatCountOutputType
   */

  export type UdoChatCountOutputType = {
    messages: number
  }

  export type UdoChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | UdoChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UdoChatCountOutputType without action
   */
  export type UdoChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChatCountOutputType
     */
    select?: UdoChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UdoChatCountOutputType without action
   */
  export type UdoChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UdoMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UdoUser
   */

  export type AggregateUdoUser = {
    _count: UdoUserCountAggregateOutputType | null
    _min: UdoUserMinAggregateOutputType | null
    _max: UdoUserMaxAggregateOutputType | null
  }

  export type UdoUserMinAggregateOutputType = {
    id: string | null
    phone: string | null
    email: string | null
    type: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UdoUserMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    email: string | null
    type: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UdoUserCountAggregateOutputType = {
    id: number
    phone: number
    email: number
    type: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UdoUserMinAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UdoUserMaxAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UdoUserCountAggregateInputType = {
    id?: true
    phone?: true
    email?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UdoUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UdoUser to aggregate.
     */
    where?: UdoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdoUsers to fetch.
     */
    orderBy?: UdoUserOrderByWithRelationInput | UdoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UdoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdoUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UdoUsers
    **/
    _count?: true | UdoUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UdoUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UdoUserMaxAggregateInputType
  }

  export type GetUdoUserAggregateType<T extends UdoUserAggregateArgs> = {
        [P in keyof T & keyof AggregateUdoUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUdoUser[P]>
      : GetScalarType<T[P], AggregateUdoUser[P]>
  }




  export type UdoUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UdoUserWhereInput
    orderBy?: UdoUserOrderByWithAggregationInput | UdoUserOrderByWithAggregationInput[]
    by: UdoUserScalarFieldEnum[] | UdoUserScalarFieldEnum
    having?: UdoUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UdoUserCountAggregateInputType | true
    _min?: UdoUserMinAggregateInputType
    _max?: UdoUserMaxAggregateInputType
  }

  export type UdoUserGroupByOutputType = {
    id: string
    phone: string | null
    email: string | null
    type: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: UdoUserCountAggregateOutputType | null
    _min: UdoUserMinAggregateOutputType | null
    _max: UdoUserMaxAggregateOutputType | null
  }

  type GetUdoUserGroupByPayload<T extends UdoUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UdoUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UdoUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UdoUserGroupByOutputType[P]>
            : GetScalarType<T[P], UdoUserGroupByOutputType[P]>
        }
      >
    >


  export type UdoUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chats?: boolean | UdoUser$chatsArgs<ExtArgs>
    _count?: boolean | UdoUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["udoUser"]>

  export type UdoUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["udoUser"]>

  export type UdoUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    email?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["udoUser"]>

  export type UdoUserSelectScalar = {
    id?: boolean
    phone?: boolean
    email?: boolean
    type?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UdoUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "email" | "type" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["udoUser"]>
  export type UdoUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | UdoUser$chatsArgs<ExtArgs>
    _count?: boolean | UdoUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UdoUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UdoUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UdoUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UdoUser"
    objects: {
      chats: Prisma.$UdoChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string | null
      email: string | null
      type: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["udoUser"]>
    composites: {}
  }

  type UdoUserGetPayload<S extends boolean | null | undefined | UdoUserDefaultArgs> = $Result.GetResult<Prisma.$UdoUserPayload, S>

  type UdoUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UdoUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UdoUserCountAggregateInputType | true
    }

  export interface UdoUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UdoUser'], meta: { name: 'UdoUser' } }
    /**
     * Find zero or one UdoUser that matches the filter.
     * @param {UdoUserFindUniqueArgs} args - Arguments to find a UdoUser
     * @example
     * // Get one UdoUser
     * const udoUser = await prisma.udoUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UdoUserFindUniqueArgs>(args: SelectSubset<T, UdoUserFindUniqueArgs<ExtArgs>>): Prisma__UdoUserClient<$Result.GetResult<Prisma.$UdoUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UdoUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UdoUserFindUniqueOrThrowArgs} args - Arguments to find a UdoUser
     * @example
     * // Get one UdoUser
     * const udoUser = await prisma.udoUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UdoUserFindUniqueOrThrowArgs>(args: SelectSubset<T, UdoUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UdoUserClient<$Result.GetResult<Prisma.$UdoUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UdoUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoUserFindFirstArgs} args - Arguments to find a UdoUser
     * @example
     * // Get one UdoUser
     * const udoUser = await prisma.udoUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UdoUserFindFirstArgs>(args?: SelectSubset<T, UdoUserFindFirstArgs<ExtArgs>>): Prisma__UdoUserClient<$Result.GetResult<Prisma.$UdoUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UdoUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoUserFindFirstOrThrowArgs} args - Arguments to find a UdoUser
     * @example
     * // Get one UdoUser
     * const udoUser = await prisma.udoUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UdoUserFindFirstOrThrowArgs>(args?: SelectSubset<T, UdoUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UdoUserClient<$Result.GetResult<Prisma.$UdoUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UdoUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UdoUsers
     * const udoUsers = await prisma.udoUser.findMany()
     * 
     * // Get first 10 UdoUsers
     * const udoUsers = await prisma.udoUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const udoUserWithIdOnly = await prisma.udoUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UdoUserFindManyArgs>(args?: SelectSubset<T, UdoUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdoUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UdoUser.
     * @param {UdoUserCreateArgs} args - Arguments to create a UdoUser.
     * @example
     * // Create one UdoUser
     * const UdoUser = await prisma.udoUser.create({
     *   data: {
     *     // ... data to create a UdoUser
     *   }
     * })
     * 
     */
    create<T extends UdoUserCreateArgs>(args: SelectSubset<T, UdoUserCreateArgs<ExtArgs>>): Prisma__UdoUserClient<$Result.GetResult<Prisma.$UdoUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UdoUsers.
     * @param {UdoUserCreateManyArgs} args - Arguments to create many UdoUsers.
     * @example
     * // Create many UdoUsers
     * const udoUser = await prisma.udoUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UdoUserCreateManyArgs>(args?: SelectSubset<T, UdoUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UdoUsers and returns the data saved in the database.
     * @param {UdoUserCreateManyAndReturnArgs} args - Arguments to create many UdoUsers.
     * @example
     * // Create many UdoUsers
     * const udoUser = await prisma.udoUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UdoUsers and only return the `id`
     * const udoUserWithIdOnly = await prisma.udoUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UdoUserCreateManyAndReturnArgs>(args?: SelectSubset<T, UdoUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdoUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UdoUser.
     * @param {UdoUserDeleteArgs} args - Arguments to delete one UdoUser.
     * @example
     * // Delete one UdoUser
     * const UdoUser = await prisma.udoUser.delete({
     *   where: {
     *     // ... filter to delete one UdoUser
     *   }
     * })
     * 
     */
    delete<T extends UdoUserDeleteArgs>(args: SelectSubset<T, UdoUserDeleteArgs<ExtArgs>>): Prisma__UdoUserClient<$Result.GetResult<Prisma.$UdoUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UdoUser.
     * @param {UdoUserUpdateArgs} args - Arguments to update one UdoUser.
     * @example
     * // Update one UdoUser
     * const udoUser = await prisma.udoUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UdoUserUpdateArgs>(args: SelectSubset<T, UdoUserUpdateArgs<ExtArgs>>): Prisma__UdoUserClient<$Result.GetResult<Prisma.$UdoUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UdoUsers.
     * @param {UdoUserDeleteManyArgs} args - Arguments to filter UdoUsers to delete.
     * @example
     * // Delete a few UdoUsers
     * const { count } = await prisma.udoUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UdoUserDeleteManyArgs>(args?: SelectSubset<T, UdoUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UdoUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UdoUsers
     * const udoUser = await prisma.udoUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UdoUserUpdateManyArgs>(args: SelectSubset<T, UdoUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UdoUsers and returns the data updated in the database.
     * @param {UdoUserUpdateManyAndReturnArgs} args - Arguments to update many UdoUsers.
     * @example
     * // Update many UdoUsers
     * const udoUser = await prisma.udoUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UdoUsers and only return the `id`
     * const udoUserWithIdOnly = await prisma.udoUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends UdoUserUpdateManyAndReturnArgs>(args: SelectSubset<T, UdoUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdoUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UdoUser.
     * @param {UdoUserUpsertArgs} args - Arguments to update or create a UdoUser.
     * @example
     * // Update or create a UdoUser
     * const udoUser = await prisma.udoUser.upsert({
     *   create: {
     *     // ... data to create a UdoUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UdoUser we want to update
     *   }
     * })
     */
    upsert<T extends UdoUserUpsertArgs>(args: SelectSubset<T, UdoUserUpsertArgs<ExtArgs>>): Prisma__UdoUserClient<$Result.GetResult<Prisma.$UdoUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UdoUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoUserCountArgs} args - Arguments to filter UdoUsers to count.
     * @example
     * // Count the number of UdoUsers
     * const count = await prisma.udoUser.count({
     *   where: {
     *     // ... the filter for the UdoUsers we want to count
     *   }
     * })
    **/
    count<T extends UdoUserCountArgs>(
      args?: Subset<T, UdoUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UdoUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UdoUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UdoUserAggregateArgs>(args: Subset<T, UdoUserAggregateArgs>): Prisma.PrismaPromise<GetUdoUserAggregateType<T>>

    /**
     * Group by UdoUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoUserGroupByArgs} args - Group by arguments.
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
      T extends UdoUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UdoUserGroupByArgs['orderBy'] }
        : { orderBy?: UdoUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UdoUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUdoUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UdoUser model
   */
  readonly fields: UdoUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UdoUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UdoUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chats<T extends UdoUser$chatsArgs<ExtArgs> = {}>(args?: Subset<T, UdoUser$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UdoUser model
   */
  interface UdoUserFieldRefs {
    readonly id: FieldRef<"UdoUser", 'String'>
    readonly phone: FieldRef<"UdoUser", 'String'>
    readonly email: FieldRef<"UdoUser", 'String'>
    readonly type: FieldRef<"UdoUser", 'String'>
    readonly status: FieldRef<"UdoUser", 'String'>
    readonly createdAt: FieldRef<"UdoUser", 'DateTime'>
    readonly updatedAt: FieldRef<"UdoUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UdoUser findUnique
   */
  export type UdoUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUser
     */
    select?: UdoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoUser
     */
    omit?: UdoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoUserInclude<ExtArgs> | null
    /**
     * Filter, which UdoUser to fetch.
     */
    where: UdoUserWhereUniqueInput
  }

  /**
   * UdoUser findUniqueOrThrow
   */
  export type UdoUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUser
     */
    select?: UdoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoUser
     */
    omit?: UdoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoUserInclude<ExtArgs> | null
    /**
     * Filter, which UdoUser to fetch.
     */
    where: UdoUserWhereUniqueInput
  }

  /**
   * UdoUser findFirst
   */
  export type UdoUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUser
     */
    select?: UdoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoUser
     */
    omit?: UdoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoUserInclude<ExtArgs> | null
    /**
     * Filter, which UdoUser to fetch.
     */
    where?: UdoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdoUsers to fetch.
     */
    orderBy?: UdoUserOrderByWithRelationInput | UdoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UdoUsers.
     */
    cursor?: UdoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdoUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UdoUsers.
     */
    distinct?: UdoUserScalarFieldEnum | UdoUserScalarFieldEnum[]
  }

  /**
   * UdoUser findFirstOrThrow
   */
  export type UdoUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUser
     */
    select?: UdoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoUser
     */
    omit?: UdoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoUserInclude<ExtArgs> | null
    /**
     * Filter, which UdoUser to fetch.
     */
    where?: UdoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdoUsers to fetch.
     */
    orderBy?: UdoUserOrderByWithRelationInput | UdoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UdoUsers.
     */
    cursor?: UdoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdoUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UdoUsers.
     */
    distinct?: UdoUserScalarFieldEnum | UdoUserScalarFieldEnum[]
  }

  /**
   * UdoUser findMany
   */
  export type UdoUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUser
     */
    select?: UdoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoUser
     */
    omit?: UdoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoUserInclude<ExtArgs> | null
    /**
     * Filter, which UdoUsers to fetch.
     */
    where?: UdoUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdoUsers to fetch.
     */
    orderBy?: UdoUserOrderByWithRelationInput | UdoUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UdoUsers.
     */
    cursor?: UdoUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdoUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdoUsers.
     */
    skip?: number
    distinct?: UdoUserScalarFieldEnum | UdoUserScalarFieldEnum[]
  }

  /**
   * UdoUser create
   */
  export type UdoUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUser
     */
    select?: UdoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoUser
     */
    omit?: UdoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoUserInclude<ExtArgs> | null
    /**
     * The data needed to create a UdoUser.
     */
    data: XOR<UdoUserCreateInput, UdoUserUncheckedCreateInput>
  }

  /**
   * UdoUser createMany
   */
  export type UdoUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UdoUsers.
     */
    data: UdoUserCreateManyInput | UdoUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UdoUser createManyAndReturn
   */
  export type UdoUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUser
     */
    select?: UdoUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UdoUser
     */
    omit?: UdoUserOmit<ExtArgs> | null
    /**
     * The data used to create many UdoUsers.
     */
    data: UdoUserCreateManyInput | UdoUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UdoUser update
   */
  export type UdoUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUser
     */
    select?: UdoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoUser
     */
    omit?: UdoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoUserInclude<ExtArgs> | null
    /**
     * The data needed to update a UdoUser.
     */
    data: XOR<UdoUserUpdateInput, UdoUserUncheckedUpdateInput>
    /**
     * Choose, which UdoUser to update.
     */
    where: UdoUserWhereUniqueInput
  }

  /**
   * UdoUser updateMany
   */
  export type UdoUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UdoUsers.
     */
    data: XOR<UdoUserUpdateManyMutationInput, UdoUserUncheckedUpdateManyInput>
    /**
     * Filter which UdoUsers to update
     */
    where?: UdoUserWhereInput
    /**
     * Limit how many UdoUsers to update.
     */
    limit?: number
  }

  /**
   * UdoUser updateManyAndReturn
   */
  export type UdoUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUser
     */
    select?: UdoUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UdoUser
     */
    omit?: UdoUserOmit<ExtArgs> | null
    /**
     * The data used to update UdoUsers.
     */
    data: XOR<UdoUserUpdateManyMutationInput, UdoUserUncheckedUpdateManyInput>
    /**
     * Filter which UdoUsers to update
     */
    where?: UdoUserWhereInput
    /**
     * Limit how many UdoUsers to update.
     */
    limit?: number
  }

  /**
   * UdoUser upsert
   */
  export type UdoUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUser
     */
    select?: UdoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoUser
     */
    omit?: UdoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoUserInclude<ExtArgs> | null
    /**
     * The filter to search for the UdoUser to update in case it exists.
     */
    where: UdoUserWhereUniqueInput
    /**
     * In case the UdoUser found by the `where` argument doesn't exist, create a new UdoUser with this data.
     */
    create: XOR<UdoUserCreateInput, UdoUserUncheckedCreateInput>
    /**
     * In case the UdoUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UdoUserUpdateInput, UdoUserUncheckedUpdateInput>
  }

  /**
   * UdoUser delete
   */
  export type UdoUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUser
     */
    select?: UdoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoUser
     */
    omit?: UdoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoUserInclude<ExtArgs> | null
    /**
     * Filter which UdoUser to delete.
     */
    where: UdoUserWhereUniqueInput
  }

  /**
   * UdoUser deleteMany
   */
  export type UdoUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UdoUsers to delete
     */
    where?: UdoUserWhereInput
    /**
     * Limit how many UdoUsers to delete.
     */
    limit?: number
  }

  /**
   * UdoUser.chats
   */
  export type UdoUser$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatInclude<ExtArgs> | null
    where?: UdoChatWhereInput
    orderBy?: UdoChatOrderByWithRelationInput | UdoChatOrderByWithRelationInput[]
    cursor?: UdoChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UdoChatScalarFieldEnum | UdoChatScalarFieldEnum[]
  }

  /**
   * UdoUser without action
   */
  export type UdoUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoUser
     */
    select?: UdoUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoUser
     */
    omit?: UdoUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoUserInclude<ExtArgs> | null
  }


  /**
   * Model UdoChat
   */

  export type AggregateUdoChat = {
    _count: UdoChatCountAggregateOutputType | null
    _min: UdoChatMinAggregateOutputType | null
    _max: UdoChatMaxAggregateOutputType | null
  }

  export type UdoChatMinAggregateOutputType = {
    id: string | null
    title: string | null
    favorite: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UdoChatMaxAggregateOutputType = {
    id: string | null
    title: string | null
    favorite: boolean | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UdoChatCountAggregateOutputType = {
    id: number
    title: number
    favorite: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UdoChatMinAggregateInputType = {
    id?: true
    title?: true
    favorite?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UdoChatMaxAggregateInputType = {
    id?: true
    title?: true
    favorite?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UdoChatCountAggregateInputType = {
    id?: true
    title?: true
    favorite?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UdoChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UdoChat to aggregate.
     */
    where?: UdoChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdoChats to fetch.
     */
    orderBy?: UdoChatOrderByWithRelationInput | UdoChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UdoChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdoChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdoChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UdoChats
    **/
    _count?: true | UdoChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UdoChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UdoChatMaxAggregateInputType
  }

  export type GetUdoChatAggregateType<T extends UdoChatAggregateArgs> = {
        [P in keyof T & keyof AggregateUdoChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUdoChat[P]>
      : GetScalarType<T[P], AggregateUdoChat[P]>
  }




  export type UdoChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UdoChatWhereInput
    orderBy?: UdoChatOrderByWithAggregationInput | UdoChatOrderByWithAggregationInput[]
    by: UdoChatScalarFieldEnum[] | UdoChatScalarFieldEnum
    having?: UdoChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UdoChatCountAggregateInputType | true
    _min?: UdoChatMinAggregateInputType
    _max?: UdoChatMaxAggregateInputType
  }

  export type UdoChatGroupByOutputType = {
    id: string
    title: string
    favorite: boolean
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: UdoChatCountAggregateOutputType | null
    _min: UdoChatMinAggregateOutputType | null
    _max: UdoChatMaxAggregateOutputType | null
  }

  type GetUdoChatGroupByPayload<T extends UdoChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UdoChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UdoChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UdoChatGroupByOutputType[P]>
            : GetScalarType<T[P], UdoChatGroupByOutputType[P]>
        }
      >
    >


  export type UdoChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    favorite?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UdoUserDefaultArgs<ExtArgs>
    messages?: boolean | UdoChat$messagesArgs<ExtArgs>
    _count?: boolean | UdoChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["udoChat"]>

  export type UdoChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    favorite?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UdoUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["udoChat"]>

  export type UdoChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    favorite?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UdoUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["udoChat"]>

  export type UdoChatSelectScalar = {
    id?: boolean
    title?: boolean
    favorite?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UdoChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "favorite" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["udoChat"]>
  export type UdoChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UdoUserDefaultArgs<ExtArgs>
    messages?: boolean | UdoChat$messagesArgs<ExtArgs>
    _count?: boolean | UdoChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UdoChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UdoUserDefaultArgs<ExtArgs>
  }
  export type UdoChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UdoUserDefaultArgs<ExtArgs>
  }

  export type $UdoChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UdoChat"
    objects: {
      user: Prisma.$UdoUserPayload<ExtArgs>
      messages: Prisma.$UdoMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      favorite: boolean
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["udoChat"]>
    composites: {}
  }

  type UdoChatGetPayload<S extends boolean | null | undefined | UdoChatDefaultArgs> = $Result.GetResult<Prisma.$UdoChatPayload, S>

  type UdoChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UdoChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UdoChatCountAggregateInputType | true
    }

  export interface UdoChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UdoChat'], meta: { name: 'UdoChat' } }
    /**
     * Find zero or one UdoChat that matches the filter.
     * @param {UdoChatFindUniqueArgs} args - Arguments to find a UdoChat
     * @example
     * // Get one UdoChat
     * const udoChat = await prisma.udoChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UdoChatFindUniqueArgs>(args: SelectSubset<T, UdoChatFindUniqueArgs<ExtArgs>>): Prisma__UdoChatClient<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UdoChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UdoChatFindUniqueOrThrowArgs} args - Arguments to find a UdoChat
     * @example
     * // Get one UdoChat
     * const udoChat = await prisma.udoChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UdoChatFindUniqueOrThrowArgs>(args: SelectSubset<T, UdoChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UdoChatClient<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UdoChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoChatFindFirstArgs} args - Arguments to find a UdoChat
     * @example
     * // Get one UdoChat
     * const udoChat = await prisma.udoChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UdoChatFindFirstArgs>(args?: SelectSubset<T, UdoChatFindFirstArgs<ExtArgs>>): Prisma__UdoChatClient<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UdoChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoChatFindFirstOrThrowArgs} args - Arguments to find a UdoChat
     * @example
     * // Get one UdoChat
     * const udoChat = await prisma.udoChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UdoChatFindFirstOrThrowArgs>(args?: SelectSubset<T, UdoChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__UdoChatClient<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UdoChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UdoChats
     * const udoChats = await prisma.udoChat.findMany()
     * 
     * // Get first 10 UdoChats
     * const udoChats = await prisma.udoChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const udoChatWithIdOnly = await prisma.udoChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UdoChatFindManyArgs>(args?: SelectSubset<T, UdoChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UdoChat.
     * @param {UdoChatCreateArgs} args - Arguments to create a UdoChat.
     * @example
     * // Create one UdoChat
     * const UdoChat = await prisma.udoChat.create({
     *   data: {
     *     // ... data to create a UdoChat
     *   }
     * })
     * 
     */
    create<T extends UdoChatCreateArgs>(args: SelectSubset<T, UdoChatCreateArgs<ExtArgs>>): Prisma__UdoChatClient<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UdoChats.
     * @param {UdoChatCreateManyArgs} args - Arguments to create many UdoChats.
     * @example
     * // Create many UdoChats
     * const udoChat = await prisma.udoChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UdoChatCreateManyArgs>(args?: SelectSubset<T, UdoChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UdoChats and returns the data saved in the database.
     * @param {UdoChatCreateManyAndReturnArgs} args - Arguments to create many UdoChats.
     * @example
     * // Create many UdoChats
     * const udoChat = await prisma.udoChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UdoChats and only return the `id`
     * const udoChatWithIdOnly = await prisma.udoChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UdoChatCreateManyAndReturnArgs>(args?: SelectSubset<T, UdoChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UdoChat.
     * @param {UdoChatDeleteArgs} args - Arguments to delete one UdoChat.
     * @example
     * // Delete one UdoChat
     * const UdoChat = await prisma.udoChat.delete({
     *   where: {
     *     // ... filter to delete one UdoChat
     *   }
     * })
     * 
     */
    delete<T extends UdoChatDeleteArgs>(args: SelectSubset<T, UdoChatDeleteArgs<ExtArgs>>): Prisma__UdoChatClient<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UdoChat.
     * @param {UdoChatUpdateArgs} args - Arguments to update one UdoChat.
     * @example
     * // Update one UdoChat
     * const udoChat = await prisma.udoChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UdoChatUpdateArgs>(args: SelectSubset<T, UdoChatUpdateArgs<ExtArgs>>): Prisma__UdoChatClient<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UdoChats.
     * @param {UdoChatDeleteManyArgs} args - Arguments to filter UdoChats to delete.
     * @example
     * // Delete a few UdoChats
     * const { count } = await prisma.udoChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UdoChatDeleteManyArgs>(args?: SelectSubset<T, UdoChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UdoChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UdoChats
     * const udoChat = await prisma.udoChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UdoChatUpdateManyArgs>(args: SelectSubset<T, UdoChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UdoChats and returns the data updated in the database.
     * @param {UdoChatUpdateManyAndReturnArgs} args - Arguments to update many UdoChats.
     * @example
     * // Update many UdoChats
     * const udoChat = await prisma.udoChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UdoChats and only return the `id`
     * const udoChatWithIdOnly = await prisma.udoChat.updateManyAndReturn({
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
    updateManyAndReturn<T extends UdoChatUpdateManyAndReturnArgs>(args: SelectSubset<T, UdoChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UdoChat.
     * @param {UdoChatUpsertArgs} args - Arguments to update or create a UdoChat.
     * @example
     * // Update or create a UdoChat
     * const udoChat = await prisma.udoChat.upsert({
     *   create: {
     *     // ... data to create a UdoChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UdoChat we want to update
     *   }
     * })
     */
    upsert<T extends UdoChatUpsertArgs>(args: SelectSubset<T, UdoChatUpsertArgs<ExtArgs>>): Prisma__UdoChatClient<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UdoChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoChatCountArgs} args - Arguments to filter UdoChats to count.
     * @example
     * // Count the number of UdoChats
     * const count = await prisma.udoChat.count({
     *   where: {
     *     // ... the filter for the UdoChats we want to count
     *   }
     * })
    **/
    count<T extends UdoChatCountArgs>(
      args?: Subset<T, UdoChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UdoChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UdoChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UdoChatAggregateArgs>(args: Subset<T, UdoChatAggregateArgs>): Prisma.PrismaPromise<GetUdoChatAggregateType<T>>

    /**
     * Group by UdoChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoChatGroupByArgs} args - Group by arguments.
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
      T extends UdoChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UdoChatGroupByArgs['orderBy'] }
        : { orderBy?: UdoChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UdoChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUdoChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UdoChat model
   */
  readonly fields: UdoChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UdoChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UdoChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UdoUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UdoUserDefaultArgs<ExtArgs>>): Prisma__UdoUserClient<$Result.GetResult<Prisma.$UdoUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends UdoChat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, UdoChat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdoMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the UdoChat model
   */
  interface UdoChatFieldRefs {
    readonly id: FieldRef<"UdoChat", 'String'>
    readonly title: FieldRef<"UdoChat", 'String'>
    readonly favorite: FieldRef<"UdoChat", 'Boolean'>
    readonly userId: FieldRef<"UdoChat", 'String'>
    readonly createdAt: FieldRef<"UdoChat", 'DateTime'>
    readonly updatedAt: FieldRef<"UdoChat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UdoChat findUnique
   */
  export type UdoChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatInclude<ExtArgs> | null
    /**
     * Filter, which UdoChat to fetch.
     */
    where: UdoChatWhereUniqueInput
  }

  /**
   * UdoChat findUniqueOrThrow
   */
  export type UdoChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatInclude<ExtArgs> | null
    /**
     * Filter, which UdoChat to fetch.
     */
    where: UdoChatWhereUniqueInput
  }

  /**
   * UdoChat findFirst
   */
  export type UdoChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatInclude<ExtArgs> | null
    /**
     * Filter, which UdoChat to fetch.
     */
    where?: UdoChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdoChats to fetch.
     */
    orderBy?: UdoChatOrderByWithRelationInput | UdoChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UdoChats.
     */
    cursor?: UdoChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdoChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdoChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UdoChats.
     */
    distinct?: UdoChatScalarFieldEnum | UdoChatScalarFieldEnum[]
  }

  /**
   * UdoChat findFirstOrThrow
   */
  export type UdoChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatInclude<ExtArgs> | null
    /**
     * Filter, which UdoChat to fetch.
     */
    where?: UdoChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdoChats to fetch.
     */
    orderBy?: UdoChatOrderByWithRelationInput | UdoChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UdoChats.
     */
    cursor?: UdoChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdoChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdoChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UdoChats.
     */
    distinct?: UdoChatScalarFieldEnum | UdoChatScalarFieldEnum[]
  }

  /**
   * UdoChat findMany
   */
  export type UdoChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatInclude<ExtArgs> | null
    /**
     * Filter, which UdoChats to fetch.
     */
    where?: UdoChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdoChats to fetch.
     */
    orderBy?: UdoChatOrderByWithRelationInput | UdoChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UdoChats.
     */
    cursor?: UdoChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdoChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdoChats.
     */
    skip?: number
    distinct?: UdoChatScalarFieldEnum | UdoChatScalarFieldEnum[]
  }

  /**
   * UdoChat create
   */
  export type UdoChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatInclude<ExtArgs> | null
    /**
     * The data needed to create a UdoChat.
     */
    data: XOR<UdoChatCreateInput, UdoChatUncheckedCreateInput>
  }

  /**
   * UdoChat createMany
   */
  export type UdoChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UdoChats.
     */
    data: UdoChatCreateManyInput | UdoChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UdoChat createManyAndReturn
   */
  export type UdoChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * The data used to create many UdoChats.
     */
    data: UdoChatCreateManyInput | UdoChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UdoChat update
   */
  export type UdoChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatInclude<ExtArgs> | null
    /**
     * The data needed to update a UdoChat.
     */
    data: XOR<UdoChatUpdateInput, UdoChatUncheckedUpdateInput>
    /**
     * Choose, which UdoChat to update.
     */
    where: UdoChatWhereUniqueInput
  }

  /**
   * UdoChat updateMany
   */
  export type UdoChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UdoChats.
     */
    data: XOR<UdoChatUpdateManyMutationInput, UdoChatUncheckedUpdateManyInput>
    /**
     * Filter which UdoChats to update
     */
    where?: UdoChatWhereInput
    /**
     * Limit how many UdoChats to update.
     */
    limit?: number
  }

  /**
   * UdoChat updateManyAndReturn
   */
  export type UdoChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * The data used to update UdoChats.
     */
    data: XOR<UdoChatUpdateManyMutationInput, UdoChatUncheckedUpdateManyInput>
    /**
     * Filter which UdoChats to update
     */
    where?: UdoChatWhereInput
    /**
     * Limit how many UdoChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UdoChat upsert
   */
  export type UdoChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatInclude<ExtArgs> | null
    /**
     * The filter to search for the UdoChat to update in case it exists.
     */
    where: UdoChatWhereUniqueInput
    /**
     * In case the UdoChat found by the `where` argument doesn't exist, create a new UdoChat with this data.
     */
    create: XOR<UdoChatCreateInput, UdoChatUncheckedCreateInput>
    /**
     * In case the UdoChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UdoChatUpdateInput, UdoChatUncheckedUpdateInput>
  }

  /**
   * UdoChat delete
   */
  export type UdoChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatInclude<ExtArgs> | null
    /**
     * Filter which UdoChat to delete.
     */
    where: UdoChatWhereUniqueInput
  }

  /**
   * UdoChat deleteMany
   */
  export type UdoChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UdoChats to delete
     */
    where?: UdoChatWhereInput
    /**
     * Limit how many UdoChats to delete.
     */
    limit?: number
  }

  /**
   * UdoChat.messages
   */
  export type UdoChat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageInclude<ExtArgs> | null
    where?: UdoMessageWhereInput
    orderBy?: UdoMessageOrderByWithRelationInput | UdoMessageOrderByWithRelationInput[]
    cursor?: UdoMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UdoMessageScalarFieldEnum | UdoMessageScalarFieldEnum[]
  }

  /**
   * UdoChat without action
   */
  export type UdoChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoChat
     */
    select?: UdoChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoChat
     */
    omit?: UdoChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoChatInclude<ExtArgs> | null
  }


  /**
   * Model UdoMessage
   */

  export type AggregateUdoMessage = {
    _count: UdoMessageCountAggregateOutputType | null
    _min: UdoMessageMinAggregateOutputType | null
    _max: UdoMessageMaxAggregateOutputType | null
  }

  export type UdoMessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    role: string | null
    chatId: string | null
    createdAt: Date | null
  }

  export type UdoMessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    role: string | null
    chatId: string | null
    createdAt: Date | null
  }

  export type UdoMessageCountAggregateOutputType = {
    id: number
    content: number
    role: number
    chatId: number
    createdAt: number
    _all: number
  }


  export type UdoMessageMinAggregateInputType = {
    id?: true
    content?: true
    role?: true
    chatId?: true
    createdAt?: true
  }

  export type UdoMessageMaxAggregateInputType = {
    id?: true
    content?: true
    role?: true
    chatId?: true
    createdAt?: true
  }

  export type UdoMessageCountAggregateInputType = {
    id?: true
    content?: true
    role?: true
    chatId?: true
    createdAt?: true
    _all?: true
  }

  export type UdoMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UdoMessage to aggregate.
     */
    where?: UdoMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdoMessages to fetch.
     */
    orderBy?: UdoMessageOrderByWithRelationInput | UdoMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UdoMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdoMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdoMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UdoMessages
    **/
    _count?: true | UdoMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UdoMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UdoMessageMaxAggregateInputType
  }

  export type GetUdoMessageAggregateType<T extends UdoMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateUdoMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUdoMessage[P]>
      : GetScalarType<T[P], AggregateUdoMessage[P]>
  }




  export type UdoMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UdoMessageWhereInput
    orderBy?: UdoMessageOrderByWithAggregationInput | UdoMessageOrderByWithAggregationInput[]
    by: UdoMessageScalarFieldEnum[] | UdoMessageScalarFieldEnum
    having?: UdoMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UdoMessageCountAggregateInputType | true
    _min?: UdoMessageMinAggregateInputType
    _max?: UdoMessageMaxAggregateInputType
  }

  export type UdoMessageGroupByOutputType = {
    id: string
    content: string
    role: string
    chatId: string
    createdAt: Date
    _count: UdoMessageCountAggregateOutputType | null
    _min: UdoMessageMinAggregateOutputType | null
    _max: UdoMessageMaxAggregateOutputType | null
  }

  type GetUdoMessageGroupByPayload<T extends UdoMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UdoMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UdoMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UdoMessageGroupByOutputType[P]>
            : GetScalarType<T[P], UdoMessageGroupByOutputType[P]>
        }
      >
    >


  export type UdoMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    role?: boolean
    chatId?: boolean
    createdAt?: boolean
    chat?: boolean | UdoChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["udoMessage"]>

  export type UdoMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    role?: boolean
    chatId?: boolean
    createdAt?: boolean
    chat?: boolean | UdoChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["udoMessage"]>

  export type UdoMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    role?: boolean
    chatId?: boolean
    createdAt?: boolean
    chat?: boolean | UdoChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["udoMessage"]>

  export type UdoMessageSelectScalar = {
    id?: boolean
    content?: boolean
    role?: boolean
    chatId?: boolean
    createdAt?: boolean
  }

  export type UdoMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "role" | "chatId" | "createdAt", ExtArgs["result"]["udoMessage"]>
  export type UdoMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | UdoChatDefaultArgs<ExtArgs>
  }
  export type UdoMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | UdoChatDefaultArgs<ExtArgs>
  }
  export type UdoMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | UdoChatDefaultArgs<ExtArgs>
  }

  export type $UdoMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UdoMessage"
    objects: {
      chat: Prisma.$UdoChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      role: string
      chatId: string
      createdAt: Date
    }, ExtArgs["result"]["udoMessage"]>
    composites: {}
  }

  type UdoMessageGetPayload<S extends boolean | null | undefined | UdoMessageDefaultArgs> = $Result.GetResult<Prisma.$UdoMessagePayload, S>

  type UdoMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UdoMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UdoMessageCountAggregateInputType | true
    }

  export interface UdoMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UdoMessage'], meta: { name: 'UdoMessage' } }
    /**
     * Find zero or one UdoMessage that matches the filter.
     * @param {UdoMessageFindUniqueArgs} args - Arguments to find a UdoMessage
     * @example
     * // Get one UdoMessage
     * const udoMessage = await prisma.udoMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UdoMessageFindUniqueArgs>(args: SelectSubset<T, UdoMessageFindUniqueArgs<ExtArgs>>): Prisma__UdoMessageClient<$Result.GetResult<Prisma.$UdoMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UdoMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UdoMessageFindUniqueOrThrowArgs} args - Arguments to find a UdoMessage
     * @example
     * // Get one UdoMessage
     * const udoMessage = await prisma.udoMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UdoMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, UdoMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UdoMessageClient<$Result.GetResult<Prisma.$UdoMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UdoMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoMessageFindFirstArgs} args - Arguments to find a UdoMessage
     * @example
     * // Get one UdoMessage
     * const udoMessage = await prisma.udoMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UdoMessageFindFirstArgs>(args?: SelectSubset<T, UdoMessageFindFirstArgs<ExtArgs>>): Prisma__UdoMessageClient<$Result.GetResult<Prisma.$UdoMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UdoMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoMessageFindFirstOrThrowArgs} args - Arguments to find a UdoMessage
     * @example
     * // Get one UdoMessage
     * const udoMessage = await prisma.udoMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UdoMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, UdoMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__UdoMessageClient<$Result.GetResult<Prisma.$UdoMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UdoMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UdoMessages
     * const udoMessages = await prisma.udoMessage.findMany()
     * 
     * // Get first 10 UdoMessages
     * const udoMessages = await prisma.udoMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const udoMessageWithIdOnly = await prisma.udoMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UdoMessageFindManyArgs>(args?: SelectSubset<T, UdoMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdoMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UdoMessage.
     * @param {UdoMessageCreateArgs} args - Arguments to create a UdoMessage.
     * @example
     * // Create one UdoMessage
     * const UdoMessage = await prisma.udoMessage.create({
     *   data: {
     *     // ... data to create a UdoMessage
     *   }
     * })
     * 
     */
    create<T extends UdoMessageCreateArgs>(args: SelectSubset<T, UdoMessageCreateArgs<ExtArgs>>): Prisma__UdoMessageClient<$Result.GetResult<Prisma.$UdoMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UdoMessages.
     * @param {UdoMessageCreateManyArgs} args - Arguments to create many UdoMessages.
     * @example
     * // Create many UdoMessages
     * const udoMessage = await prisma.udoMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UdoMessageCreateManyArgs>(args?: SelectSubset<T, UdoMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UdoMessages and returns the data saved in the database.
     * @param {UdoMessageCreateManyAndReturnArgs} args - Arguments to create many UdoMessages.
     * @example
     * // Create many UdoMessages
     * const udoMessage = await prisma.udoMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UdoMessages and only return the `id`
     * const udoMessageWithIdOnly = await prisma.udoMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UdoMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, UdoMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdoMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UdoMessage.
     * @param {UdoMessageDeleteArgs} args - Arguments to delete one UdoMessage.
     * @example
     * // Delete one UdoMessage
     * const UdoMessage = await prisma.udoMessage.delete({
     *   where: {
     *     // ... filter to delete one UdoMessage
     *   }
     * })
     * 
     */
    delete<T extends UdoMessageDeleteArgs>(args: SelectSubset<T, UdoMessageDeleteArgs<ExtArgs>>): Prisma__UdoMessageClient<$Result.GetResult<Prisma.$UdoMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UdoMessage.
     * @param {UdoMessageUpdateArgs} args - Arguments to update one UdoMessage.
     * @example
     * // Update one UdoMessage
     * const udoMessage = await prisma.udoMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UdoMessageUpdateArgs>(args: SelectSubset<T, UdoMessageUpdateArgs<ExtArgs>>): Prisma__UdoMessageClient<$Result.GetResult<Prisma.$UdoMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UdoMessages.
     * @param {UdoMessageDeleteManyArgs} args - Arguments to filter UdoMessages to delete.
     * @example
     * // Delete a few UdoMessages
     * const { count } = await prisma.udoMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UdoMessageDeleteManyArgs>(args?: SelectSubset<T, UdoMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UdoMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UdoMessages
     * const udoMessage = await prisma.udoMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UdoMessageUpdateManyArgs>(args: SelectSubset<T, UdoMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UdoMessages and returns the data updated in the database.
     * @param {UdoMessageUpdateManyAndReturnArgs} args - Arguments to update many UdoMessages.
     * @example
     * // Update many UdoMessages
     * const udoMessage = await prisma.udoMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UdoMessages and only return the `id`
     * const udoMessageWithIdOnly = await prisma.udoMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends UdoMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, UdoMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UdoMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UdoMessage.
     * @param {UdoMessageUpsertArgs} args - Arguments to update or create a UdoMessage.
     * @example
     * // Update or create a UdoMessage
     * const udoMessage = await prisma.udoMessage.upsert({
     *   create: {
     *     // ... data to create a UdoMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UdoMessage we want to update
     *   }
     * })
     */
    upsert<T extends UdoMessageUpsertArgs>(args: SelectSubset<T, UdoMessageUpsertArgs<ExtArgs>>): Prisma__UdoMessageClient<$Result.GetResult<Prisma.$UdoMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UdoMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoMessageCountArgs} args - Arguments to filter UdoMessages to count.
     * @example
     * // Count the number of UdoMessages
     * const count = await prisma.udoMessage.count({
     *   where: {
     *     // ... the filter for the UdoMessages we want to count
     *   }
     * })
    **/
    count<T extends UdoMessageCountArgs>(
      args?: Subset<T, UdoMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UdoMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UdoMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UdoMessageAggregateArgs>(args: Subset<T, UdoMessageAggregateArgs>): Prisma.PrismaPromise<GetUdoMessageAggregateType<T>>

    /**
     * Group by UdoMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UdoMessageGroupByArgs} args - Group by arguments.
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
      T extends UdoMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UdoMessageGroupByArgs['orderBy'] }
        : { orderBy?: UdoMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UdoMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUdoMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UdoMessage model
   */
  readonly fields: UdoMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UdoMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UdoMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends UdoChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UdoChatDefaultArgs<ExtArgs>>): Prisma__UdoChatClient<$Result.GetResult<Prisma.$UdoChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UdoMessage model
   */
  interface UdoMessageFieldRefs {
    readonly id: FieldRef<"UdoMessage", 'String'>
    readonly content: FieldRef<"UdoMessage", 'String'>
    readonly role: FieldRef<"UdoMessage", 'String'>
    readonly chatId: FieldRef<"UdoMessage", 'String'>
    readonly createdAt: FieldRef<"UdoMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UdoMessage findUnique
   */
  export type UdoMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageInclude<ExtArgs> | null
    /**
     * Filter, which UdoMessage to fetch.
     */
    where: UdoMessageWhereUniqueInput
  }

  /**
   * UdoMessage findUniqueOrThrow
   */
  export type UdoMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageInclude<ExtArgs> | null
    /**
     * Filter, which UdoMessage to fetch.
     */
    where: UdoMessageWhereUniqueInput
  }

  /**
   * UdoMessage findFirst
   */
  export type UdoMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageInclude<ExtArgs> | null
    /**
     * Filter, which UdoMessage to fetch.
     */
    where?: UdoMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdoMessages to fetch.
     */
    orderBy?: UdoMessageOrderByWithRelationInput | UdoMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UdoMessages.
     */
    cursor?: UdoMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdoMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdoMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UdoMessages.
     */
    distinct?: UdoMessageScalarFieldEnum | UdoMessageScalarFieldEnum[]
  }

  /**
   * UdoMessage findFirstOrThrow
   */
  export type UdoMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageInclude<ExtArgs> | null
    /**
     * Filter, which UdoMessage to fetch.
     */
    where?: UdoMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdoMessages to fetch.
     */
    orderBy?: UdoMessageOrderByWithRelationInput | UdoMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UdoMessages.
     */
    cursor?: UdoMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdoMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdoMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UdoMessages.
     */
    distinct?: UdoMessageScalarFieldEnum | UdoMessageScalarFieldEnum[]
  }

  /**
   * UdoMessage findMany
   */
  export type UdoMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageInclude<ExtArgs> | null
    /**
     * Filter, which UdoMessages to fetch.
     */
    where?: UdoMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UdoMessages to fetch.
     */
    orderBy?: UdoMessageOrderByWithRelationInput | UdoMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UdoMessages.
     */
    cursor?: UdoMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UdoMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UdoMessages.
     */
    skip?: number
    distinct?: UdoMessageScalarFieldEnum | UdoMessageScalarFieldEnum[]
  }

  /**
   * UdoMessage create
   */
  export type UdoMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a UdoMessage.
     */
    data: XOR<UdoMessageCreateInput, UdoMessageUncheckedCreateInput>
  }

  /**
   * UdoMessage createMany
   */
  export type UdoMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UdoMessages.
     */
    data: UdoMessageCreateManyInput | UdoMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UdoMessage createManyAndReturn
   */
  export type UdoMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * The data used to create many UdoMessages.
     */
    data: UdoMessageCreateManyInput | UdoMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UdoMessage update
   */
  export type UdoMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a UdoMessage.
     */
    data: XOR<UdoMessageUpdateInput, UdoMessageUncheckedUpdateInput>
    /**
     * Choose, which UdoMessage to update.
     */
    where: UdoMessageWhereUniqueInput
  }

  /**
   * UdoMessage updateMany
   */
  export type UdoMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UdoMessages.
     */
    data: XOR<UdoMessageUpdateManyMutationInput, UdoMessageUncheckedUpdateManyInput>
    /**
     * Filter which UdoMessages to update
     */
    where?: UdoMessageWhereInput
    /**
     * Limit how many UdoMessages to update.
     */
    limit?: number
  }

  /**
   * UdoMessage updateManyAndReturn
   */
  export type UdoMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * The data used to update UdoMessages.
     */
    data: XOR<UdoMessageUpdateManyMutationInput, UdoMessageUncheckedUpdateManyInput>
    /**
     * Filter which UdoMessages to update
     */
    where?: UdoMessageWhereInput
    /**
     * Limit how many UdoMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UdoMessage upsert
   */
  export type UdoMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the UdoMessage to update in case it exists.
     */
    where: UdoMessageWhereUniqueInput
    /**
     * In case the UdoMessage found by the `where` argument doesn't exist, create a new UdoMessage with this data.
     */
    create: XOR<UdoMessageCreateInput, UdoMessageUncheckedCreateInput>
    /**
     * In case the UdoMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UdoMessageUpdateInput, UdoMessageUncheckedUpdateInput>
  }

  /**
   * UdoMessage delete
   */
  export type UdoMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageInclude<ExtArgs> | null
    /**
     * Filter which UdoMessage to delete.
     */
    where: UdoMessageWhereUniqueInput
  }

  /**
   * UdoMessage deleteMany
   */
  export type UdoMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UdoMessages to delete
     */
    where?: UdoMessageWhereInput
    /**
     * Limit how many UdoMessages to delete.
     */
    limit?: number
  }

  /**
   * UdoMessage without action
   */
  export type UdoMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UdoMessage
     */
    select?: UdoMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UdoMessage
     */
    omit?: UdoMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UdoMessageInclude<ExtArgs> | null
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


  export const UdoUserScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    email: 'email',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UdoUserScalarFieldEnum = (typeof UdoUserScalarFieldEnum)[keyof typeof UdoUserScalarFieldEnum]


  export const UdoChatScalarFieldEnum: {
    id: 'id',
    title: 'title',
    favorite: 'favorite',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UdoChatScalarFieldEnum = (typeof UdoChatScalarFieldEnum)[keyof typeof UdoChatScalarFieldEnum]


  export const UdoMessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    role: 'role',
    chatId: 'chatId',
    createdAt: 'createdAt'
  };

  export type UdoMessageScalarFieldEnum = (typeof UdoMessageScalarFieldEnum)[keyof typeof UdoMessageScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UdoUserWhereInput = {
    AND?: UdoUserWhereInput | UdoUserWhereInput[]
    OR?: UdoUserWhereInput[]
    NOT?: UdoUserWhereInput | UdoUserWhereInput[]
    id?: StringFilter<"UdoUser"> | string
    phone?: StringNullableFilter<"UdoUser"> | string | null
    email?: StringNullableFilter<"UdoUser"> | string | null
    type?: StringFilter<"UdoUser"> | string
    status?: StringFilter<"UdoUser"> | string
    createdAt?: DateTimeFilter<"UdoUser"> | Date | string
    updatedAt?: DateTimeFilter<"UdoUser"> | Date | string
    chats?: UdoChatListRelationFilter
  }

  export type UdoUserOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chats?: UdoChatOrderByRelationAggregateInput
  }

  export type UdoUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UdoUserWhereInput | UdoUserWhereInput[]
    OR?: UdoUserWhereInput[]
    NOT?: UdoUserWhereInput | UdoUserWhereInput[]
    phone?: StringNullableFilter<"UdoUser"> | string | null
    type?: StringFilter<"UdoUser"> | string
    status?: StringFilter<"UdoUser"> | string
    createdAt?: DateTimeFilter<"UdoUser"> | Date | string
    updatedAt?: DateTimeFilter<"UdoUser"> | Date | string
    chats?: UdoChatListRelationFilter
  }, "id" | "email">

  export type UdoUserOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UdoUserCountOrderByAggregateInput
    _max?: UdoUserMaxOrderByAggregateInput
    _min?: UdoUserMinOrderByAggregateInput
  }

  export type UdoUserScalarWhereWithAggregatesInput = {
    AND?: UdoUserScalarWhereWithAggregatesInput | UdoUserScalarWhereWithAggregatesInput[]
    OR?: UdoUserScalarWhereWithAggregatesInput[]
    NOT?: UdoUserScalarWhereWithAggregatesInput | UdoUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UdoUser"> | string
    phone?: StringNullableWithAggregatesFilter<"UdoUser"> | string | null
    email?: StringNullableWithAggregatesFilter<"UdoUser"> | string | null
    type?: StringWithAggregatesFilter<"UdoUser"> | string
    status?: StringWithAggregatesFilter<"UdoUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UdoUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UdoUser"> | Date | string
  }

  export type UdoChatWhereInput = {
    AND?: UdoChatWhereInput | UdoChatWhereInput[]
    OR?: UdoChatWhereInput[]
    NOT?: UdoChatWhereInput | UdoChatWhereInput[]
    id?: StringFilter<"UdoChat"> | string
    title?: StringFilter<"UdoChat"> | string
    favorite?: BoolFilter<"UdoChat"> | boolean
    userId?: StringFilter<"UdoChat"> | string
    createdAt?: DateTimeFilter<"UdoChat"> | Date | string
    updatedAt?: DateTimeFilter<"UdoChat"> | Date | string
    user?: XOR<UdoUserScalarRelationFilter, UdoUserWhereInput>
    messages?: UdoMessageListRelationFilter
  }

  export type UdoChatOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    favorite?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UdoUserOrderByWithRelationInput
    messages?: UdoMessageOrderByRelationAggregateInput
  }

  export type UdoChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UdoChatWhereInput | UdoChatWhereInput[]
    OR?: UdoChatWhereInput[]
    NOT?: UdoChatWhereInput | UdoChatWhereInput[]
    title?: StringFilter<"UdoChat"> | string
    favorite?: BoolFilter<"UdoChat"> | boolean
    userId?: StringFilter<"UdoChat"> | string
    createdAt?: DateTimeFilter<"UdoChat"> | Date | string
    updatedAt?: DateTimeFilter<"UdoChat"> | Date | string
    user?: XOR<UdoUserScalarRelationFilter, UdoUserWhereInput>
    messages?: UdoMessageListRelationFilter
  }, "id">

  export type UdoChatOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    favorite?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UdoChatCountOrderByAggregateInput
    _max?: UdoChatMaxOrderByAggregateInput
    _min?: UdoChatMinOrderByAggregateInput
  }

  export type UdoChatScalarWhereWithAggregatesInput = {
    AND?: UdoChatScalarWhereWithAggregatesInput | UdoChatScalarWhereWithAggregatesInput[]
    OR?: UdoChatScalarWhereWithAggregatesInput[]
    NOT?: UdoChatScalarWhereWithAggregatesInput | UdoChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UdoChat"> | string
    title?: StringWithAggregatesFilter<"UdoChat"> | string
    favorite?: BoolWithAggregatesFilter<"UdoChat"> | boolean
    userId?: StringWithAggregatesFilter<"UdoChat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UdoChat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UdoChat"> | Date | string
  }

  export type UdoMessageWhereInput = {
    AND?: UdoMessageWhereInput | UdoMessageWhereInput[]
    OR?: UdoMessageWhereInput[]
    NOT?: UdoMessageWhereInput | UdoMessageWhereInput[]
    id?: StringFilter<"UdoMessage"> | string
    content?: StringFilter<"UdoMessage"> | string
    role?: StringFilter<"UdoMessage"> | string
    chatId?: StringFilter<"UdoMessage"> | string
    createdAt?: DateTimeFilter<"UdoMessage"> | Date | string
    chat?: XOR<UdoChatScalarRelationFilter, UdoChatWhereInput>
  }

  export type UdoMessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    chat?: UdoChatOrderByWithRelationInput
  }

  export type UdoMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UdoMessageWhereInput | UdoMessageWhereInput[]
    OR?: UdoMessageWhereInput[]
    NOT?: UdoMessageWhereInput | UdoMessageWhereInput[]
    content?: StringFilter<"UdoMessage"> | string
    role?: StringFilter<"UdoMessage"> | string
    chatId?: StringFilter<"UdoMessage"> | string
    createdAt?: DateTimeFilter<"UdoMessage"> | Date | string
    chat?: XOR<UdoChatScalarRelationFilter, UdoChatWhereInput>
  }, "id">

  export type UdoMessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
    _count?: UdoMessageCountOrderByAggregateInput
    _max?: UdoMessageMaxOrderByAggregateInput
    _min?: UdoMessageMinOrderByAggregateInput
  }

  export type UdoMessageScalarWhereWithAggregatesInput = {
    AND?: UdoMessageScalarWhereWithAggregatesInput | UdoMessageScalarWhereWithAggregatesInput[]
    OR?: UdoMessageScalarWhereWithAggregatesInput[]
    NOT?: UdoMessageScalarWhereWithAggregatesInput | UdoMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UdoMessage"> | string
    content?: StringWithAggregatesFilter<"UdoMessage"> | string
    role?: StringWithAggregatesFilter<"UdoMessage"> | string
    chatId?: StringWithAggregatesFilter<"UdoMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UdoMessage"> | Date | string
  }

  export type UdoUserCreateInput = {
    id: string
    phone?: string | null
    email?: string | null
    type: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: UdoChatCreateNestedManyWithoutUserInput
  }

  export type UdoUserUncheckedCreateInput = {
    id: string
    phone?: string | null
    email?: string | null
    type: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: UdoChatUncheckedCreateNestedManyWithoutUserInput
  }

  export type UdoUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: UdoChatUpdateManyWithoutUserNestedInput
  }

  export type UdoUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: UdoChatUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UdoUserCreateManyInput = {
    id: string
    phone?: string | null
    email?: string | null
    type: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UdoUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdoUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdoChatCreateInput = {
    id?: string
    title: string
    favorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UdoUserCreateNestedOneWithoutChatsInput
    messages?: UdoMessageCreateNestedManyWithoutChatInput
  }

  export type UdoChatUncheckedCreateInput = {
    id?: string
    title: string
    favorite?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: UdoMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type UdoChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UdoUserUpdateOneRequiredWithoutChatsNestedInput
    messages?: UdoMessageUpdateManyWithoutChatNestedInput
  }

  export type UdoChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: UdoMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UdoChatCreateManyInput = {
    id?: string
    title: string
    favorite?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UdoChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdoChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdoMessageCreateInput = {
    id?: string
    content: string
    role: string
    createdAt?: Date | string
    chat: UdoChatCreateNestedOneWithoutMessagesInput
  }

  export type UdoMessageUncheckedCreateInput = {
    id?: string
    content: string
    role: string
    chatId: string
    createdAt?: Date | string
  }

  export type UdoMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: UdoChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type UdoMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdoMessageCreateManyInput = {
    id?: string
    content: string
    role: string
    chatId: string
    createdAt?: Date | string
  }

  export type UdoMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdoMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UdoChatListRelationFilter = {
    every?: UdoChatWhereInput
    some?: UdoChatWhereInput
    none?: UdoChatWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UdoChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UdoUserCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UdoUserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UdoUserMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UdoUserScalarRelationFilter = {
    is?: UdoUserWhereInput
    isNot?: UdoUserWhereInput
  }

  export type UdoMessageListRelationFilter = {
    every?: UdoMessageWhereInput
    some?: UdoMessageWhereInput
    none?: UdoMessageWhereInput
  }

  export type UdoMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UdoChatCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    favorite?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UdoChatMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    favorite?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UdoChatMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    favorite?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UdoChatScalarRelationFilter = {
    is?: UdoChatWhereInput
    isNot?: UdoChatWhereInput
  }

  export type UdoMessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
  }

  export type UdoMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
  }

  export type UdoMessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    role?: SortOrder
    chatId?: SortOrder
    createdAt?: SortOrder
  }

  export type UdoChatCreateNestedManyWithoutUserInput = {
    create?: XOR<UdoChatCreateWithoutUserInput, UdoChatUncheckedCreateWithoutUserInput> | UdoChatCreateWithoutUserInput[] | UdoChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UdoChatCreateOrConnectWithoutUserInput | UdoChatCreateOrConnectWithoutUserInput[]
    createMany?: UdoChatCreateManyUserInputEnvelope
    connect?: UdoChatWhereUniqueInput | UdoChatWhereUniqueInput[]
  }

  export type UdoChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UdoChatCreateWithoutUserInput, UdoChatUncheckedCreateWithoutUserInput> | UdoChatCreateWithoutUserInput[] | UdoChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UdoChatCreateOrConnectWithoutUserInput | UdoChatCreateOrConnectWithoutUserInput[]
    createMany?: UdoChatCreateManyUserInputEnvelope
    connect?: UdoChatWhereUniqueInput | UdoChatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UdoChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<UdoChatCreateWithoutUserInput, UdoChatUncheckedCreateWithoutUserInput> | UdoChatCreateWithoutUserInput[] | UdoChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UdoChatCreateOrConnectWithoutUserInput | UdoChatCreateOrConnectWithoutUserInput[]
    upsert?: UdoChatUpsertWithWhereUniqueWithoutUserInput | UdoChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UdoChatCreateManyUserInputEnvelope
    set?: UdoChatWhereUniqueInput | UdoChatWhereUniqueInput[]
    disconnect?: UdoChatWhereUniqueInput | UdoChatWhereUniqueInput[]
    delete?: UdoChatWhereUniqueInput | UdoChatWhereUniqueInput[]
    connect?: UdoChatWhereUniqueInput | UdoChatWhereUniqueInput[]
    update?: UdoChatUpdateWithWhereUniqueWithoutUserInput | UdoChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UdoChatUpdateManyWithWhereWithoutUserInput | UdoChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UdoChatScalarWhereInput | UdoChatScalarWhereInput[]
  }

  export type UdoChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UdoChatCreateWithoutUserInput, UdoChatUncheckedCreateWithoutUserInput> | UdoChatCreateWithoutUserInput[] | UdoChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UdoChatCreateOrConnectWithoutUserInput | UdoChatCreateOrConnectWithoutUserInput[]
    upsert?: UdoChatUpsertWithWhereUniqueWithoutUserInput | UdoChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UdoChatCreateManyUserInputEnvelope
    set?: UdoChatWhereUniqueInput | UdoChatWhereUniqueInput[]
    disconnect?: UdoChatWhereUniqueInput | UdoChatWhereUniqueInput[]
    delete?: UdoChatWhereUniqueInput | UdoChatWhereUniqueInput[]
    connect?: UdoChatWhereUniqueInput | UdoChatWhereUniqueInput[]
    update?: UdoChatUpdateWithWhereUniqueWithoutUserInput | UdoChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UdoChatUpdateManyWithWhereWithoutUserInput | UdoChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UdoChatScalarWhereInput | UdoChatScalarWhereInput[]
  }

  export type UdoUserCreateNestedOneWithoutChatsInput = {
    create?: XOR<UdoUserCreateWithoutChatsInput, UdoUserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UdoUserCreateOrConnectWithoutChatsInput
    connect?: UdoUserWhereUniqueInput
  }

  export type UdoMessageCreateNestedManyWithoutChatInput = {
    create?: XOR<UdoMessageCreateWithoutChatInput, UdoMessageUncheckedCreateWithoutChatInput> | UdoMessageCreateWithoutChatInput[] | UdoMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: UdoMessageCreateOrConnectWithoutChatInput | UdoMessageCreateOrConnectWithoutChatInput[]
    createMany?: UdoMessageCreateManyChatInputEnvelope
    connect?: UdoMessageWhereUniqueInput | UdoMessageWhereUniqueInput[]
  }

  export type UdoMessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<UdoMessageCreateWithoutChatInput, UdoMessageUncheckedCreateWithoutChatInput> | UdoMessageCreateWithoutChatInput[] | UdoMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: UdoMessageCreateOrConnectWithoutChatInput | UdoMessageCreateOrConnectWithoutChatInput[]
    createMany?: UdoMessageCreateManyChatInputEnvelope
    connect?: UdoMessageWhereUniqueInput | UdoMessageWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UdoUserUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<UdoUserCreateWithoutChatsInput, UdoUserUncheckedCreateWithoutChatsInput>
    connectOrCreate?: UdoUserCreateOrConnectWithoutChatsInput
    upsert?: UdoUserUpsertWithoutChatsInput
    connect?: UdoUserWhereUniqueInput
    update?: XOR<XOR<UdoUserUpdateToOneWithWhereWithoutChatsInput, UdoUserUpdateWithoutChatsInput>, UdoUserUncheckedUpdateWithoutChatsInput>
  }

  export type UdoMessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<UdoMessageCreateWithoutChatInput, UdoMessageUncheckedCreateWithoutChatInput> | UdoMessageCreateWithoutChatInput[] | UdoMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: UdoMessageCreateOrConnectWithoutChatInput | UdoMessageCreateOrConnectWithoutChatInput[]
    upsert?: UdoMessageUpsertWithWhereUniqueWithoutChatInput | UdoMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: UdoMessageCreateManyChatInputEnvelope
    set?: UdoMessageWhereUniqueInput | UdoMessageWhereUniqueInput[]
    disconnect?: UdoMessageWhereUniqueInput | UdoMessageWhereUniqueInput[]
    delete?: UdoMessageWhereUniqueInput | UdoMessageWhereUniqueInput[]
    connect?: UdoMessageWhereUniqueInput | UdoMessageWhereUniqueInput[]
    update?: UdoMessageUpdateWithWhereUniqueWithoutChatInput | UdoMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: UdoMessageUpdateManyWithWhereWithoutChatInput | UdoMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: UdoMessageScalarWhereInput | UdoMessageScalarWhereInput[]
  }

  export type UdoMessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<UdoMessageCreateWithoutChatInput, UdoMessageUncheckedCreateWithoutChatInput> | UdoMessageCreateWithoutChatInput[] | UdoMessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: UdoMessageCreateOrConnectWithoutChatInput | UdoMessageCreateOrConnectWithoutChatInput[]
    upsert?: UdoMessageUpsertWithWhereUniqueWithoutChatInput | UdoMessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: UdoMessageCreateManyChatInputEnvelope
    set?: UdoMessageWhereUniqueInput | UdoMessageWhereUniqueInput[]
    disconnect?: UdoMessageWhereUniqueInput | UdoMessageWhereUniqueInput[]
    delete?: UdoMessageWhereUniqueInput | UdoMessageWhereUniqueInput[]
    connect?: UdoMessageWhereUniqueInput | UdoMessageWhereUniqueInput[]
    update?: UdoMessageUpdateWithWhereUniqueWithoutChatInput | UdoMessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: UdoMessageUpdateManyWithWhereWithoutChatInput | UdoMessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: UdoMessageScalarWhereInput | UdoMessageScalarWhereInput[]
  }

  export type UdoChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UdoChatCreateWithoutMessagesInput, UdoChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UdoChatCreateOrConnectWithoutMessagesInput
    connect?: UdoChatWhereUniqueInput
  }

  export type UdoChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UdoChatCreateWithoutMessagesInput, UdoChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UdoChatCreateOrConnectWithoutMessagesInput
    upsert?: UdoChatUpsertWithoutMessagesInput
    connect?: UdoChatWhereUniqueInput
    update?: XOR<XOR<UdoChatUpdateToOneWithWhereWithoutMessagesInput, UdoChatUpdateWithoutMessagesInput>, UdoChatUncheckedUpdateWithoutMessagesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UdoChatCreateWithoutUserInput = {
    id?: string
    title: string
    favorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: UdoMessageCreateNestedManyWithoutChatInput
  }

  export type UdoChatUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    favorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: UdoMessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type UdoChatCreateOrConnectWithoutUserInput = {
    where: UdoChatWhereUniqueInput
    create: XOR<UdoChatCreateWithoutUserInput, UdoChatUncheckedCreateWithoutUserInput>
  }

  export type UdoChatCreateManyUserInputEnvelope = {
    data: UdoChatCreateManyUserInput | UdoChatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UdoChatUpsertWithWhereUniqueWithoutUserInput = {
    where: UdoChatWhereUniqueInput
    update: XOR<UdoChatUpdateWithoutUserInput, UdoChatUncheckedUpdateWithoutUserInput>
    create: XOR<UdoChatCreateWithoutUserInput, UdoChatUncheckedCreateWithoutUserInput>
  }

  export type UdoChatUpdateWithWhereUniqueWithoutUserInput = {
    where: UdoChatWhereUniqueInput
    data: XOR<UdoChatUpdateWithoutUserInput, UdoChatUncheckedUpdateWithoutUserInput>
  }

  export type UdoChatUpdateManyWithWhereWithoutUserInput = {
    where: UdoChatScalarWhereInput
    data: XOR<UdoChatUpdateManyMutationInput, UdoChatUncheckedUpdateManyWithoutUserInput>
  }

  export type UdoChatScalarWhereInput = {
    AND?: UdoChatScalarWhereInput | UdoChatScalarWhereInput[]
    OR?: UdoChatScalarWhereInput[]
    NOT?: UdoChatScalarWhereInput | UdoChatScalarWhereInput[]
    id?: StringFilter<"UdoChat"> | string
    title?: StringFilter<"UdoChat"> | string
    favorite?: BoolFilter<"UdoChat"> | boolean
    userId?: StringFilter<"UdoChat"> | string
    createdAt?: DateTimeFilter<"UdoChat"> | Date | string
    updatedAt?: DateTimeFilter<"UdoChat"> | Date | string
  }

  export type UdoUserCreateWithoutChatsInput = {
    id: string
    phone?: string | null
    email?: string | null
    type: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UdoUserUncheckedCreateWithoutChatsInput = {
    id: string
    phone?: string | null
    email?: string | null
    type: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UdoUserCreateOrConnectWithoutChatsInput = {
    where: UdoUserWhereUniqueInput
    create: XOR<UdoUserCreateWithoutChatsInput, UdoUserUncheckedCreateWithoutChatsInput>
  }

  export type UdoMessageCreateWithoutChatInput = {
    id?: string
    content: string
    role: string
    createdAt?: Date | string
  }

  export type UdoMessageUncheckedCreateWithoutChatInput = {
    id?: string
    content: string
    role: string
    createdAt?: Date | string
  }

  export type UdoMessageCreateOrConnectWithoutChatInput = {
    where: UdoMessageWhereUniqueInput
    create: XOR<UdoMessageCreateWithoutChatInput, UdoMessageUncheckedCreateWithoutChatInput>
  }

  export type UdoMessageCreateManyChatInputEnvelope = {
    data: UdoMessageCreateManyChatInput | UdoMessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type UdoUserUpsertWithoutChatsInput = {
    update: XOR<UdoUserUpdateWithoutChatsInput, UdoUserUncheckedUpdateWithoutChatsInput>
    create: XOR<UdoUserCreateWithoutChatsInput, UdoUserUncheckedCreateWithoutChatsInput>
    where?: UdoUserWhereInput
  }

  export type UdoUserUpdateToOneWithWhereWithoutChatsInput = {
    where?: UdoUserWhereInput
    data: XOR<UdoUserUpdateWithoutChatsInput, UdoUserUncheckedUpdateWithoutChatsInput>
  }

  export type UdoUserUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdoUserUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdoMessageUpsertWithWhereUniqueWithoutChatInput = {
    where: UdoMessageWhereUniqueInput
    update: XOR<UdoMessageUpdateWithoutChatInput, UdoMessageUncheckedUpdateWithoutChatInput>
    create: XOR<UdoMessageCreateWithoutChatInput, UdoMessageUncheckedCreateWithoutChatInput>
  }

  export type UdoMessageUpdateWithWhereUniqueWithoutChatInput = {
    where: UdoMessageWhereUniqueInput
    data: XOR<UdoMessageUpdateWithoutChatInput, UdoMessageUncheckedUpdateWithoutChatInput>
  }

  export type UdoMessageUpdateManyWithWhereWithoutChatInput = {
    where: UdoMessageScalarWhereInput
    data: XOR<UdoMessageUpdateManyMutationInput, UdoMessageUncheckedUpdateManyWithoutChatInput>
  }

  export type UdoMessageScalarWhereInput = {
    AND?: UdoMessageScalarWhereInput | UdoMessageScalarWhereInput[]
    OR?: UdoMessageScalarWhereInput[]
    NOT?: UdoMessageScalarWhereInput | UdoMessageScalarWhereInput[]
    id?: StringFilter<"UdoMessage"> | string
    content?: StringFilter<"UdoMessage"> | string
    role?: StringFilter<"UdoMessage"> | string
    chatId?: StringFilter<"UdoMessage"> | string
    createdAt?: DateTimeFilter<"UdoMessage"> | Date | string
  }

  export type UdoChatCreateWithoutMessagesInput = {
    id?: string
    title: string
    favorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UdoUserCreateNestedOneWithoutChatsInput
  }

  export type UdoChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    title: string
    favorite?: boolean
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UdoChatCreateOrConnectWithoutMessagesInput = {
    where: UdoChatWhereUniqueInput
    create: XOR<UdoChatCreateWithoutMessagesInput, UdoChatUncheckedCreateWithoutMessagesInput>
  }

  export type UdoChatUpsertWithoutMessagesInput = {
    update: XOR<UdoChatUpdateWithoutMessagesInput, UdoChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<UdoChatCreateWithoutMessagesInput, UdoChatUncheckedCreateWithoutMessagesInput>
    where?: UdoChatWhereInput
  }

  export type UdoChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UdoChatWhereInput
    data: XOR<UdoChatUpdateWithoutMessagesInput, UdoChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UdoChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UdoUserUpdateOneRequiredWithoutChatsNestedInput
  }

  export type UdoChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdoChatCreateManyUserInput = {
    id?: string
    title: string
    favorite?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UdoChatUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: UdoMessageUpdateManyWithoutChatNestedInput
  }

  export type UdoChatUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: UdoMessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UdoChatUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    favorite?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdoMessageCreateManyChatInput = {
    id?: string
    content: string
    role: string
    createdAt?: Date | string
  }

  export type UdoMessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdoMessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UdoMessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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