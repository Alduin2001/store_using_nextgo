import { SetMetadata } from "@nestjs/common";
import { Role } from "./roles.enum";

export const ROLES_KEY = 'role';

export const Roles = (...role:Role[])=>SetMetadata(ROLES_KEY,role)

