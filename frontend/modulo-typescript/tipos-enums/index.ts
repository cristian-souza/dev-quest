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

enum StatusCode {
    ok = 200,
    BadRequest = 400,
}

const ok = StatusCode.ok;
const indexOk = StatusCode['OK'];
const stringRequest = StatusCode[400];

// enum Gender {
//     M = 'Maculino',
//     f = 'Femino'
// }