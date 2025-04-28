
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>
/**
 * Model Filme
 * 
 */
export type Filme = $Result.DefaultSelection<Prisma.$FilmePayload>
/**
 * Model GeneroFilme
 * 
 */
export type GeneroFilme = $Result.DefaultSelection<Prisma.$GeneroFilmePayload>
/**
 * Model Genero
 * 
 */
export type Genero = $Result.DefaultSelection<Prisma.$GeneroPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoUsuario: {
  ADM: 'ADM',
  COMUM: 'COMUM'
};

export type TipoUsuario = (typeof TipoUsuario)[keyof typeof TipoUsuario]

}

export type TipoUsuario = $Enums.TipoUsuario

export const TipoUsuario: typeof $Enums.TipoUsuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filme`: Exposes CRUD operations for the **Filme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Filmes
    * const filmes = await prisma.filme.findMany()
    * ```
    */
  get filme(): Prisma.FilmeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generoFilme`: Exposes CRUD operations for the **GeneroFilme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneroFilmes
    * const generoFilmes = await prisma.generoFilme.findMany()
    * ```
    */
  get generoFilme(): Prisma.GeneroFilmeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genero`: Exposes CRUD operations for the **Genero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Generos
    * const generos = await prisma.genero.findMany()
    * ```
    */
  get genero(): Prisma.GeneroDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Usuario: 'Usuario',
    Avaliacao: 'Avaliacao',
    Filme: 'Filme',
    GeneroFilme: 'GeneroFilme',
    Genero: 'Genero'
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
      modelProps: "usuario" | "avaliacao" | "filme" | "generoFilme" | "genero"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvaliacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      Filme: {
        payload: Prisma.$FilmePayload<ExtArgs>
        fields: Prisma.FilmeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilmeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilmeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          findFirst: {
            args: Prisma.FilmeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilmeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          findMany: {
            args: Prisma.FilmeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>[]
          }
          create: {
            args: Prisma.FilmeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          createMany: {
            args: Prisma.FilmeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilmeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>[]
          }
          delete: {
            args: Prisma.FilmeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          update: {
            args: Prisma.FilmeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          deleteMany: {
            args: Prisma.FilmeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilmeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilmeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>[]
          }
          upsert: {
            args: Prisma.FilmeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          aggregate: {
            args: Prisma.FilmeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilme>
          }
          groupBy: {
            args: Prisma.FilmeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilmeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilmeCountArgs<ExtArgs>
            result: $Utils.Optional<FilmeCountAggregateOutputType> | number
          }
        }
      }
      GeneroFilme: {
        payload: Prisma.$GeneroFilmePayload<ExtArgs>
        fields: Prisma.GeneroFilmeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneroFilmeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroFilmePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneroFilmeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroFilmePayload>
          }
          findFirst: {
            args: Prisma.GeneroFilmeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroFilmePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneroFilmeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroFilmePayload>
          }
          findMany: {
            args: Prisma.GeneroFilmeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroFilmePayload>[]
          }
          create: {
            args: Prisma.GeneroFilmeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroFilmePayload>
          }
          createMany: {
            args: Prisma.GeneroFilmeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneroFilmeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroFilmePayload>[]
          }
          delete: {
            args: Prisma.GeneroFilmeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroFilmePayload>
          }
          update: {
            args: Prisma.GeneroFilmeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroFilmePayload>
          }
          deleteMany: {
            args: Prisma.GeneroFilmeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneroFilmeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneroFilmeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroFilmePayload>[]
          }
          upsert: {
            args: Prisma.GeneroFilmeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroFilmePayload>
          }
          aggregate: {
            args: Prisma.GeneroFilmeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneroFilme>
          }
          groupBy: {
            args: Prisma.GeneroFilmeGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneroFilmeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneroFilmeCountArgs<ExtArgs>
            result: $Utils.Optional<GeneroFilmeCountAggregateOutputType> | number
          }
        }
      }
      Genero: {
        payload: Prisma.$GeneroPayload<ExtArgs>
        fields: Prisma.GeneroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findFirst: {
            args: Prisma.GeneroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          findMany: {
            args: Prisma.GeneroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          create: {
            args: Prisma.GeneroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          createMany: {
            args: Prisma.GeneroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          delete: {
            args: Prisma.GeneroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          update: {
            args: Prisma.GeneroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          deleteMany: {
            args: Prisma.GeneroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>[]
          }
          upsert: {
            args: Prisma.GeneroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneroPayload>
          }
          aggregate: {
            args: Prisma.GeneroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenero>
          }
          groupBy: {
            args: Prisma.GeneroGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneroGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneroCountArgs<ExtArgs>
            result: $Utils.Optional<GeneroCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    avaliacao?: AvaliacaoOmit
    filme?: FilmeOmit
    generoFilme?: GeneroFilmeOmit
    genero?: GeneroOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    avaliacoes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacoes?: boolean | UsuarioCountOutputTypeCountAvaliacoesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Count Type FilmeCountOutputType
   */

  export type FilmeCountOutputType = {
    generos: number
    avaliacoes: number
  }

  export type FilmeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | FilmeCountOutputTypeCountGenerosArgs
    avaliacoes?: boolean | FilmeCountOutputTypeCountAvaliacoesArgs
  }

  // Custom InputTypes
  /**
   * FilmeCountOutputType without action
   */
  export type FilmeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmeCountOutputType
     */
    select?: FilmeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilmeCountOutputType without action
   */
  export type FilmeCountOutputTypeCountGenerosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroFilmeWhereInput
  }

  /**
   * FilmeCountOutputType without action
   */
  export type FilmeCountOutputTypeCountAvaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }


  /**
   * Count Type GeneroCountOutputType
   */

  export type GeneroCountOutputType = {
    generosFilme: number
  }

  export type GeneroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generosFilme?: boolean | GeneroCountOutputTypeCountGenerosFilmeArgs
  }

  // Custom InputTypes
  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroCountOutputType
     */
    select?: GeneroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GeneroCountOutputType without action
   */
  export type GeneroCountOutputTypeCountGenerosFilmeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroFilmeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    senha: string | null
    email: string | null
    status: string | null
    username: string | null
    dataNascimento: Date | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    tipoUsuario: $Enums.TipoUsuario | null
    deletedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    senha: string | null
    email: string | null
    status: string | null
    username: string | null
    dataNascimento: Date | null
    dataCriacao: Date | null
    dataAtualizacao: Date | null
    tipoUsuario: $Enums.TipoUsuario | null
    deletedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    senha: number
    email: number
    status: number
    username: number
    dataNascimento: number
    dataCriacao: number
    dataAtualizacao: number
    tipoUsuario: number
    deletedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    senha?: true
    email?: true
    status?: true
    username?: true
    dataNascimento?: true
    dataCriacao?: true
    dataAtualizacao?: true
    tipoUsuario?: true
    deletedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    senha?: true
    email?: true
    status?: true
    username?: true
    dataNascimento?: true
    dataCriacao?: true
    dataAtualizacao?: true
    tipoUsuario?: true
    deletedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    senha?: true
    email?: true
    status?: true
    username?: true
    dataNascimento?: true
    dataCriacao?: true
    dataAtualizacao?: true
    tipoUsuario?: true
    deletedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    senha: string
    email: string
    status: string
    username: string
    dataNascimento: Date
    dataCriacao: Date
    dataAtualizacao: Date
    tipoUsuario: $Enums.TipoUsuario
    deletedAt: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    senha?: boolean
    email?: boolean
    status?: boolean
    username?: boolean
    dataNascimento?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    tipoUsuario?: boolean
    deletedAt?: boolean
    avaliacoes?: boolean | Usuario$avaliacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    senha?: boolean
    email?: boolean
    status?: boolean
    username?: boolean
    dataNascimento?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    tipoUsuario?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    senha?: boolean
    email?: boolean
    status?: boolean
    username?: boolean
    dataNascimento?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    tipoUsuario?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    senha?: boolean
    email?: boolean
    status?: boolean
    username?: boolean
    dataNascimento?: boolean
    dataCriacao?: boolean
    dataAtualizacao?: boolean
    tipoUsuario?: boolean
    deletedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "senha" | "email" | "status" | "username" | "dataNascimento" | "dataCriacao" | "dataAtualizacao" | "tipoUsuario" | "deletedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacoes?: boolean | Usuario$avaliacoesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      senha: string
      email: string
      status: string
      username: string
      dataNascimento: Date
      dataCriacao: Date
      dataAtualizacao: Date
      tipoUsuario: $Enums.TipoUsuario
      deletedAt: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avaliacoes<T extends Usuario$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly status: FieldRef<"Usuario", 'String'>
    readonly username: FieldRef<"Usuario", 'String'>
    readonly dataNascimento: FieldRef<"Usuario", 'DateTime'>
    readonly dataCriacao: FieldRef<"Usuario", 'DateTime'>
    readonly dataAtualizacao: FieldRef<"Usuario", 'DateTime'>
    readonly tipoUsuario: FieldRef<"Usuario", 'TipoUsuario'>
    readonly deletedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.avaliacoes
   */
  export type Usuario$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    idUsuario: number | null
    idFilme: number | null
    nota: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    idUsuario: number | null
    idFilme: number | null
    nota: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    idUsuario: number | null
    idFilme: number | null
    nota: number | null
    comentario: string | null
    deletedAt: Date | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    idUsuario: number | null
    idFilme: number | null
    nota: number | null
    comentario: string | null
    deletedAt: Date | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    idUsuario: number
    idFilme: number
    nota: number
    comentario: number
    deletedAt: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    idUsuario?: true
    idFilme?: true
    nota?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    idUsuario?: true
    idFilme?: true
    nota?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    idUsuario?: true
    idFilme?: true
    nota?: true
    comentario?: true
    deletedAt?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    idUsuario?: true
    idFilme?: true
    nota?: true
    comentario?: true
    deletedAt?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    idUsuario?: true
    idFilme?: true
    nota?: true
    comentario?: true
    deletedAt?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    idUsuario: number
    idFilme: number
    nota: number
    comentario: string
    deletedAt: Date | null
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsuario?: boolean
    idFilme?: boolean
    nota?: boolean
    comentario?: boolean
    deletedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsuario?: boolean
    idFilme?: boolean
    nota?: boolean
    comentario?: boolean
    deletedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUsuario?: boolean
    idFilme?: boolean
    nota?: boolean
    comentario?: boolean
    deletedAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    idUsuario?: boolean
    idFilme?: boolean
    nota?: boolean
    comentario?: boolean
    deletedAt?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUsuario" | "idFilme" | "nota" | "comentario" | "deletedAt", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      filme: Prisma.$FilmePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idUsuario: number
      idFilme: number
      nota: number
      comentario: string
      deletedAt: Date | null
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `idUsuario`
     * const avaliacaoWithIdUsuarioOnly = await prisma.avaliacao.findMany({ select: { idUsuario: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacaos and returns the data saved in the database.
     * @param {AvaliacaoCreateManyAndReturnArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacaos and only return the `idUsuario`
     * const avaliacaoWithIdUsuarioOnly = await prisma.avaliacao.createManyAndReturn({
     *   select: { idUsuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos and returns the data updated in the database.
     * @param {AvaliacaoUpdateManyAndReturnArgs} args - Arguments to update many Avaliacaos.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacaos and only return the `idUsuario`
     * const avaliacaoWithIdUsuarioOnly = await prisma.avaliacao.updateManyAndReturn({
     *   select: { idUsuario: true },
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
    updateManyAndReturn<T extends AvaliacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AvaliacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
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
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filme<T extends FilmeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilmeDefaultArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly idUsuario: FieldRef<"Avaliacao", 'Int'>
    readonly idFilme: FieldRef<"Avaliacao", 'Int'>
    readonly nota: FieldRef<"Avaliacao", 'Float'>
    readonly comentario: FieldRef<"Avaliacao", 'String'>
    readonly deletedAt: FieldRef<"Avaliacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao createManyAndReturn
   */
  export type AvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao updateManyAndReturn
   */
  export type AvaliacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Filme
   */

  export type AggregateFilme = {
    _count: FilmeCountAggregateOutputType | null
    _avg: FilmeAvgAggregateOutputType | null
    _sum: FilmeSumAggregateOutputType | null
    _min: FilmeMinAggregateOutputType | null
    _max: FilmeMaxAggregateOutputType | null
  }

  export type FilmeAvgAggregateOutputType = {
    id: number | null
    anoLancamento: number | null
    duracao: number | null
  }

  export type FilmeSumAggregateOutputType = {
    id: number | null
    anoLancamento: number | null
    duracao: number | null
  }

  export type FilmeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    diretor: string | null
    anoLancamento: number | null
    duracao: number | null
    produtora: string | null
    classificacao: string | null
    poster: string | null
    deletedAt: Date | null
  }

  export type FilmeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    diretor: string | null
    anoLancamento: number | null
    duracao: number | null
    produtora: string | null
    classificacao: string | null
    poster: string | null
    deletedAt: Date | null
  }

  export type FilmeCountAggregateOutputType = {
    id: number
    nome: number
    diretor: number
    anoLancamento: number
    duracao: number
    produtora: number
    classificacao: number
    poster: number
    deletedAt: number
    _all: number
  }


  export type FilmeAvgAggregateInputType = {
    id?: true
    anoLancamento?: true
    duracao?: true
  }

  export type FilmeSumAggregateInputType = {
    id?: true
    anoLancamento?: true
    duracao?: true
  }

  export type FilmeMinAggregateInputType = {
    id?: true
    nome?: true
    diretor?: true
    anoLancamento?: true
    duracao?: true
    produtora?: true
    classificacao?: true
    poster?: true
    deletedAt?: true
  }

  export type FilmeMaxAggregateInputType = {
    id?: true
    nome?: true
    diretor?: true
    anoLancamento?: true
    duracao?: true
    produtora?: true
    classificacao?: true
    poster?: true
    deletedAt?: true
  }

  export type FilmeCountAggregateInputType = {
    id?: true
    nome?: true
    diretor?: true
    anoLancamento?: true
    duracao?: true
    produtora?: true
    classificacao?: true
    poster?: true
    deletedAt?: true
    _all?: true
  }

  export type FilmeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filme to aggregate.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Filmes
    **/
    _count?: true | FilmeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilmeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilmeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilmeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilmeMaxAggregateInputType
  }

  export type GetFilmeAggregateType<T extends FilmeAggregateArgs> = {
        [P in keyof T & keyof AggregateFilme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilme[P]>
      : GetScalarType<T[P], AggregateFilme[P]>
  }




  export type FilmeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilmeWhereInput
    orderBy?: FilmeOrderByWithAggregationInput | FilmeOrderByWithAggregationInput[]
    by: FilmeScalarFieldEnum[] | FilmeScalarFieldEnum
    having?: FilmeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilmeCountAggregateInputType | true
    _avg?: FilmeAvgAggregateInputType
    _sum?: FilmeSumAggregateInputType
    _min?: FilmeMinAggregateInputType
    _max?: FilmeMaxAggregateInputType
  }

  export type FilmeGroupByOutputType = {
    id: number
    nome: string
    diretor: string
    anoLancamento: number
    duracao: number
    produtora: string
    classificacao: string
    poster: string
    deletedAt: Date | null
    _count: FilmeCountAggregateOutputType | null
    _avg: FilmeAvgAggregateOutputType | null
    _sum: FilmeSumAggregateOutputType | null
    _min: FilmeMinAggregateOutputType | null
    _max: FilmeMaxAggregateOutputType | null
  }

  type GetFilmeGroupByPayload<T extends FilmeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilmeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilmeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilmeGroupByOutputType[P]>
            : GetScalarType<T[P], FilmeGroupByOutputType[P]>
        }
      >
    >


  export type FilmeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    diretor?: boolean
    anoLancamento?: boolean
    duracao?: boolean
    produtora?: boolean
    classificacao?: boolean
    poster?: boolean
    deletedAt?: boolean
    generos?: boolean | Filme$generosArgs<ExtArgs>
    avaliacoes?: boolean | Filme$avaliacoesArgs<ExtArgs>
    _count?: boolean | FilmeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filme"]>

  export type FilmeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    diretor?: boolean
    anoLancamento?: boolean
    duracao?: boolean
    produtora?: boolean
    classificacao?: boolean
    poster?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["filme"]>

  export type FilmeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    diretor?: boolean
    anoLancamento?: boolean
    duracao?: boolean
    produtora?: boolean
    classificacao?: boolean
    poster?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["filme"]>

  export type FilmeSelectScalar = {
    id?: boolean
    nome?: boolean
    diretor?: boolean
    anoLancamento?: boolean
    duracao?: boolean
    produtora?: boolean
    classificacao?: boolean
    poster?: boolean
    deletedAt?: boolean
  }

  export type FilmeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "diretor" | "anoLancamento" | "duracao" | "produtora" | "classificacao" | "poster" | "deletedAt", ExtArgs["result"]["filme"]>
  export type FilmeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generos?: boolean | Filme$generosArgs<ExtArgs>
    avaliacoes?: boolean | Filme$avaliacoesArgs<ExtArgs>
    _count?: boolean | FilmeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FilmeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FilmeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FilmePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Filme"
    objects: {
      generos: Prisma.$GeneroFilmePayload<ExtArgs>[]
      avaliacoes: Prisma.$AvaliacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      diretor: string
      anoLancamento: number
      duracao: number
      produtora: string
      classificacao: string
      poster: string
      deletedAt: Date | null
    }, ExtArgs["result"]["filme"]>
    composites: {}
  }

  type FilmeGetPayload<S extends boolean | null | undefined | FilmeDefaultArgs> = $Result.GetResult<Prisma.$FilmePayload, S>

  type FilmeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilmeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilmeCountAggregateInputType | true
    }

  export interface FilmeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Filme'], meta: { name: 'Filme' } }
    /**
     * Find zero or one Filme that matches the filter.
     * @param {FilmeFindUniqueArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilmeFindUniqueArgs>(args: SelectSubset<T, FilmeFindUniqueArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Filme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilmeFindUniqueOrThrowArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilmeFindUniqueOrThrowArgs>(args: SelectSubset<T, FilmeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeFindFirstArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilmeFindFirstArgs>(args?: SelectSubset<T, FilmeFindFirstArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeFindFirstOrThrowArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilmeFindFirstOrThrowArgs>(args?: SelectSubset<T, FilmeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Filmes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Filmes
     * const filmes = await prisma.filme.findMany()
     * 
     * // Get first 10 Filmes
     * const filmes = await prisma.filme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filmeWithIdOnly = await prisma.filme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilmeFindManyArgs>(args?: SelectSubset<T, FilmeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Filme.
     * @param {FilmeCreateArgs} args - Arguments to create a Filme.
     * @example
     * // Create one Filme
     * const Filme = await prisma.filme.create({
     *   data: {
     *     // ... data to create a Filme
     *   }
     * })
     * 
     */
    create<T extends FilmeCreateArgs>(args: SelectSubset<T, FilmeCreateArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Filmes.
     * @param {FilmeCreateManyArgs} args - Arguments to create many Filmes.
     * @example
     * // Create many Filmes
     * const filme = await prisma.filme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilmeCreateManyArgs>(args?: SelectSubset<T, FilmeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Filmes and returns the data saved in the database.
     * @param {FilmeCreateManyAndReturnArgs} args - Arguments to create many Filmes.
     * @example
     * // Create many Filmes
     * const filme = await prisma.filme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Filmes and only return the `id`
     * const filmeWithIdOnly = await prisma.filme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilmeCreateManyAndReturnArgs>(args?: SelectSubset<T, FilmeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Filme.
     * @param {FilmeDeleteArgs} args - Arguments to delete one Filme.
     * @example
     * // Delete one Filme
     * const Filme = await prisma.filme.delete({
     *   where: {
     *     // ... filter to delete one Filme
     *   }
     * })
     * 
     */
    delete<T extends FilmeDeleteArgs>(args: SelectSubset<T, FilmeDeleteArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Filme.
     * @param {FilmeUpdateArgs} args - Arguments to update one Filme.
     * @example
     * // Update one Filme
     * const filme = await prisma.filme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilmeUpdateArgs>(args: SelectSubset<T, FilmeUpdateArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Filmes.
     * @param {FilmeDeleteManyArgs} args - Arguments to filter Filmes to delete.
     * @example
     * // Delete a few Filmes
     * const { count } = await prisma.filme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilmeDeleteManyArgs>(args?: SelectSubset<T, FilmeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Filmes
     * const filme = await prisma.filme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilmeUpdateManyArgs>(args: SelectSubset<T, FilmeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filmes and returns the data updated in the database.
     * @param {FilmeUpdateManyAndReturnArgs} args - Arguments to update many Filmes.
     * @example
     * // Update many Filmes
     * const filme = await prisma.filme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Filmes and only return the `id`
     * const filmeWithIdOnly = await prisma.filme.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilmeUpdateManyAndReturnArgs>(args: SelectSubset<T, FilmeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Filme.
     * @param {FilmeUpsertArgs} args - Arguments to update or create a Filme.
     * @example
     * // Update or create a Filme
     * const filme = await prisma.filme.upsert({
     *   create: {
     *     // ... data to create a Filme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Filme we want to update
     *   }
     * })
     */
    upsert<T extends FilmeUpsertArgs>(args: SelectSubset<T, FilmeUpsertArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Filmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeCountArgs} args - Arguments to filter Filmes to count.
     * @example
     * // Count the number of Filmes
     * const count = await prisma.filme.count({
     *   where: {
     *     // ... the filter for the Filmes we want to count
     *   }
     * })
    **/
    count<T extends FilmeCountArgs>(
      args?: Subset<T, FilmeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilmeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Filme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilmeAggregateArgs>(args: Subset<T, FilmeAggregateArgs>): Prisma.PrismaPromise<GetFilmeAggregateType<T>>

    /**
     * Group by Filme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeGroupByArgs} args - Group by arguments.
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
      T extends FilmeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilmeGroupByArgs['orderBy'] }
        : { orderBy?: FilmeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilmeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Filme model
   */
  readonly fields: FilmeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Filme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilmeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generos<T extends Filme$generosArgs<ExtArgs> = {}>(args?: Subset<T, Filme$generosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avaliacoes<T extends Filme$avaliacoesArgs<ExtArgs> = {}>(args?: Subset<T, Filme$avaliacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Filme model
   */
  interface FilmeFieldRefs {
    readonly id: FieldRef<"Filme", 'Int'>
    readonly nome: FieldRef<"Filme", 'String'>
    readonly diretor: FieldRef<"Filme", 'String'>
    readonly anoLancamento: FieldRef<"Filme", 'Int'>
    readonly duracao: FieldRef<"Filme", 'Int'>
    readonly produtora: FieldRef<"Filme", 'String'>
    readonly classificacao: FieldRef<"Filme", 'String'>
    readonly poster: FieldRef<"Filme", 'String'>
    readonly deletedAt: FieldRef<"Filme", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Filme findUnique
   */
  export type FilmeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme findUniqueOrThrow
   */
  export type FilmeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme findFirst
   */
  export type FilmeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filmes.
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filmes.
     */
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Filme findFirstOrThrow
   */
  export type FilmeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filmes.
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filmes.
     */
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Filme findMany
   */
  export type FilmeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filmes to fetch.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Filmes.
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Filme create
   */
  export type FilmeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * The data needed to create a Filme.
     */
    data: XOR<FilmeCreateInput, FilmeUncheckedCreateInput>
  }

  /**
   * Filme createMany
   */
  export type FilmeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Filmes.
     */
    data: FilmeCreateManyInput | FilmeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Filme createManyAndReturn
   */
  export type FilmeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * The data used to create many Filmes.
     */
    data: FilmeCreateManyInput | FilmeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Filme update
   */
  export type FilmeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * The data needed to update a Filme.
     */
    data: XOR<FilmeUpdateInput, FilmeUncheckedUpdateInput>
    /**
     * Choose, which Filme to update.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme updateMany
   */
  export type FilmeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Filmes.
     */
    data: XOR<FilmeUpdateManyMutationInput, FilmeUncheckedUpdateManyInput>
    /**
     * Filter which Filmes to update
     */
    where?: FilmeWhereInput
    /**
     * Limit how many Filmes to update.
     */
    limit?: number
  }

  /**
   * Filme updateManyAndReturn
   */
  export type FilmeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * The data used to update Filmes.
     */
    data: XOR<FilmeUpdateManyMutationInput, FilmeUncheckedUpdateManyInput>
    /**
     * Filter which Filmes to update
     */
    where?: FilmeWhereInput
    /**
     * Limit how many Filmes to update.
     */
    limit?: number
  }

  /**
   * Filme upsert
   */
  export type FilmeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * The filter to search for the Filme to update in case it exists.
     */
    where: FilmeWhereUniqueInput
    /**
     * In case the Filme found by the `where` argument doesn't exist, create a new Filme with this data.
     */
    create: XOR<FilmeCreateInput, FilmeUncheckedCreateInput>
    /**
     * In case the Filme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilmeUpdateInput, FilmeUncheckedUpdateInput>
  }

  /**
   * Filme delete
   */
  export type FilmeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter which Filme to delete.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme deleteMany
   */
  export type FilmeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filmes to delete
     */
    where?: FilmeWhereInput
    /**
     * Limit how many Filmes to delete.
     */
    limit?: number
  }

  /**
   * Filme.generos
   */
  export type Filme$generosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeInclude<ExtArgs> | null
    where?: GeneroFilmeWhereInput
    orderBy?: GeneroFilmeOrderByWithRelationInput | GeneroFilmeOrderByWithRelationInput[]
    cursor?: GeneroFilmeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneroFilmeScalarFieldEnum | GeneroFilmeScalarFieldEnum[]
  }

  /**
   * Filme.avaliacoes
   */
  export type Filme$avaliacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Filme without action
   */
  export type FilmeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
  }


  /**
   * Model GeneroFilme
   */

  export type AggregateGeneroFilme = {
    _count: GeneroFilmeCountAggregateOutputType | null
    _avg: GeneroFilmeAvgAggregateOutputType | null
    _sum: GeneroFilmeSumAggregateOutputType | null
    _min: GeneroFilmeMinAggregateOutputType | null
    _max: GeneroFilmeMaxAggregateOutputType | null
  }

  export type GeneroFilmeAvgAggregateOutputType = {
    idGenero: number | null
    idFilme: number | null
  }

  export type GeneroFilmeSumAggregateOutputType = {
    idGenero: number | null
    idFilme: number | null
  }

  export type GeneroFilmeMinAggregateOutputType = {
    idGenero: number | null
    idFilme: number | null
  }

  export type GeneroFilmeMaxAggregateOutputType = {
    idGenero: number | null
    idFilme: number | null
  }

  export type GeneroFilmeCountAggregateOutputType = {
    idGenero: number
    idFilme: number
    _all: number
  }


  export type GeneroFilmeAvgAggregateInputType = {
    idGenero?: true
    idFilme?: true
  }

  export type GeneroFilmeSumAggregateInputType = {
    idGenero?: true
    idFilme?: true
  }

  export type GeneroFilmeMinAggregateInputType = {
    idGenero?: true
    idFilme?: true
  }

  export type GeneroFilmeMaxAggregateInputType = {
    idGenero?: true
    idFilme?: true
  }

  export type GeneroFilmeCountAggregateInputType = {
    idGenero?: true
    idFilme?: true
    _all?: true
  }

  export type GeneroFilmeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneroFilme to aggregate.
     */
    where?: GeneroFilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneroFilmes to fetch.
     */
    orderBy?: GeneroFilmeOrderByWithRelationInput | GeneroFilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneroFilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneroFilmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneroFilmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneroFilmes
    **/
    _count?: true | GeneroFilmeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneroFilmeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneroFilmeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroFilmeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroFilmeMaxAggregateInputType
  }

  export type GetGeneroFilmeAggregateType<T extends GeneroFilmeAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneroFilme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneroFilme[P]>
      : GetScalarType<T[P], AggregateGeneroFilme[P]>
  }




  export type GeneroFilmeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroFilmeWhereInput
    orderBy?: GeneroFilmeOrderByWithAggregationInput | GeneroFilmeOrderByWithAggregationInput[]
    by: GeneroFilmeScalarFieldEnum[] | GeneroFilmeScalarFieldEnum
    having?: GeneroFilmeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroFilmeCountAggregateInputType | true
    _avg?: GeneroFilmeAvgAggregateInputType
    _sum?: GeneroFilmeSumAggregateInputType
    _min?: GeneroFilmeMinAggregateInputType
    _max?: GeneroFilmeMaxAggregateInputType
  }

  export type GeneroFilmeGroupByOutputType = {
    idGenero: number
    idFilme: number
    _count: GeneroFilmeCountAggregateOutputType | null
    _avg: GeneroFilmeAvgAggregateOutputType | null
    _sum: GeneroFilmeSumAggregateOutputType | null
    _min: GeneroFilmeMinAggregateOutputType | null
    _max: GeneroFilmeMaxAggregateOutputType | null
  }

  type GetGeneroFilmeGroupByPayload<T extends GeneroFilmeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroFilmeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroFilmeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroFilmeGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroFilmeGroupByOutputType[P]>
        }
      >
    >


  export type GeneroFilmeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idGenero?: boolean
    idFilme?: boolean
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generoFilme"]>

  export type GeneroFilmeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idGenero?: boolean
    idFilme?: boolean
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generoFilme"]>

  export type GeneroFilmeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idGenero?: boolean
    idFilme?: boolean
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["generoFilme"]>

  export type GeneroFilmeSelectScalar = {
    idGenero?: boolean
    idFilme?: boolean
  }

  export type GeneroFilmeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idGenero" | "idFilme", ExtArgs["result"]["generoFilme"]>
  export type GeneroFilmeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }
  export type GeneroFilmeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }
  export type GeneroFilmeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genero?: boolean | GeneroDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
  }

  export type $GeneroFilmePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneroFilme"
    objects: {
      genero: Prisma.$GeneroPayload<ExtArgs>
      filme: Prisma.$FilmePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idGenero: number
      idFilme: number
    }, ExtArgs["result"]["generoFilme"]>
    composites: {}
  }

  type GeneroFilmeGetPayload<S extends boolean | null | undefined | GeneroFilmeDefaultArgs> = $Result.GetResult<Prisma.$GeneroFilmePayload, S>

  type GeneroFilmeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneroFilmeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneroFilmeCountAggregateInputType | true
    }

  export interface GeneroFilmeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneroFilme'], meta: { name: 'GeneroFilme' } }
    /**
     * Find zero or one GeneroFilme that matches the filter.
     * @param {GeneroFilmeFindUniqueArgs} args - Arguments to find a GeneroFilme
     * @example
     * // Get one GeneroFilme
     * const generoFilme = await prisma.generoFilme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneroFilmeFindUniqueArgs>(args: SelectSubset<T, GeneroFilmeFindUniqueArgs<ExtArgs>>): Prisma__GeneroFilmeClient<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneroFilme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneroFilmeFindUniqueOrThrowArgs} args - Arguments to find a GeneroFilme
     * @example
     * // Get one GeneroFilme
     * const generoFilme = await prisma.generoFilme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneroFilmeFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneroFilmeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneroFilmeClient<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneroFilme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFilmeFindFirstArgs} args - Arguments to find a GeneroFilme
     * @example
     * // Get one GeneroFilme
     * const generoFilme = await prisma.generoFilme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneroFilmeFindFirstArgs>(args?: SelectSubset<T, GeneroFilmeFindFirstArgs<ExtArgs>>): Prisma__GeneroFilmeClient<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneroFilme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFilmeFindFirstOrThrowArgs} args - Arguments to find a GeneroFilme
     * @example
     * // Get one GeneroFilme
     * const generoFilme = await prisma.generoFilme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneroFilmeFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneroFilmeFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneroFilmeClient<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneroFilmes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFilmeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneroFilmes
     * const generoFilmes = await prisma.generoFilme.findMany()
     * 
     * // Get first 10 GeneroFilmes
     * const generoFilmes = await prisma.generoFilme.findMany({ take: 10 })
     * 
     * // Only select the `idGenero`
     * const generoFilmeWithIdGeneroOnly = await prisma.generoFilme.findMany({ select: { idGenero: true } })
     * 
     */
    findMany<T extends GeneroFilmeFindManyArgs>(args?: SelectSubset<T, GeneroFilmeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneroFilme.
     * @param {GeneroFilmeCreateArgs} args - Arguments to create a GeneroFilme.
     * @example
     * // Create one GeneroFilme
     * const GeneroFilme = await prisma.generoFilme.create({
     *   data: {
     *     // ... data to create a GeneroFilme
     *   }
     * })
     * 
     */
    create<T extends GeneroFilmeCreateArgs>(args: SelectSubset<T, GeneroFilmeCreateArgs<ExtArgs>>): Prisma__GeneroFilmeClient<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneroFilmes.
     * @param {GeneroFilmeCreateManyArgs} args - Arguments to create many GeneroFilmes.
     * @example
     * // Create many GeneroFilmes
     * const generoFilme = await prisma.generoFilme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneroFilmeCreateManyArgs>(args?: SelectSubset<T, GeneroFilmeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneroFilmes and returns the data saved in the database.
     * @param {GeneroFilmeCreateManyAndReturnArgs} args - Arguments to create many GeneroFilmes.
     * @example
     * // Create many GeneroFilmes
     * const generoFilme = await prisma.generoFilme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneroFilmes and only return the `idGenero`
     * const generoFilmeWithIdGeneroOnly = await prisma.generoFilme.createManyAndReturn({
     *   select: { idGenero: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneroFilmeCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneroFilmeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneroFilme.
     * @param {GeneroFilmeDeleteArgs} args - Arguments to delete one GeneroFilme.
     * @example
     * // Delete one GeneroFilme
     * const GeneroFilme = await prisma.generoFilme.delete({
     *   where: {
     *     // ... filter to delete one GeneroFilme
     *   }
     * })
     * 
     */
    delete<T extends GeneroFilmeDeleteArgs>(args: SelectSubset<T, GeneroFilmeDeleteArgs<ExtArgs>>): Prisma__GeneroFilmeClient<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneroFilme.
     * @param {GeneroFilmeUpdateArgs} args - Arguments to update one GeneroFilme.
     * @example
     * // Update one GeneroFilme
     * const generoFilme = await prisma.generoFilme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneroFilmeUpdateArgs>(args: SelectSubset<T, GeneroFilmeUpdateArgs<ExtArgs>>): Prisma__GeneroFilmeClient<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneroFilmes.
     * @param {GeneroFilmeDeleteManyArgs} args - Arguments to filter GeneroFilmes to delete.
     * @example
     * // Delete a few GeneroFilmes
     * const { count } = await prisma.generoFilme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneroFilmeDeleteManyArgs>(args?: SelectSubset<T, GeneroFilmeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneroFilmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFilmeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneroFilmes
     * const generoFilme = await prisma.generoFilme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneroFilmeUpdateManyArgs>(args: SelectSubset<T, GeneroFilmeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneroFilmes and returns the data updated in the database.
     * @param {GeneroFilmeUpdateManyAndReturnArgs} args - Arguments to update many GeneroFilmes.
     * @example
     * // Update many GeneroFilmes
     * const generoFilme = await prisma.generoFilme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneroFilmes and only return the `idGenero`
     * const generoFilmeWithIdGeneroOnly = await prisma.generoFilme.updateManyAndReturn({
     *   select: { idGenero: true },
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
    updateManyAndReturn<T extends GeneroFilmeUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneroFilmeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneroFilme.
     * @param {GeneroFilmeUpsertArgs} args - Arguments to update or create a GeneroFilme.
     * @example
     * // Update or create a GeneroFilme
     * const generoFilme = await prisma.generoFilme.upsert({
     *   create: {
     *     // ... data to create a GeneroFilme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneroFilme we want to update
     *   }
     * })
     */
    upsert<T extends GeneroFilmeUpsertArgs>(args: SelectSubset<T, GeneroFilmeUpsertArgs<ExtArgs>>): Prisma__GeneroFilmeClient<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneroFilmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFilmeCountArgs} args - Arguments to filter GeneroFilmes to count.
     * @example
     * // Count the number of GeneroFilmes
     * const count = await prisma.generoFilme.count({
     *   where: {
     *     // ... the filter for the GeneroFilmes we want to count
     *   }
     * })
    **/
    count<T extends GeneroFilmeCountArgs>(
      args?: Subset<T, GeneroFilmeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroFilmeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneroFilme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFilmeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneroFilmeAggregateArgs>(args: Subset<T, GeneroFilmeAggregateArgs>): Prisma.PrismaPromise<GetGeneroFilmeAggregateType<T>>

    /**
     * Group by GeneroFilme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFilmeGroupByArgs} args - Group by arguments.
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
      T extends GeneroFilmeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneroFilmeGroupByArgs['orderBy'] }
        : { orderBy?: GeneroFilmeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneroFilmeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroFilmeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneroFilme model
   */
  readonly fields: GeneroFilmeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneroFilme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneroFilmeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genero<T extends GeneroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GeneroDefaultArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filme<T extends FilmeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilmeDefaultArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GeneroFilme model
   */
  interface GeneroFilmeFieldRefs {
    readonly idGenero: FieldRef<"GeneroFilme", 'Int'>
    readonly idFilme: FieldRef<"GeneroFilme", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GeneroFilme findUnique
   */
  export type GeneroFilmeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeInclude<ExtArgs> | null
    /**
     * Filter, which GeneroFilme to fetch.
     */
    where: GeneroFilmeWhereUniqueInput
  }

  /**
   * GeneroFilme findUniqueOrThrow
   */
  export type GeneroFilmeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeInclude<ExtArgs> | null
    /**
     * Filter, which GeneroFilme to fetch.
     */
    where: GeneroFilmeWhereUniqueInput
  }

  /**
   * GeneroFilme findFirst
   */
  export type GeneroFilmeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeInclude<ExtArgs> | null
    /**
     * Filter, which GeneroFilme to fetch.
     */
    where?: GeneroFilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneroFilmes to fetch.
     */
    orderBy?: GeneroFilmeOrderByWithRelationInput | GeneroFilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneroFilmes.
     */
    cursor?: GeneroFilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneroFilmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneroFilmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneroFilmes.
     */
    distinct?: GeneroFilmeScalarFieldEnum | GeneroFilmeScalarFieldEnum[]
  }

  /**
   * GeneroFilme findFirstOrThrow
   */
  export type GeneroFilmeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeInclude<ExtArgs> | null
    /**
     * Filter, which GeneroFilme to fetch.
     */
    where?: GeneroFilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneroFilmes to fetch.
     */
    orderBy?: GeneroFilmeOrderByWithRelationInput | GeneroFilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneroFilmes.
     */
    cursor?: GeneroFilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneroFilmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneroFilmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneroFilmes.
     */
    distinct?: GeneroFilmeScalarFieldEnum | GeneroFilmeScalarFieldEnum[]
  }

  /**
   * GeneroFilme findMany
   */
  export type GeneroFilmeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeInclude<ExtArgs> | null
    /**
     * Filter, which GeneroFilmes to fetch.
     */
    where?: GeneroFilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneroFilmes to fetch.
     */
    orderBy?: GeneroFilmeOrderByWithRelationInput | GeneroFilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneroFilmes.
     */
    cursor?: GeneroFilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneroFilmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneroFilmes.
     */
    skip?: number
    distinct?: GeneroFilmeScalarFieldEnum | GeneroFilmeScalarFieldEnum[]
  }

  /**
   * GeneroFilme create
   */
  export type GeneroFilmeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneroFilme.
     */
    data: XOR<GeneroFilmeCreateInput, GeneroFilmeUncheckedCreateInput>
  }

  /**
   * GeneroFilme createMany
   */
  export type GeneroFilmeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneroFilmes.
     */
    data: GeneroFilmeCreateManyInput | GeneroFilmeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GeneroFilme createManyAndReturn
   */
  export type GeneroFilmeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * The data used to create many GeneroFilmes.
     */
    data: GeneroFilmeCreateManyInput | GeneroFilmeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneroFilme update
   */
  export type GeneroFilmeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneroFilme.
     */
    data: XOR<GeneroFilmeUpdateInput, GeneroFilmeUncheckedUpdateInput>
    /**
     * Choose, which GeneroFilme to update.
     */
    where: GeneroFilmeWhereUniqueInput
  }

  /**
   * GeneroFilme updateMany
   */
  export type GeneroFilmeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneroFilmes.
     */
    data: XOR<GeneroFilmeUpdateManyMutationInput, GeneroFilmeUncheckedUpdateManyInput>
    /**
     * Filter which GeneroFilmes to update
     */
    where?: GeneroFilmeWhereInput
    /**
     * Limit how many GeneroFilmes to update.
     */
    limit?: number
  }

  /**
   * GeneroFilme updateManyAndReturn
   */
  export type GeneroFilmeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * The data used to update GeneroFilmes.
     */
    data: XOR<GeneroFilmeUpdateManyMutationInput, GeneroFilmeUncheckedUpdateManyInput>
    /**
     * Filter which GeneroFilmes to update
     */
    where?: GeneroFilmeWhereInput
    /**
     * Limit how many GeneroFilmes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneroFilme upsert
   */
  export type GeneroFilmeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneroFilme to update in case it exists.
     */
    where: GeneroFilmeWhereUniqueInput
    /**
     * In case the GeneroFilme found by the `where` argument doesn't exist, create a new GeneroFilme with this data.
     */
    create: XOR<GeneroFilmeCreateInput, GeneroFilmeUncheckedCreateInput>
    /**
     * In case the GeneroFilme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneroFilmeUpdateInput, GeneroFilmeUncheckedUpdateInput>
  }

  /**
   * GeneroFilme delete
   */
  export type GeneroFilmeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeInclude<ExtArgs> | null
    /**
     * Filter which GeneroFilme to delete.
     */
    where: GeneroFilmeWhereUniqueInput
  }

  /**
   * GeneroFilme deleteMany
   */
  export type GeneroFilmeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneroFilmes to delete
     */
    where?: GeneroFilmeWhereInput
    /**
     * Limit how many GeneroFilmes to delete.
     */
    limit?: number
  }

  /**
   * GeneroFilme without action
   */
  export type GeneroFilmeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeInclude<ExtArgs> | null
  }


  /**
   * Model Genero
   */

  export type AggregateGenero = {
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  export type GeneroAvgAggregateOutputType = {
    id: number | null
  }

  export type GeneroSumAggregateOutputType = {
    id: number | null
  }

  export type GeneroMinAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type GeneroMaxAggregateOutputType = {
    id: number | null
    descricao: string | null
  }

  export type GeneroCountAggregateOutputType = {
    id: number
    descricao: number
    _all: number
  }


  export type GeneroAvgAggregateInputType = {
    id?: true
  }

  export type GeneroSumAggregateInputType = {
    id?: true
  }

  export type GeneroMinAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type GeneroMaxAggregateInputType = {
    id?: true
    descricao?: true
  }

  export type GeneroCountAggregateInputType = {
    id?: true
    descricao?: true
    _all?: true
  }

  export type GeneroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genero to aggregate.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Generos
    **/
    _count?: true | GeneroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneroMaxAggregateInputType
  }

  export type GetGeneroAggregateType<T extends GeneroAggregateArgs> = {
        [P in keyof T & keyof AggregateGenero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenero[P]>
      : GetScalarType<T[P], AggregateGenero[P]>
  }




  export type GeneroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneroWhereInput
    orderBy?: GeneroOrderByWithAggregationInput | GeneroOrderByWithAggregationInput[]
    by: GeneroScalarFieldEnum[] | GeneroScalarFieldEnum
    having?: GeneroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneroCountAggregateInputType | true
    _avg?: GeneroAvgAggregateInputType
    _sum?: GeneroSumAggregateInputType
    _min?: GeneroMinAggregateInputType
    _max?: GeneroMaxAggregateInputType
  }

  export type GeneroGroupByOutputType = {
    id: number
    descricao: string
    _count: GeneroCountAggregateOutputType | null
    _avg: GeneroAvgAggregateOutputType | null
    _sum: GeneroSumAggregateOutputType | null
    _min: GeneroMinAggregateOutputType | null
    _max: GeneroMaxAggregateOutputType | null
  }

  type GetGeneroGroupByPayload<T extends GeneroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneroGroupByOutputType[P]>
            : GetScalarType<T[P], GeneroGroupByOutputType[P]>
        }
      >
    >


  export type GeneroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
    generosFilme?: boolean | Genero$generosFilmeArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genero"]>

  export type GeneroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["genero"]>

  export type GeneroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["genero"]>

  export type GeneroSelectScalar = {
    id?: boolean
    descricao?: boolean
  }

  export type GeneroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "descricao", ExtArgs["result"]["genero"]>
  export type GeneroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generosFilme?: boolean | Genero$generosFilmeArgs<ExtArgs>
    _count?: boolean | GeneroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GeneroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GeneroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GeneroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genero"
    objects: {
      generosFilme: Prisma.$GeneroFilmePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      descricao: string
    }, ExtArgs["result"]["genero"]>
    composites: {}
  }

  type GeneroGetPayload<S extends boolean | null | undefined | GeneroDefaultArgs> = $Result.GetResult<Prisma.$GeneroPayload, S>

  type GeneroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneroCountAggregateInputType | true
    }

  export interface GeneroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genero'], meta: { name: 'Genero' } }
    /**
     * Find zero or one Genero that matches the filter.
     * @param {GeneroFindUniqueArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneroFindUniqueArgs>(args: SelectSubset<T, GeneroFindUniqueArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneroFindUniqueOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneroFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneroFindFirstArgs>(args?: SelectSubset<T, GeneroFindFirstArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindFirstOrThrowArgs} args - Arguments to find a Genero
     * @example
     * // Get one Genero
     * const genero = await prisma.genero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneroFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneroFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Generos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Generos
     * const generos = await prisma.genero.findMany()
     * 
     * // Get first 10 Generos
     * const generos = await prisma.genero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generoWithIdOnly = await prisma.genero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneroFindManyArgs>(args?: SelectSubset<T, GeneroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genero.
     * @param {GeneroCreateArgs} args - Arguments to create a Genero.
     * @example
     * // Create one Genero
     * const Genero = await prisma.genero.create({
     *   data: {
     *     // ... data to create a Genero
     *   }
     * })
     * 
     */
    create<T extends GeneroCreateArgs>(args: SelectSubset<T, GeneroCreateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Generos.
     * @param {GeneroCreateManyArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneroCreateManyArgs>(args?: SelectSubset<T, GeneroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Generos and returns the data saved in the database.
     * @param {GeneroCreateManyAndReturnArgs} args - Arguments to create many Generos.
     * @example
     * // Create many Generos
     * const genero = await prisma.genero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Generos and only return the `id`
     * const generoWithIdOnly = await prisma.genero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneroCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genero.
     * @param {GeneroDeleteArgs} args - Arguments to delete one Genero.
     * @example
     * // Delete one Genero
     * const Genero = await prisma.genero.delete({
     *   where: {
     *     // ... filter to delete one Genero
     *   }
     * })
     * 
     */
    delete<T extends GeneroDeleteArgs>(args: SelectSubset<T, GeneroDeleteArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genero.
     * @param {GeneroUpdateArgs} args - Arguments to update one Genero.
     * @example
     * // Update one Genero
     * const genero = await prisma.genero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneroUpdateArgs>(args: SelectSubset<T, GeneroUpdateArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Generos.
     * @param {GeneroDeleteManyArgs} args - Arguments to filter Generos to delete.
     * @example
     * // Delete a few Generos
     * const { count } = await prisma.genero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneroDeleteManyArgs>(args?: SelectSubset<T, GeneroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneroUpdateManyArgs>(args: SelectSubset<T, GeneroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Generos and returns the data updated in the database.
     * @param {GeneroUpdateManyAndReturnArgs} args - Arguments to update many Generos.
     * @example
     * // Update many Generos
     * const genero = await prisma.genero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Generos and only return the `id`
     * const generoWithIdOnly = await prisma.genero.updateManyAndReturn({
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
    updateManyAndReturn<T extends GeneroUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genero.
     * @param {GeneroUpsertArgs} args - Arguments to update or create a Genero.
     * @example
     * // Update or create a Genero
     * const genero = await prisma.genero.upsert({
     *   create: {
     *     // ... data to create a Genero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genero we want to update
     *   }
     * })
     */
    upsert<T extends GeneroUpsertArgs>(args: SelectSubset<T, GeneroUpsertArgs<ExtArgs>>): Prisma__GeneroClient<$Result.GetResult<Prisma.$GeneroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Generos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroCountArgs} args - Arguments to filter Generos to count.
     * @example
     * // Count the number of Generos
     * const count = await prisma.genero.count({
     *   where: {
     *     // ... the filter for the Generos we want to count
     *   }
     * })
    **/
    count<T extends GeneroCountArgs>(
      args?: Subset<T, GeneroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneroAggregateArgs>(args: Subset<T, GeneroAggregateArgs>): Prisma.PrismaPromise<GetGeneroAggregateType<T>>

    /**
     * Group by Genero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneroGroupByArgs} args - Group by arguments.
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
      T extends GeneroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneroGroupByArgs['orderBy'] }
        : { orderBy?: GeneroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genero model
   */
  readonly fields: GeneroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generosFilme<T extends Genero$generosFilmeArgs<ExtArgs> = {}>(args?: Subset<T, Genero$generosFilmeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneroFilmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genero model
   */
  interface GeneroFieldRefs {
    readonly id: FieldRef<"Genero", 'Int'>
    readonly descricao: FieldRef<"Genero", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genero findUnique
   */
  export type GeneroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findUniqueOrThrow
   */
  export type GeneroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero findFirst
   */
  export type GeneroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findFirstOrThrow
   */
  export type GeneroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Genero to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Generos.
     */
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero findMany
   */
  export type GeneroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter, which Generos to fetch.
     */
    where?: GeneroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Generos to fetch.
     */
    orderBy?: GeneroOrderByWithRelationInput | GeneroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Generos.
     */
    cursor?: GeneroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Generos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Generos.
     */
    skip?: number
    distinct?: GeneroScalarFieldEnum | GeneroScalarFieldEnum[]
  }

  /**
   * Genero create
   */
  export type GeneroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to create a Genero.
     */
    data: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
  }

  /**
   * Genero createMany
   */
  export type GeneroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Generos.
     */
    data: GeneroCreateManyInput | GeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genero createManyAndReturn
   */
  export type GeneroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * The data used to create many Generos.
     */
    data: GeneroCreateManyInput | GeneroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genero update
   */
  export type GeneroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The data needed to update a Genero.
     */
    data: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
    /**
     * Choose, which Genero to update.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero updateMany
   */
  export type GeneroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Generos.
     */
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyInput>
    /**
     * Filter which Generos to update
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to update.
     */
    limit?: number
  }

  /**
   * Genero updateManyAndReturn
   */
  export type GeneroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * The data used to update Generos.
     */
    data: XOR<GeneroUpdateManyMutationInput, GeneroUncheckedUpdateManyInput>
    /**
     * Filter which Generos to update
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to update.
     */
    limit?: number
  }

  /**
   * Genero upsert
   */
  export type GeneroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * The filter to search for the Genero to update in case it exists.
     */
    where: GeneroWhereUniqueInput
    /**
     * In case the Genero found by the `where` argument doesn't exist, create a new Genero with this data.
     */
    create: XOR<GeneroCreateInput, GeneroUncheckedCreateInput>
    /**
     * In case the Genero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneroUpdateInput, GeneroUncheckedUpdateInput>
  }

  /**
   * Genero delete
   */
  export type GeneroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
    /**
     * Filter which Genero to delete.
     */
    where: GeneroWhereUniqueInput
  }

  /**
   * Genero deleteMany
   */
  export type GeneroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Generos to delete
     */
    where?: GeneroWhereInput
    /**
     * Limit how many Generos to delete.
     */
    limit?: number
  }

  /**
   * Genero.generosFilme
   */
  export type Genero$generosFilmeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneroFilme
     */
    select?: GeneroFilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneroFilme
     */
    omit?: GeneroFilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroFilmeInclude<ExtArgs> | null
    where?: GeneroFilmeWhereInput
    orderBy?: GeneroFilmeOrderByWithRelationInput | GeneroFilmeOrderByWithRelationInput[]
    cursor?: GeneroFilmeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneroFilmeScalarFieldEnum | GeneroFilmeScalarFieldEnum[]
  }

  /**
   * Genero without action
   */
  export type GeneroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genero
     */
    select?: GeneroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genero
     */
    omit?: GeneroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneroInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    senha: 'senha',
    email: 'email',
    status: 'status',
    username: 'username',
    dataNascimento: 'dataNascimento',
    dataCriacao: 'dataCriacao',
    dataAtualizacao: 'dataAtualizacao',
    tipoUsuario: 'tipoUsuario',
    deletedAt: 'deletedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    idUsuario: 'idUsuario',
    idFilme: 'idFilme',
    nota: 'nota',
    comentario: 'comentario',
    deletedAt: 'deletedAt'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const FilmeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    diretor: 'diretor',
    anoLancamento: 'anoLancamento',
    duracao: 'duracao',
    produtora: 'produtora',
    classificacao: 'classificacao',
    poster: 'poster',
    deletedAt: 'deletedAt'
  };

  export type FilmeScalarFieldEnum = (typeof FilmeScalarFieldEnum)[keyof typeof FilmeScalarFieldEnum]


  export const GeneroFilmeScalarFieldEnum: {
    idGenero: 'idGenero',
    idFilme: 'idFilme'
  };

  export type GeneroFilmeScalarFieldEnum = (typeof GeneroFilmeScalarFieldEnum)[keyof typeof GeneroFilmeScalarFieldEnum]


  export const GeneroScalarFieldEnum: {
    id: 'id',
    descricao: 'descricao'
  };

  export type GeneroScalarFieldEnum = (typeof GeneroScalarFieldEnum)[keyof typeof GeneroScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoUsuario'
   */
  export type EnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario'>
    


  /**
   * Reference to a field of type 'TipoUsuario[]'
   */
  export type ListEnumTipoUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoUsuario[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    status?: StringFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    dataNascimento?: DateTimeFilter<"Usuario"> | Date | string
    dataCriacao?: DateTimeFilter<"Usuario"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Usuario"> | Date | string
    tipoUsuario?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    deletedAt?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    avaliacoes?: AvaliacaoListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    email?: SortOrder
    status?: SortOrder
    username?: SortOrder
    dataNascimento?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    tipoUsuario?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    status?: StringFilter<"Usuario"> | string
    dataNascimento?: DateTimeFilter<"Usuario"> | Date | string
    dataCriacao?: DateTimeFilter<"Usuario"> | Date | string
    dataAtualizacao?: DateTimeFilter<"Usuario"> | Date | string
    tipoUsuario?: EnumTipoUsuarioFilter<"Usuario"> | $Enums.TipoUsuario
    deletedAt?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    avaliacoes?: AvaliacaoListRelationFilter
  }, "id" | "email" | "username">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    email?: SortOrder
    status?: SortOrder
    username?: SortOrder
    dataNascimento?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    tipoUsuario?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    status?: StringWithAggregatesFilter<"Usuario"> | string
    username?: StringWithAggregatesFilter<"Usuario"> | string
    dataNascimento?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    dataCriacao?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    dataAtualizacao?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    tipoUsuario?: EnumTipoUsuarioWithAggregatesFilter<"Usuario"> | $Enums.TipoUsuario
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    idUsuario?: IntFilter<"Avaliacao"> | number
    idFilme?: IntFilter<"Avaliacao"> | number
    nota?: FloatFilter<"Avaliacao"> | number
    comentario?: StringFilter<"Avaliacao"> | string
    deletedAt?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    filme?: XOR<FilmeScalarRelationFilter, FilmeWhereInput>
  }

  export type AvaliacaoOrderByWithRelationInput = {
    idUsuario?: SortOrder
    idFilme?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    filme?: FilmeOrderByWithRelationInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    idUsuario_idFilme?: AvaliacaoIdUsuarioIdFilmeCompoundUniqueInput
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    idUsuario?: IntFilter<"Avaliacao"> | number
    idFilme?: IntFilter<"Avaliacao"> | number
    nota?: FloatFilter<"Avaliacao"> | number
    comentario?: StringFilter<"Avaliacao"> | string
    deletedAt?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    filme?: XOR<FilmeScalarRelationFilter, FilmeWhereInput>
  }, "idUsuario_idFilme">

  export type AvaliacaoOrderByWithAggregationInput = {
    idUsuario?: SortOrder
    idFilme?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    idUsuario?: IntWithAggregatesFilter<"Avaliacao"> | number
    idFilme?: IntWithAggregatesFilter<"Avaliacao"> | number
    nota?: FloatWithAggregatesFilter<"Avaliacao"> | number
    comentario?: StringWithAggregatesFilter<"Avaliacao"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Avaliacao"> | Date | string | null
  }

  export type FilmeWhereInput = {
    AND?: FilmeWhereInput | FilmeWhereInput[]
    OR?: FilmeWhereInput[]
    NOT?: FilmeWhereInput | FilmeWhereInput[]
    id?: IntFilter<"Filme"> | number
    nome?: StringFilter<"Filme"> | string
    diretor?: StringFilter<"Filme"> | string
    anoLancamento?: IntFilter<"Filme"> | number
    duracao?: IntFilter<"Filme"> | number
    produtora?: StringFilter<"Filme"> | string
    classificacao?: StringFilter<"Filme"> | string
    poster?: StringFilter<"Filme"> | string
    deletedAt?: DateTimeNullableFilter<"Filme"> | Date | string | null
    generos?: GeneroFilmeListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }

  export type FilmeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    diretor?: SortOrder
    anoLancamento?: SortOrder
    duracao?: SortOrder
    produtora?: SortOrder
    classificacao?: SortOrder
    poster?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    generos?: GeneroFilmeOrderByRelationAggregateInput
    avaliacoes?: AvaliacaoOrderByRelationAggregateInput
  }

  export type FilmeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FilmeWhereInput | FilmeWhereInput[]
    OR?: FilmeWhereInput[]
    NOT?: FilmeWhereInput | FilmeWhereInput[]
    nome?: StringFilter<"Filme"> | string
    diretor?: StringFilter<"Filme"> | string
    anoLancamento?: IntFilter<"Filme"> | number
    duracao?: IntFilter<"Filme"> | number
    produtora?: StringFilter<"Filme"> | string
    classificacao?: StringFilter<"Filme"> | string
    poster?: StringFilter<"Filme"> | string
    deletedAt?: DateTimeNullableFilter<"Filme"> | Date | string | null
    generos?: GeneroFilmeListRelationFilter
    avaliacoes?: AvaliacaoListRelationFilter
  }, "id">

  export type FilmeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    diretor?: SortOrder
    anoLancamento?: SortOrder
    duracao?: SortOrder
    produtora?: SortOrder
    classificacao?: SortOrder
    poster?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: FilmeCountOrderByAggregateInput
    _avg?: FilmeAvgOrderByAggregateInput
    _max?: FilmeMaxOrderByAggregateInput
    _min?: FilmeMinOrderByAggregateInput
    _sum?: FilmeSumOrderByAggregateInput
  }

  export type FilmeScalarWhereWithAggregatesInput = {
    AND?: FilmeScalarWhereWithAggregatesInput | FilmeScalarWhereWithAggregatesInput[]
    OR?: FilmeScalarWhereWithAggregatesInput[]
    NOT?: FilmeScalarWhereWithAggregatesInput | FilmeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Filme"> | number
    nome?: StringWithAggregatesFilter<"Filme"> | string
    diretor?: StringWithAggregatesFilter<"Filme"> | string
    anoLancamento?: IntWithAggregatesFilter<"Filme"> | number
    duracao?: IntWithAggregatesFilter<"Filme"> | number
    produtora?: StringWithAggregatesFilter<"Filme"> | string
    classificacao?: StringWithAggregatesFilter<"Filme"> | string
    poster?: StringWithAggregatesFilter<"Filme"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Filme"> | Date | string | null
  }

  export type GeneroFilmeWhereInput = {
    AND?: GeneroFilmeWhereInput | GeneroFilmeWhereInput[]
    OR?: GeneroFilmeWhereInput[]
    NOT?: GeneroFilmeWhereInput | GeneroFilmeWhereInput[]
    idGenero?: IntFilter<"GeneroFilme"> | number
    idFilme?: IntFilter<"GeneroFilme"> | number
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
    filme?: XOR<FilmeScalarRelationFilter, FilmeWhereInput>
  }

  export type GeneroFilmeOrderByWithRelationInput = {
    idGenero?: SortOrder
    idFilme?: SortOrder
    genero?: GeneroOrderByWithRelationInput
    filme?: FilmeOrderByWithRelationInput
  }

  export type GeneroFilmeWhereUniqueInput = Prisma.AtLeast<{
    idGenero_idFilme?: GeneroFilmeIdGeneroIdFilmeCompoundUniqueInput
    AND?: GeneroFilmeWhereInput | GeneroFilmeWhereInput[]
    OR?: GeneroFilmeWhereInput[]
    NOT?: GeneroFilmeWhereInput | GeneroFilmeWhereInput[]
    idGenero?: IntFilter<"GeneroFilme"> | number
    idFilme?: IntFilter<"GeneroFilme"> | number
    genero?: XOR<GeneroScalarRelationFilter, GeneroWhereInput>
    filme?: XOR<FilmeScalarRelationFilter, FilmeWhereInput>
  }, "idGenero_idFilme">

  export type GeneroFilmeOrderByWithAggregationInput = {
    idGenero?: SortOrder
    idFilme?: SortOrder
    _count?: GeneroFilmeCountOrderByAggregateInput
    _avg?: GeneroFilmeAvgOrderByAggregateInput
    _max?: GeneroFilmeMaxOrderByAggregateInput
    _min?: GeneroFilmeMinOrderByAggregateInput
    _sum?: GeneroFilmeSumOrderByAggregateInput
  }

  export type GeneroFilmeScalarWhereWithAggregatesInput = {
    AND?: GeneroFilmeScalarWhereWithAggregatesInput | GeneroFilmeScalarWhereWithAggregatesInput[]
    OR?: GeneroFilmeScalarWhereWithAggregatesInput[]
    NOT?: GeneroFilmeScalarWhereWithAggregatesInput | GeneroFilmeScalarWhereWithAggregatesInput[]
    idGenero?: IntWithAggregatesFilter<"GeneroFilme"> | number
    idFilme?: IntWithAggregatesFilter<"GeneroFilme"> | number
  }

  export type GeneroWhereInput = {
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    id?: IntFilter<"Genero"> | number
    descricao?: StringFilter<"Genero"> | string
    generosFilme?: GeneroFilmeListRelationFilter
  }

  export type GeneroOrderByWithRelationInput = {
    id?: SortOrder
    descricao?: SortOrder
    generosFilme?: GeneroFilmeOrderByRelationAggregateInput
  }

  export type GeneroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GeneroWhereInput | GeneroWhereInput[]
    OR?: GeneroWhereInput[]
    NOT?: GeneroWhereInput | GeneroWhereInput[]
    descricao?: StringFilter<"Genero"> | string
    generosFilme?: GeneroFilmeListRelationFilter
  }, "id">

  export type GeneroOrderByWithAggregationInput = {
    id?: SortOrder
    descricao?: SortOrder
    _count?: GeneroCountOrderByAggregateInput
    _avg?: GeneroAvgOrderByAggregateInput
    _max?: GeneroMaxOrderByAggregateInput
    _min?: GeneroMinOrderByAggregateInput
    _sum?: GeneroSumOrderByAggregateInput
  }

  export type GeneroScalarWhereWithAggregatesInput = {
    AND?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    OR?: GeneroScalarWhereWithAggregatesInput[]
    NOT?: GeneroScalarWhereWithAggregatesInput | GeneroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genero"> | number
    descricao?: StringWithAggregatesFilter<"Genero"> | string
  }

  export type UsuarioCreateInput = {
    nome: string
    senha: string
    email: string
    status: string
    username: string
    dataNascimento: Date | string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tipoUsuario: $Enums.TipoUsuario
    deletedAt?: Date | string | null
    avaliacoes?: AvaliacaoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    senha: string
    email: string
    status: string
    username: string
    dataNascimento: Date | string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tipoUsuario: $Enums.TipoUsuario
    deletedAt?: Date | string | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoUsuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacoes?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoUsuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    senha: string
    email: string
    status: string
    username: string
    dataNascimento: Date | string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tipoUsuario: $Enums.TipoUsuario
    deletedAt?: Date | string | null
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoUsuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoUsuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvaliacaoCreateInput = {
    nota: number
    comentario: string
    deletedAt?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutAvaliacoesInput
    filme: FilmeCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    idUsuario: number
    idFilme: number
    nota: number
    comentario: string
    deletedAt?: Date | string | null
  }

  export type AvaliacaoUpdateInput = {
    nota?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutAvaliacoesNestedInput
    filme?: FilmeUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    idFilme?: IntFieldUpdateOperationsInput | number
    nota?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvaliacaoCreateManyInput = {
    idUsuario: number
    idFilme: number
    nota: number
    comentario: string
    deletedAt?: Date | string | null
  }

  export type AvaliacaoUpdateManyMutationInput = {
    nota?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    idFilme?: IntFieldUpdateOperationsInput | number
    nota?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FilmeCreateInput = {
    nome: string
    diretor: string
    anoLancamento: number
    duracao: number
    produtora: string
    classificacao: string
    poster: string
    deletedAt?: Date | string | null
    generos?: GeneroFilmeCreateNestedManyWithoutFilmeInput
    avaliacoes?: AvaliacaoCreateNestedManyWithoutFilmeInput
  }

  export type FilmeUncheckedCreateInput = {
    id?: number
    nome: string
    diretor: string
    anoLancamento: number
    duracao: number
    produtora: string
    classificacao: string
    poster: string
    deletedAt?: Date | string | null
    generos?: GeneroFilmeUncheckedCreateNestedManyWithoutFilmeInput
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutFilmeInput
  }

  export type FilmeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    diretor?: StringFieldUpdateOperationsInput | string
    anoLancamento?: IntFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    produtora?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generos?: GeneroFilmeUpdateManyWithoutFilmeNestedInput
    avaliacoes?: AvaliacaoUpdateManyWithoutFilmeNestedInput
  }

  export type FilmeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    diretor?: StringFieldUpdateOperationsInput | string
    anoLancamento?: IntFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    produtora?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generos?: GeneroFilmeUncheckedUpdateManyWithoutFilmeNestedInput
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutFilmeNestedInput
  }

  export type FilmeCreateManyInput = {
    id?: number
    nome: string
    diretor: string
    anoLancamento: number
    duracao: number
    produtora: string
    classificacao: string
    poster: string
    deletedAt?: Date | string | null
  }

  export type FilmeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    diretor?: StringFieldUpdateOperationsInput | string
    anoLancamento?: IntFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    produtora?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FilmeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    diretor?: StringFieldUpdateOperationsInput | string
    anoLancamento?: IntFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    produtora?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GeneroFilmeCreateInput = {
    genero: GeneroCreateNestedOneWithoutGenerosFilmeInput
    filme: FilmeCreateNestedOneWithoutGenerosInput
  }

  export type GeneroFilmeUncheckedCreateInput = {
    idGenero: number
    idFilme: number
  }

  export type GeneroFilmeUpdateInput = {
    genero?: GeneroUpdateOneRequiredWithoutGenerosFilmeNestedInput
    filme?: FilmeUpdateOneRequiredWithoutGenerosNestedInput
  }

  export type GeneroFilmeUncheckedUpdateInput = {
    idGenero?: IntFieldUpdateOperationsInput | number
    idFilme?: IntFieldUpdateOperationsInput | number
  }

  export type GeneroFilmeCreateManyInput = {
    idGenero: number
    idFilme: number
  }

  export type GeneroFilmeUpdateManyMutationInput = {

  }

  export type GeneroFilmeUncheckedUpdateManyInput = {
    idGenero?: IntFieldUpdateOperationsInput | number
    idFilme?: IntFieldUpdateOperationsInput | number
  }

  export type GeneroCreateInput = {
    descricao: string
    generosFilme?: GeneroFilmeCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUncheckedCreateInput = {
    id?: number
    descricao: string
    generosFilme?: GeneroFilmeUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GeneroUpdateInput = {
    descricao?: StringFieldUpdateOperationsInput | string
    generosFilme?: GeneroFilmeUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    generosFilme?: GeneroFilmeUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type GeneroCreateManyInput = {
    id?: number
    descricao: string
  }

  export type GeneroUpdateManyMutationInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
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

  export type EnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    email?: SortOrder
    status?: SortOrder
    username?: SortOrder
    dataNascimento?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    tipoUsuario?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    email?: SortOrder
    status?: SortOrder
    username?: SortOrder
    dataNascimento?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    tipoUsuario?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    email?: SortOrder
    status?: SortOrder
    username?: SortOrder
    dataNascimento?: SortOrder
    dataCriacao?: SortOrder
    dataAtualizacao?: SortOrder
    tipoUsuario?: SortOrder
    deletedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
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

  export type EnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type FilmeScalarRelationFilter = {
    is?: FilmeWhereInput
    isNot?: FilmeWhereInput
  }

  export type AvaliacaoIdUsuarioIdFilmeCompoundUniqueInput = {
    idUsuario: number
    idFilme: number
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    idUsuario?: SortOrder
    idFilme?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    deletedAt?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    idUsuario?: SortOrder
    idFilme?: SortOrder
    nota?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    idUsuario?: SortOrder
    idFilme?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    deletedAt?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    idUsuario?: SortOrder
    idFilme?: SortOrder
    nota?: SortOrder
    comentario?: SortOrder
    deletedAt?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    idUsuario?: SortOrder
    idFilme?: SortOrder
    nota?: SortOrder
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

  export type GeneroFilmeListRelationFilter = {
    every?: GeneroFilmeWhereInput
    some?: GeneroFilmeWhereInput
    none?: GeneroFilmeWhereInput
  }

  export type GeneroFilmeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilmeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    diretor?: SortOrder
    anoLancamento?: SortOrder
    duracao?: SortOrder
    produtora?: SortOrder
    classificacao?: SortOrder
    poster?: SortOrder
    deletedAt?: SortOrder
  }

  export type FilmeAvgOrderByAggregateInput = {
    id?: SortOrder
    anoLancamento?: SortOrder
    duracao?: SortOrder
  }

  export type FilmeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    diretor?: SortOrder
    anoLancamento?: SortOrder
    duracao?: SortOrder
    produtora?: SortOrder
    classificacao?: SortOrder
    poster?: SortOrder
    deletedAt?: SortOrder
  }

  export type FilmeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    diretor?: SortOrder
    anoLancamento?: SortOrder
    duracao?: SortOrder
    produtora?: SortOrder
    classificacao?: SortOrder
    poster?: SortOrder
    deletedAt?: SortOrder
  }

  export type FilmeSumOrderByAggregateInput = {
    id?: SortOrder
    anoLancamento?: SortOrder
    duracao?: SortOrder
  }

  export type GeneroScalarRelationFilter = {
    is?: GeneroWhereInput
    isNot?: GeneroWhereInput
  }

  export type GeneroFilmeIdGeneroIdFilmeCompoundUniqueInput = {
    idGenero: number
    idFilme: number
  }

  export type GeneroFilmeCountOrderByAggregateInput = {
    idGenero?: SortOrder
    idFilme?: SortOrder
  }

  export type GeneroFilmeAvgOrderByAggregateInput = {
    idGenero?: SortOrder
    idFilme?: SortOrder
  }

  export type GeneroFilmeMaxOrderByAggregateInput = {
    idGenero?: SortOrder
    idFilme?: SortOrder
  }

  export type GeneroFilmeMinOrderByAggregateInput = {
    idGenero?: SortOrder
    idFilme?: SortOrder
  }

  export type GeneroFilmeSumOrderByAggregateInput = {
    idGenero?: SortOrder
    idFilme?: SortOrder
  }

  export type GeneroCountOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type GeneroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GeneroMaxOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type GeneroMinOrderByAggregateInput = {
    id?: SortOrder
    descricao?: SortOrder
  }

  export type GeneroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AvaliacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumTipoUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.TipoUsuario
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AvaliacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutUsuarioInput | AvaliacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutUsuarioInput | AvaliacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<UsuarioCreateWithoutAvaliacoesInput, UsuarioUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvaliacoesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type FilmeCreateNestedOneWithoutAvaliacoesInput = {
    create?: XOR<FilmeCreateWithoutAvaliacoesInput, FilmeUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: FilmeCreateOrConnectWithoutAvaliacoesInput
    connect?: FilmeWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<UsuarioCreateWithoutAvaliacoesInput, UsuarioUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvaliacoesInput
    upsert?: UsuarioUpsertWithoutAvaliacoesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAvaliacoesInput, UsuarioUpdateWithoutAvaliacoesInput>, UsuarioUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type FilmeUpdateOneRequiredWithoutAvaliacoesNestedInput = {
    create?: XOR<FilmeCreateWithoutAvaliacoesInput, FilmeUncheckedCreateWithoutAvaliacoesInput>
    connectOrCreate?: FilmeCreateOrConnectWithoutAvaliacoesInput
    upsert?: FilmeUpsertWithoutAvaliacoesInput
    connect?: FilmeWhereUniqueInput
    update?: XOR<XOR<FilmeUpdateToOneWithWhereWithoutAvaliacoesInput, FilmeUpdateWithoutAvaliacoesInput>, FilmeUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type GeneroFilmeCreateNestedManyWithoutFilmeInput = {
    create?: XOR<GeneroFilmeCreateWithoutFilmeInput, GeneroFilmeUncheckedCreateWithoutFilmeInput> | GeneroFilmeCreateWithoutFilmeInput[] | GeneroFilmeUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: GeneroFilmeCreateOrConnectWithoutFilmeInput | GeneroFilmeCreateOrConnectWithoutFilmeInput[]
    createMany?: GeneroFilmeCreateManyFilmeInputEnvelope
    connect?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutFilmeInput = {
    create?: XOR<AvaliacaoCreateWithoutFilmeInput, AvaliacaoUncheckedCreateWithoutFilmeInput> | AvaliacaoCreateWithoutFilmeInput[] | AvaliacaoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutFilmeInput | AvaliacaoCreateOrConnectWithoutFilmeInput[]
    createMany?: AvaliacaoCreateManyFilmeInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type GeneroFilmeUncheckedCreateNestedManyWithoutFilmeInput = {
    create?: XOR<GeneroFilmeCreateWithoutFilmeInput, GeneroFilmeUncheckedCreateWithoutFilmeInput> | GeneroFilmeCreateWithoutFilmeInput[] | GeneroFilmeUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: GeneroFilmeCreateOrConnectWithoutFilmeInput | GeneroFilmeCreateOrConnectWithoutFilmeInput[]
    createMany?: GeneroFilmeCreateManyFilmeInputEnvelope
    connect?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutFilmeInput = {
    create?: XOR<AvaliacaoCreateWithoutFilmeInput, AvaliacaoUncheckedCreateWithoutFilmeInput> | AvaliacaoCreateWithoutFilmeInput[] | AvaliacaoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutFilmeInput | AvaliacaoCreateOrConnectWithoutFilmeInput[]
    createMany?: AvaliacaoCreateManyFilmeInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type GeneroFilmeUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<GeneroFilmeCreateWithoutFilmeInput, GeneroFilmeUncheckedCreateWithoutFilmeInput> | GeneroFilmeCreateWithoutFilmeInput[] | GeneroFilmeUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: GeneroFilmeCreateOrConnectWithoutFilmeInput | GeneroFilmeCreateOrConnectWithoutFilmeInput[]
    upsert?: GeneroFilmeUpsertWithWhereUniqueWithoutFilmeInput | GeneroFilmeUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: GeneroFilmeCreateManyFilmeInputEnvelope
    set?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    disconnect?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    delete?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    connect?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    update?: GeneroFilmeUpdateWithWhereUniqueWithoutFilmeInput | GeneroFilmeUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: GeneroFilmeUpdateManyWithWhereWithoutFilmeInput | GeneroFilmeUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: GeneroFilmeScalarWhereInput | GeneroFilmeScalarWhereInput[]
  }

  export type AvaliacaoUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutFilmeInput, AvaliacaoUncheckedCreateWithoutFilmeInput> | AvaliacaoCreateWithoutFilmeInput[] | AvaliacaoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutFilmeInput | AvaliacaoCreateOrConnectWithoutFilmeInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutFilmeInput | AvaliacaoUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: AvaliacaoCreateManyFilmeInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutFilmeInput | AvaliacaoUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutFilmeInput | AvaliacaoUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type GeneroFilmeUncheckedUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<GeneroFilmeCreateWithoutFilmeInput, GeneroFilmeUncheckedCreateWithoutFilmeInput> | GeneroFilmeCreateWithoutFilmeInput[] | GeneroFilmeUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: GeneroFilmeCreateOrConnectWithoutFilmeInput | GeneroFilmeCreateOrConnectWithoutFilmeInput[]
    upsert?: GeneroFilmeUpsertWithWhereUniqueWithoutFilmeInput | GeneroFilmeUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: GeneroFilmeCreateManyFilmeInputEnvelope
    set?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    disconnect?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    delete?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    connect?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    update?: GeneroFilmeUpdateWithWhereUniqueWithoutFilmeInput | GeneroFilmeUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: GeneroFilmeUpdateManyWithWhereWithoutFilmeInput | GeneroFilmeUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: GeneroFilmeScalarWhereInput | GeneroFilmeScalarWhereInput[]
  }

  export type AvaliacaoUncheckedUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutFilmeInput, AvaliacaoUncheckedCreateWithoutFilmeInput> | AvaliacaoCreateWithoutFilmeInput[] | AvaliacaoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutFilmeInput | AvaliacaoCreateOrConnectWithoutFilmeInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutFilmeInput | AvaliacaoUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: AvaliacaoCreateManyFilmeInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutFilmeInput | AvaliacaoUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutFilmeInput | AvaliacaoUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type GeneroCreateNestedOneWithoutGenerosFilmeInput = {
    create?: XOR<GeneroCreateWithoutGenerosFilmeInput, GeneroUncheckedCreateWithoutGenerosFilmeInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutGenerosFilmeInput
    connect?: GeneroWhereUniqueInput
  }

  export type FilmeCreateNestedOneWithoutGenerosInput = {
    create?: XOR<FilmeCreateWithoutGenerosInput, FilmeUncheckedCreateWithoutGenerosInput>
    connectOrCreate?: FilmeCreateOrConnectWithoutGenerosInput
    connect?: FilmeWhereUniqueInput
  }

  export type GeneroUpdateOneRequiredWithoutGenerosFilmeNestedInput = {
    create?: XOR<GeneroCreateWithoutGenerosFilmeInput, GeneroUncheckedCreateWithoutGenerosFilmeInput>
    connectOrCreate?: GeneroCreateOrConnectWithoutGenerosFilmeInput
    upsert?: GeneroUpsertWithoutGenerosFilmeInput
    connect?: GeneroWhereUniqueInput
    update?: XOR<XOR<GeneroUpdateToOneWithWhereWithoutGenerosFilmeInput, GeneroUpdateWithoutGenerosFilmeInput>, GeneroUncheckedUpdateWithoutGenerosFilmeInput>
  }

  export type FilmeUpdateOneRequiredWithoutGenerosNestedInput = {
    create?: XOR<FilmeCreateWithoutGenerosInput, FilmeUncheckedCreateWithoutGenerosInput>
    connectOrCreate?: FilmeCreateOrConnectWithoutGenerosInput
    upsert?: FilmeUpsertWithoutGenerosInput
    connect?: FilmeWhereUniqueInput
    update?: XOR<XOR<FilmeUpdateToOneWithWhereWithoutGenerosInput, FilmeUpdateWithoutGenerosInput>, FilmeUncheckedUpdateWithoutGenerosInput>
  }

  export type GeneroFilmeCreateNestedManyWithoutGeneroInput = {
    create?: XOR<GeneroFilmeCreateWithoutGeneroInput, GeneroFilmeUncheckedCreateWithoutGeneroInput> | GeneroFilmeCreateWithoutGeneroInput[] | GeneroFilmeUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: GeneroFilmeCreateOrConnectWithoutGeneroInput | GeneroFilmeCreateOrConnectWithoutGeneroInput[]
    createMany?: GeneroFilmeCreateManyGeneroInputEnvelope
    connect?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
  }

  export type GeneroFilmeUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<GeneroFilmeCreateWithoutGeneroInput, GeneroFilmeUncheckedCreateWithoutGeneroInput> | GeneroFilmeCreateWithoutGeneroInput[] | GeneroFilmeUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: GeneroFilmeCreateOrConnectWithoutGeneroInput | GeneroFilmeCreateOrConnectWithoutGeneroInput[]
    createMany?: GeneroFilmeCreateManyGeneroInputEnvelope
    connect?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
  }

  export type GeneroFilmeUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<GeneroFilmeCreateWithoutGeneroInput, GeneroFilmeUncheckedCreateWithoutGeneroInput> | GeneroFilmeCreateWithoutGeneroInput[] | GeneroFilmeUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: GeneroFilmeCreateOrConnectWithoutGeneroInput | GeneroFilmeCreateOrConnectWithoutGeneroInput[]
    upsert?: GeneroFilmeUpsertWithWhereUniqueWithoutGeneroInput | GeneroFilmeUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: GeneroFilmeCreateManyGeneroInputEnvelope
    set?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    disconnect?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    delete?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    connect?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    update?: GeneroFilmeUpdateWithWhereUniqueWithoutGeneroInput | GeneroFilmeUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: GeneroFilmeUpdateManyWithWhereWithoutGeneroInput | GeneroFilmeUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: GeneroFilmeScalarWhereInput | GeneroFilmeScalarWhereInput[]
  }

  export type GeneroFilmeUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<GeneroFilmeCreateWithoutGeneroInput, GeneroFilmeUncheckedCreateWithoutGeneroInput> | GeneroFilmeCreateWithoutGeneroInput[] | GeneroFilmeUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: GeneroFilmeCreateOrConnectWithoutGeneroInput | GeneroFilmeCreateOrConnectWithoutGeneroInput[]
    upsert?: GeneroFilmeUpsertWithWhereUniqueWithoutGeneroInput | GeneroFilmeUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: GeneroFilmeCreateManyGeneroInputEnvelope
    set?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    disconnect?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    delete?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    connect?: GeneroFilmeWhereUniqueInput | GeneroFilmeWhereUniqueInput[]
    update?: GeneroFilmeUpdateWithWhereUniqueWithoutGeneroInput | GeneroFilmeUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: GeneroFilmeUpdateManyWithWhereWithoutGeneroInput | GeneroFilmeUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: GeneroFilmeScalarWhereInput | GeneroFilmeScalarWhereInput[]
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

  export type NestedEnumTipoUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioFilter<$PrismaModel> | $Enums.TipoUsuario
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoUsuario | EnumTipoUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoUsuario[] | ListEnumTipoUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.TipoUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoUsuarioFilter<$PrismaModel>
    _max?: NestedEnumTipoUsuarioFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type AvaliacaoCreateWithoutUsuarioInput = {
    nota: number
    comentario: string
    deletedAt?: Date | string | null
    filme: FilmeCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutUsuarioInput = {
    idFilme: number
    nota: number
    comentario: string
    deletedAt?: Date | string | null
  }

  export type AvaliacaoCreateOrConnectWithoutUsuarioInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type AvaliacaoCreateManyUsuarioInputEnvelope = {
    data: AvaliacaoCreateManyUsuarioInput | AvaliacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutUsuarioInput, AvaliacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutUsuarioInput, AvaliacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    idUsuario?: IntFilter<"Avaliacao"> | number
    idFilme?: IntFilter<"Avaliacao"> | number
    nota?: FloatFilter<"Avaliacao"> | number
    comentario?: StringFilter<"Avaliacao"> | string
    deletedAt?: DateTimeNullableFilter<"Avaliacao"> | Date | string | null
  }

  export type UsuarioCreateWithoutAvaliacoesInput = {
    nome: string
    senha: string
    email: string
    status: string
    username: string
    dataNascimento: Date | string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tipoUsuario: $Enums.TipoUsuario
    deletedAt?: Date | string | null
  }

  export type UsuarioUncheckedCreateWithoutAvaliacoesInput = {
    id?: number
    nome: string
    senha: string
    email: string
    status: string
    username: string
    dataNascimento: Date | string
    dataCriacao?: Date | string
    dataAtualizacao?: Date | string
    tipoUsuario: $Enums.TipoUsuario
    deletedAt?: Date | string | null
  }

  export type UsuarioCreateOrConnectWithoutAvaliacoesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAvaliacoesInput, UsuarioUncheckedCreateWithoutAvaliacoesInput>
  }

  export type FilmeCreateWithoutAvaliacoesInput = {
    nome: string
    diretor: string
    anoLancamento: number
    duracao: number
    produtora: string
    classificacao: string
    poster: string
    deletedAt?: Date | string | null
    generos?: GeneroFilmeCreateNestedManyWithoutFilmeInput
  }

  export type FilmeUncheckedCreateWithoutAvaliacoesInput = {
    id?: number
    nome: string
    diretor: string
    anoLancamento: number
    duracao: number
    produtora: string
    classificacao: string
    poster: string
    deletedAt?: Date | string | null
    generos?: GeneroFilmeUncheckedCreateNestedManyWithoutFilmeInput
  }

  export type FilmeCreateOrConnectWithoutAvaliacoesInput = {
    where: FilmeWhereUniqueInput
    create: XOR<FilmeCreateWithoutAvaliacoesInput, FilmeUncheckedCreateWithoutAvaliacoesInput>
  }

  export type UsuarioUpsertWithoutAvaliacoesInput = {
    update: XOR<UsuarioUpdateWithoutAvaliacoesInput, UsuarioUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<UsuarioCreateWithoutAvaliacoesInput, UsuarioUncheckedCreateWithoutAvaliacoesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAvaliacoesInput, UsuarioUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type UsuarioUpdateWithoutAvaliacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoUsuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsuarioUncheckedUpdateWithoutAvaliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    dataNascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    dataCriacao?: DateTimeFieldUpdateOperationsInput | Date | string
    dataAtualizacao?: DateTimeFieldUpdateOperationsInput | Date | string
    tipoUsuario?: EnumTipoUsuarioFieldUpdateOperationsInput | $Enums.TipoUsuario
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FilmeUpsertWithoutAvaliacoesInput = {
    update: XOR<FilmeUpdateWithoutAvaliacoesInput, FilmeUncheckedUpdateWithoutAvaliacoesInput>
    create: XOR<FilmeCreateWithoutAvaliacoesInput, FilmeUncheckedCreateWithoutAvaliacoesInput>
    where?: FilmeWhereInput
  }

  export type FilmeUpdateToOneWithWhereWithoutAvaliacoesInput = {
    where?: FilmeWhereInput
    data: XOR<FilmeUpdateWithoutAvaliacoesInput, FilmeUncheckedUpdateWithoutAvaliacoesInput>
  }

  export type FilmeUpdateWithoutAvaliacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    diretor?: StringFieldUpdateOperationsInput | string
    anoLancamento?: IntFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    produtora?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generos?: GeneroFilmeUpdateManyWithoutFilmeNestedInput
  }

  export type FilmeUncheckedUpdateWithoutAvaliacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    diretor?: StringFieldUpdateOperationsInput | string
    anoLancamento?: IntFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    produtora?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    generos?: GeneroFilmeUncheckedUpdateManyWithoutFilmeNestedInput
  }

  export type GeneroFilmeCreateWithoutFilmeInput = {
    genero: GeneroCreateNestedOneWithoutGenerosFilmeInput
  }

  export type GeneroFilmeUncheckedCreateWithoutFilmeInput = {
    idGenero: number
  }

  export type GeneroFilmeCreateOrConnectWithoutFilmeInput = {
    where: GeneroFilmeWhereUniqueInput
    create: XOR<GeneroFilmeCreateWithoutFilmeInput, GeneroFilmeUncheckedCreateWithoutFilmeInput>
  }

  export type GeneroFilmeCreateManyFilmeInputEnvelope = {
    data: GeneroFilmeCreateManyFilmeInput | GeneroFilmeCreateManyFilmeInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoCreateWithoutFilmeInput = {
    nota: number
    comentario: string
    deletedAt?: Date | string | null
    usuario: UsuarioCreateNestedOneWithoutAvaliacoesInput
  }

  export type AvaliacaoUncheckedCreateWithoutFilmeInput = {
    idUsuario: number
    nota: number
    comentario: string
    deletedAt?: Date | string | null
  }

  export type AvaliacaoCreateOrConnectWithoutFilmeInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutFilmeInput, AvaliacaoUncheckedCreateWithoutFilmeInput>
  }

  export type AvaliacaoCreateManyFilmeInputEnvelope = {
    data: AvaliacaoCreateManyFilmeInput | AvaliacaoCreateManyFilmeInput[]
    skipDuplicates?: boolean
  }

  export type GeneroFilmeUpsertWithWhereUniqueWithoutFilmeInput = {
    where: GeneroFilmeWhereUniqueInput
    update: XOR<GeneroFilmeUpdateWithoutFilmeInput, GeneroFilmeUncheckedUpdateWithoutFilmeInput>
    create: XOR<GeneroFilmeCreateWithoutFilmeInput, GeneroFilmeUncheckedCreateWithoutFilmeInput>
  }

  export type GeneroFilmeUpdateWithWhereUniqueWithoutFilmeInput = {
    where: GeneroFilmeWhereUniqueInput
    data: XOR<GeneroFilmeUpdateWithoutFilmeInput, GeneroFilmeUncheckedUpdateWithoutFilmeInput>
  }

  export type GeneroFilmeUpdateManyWithWhereWithoutFilmeInput = {
    where: GeneroFilmeScalarWhereInput
    data: XOR<GeneroFilmeUpdateManyMutationInput, GeneroFilmeUncheckedUpdateManyWithoutFilmeInput>
  }

  export type GeneroFilmeScalarWhereInput = {
    AND?: GeneroFilmeScalarWhereInput | GeneroFilmeScalarWhereInput[]
    OR?: GeneroFilmeScalarWhereInput[]
    NOT?: GeneroFilmeScalarWhereInput | GeneroFilmeScalarWhereInput[]
    idGenero?: IntFilter<"GeneroFilme"> | number
    idFilme?: IntFilter<"GeneroFilme"> | number
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutFilmeInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutFilmeInput, AvaliacaoUncheckedUpdateWithoutFilmeInput>
    create: XOR<AvaliacaoCreateWithoutFilmeInput, AvaliacaoUncheckedCreateWithoutFilmeInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutFilmeInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutFilmeInput, AvaliacaoUncheckedUpdateWithoutFilmeInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutFilmeInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutFilmeInput>
  }

  export type GeneroCreateWithoutGenerosFilmeInput = {
    descricao: string
  }

  export type GeneroUncheckedCreateWithoutGenerosFilmeInput = {
    id?: number
    descricao: string
  }

  export type GeneroCreateOrConnectWithoutGenerosFilmeInput = {
    where: GeneroWhereUniqueInput
    create: XOR<GeneroCreateWithoutGenerosFilmeInput, GeneroUncheckedCreateWithoutGenerosFilmeInput>
  }

  export type FilmeCreateWithoutGenerosInput = {
    nome: string
    diretor: string
    anoLancamento: number
    duracao: number
    produtora: string
    classificacao: string
    poster: string
    deletedAt?: Date | string | null
    avaliacoes?: AvaliacaoCreateNestedManyWithoutFilmeInput
  }

  export type FilmeUncheckedCreateWithoutGenerosInput = {
    id?: number
    nome: string
    diretor: string
    anoLancamento: number
    duracao: number
    produtora: string
    classificacao: string
    poster: string
    deletedAt?: Date | string | null
    avaliacoes?: AvaliacaoUncheckedCreateNestedManyWithoutFilmeInput
  }

  export type FilmeCreateOrConnectWithoutGenerosInput = {
    where: FilmeWhereUniqueInput
    create: XOR<FilmeCreateWithoutGenerosInput, FilmeUncheckedCreateWithoutGenerosInput>
  }

  export type GeneroUpsertWithoutGenerosFilmeInput = {
    update: XOR<GeneroUpdateWithoutGenerosFilmeInput, GeneroUncheckedUpdateWithoutGenerosFilmeInput>
    create: XOR<GeneroCreateWithoutGenerosFilmeInput, GeneroUncheckedCreateWithoutGenerosFilmeInput>
    where?: GeneroWhereInput
  }

  export type GeneroUpdateToOneWithWhereWithoutGenerosFilmeInput = {
    where?: GeneroWhereInput
    data: XOR<GeneroUpdateWithoutGenerosFilmeInput, GeneroUncheckedUpdateWithoutGenerosFilmeInput>
  }

  export type GeneroUpdateWithoutGenerosFilmeInput = {
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type GeneroUncheckedUpdateWithoutGenerosFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type FilmeUpsertWithoutGenerosInput = {
    update: XOR<FilmeUpdateWithoutGenerosInput, FilmeUncheckedUpdateWithoutGenerosInput>
    create: XOR<FilmeCreateWithoutGenerosInput, FilmeUncheckedCreateWithoutGenerosInput>
    where?: FilmeWhereInput
  }

  export type FilmeUpdateToOneWithWhereWithoutGenerosInput = {
    where?: FilmeWhereInput
    data: XOR<FilmeUpdateWithoutGenerosInput, FilmeUncheckedUpdateWithoutGenerosInput>
  }

  export type FilmeUpdateWithoutGenerosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    diretor?: StringFieldUpdateOperationsInput | string
    anoLancamento?: IntFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    produtora?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacoes?: AvaliacaoUpdateManyWithoutFilmeNestedInput
  }

  export type FilmeUncheckedUpdateWithoutGenerosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    diretor?: StringFieldUpdateOperationsInput | string
    anoLancamento?: IntFieldUpdateOperationsInput | number
    duracao?: IntFieldUpdateOperationsInput | number
    produtora?: StringFieldUpdateOperationsInput | string
    classificacao?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avaliacoes?: AvaliacaoUncheckedUpdateManyWithoutFilmeNestedInput
  }

  export type GeneroFilmeCreateWithoutGeneroInput = {
    filme: FilmeCreateNestedOneWithoutGenerosInput
  }

  export type GeneroFilmeUncheckedCreateWithoutGeneroInput = {
    idFilme: number
  }

  export type GeneroFilmeCreateOrConnectWithoutGeneroInput = {
    where: GeneroFilmeWhereUniqueInput
    create: XOR<GeneroFilmeCreateWithoutGeneroInput, GeneroFilmeUncheckedCreateWithoutGeneroInput>
  }

  export type GeneroFilmeCreateManyGeneroInputEnvelope = {
    data: GeneroFilmeCreateManyGeneroInput | GeneroFilmeCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type GeneroFilmeUpsertWithWhereUniqueWithoutGeneroInput = {
    where: GeneroFilmeWhereUniqueInput
    update: XOR<GeneroFilmeUpdateWithoutGeneroInput, GeneroFilmeUncheckedUpdateWithoutGeneroInput>
    create: XOR<GeneroFilmeCreateWithoutGeneroInput, GeneroFilmeUncheckedCreateWithoutGeneroInput>
  }

  export type GeneroFilmeUpdateWithWhereUniqueWithoutGeneroInput = {
    where: GeneroFilmeWhereUniqueInput
    data: XOR<GeneroFilmeUpdateWithoutGeneroInput, GeneroFilmeUncheckedUpdateWithoutGeneroInput>
  }

  export type GeneroFilmeUpdateManyWithWhereWithoutGeneroInput = {
    where: GeneroFilmeScalarWhereInput
    data: XOR<GeneroFilmeUpdateManyMutationInput, GeneroFilmeUncheckedUpdateManyWithoutGeneroInput>
  }

  export type AvaliacaoCreateManyUsuarioInput = {
    idFilme: number
    nota: number
    comentario: string
    deletedAt?: Date | string | null
  }

  export type AvaliacaoUpdateWithoutUsuarioInput = {
    nota?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    filme?: FilmeUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutUsuarioInput = {
    idFilme?: IntFieldUpdateOperationsInput | number
    nota?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvaliacaoUncheckedUpdateManyWithoutUsuarioInput = {
    idFilme?: IntFieldUpdateOperationsInput | number
    nota?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GeneroFilmeCreateManyFilmeInput = {
    idGenero: number
  }

  export type AvaliacaoCreateManyFilmeInput = {
    idUsuario: number
    nota: number
    comentario: string
    deletedAt?: Date | string | null
  }

  export type GeneroFilmeUpdateWithoutFilmeInput = {
    genero?: GeneroUpdateOneRequiredWithoutGenerosFilmeNestedInput
  }

  export type GeneroFilmeUncheckedUpdateWithoutFilmeInput = {
    idGenero?: IntFieldUpdateOperationsInput | number
  }

  export type GeneroFilmeUncheckedUpdateManyWithoutFilmeInput = {
    idGenero?: IntFieldUpdateOperationsInput | number
  }

  export type AvaliacaoUpdateWithoutFilmeInput = {
    nota?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: UsuarioUpdateOneRequiredWithoutAvaliacoesNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutFilmeInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    nota?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvaliacaoUncheckedUpdateManyWithoutFilmeInput = {
    idUsuario?: IntFieldUpdateOperationsInput | number
    nota?: FloatFieldUpdateOperationsInput | number
    comentario?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GeneroFilmeCreateManyGeneroInput = {
    idFilme: number
  }

  export type GeneroFilmeUpdateWithoutGeneroInput = {
    filme?: FilmeUpdateOneRequiredWithoutGenerosNestedInput
  }

  export type GeneroFilmeUncheckedUpdateWithoutGeneroInput = {
    idFilme?: IntFieldUpdateOperationsInput | number
  }

  export type GeneroFilmeUncheckedUpdateManyWithoutGeneroInput = {
    idFilme?: IntFieldUpdateOperationsInput | number
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