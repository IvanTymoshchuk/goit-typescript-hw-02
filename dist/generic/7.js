/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/
export var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["editor"] = "editor";
    UserRole["guest"] = "guest";
})(UserRole || (UserRole = {}));
// Замініть наступний код на версію за допомогою Record
const RoleDescription = {
    admin: 'Admin User',
    editor: 'Editor User',
    guest: 'Guest User',
};
//# sourceMappingURL=7.js.map