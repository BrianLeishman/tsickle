// test_files/clutz_imports.declaration.no_externs/user_code.ts(37,1): warning TS0: anonymous type has no symbol
import "test_files/clutz_imports.declaration.no_externs/clutz_output_demo1.d.ts";
import "test_files/clutz_imports.declaration.no_externs/clutz_output_demo2.d.ts";
import "test_files/clutz_imports.declaration.no_externs/clutz_output_demo4.d.ts";
import "test_files/clutz_imports.declaration.no_externs/clutz_output_demo6.d.ts";
import "test_files/clutz_imports.declaration.no_externs/clutz_output_demo5.d.ts";
/**
 * @fileoverview This file simulates a TypeScript file that interacts with Clutz
 * types.  The expected output is that the generated .d.ts file has explicit
 * "import" statements that refer directly to the paths that define some of
 * the Clutz symbols (either goog: or look of disapproval) referenced in the
 * public API of this file.
 */
import * as demo1 from 'goog:demo1';
/**
 * demo1 is exposed in the public API via an import, so we expect the output
 * d.ts to have an import of the module underlying goog:demo1.
 */
export declare function f1(c: demo1.C): void;
/**
 * demo2 is exposed in the public API via a direct reference to the look of
 * disapproval namespace, so we expect the output d.ts to have an import of the
 * module underlying goog:demo2.
 */
export declare function f2(c: ಠ_ಠ.clutz.demo2.C): void;
/**
 * demo4 verifies that the Clutz type via 'typeof' still produces an import
 * statement in the output.  (It differs from the above in that a typeof node
 * in the TS AST contains the reference to a Clutz symbol as a value, not a
 * type.)
 */
export declare type f4 = typeof ಠ_ಠ.clutz.demo4;
export declare function f5(): ಠ_ಠ.clutz.module$exports$demo6.C<ಠ_ಠ.clutz.module$exports$demo5.C> | undefined;
declare global {
    namespace ಠ_ಠ.clutz {
        export { f1 as module$contents$test_files$clutz_imports$declaration$no_externs$user_code_f1, f2 as module$contents$test_files$clutz_imports$declaration$no_externs$user_code_f2, f4 as module$contents$test_files$clutz_imports$declaration$no_externs$user_code_f4, f5 as module$contents$test_files$clutz_imports$declaration$no_externs$user_code_f5 };
        export namespace module$exports$test_files$clutz_imports$declaration$no_externs$user_code {
            export { f1, f2, f4, f5 };
        }
    }
}
