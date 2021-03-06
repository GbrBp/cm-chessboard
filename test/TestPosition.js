/**
 * Author: shaack
 * Date: 01.12.2017
 */

import {Test} from "../node_modules/svjs-test/src/svjs-test/Test.js"
import {PIECE, Chessboard} from "../src/cm-chessboard/Chessboard.js";

export class TestPosition extends Test {

    testStartPosition() {
        const chessboard = new Chessboard(document.getElementById("TestPosition"), {
            position: "start"
        }, () => {
            Test.assertEquals("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR", chessboard.getPosition());
            setTimeout(() => {
                chessboard.destroy();
            });
        });
    }

    testSetAndGetPosition() {
        const chessboard = new Chessboard(document.getElementById("TestPosition"), null, () => {
            chessboard.setPosition("rn2k1r1/ppp1pp1p/3p2p1/5bn1/P7/2N2B2/1PPPPP2/2BNK1RR w Gkq - 4 11", false);
            Test.assertEquals("rn2k1r1/ppp1pp1p/3p2p1/5bn1/P7/2N2B2/1PPPPP2/2BNK1RR", chessboard.getPosition());
            setTimeout(() => {
                chessboard.destroy();
            });
        });
    }

    testGetSquare() {
        const chessboard = new Chessboard(document.getElementById("TestPosition"), {
            position: "start"
        }, () => {
            Test.assertEquals("wq", chessboard.getPiece("d1"));
            Test.assertEquals("bq", chessboard.getPiece("d8"));
            Test.assertEquals("wp", chessboard.getPiece("a2"));
            setTimeout(() => {
                chessboard.destroy();
            });
        });
    }

    testSetSquare() {
        const chessboard = new Chessboard(document.getElementById("TestPosition"), {
            position: "empty"
        }, () => {
            chessboard.setPiece("a1", PIECE.blackKing);
            chessboard.setPiece("e5", PIECE.whiteKing);
            Test.assertEquals("bk", chessboard.getPiece("a1"));
            Test.assertEquals("wk", chessboard.getPiece("e5"));
            setTimeout(() => {
                chessboard.destroy();
            });
        });
    }

}