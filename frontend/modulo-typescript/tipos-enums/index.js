// enum Colors {
//     Red,
//     Blue,
//     Green,
// }
// for (const key in Colors) {
//     console.log(key)
// }
// function showColor (color) {
//     console.log(color);
// }
// showColor(Colors.Red);
// enum UserResponse {
//     No = 0,
//     Yes = 1,
// }
// function responderEmails(recipient: string, UserResponse: UserResponse): void {
//     // ... salvar no banco se o usuario respoder ou não
// }
// responderEmails('Caroline', UserResponse.Yes)
// enum TradeType {
//     ACAO = 9281,
//     TESOURO_DIRETO = 3221,
//     TESOURO_SELIC = 6556
// }
// saveTrade(TradeType.TESOURO_DIRETO)
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ok"] = 200] = "ok";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
})(StatusCode || (StatusCode = {}));
var ok = StatusCode.ok;
var indexOk = StatusCode['OK'];
var stringRequest = StatusCode[400];
// enum Gender {
//     M = 'Maculino',
//     f = 'Femino'
// }
