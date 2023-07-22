import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error.ts';

@Injectable({
  providedIn: 'root',
})
export class FirebaseCodeErrorService {
  constructor() {}

  codeError(code: string) {
    switch (code) {
      // El correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';
      //Contraseña muy debil
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy débil';
      //Correo Electronico Invalido
      case FirebaseCodeErrorEnum.InvalidEmail:
        return 'Correo electrónico inválido';
      // Contraseña Incorrecta
      case FirebaseCodeErrorEnum.WrogPassword:
        return 'Contraseña incorrecta';
      // El usuario no existe
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'Este usuario no existe';

      case FirebaseCodeErrorEnum.InvalidCredential:
        return 'La credencial es inválida';

      case FirebaseCodeErrorEnum.OperationNotAllowed:
        return 'La operación no está permitida';

      case FirebaseCodeErrorEnum.TooManyRequests:
        return 'Se han realizado demasiadas solicitudes';

      case FirebaseCodeErrorEnum.NetworkRequestFailed:
        return 'La solicitud de red falló';

      case FirebaseCodeErrorEnum.AppDeleted:
        return 'La aplicación ha sido eliminada';

      case FirebaseCodeErrorEnum.AppNotAuthorized:
        return 'La aplicación no está autorizada para usar Firebase Authentication';

      case FirebaseCodeErrorEnum.InvalidArgumentError:
        return 'Se pasó un argumento no válido al método';

      case FirebaseCodeErrorEnum.InvalidApiKey:
        return 'La clave de API es inválida';

      case FirebaseCodeErrorEnum.InvalidUserToken:
        return 'El token de usuario no es válido';

      case FirebaseCodeErrorEnum.InvalidTenantId:
        return 'El ID de inquilino no es válido';

      case FirebaseCodeErrorEnum.RequiresRecentLogin:
        return 'El usuario debe iniciar sesión nuevamente';

      case FirebaseCodeErrorEnum.AccountExistsWithDifferentCredential:
        return 'Ya existe una cuenta con la misma dirección de correo electrónico, pero con una credencial diferente';

      case FirebaseCodeErrorEnum.InvalidVerificationCode:
        return 'El código de verificación es inválido';

      case FirebaseCodeErrorEnum.VerificationCodeExpired:
        return 'El código de verificación ha expirado';

      case FirebaseCodeErrorEnum.TooManyVerificationRequests:
        return 'Se han realizado demasiadas solicitudes de verificación';

      case FirebaseCodeErrorEnum.InvalidPhoneNumber:
        return 'El número de teléfono no es válido';

      case FirebaseCodeErrorEnum.PhoneNumberNotFound:
        return 'El número de teléfono no se encuentra';

      case FirebaseCodeErrorEnum.PhoneNumberAlreadyInUse:
        return 'El número de teléfono ya está en uso';

      case FirebaseCodeErrorEnum.PhoneNumberVerificationFailed:
        return 'La verificación del número de teléfono falló';

      case FirebaseCodeErrorEnum.SmsQuotaExceeded:
        return 'La cuota de SMS se ha excedido';

      case FirebaseCodeErrorEnum.MissingVerificationCode:
        return 'El código de verificación falta';

      case FirebaseCodeErrorEnum.InvalidProvider:
        return 'El proveedor es inválido';

      case FirebaseCodeErrorEnum.ProviderNotConfigured:
        return 'El proveedor no está configurado';

      case FirebaseCodeErrorEnum.SignInFailed:
        return 'El inicio de sesión falló';

      case FirebaseCodeErrorEnum.SignOutFailed:
        return 'El cierre de sesión falló';

      case FirebaseCodeErrorEnum.AccountUpdateFailed:
        return 'La actualización de la cuenta falló';

      case FirebaseCodeErrorEnum.AccountUpdateFailed:
        return 'La eliminación de la cuenta falló';

      case FirebaseCodeErrorEnum.AccountDisabled:
        return 'La cuenta está deshabilitada';

      case FirebaseCodeErrorEnum.AccountSuspended:
        return 'La cuenta está suspendida';

      case FirebaseCodeErrorEnum.AccountDeleted:
        return 'La cuenta ha sido eliminada';

      default:
        case FirebaseCodeErrorEnum.Unknown:
          return 'Ocurrió un error desconocido';
    }
  }
}
