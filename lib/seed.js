"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
//seed script run at start of application to create required data
var db_1 = require("./db");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var roles, leaveTypes, leaveStatuses, departments, adminUser, hrUsers, managers, employees, leavePolicies, holidays, allUsers, currentYear, _i, allUsers_1, user, sampleRequests, requestCounter, _a, sampleRequests_1, request, createdRequest;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        return __generator(this, function (_p) {
            switch (_p.label) {
                case 0:
                    console.log("🌱 Starting database seeding...");
                    // Clear existing data (optional - remove if you want to preserve data)
                    return [4 /*yield*/, db_1.default.leave_request_history.deleteMany()];
                case 1:
                    // Clear existing data (optional - remove if you want to preserve data)
                    _p.sent();
                    return [4 /*yield*/, db_1.default.leave_request.deleteMany()];
                case 2:
                    _p.sent();
                    return [4 /*yield*/, db_1.default.leave_balance.deleteMany()];
                case 3:
                    _p.sent();
                    return [4 /*yield*/, db_1.default.leave_policy.deleteMany()];
                case 4:
                    _p.sent();
                    return [4 /*yield*/, db_1.default.holiday.deleteMany()];
                case 5:
                    _p.sent();
                    return [4 /*yield*/, db_1.default.user.deleteMany()];
                case 6:
                    _p.sent();
                    return [4 /*yield*/, db_1.default.departments.deleteMany()];
                case 7:
                    _p.sent();
                    return [4 /*yield*/, db_1.default.leave_status.deleteMany()];
                case 8:
                    _p.sent();
                    return [4 /*yield*/, db_1.default.leave_types.deleteMany()];
                case 9:
                    _p.sent();
                    return [4 /*yield*/, db_1.default.roles.deleteMany()];
                case 10:
                    _p.sent();
                    // 1. Seed Roles
                    console.log("📝 Seeding roles...");
                    return [4 /*yield*/, Promise.all([
                            db_1.default.roles.create({
                                data: {
                                    name: "ADMIN",
                                    description: "System administrator with full access",
                                    is_Active: true,
                                    id: 1,
                                },
                            }),
                            db_1.default.roles.create({
                                data: {
                                    name: "HR",
                                    description: "Human Resources personnel",
                                    is_Active: true,
                                    id: 2,
                                },
                            }),
                            db_1.default.roles.create({
                                data: {
                                    name: "MANAGER",
                                    description: "Team manager with approval rights",
                                    is_Active: true,
                                    id: 3,
                                },
                            }),
                            db_1.default.roles.create({
                                data: {
                                    name: "EMPLOYEE",
                                    description: "Regular employee",
                                    is_Active: true,
                                    id: 4,
                                },
                            }),
                        ])];
                case 11:
                    roles = _p.sent();
                    // 2. Seed Leave Types
                    console.log("🏖️ Seeding leave types...");
                    return [4 /*yield*/, Promise.all([
                            db_1.default.leave_types.create({
                                data: {
                                    name: "CASUAL",
                                    description: "Casual leave for personal reasons",
                                    max_days_per_request: "5",
                                    is_Active: true,
                                },
                            }),
                            db_1.default.leave_types.create({
                                data: {
                                    name: "SICK",
                                    description: "Medical leave for illness",
                                    max_days_per_request: "10",
                                    is_Active: true,
                                },
                            }),
                            db_1.default.leave_types.create({
                                data: {
                                    name: "ANNUAL",
                                    description: "Annual vacation leave",
                                    max_days_per_request: "15",
                                    is_Active: true,
                                },
                            }),
                            db_1.default.leave_types.create({
                                data: {
                                    name: "MATERNITY",
                                    description: "Maternity leave",
                                    max_days_per_request: "90",
                                    is_Active: true,
                                },
                            }),
                            db_1.default.leave_types.create({
                                data: {
                                    name: "PATERNITY",
                                    description: "Paternity leave",
                                    max_days_per_request: "15",
                                    is_Active: true,
                                },
                            }),
                            db_1.default.leave_types.create({
                                data: {
                                    name: "BEREAVEMENT",
                                    description: "Bereavement leave",
                                    max_days_per_request: "7",
                                    is_Active: true,
                                },
                            }),
                            db_1.default.leave_types.create({
                                data: {
                                    name: "PERSONAL",
                                    description: "Personal leave",
                                    max_days_per_request: "7",
                                    is_Active: true,
                                },
                            }),
                            db_1.default.leave_types.create({
                                data: {
                                    name: "LWP",
                                    description: "Leave without pay",
                                    max_days_per_request: "30",
                                    is_Active: true,
                                },
                            }),
                            db_1.default.leave_types.create({
                                data: {
                                    name: "PAID",
                                    description: "Paid leave",
                                    max_days_per_request: "10",
                                    is_Active: true,
                                },
                            }),
                        ])];
                case 12:
                    leaveTypes = _p.sent();
                    // 3. Seed Leave Status
                    console.log("✅ Seeding leave status...");
                    return [4 /*yield*/, Promise.all([
                            db_1.default.leave_status.create({
                                data: {
                                    name: "REJECTED",
                                    description: "Leave request rejected",
                                    is_Active: true,
                                    id: 0,
                                },
                            }),
                            db_1.default.leave_status.create({
                                data: {
                                    name: "APPROVED",
                                    description: "Leave request fully approved",
                                    is_Active: true,
                                    id: 1,
                                },
                            }),
                            db_1.default.leave_status.create({
                                data: {
                                    name: "AUTO_APPROVED",
                                    description: "Leave request automatically approved",
                                    is_Active: true,
                                    id: 2,
                                },
                            }),
                            db_1.default.leave_status.create({
                                data: {
                                    name: "APPROVED_BY_MANAGER",
                                    description: "Leave request approved by Manager",
                                    is_Active: true,
                                    id: 3,
                                },
                            }),
                            db_1.default.leave_status.create({
                                data: {
                                    name: "APPROVED_BY_HR",
                                    description: "Leave request approved by HR",
                                    is_Active: true,
                                    id: 4,
                                },
                            }),
                            db_1.default.leave_status.create({
                                data: {
                                    name: "PENDING",
                                    description: "Leave request is pending approval",
                                    is_Active: true,
                                    id: 5,
                                },
                            }),
                            db_1.default.leave_status.create({
                                data: {
                                    name: "CANCELLED",
                                    description: "Leave request Canceled by user",
                                    is_Active: true,
                                    id: 6,
                                },
                            }),
                            db_1.default.leave_status.create({
                                data: {
                                    name: "PENDING_BY_MANAGER",
                                    description: "Leave request is pending approval",
                                    is_Active: true,
                                    id: 7,
                                },
                            }),
                            db_1.default.leave_status.create({
                                data: {
                                    name: "PENDING_BY_HR",
                                    description: "Leave request is pending approval",
                                    is_Active: true,
                                    id: 8,
                                },
                            }),
                        ])];
                case 13:
                    leaveStatuses = _p.sent();
                    // 4. Seed Departments
                    console.log("🏢 Seeding departments...");
                    return [4 /*yield*/, Promise.all([
                            db_1.default.departments.create({
                                data: {
                                    cus_id: "DEPT-001",
                                    name: "Information Technology",
                                    description: "IT Department handling all technical operations",
                                    is_Active: true,
                                },
                            }),
                            db_1.default.departments.create({
                                data: {
                                    cus_id: "DEPT-002",
                                    name: "Human Resources",
                                    description: "HR Department managing employee relations",
                                    is_Active: true,
                                },
                            }),
                            db_1.default.departments.create({
                                data: {
                                    cus_id: "DEPT-003",
                                    name: "Finance",
                                    description: "Finance Department handling financial operations",
                                    is_Active: true,
                                },
                            }),
                            db_1.default.departments.create({
                                data: {
                                    cus_id: "DEPT-004",
                                    name: "Marketing",
                                    description: "Marketing Department for promotional activities",
                                    is_Active: true,
                                },
                            }),
                            db_1.default.departments.create({
                                data: {
                                    cus_id: "DEPT-005",
                                    name: "Operations",
                                    description: "Operations Department for day-to-day activities",
                                    is_Active: true,
                                },
                            }),
                        ])];
                case 14:
                    departments = _p.sent();
                    // 5. Seed Users (Admin, HR, Managers, Employees)
                    console.log("👥 Seeding users...");
                    return [4 /*yield*/, db_1.default.user.create({
                            data: {
                                cus_id: "USR-001",
                                first_name: "System",
                                last_name: "Administrator",
                                email: "admin@company.com",
                                password: "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq", // In real app, hash this properly
                                joined_date: new Date("2020-01-01"),
                                is_Active: true,
                                role_id: ((_b = roles.find(function (r) { return r.name === "ADMIN"; })) === null || _b === void 0 ? void 0 : _b.id) || 1,
                                department_name: "DEPT-002", // HR Department
                            },
                        })];
                case 15:
                    adminUser = _p.sent();
                    return [4 /*yield*/, Promise.all([
                            db_1.default.user.create({
                                data: {
                                    cus_id: "USR-002",
                                    first_name: "Sarah",
                                    last_name: "Johnson",
                                    email: "sarah.johnson@company.com",
                                    password: "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
                                    joined_date: new Date("2021-03-15"),
                                    is_Active: true,
                                    role_id: ((_c = roles.find(function (r) { return r.name === "HR"; })) === null || _c === void 0 ? void 0 : _c.id) || 2,
                                    department_name: "DEPT-002",
                                },
                            }),
                        ])];
                case 16:
                    hrUsers = _p.sent();
                    return [4 /*yield*/, Promise.all([
                            db_1.default.user.create({
                                data: {
                                    cus_id: "USR-003",
                                    first_name: "Michael",
                                    last_name: "Chen",
                                    email: "michael.chen@company.com",
                                    password: "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
                                    joined_date: new Date("2020-06-01"),
                                    is_Active: true,
                                    role_id: ((_d = roles.find(function (r) { return r.name === "MANAGER"; })) === null || _d === void 0 ? void 0 : _d.id) || 3,
                                    department_name: "DEPT-001", // IT
                                },
                            }),
                            db_1.default.user.create({
                                data: {
                                    cus_id: "USR-004",
                                    first_name: "Lisa",
                                    last_name: "Rodriguez",
                                    email: "lisa.rodriguez@company.com",
                                    password: "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
                                    joined_date: new Date("2021-01-10"),
                                    is_Active: true,
                                    role_id: ((_e = roles.find(function (r) { return r.name === "MANAGER"; })) === null || _e === void 0 ? void 0 : _e.id) || 3,
                                    department_name: "DEPT-003", // Finance
                                },
                            }),
                            db_1.default.user.create({
                                data: {
                                    cus_id: "USR-005",
                                    first_name: "David",
                                    last_name: "Wilson",
                                    email: "david.wilson@company.com",
                                    password: "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
                                    joined_date: new Date("2020-09-20"),
                                    is_Active: true,
                                    role_id: ((_f = roles.find(function (r) { return r.name === "MANAGER"; })) === null || _f === void 0 ? void 0 : _f.id) || 3,
                                    department_name: "DEPT-004", // Marketing
                                },
                            }),
                        ])];
                case 17:
                    managers = _p.sent();
                    return [4 /*yield*/, Promise.all([
                            // IT Employees
                            db_1.default.user.create({
                                data: {
                                    cus_id: "USR-006",
                                    first_name: "John",
                                    last_name: "Smith",
                                    email: "john.smith@company.com",
                                    password: "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
                                    joined_date: new Date("2022-02-15"),
                                    is_Active: true,
                                    role_id: ((_g = roles.find(function (r) { return r.name === "EMPLOYEE"; })) === null || _g === void 0 ? void 0 : _g.id) || 4,
                                    department_name: "DEPT-001",
                                    manager_id: "USR-003", // Michael Chen
                                },
                            }),
                            db_1.default.user.create({
                                data: {
                                    cus_id: "USR-007",
                                    first_name: "Emily",
                                    last_name: "Davis",
                                    email: "emily.davis@company.com",
                                    password: "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
                                    joined_date: new Date("2022-04-10"),
                                    is_Active: true,
                                    role_id: ((_h = roles.find(function (r) { return r.name === "EMPLOYEE"; })) === null || _h === void 0 ? void 0 : _h.id) || 4,
                                    department_name: "DEPT-001",
                                    manager_id: "USR-003",
                                },
                            }),
                            // Finance Employees
                            db_1.default.user.create({
                                data: {
                                    cus_id: "USR-008",
                                    first_name: "Robert",
                                    last_name: "Brown",
                                    email: "robert.brown@company.com",
                                    password: "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
                                    joined_date: new Date("2021-11-05"),
                                    is_Active: true,
                                    role_id: ((_j = roles.find(function (r) { return r.name === "EMPLOYEE"; })) === null || _j === void 0 ? void 0 : _j.id) || 4,
                                    department_name: "DEPT-003",
                                    manager_id: "USR-004", // Lisa Rodriguez
                                },
                            }),
                            // Marketing Employees
                            db_1.default.user.create({
                                data: {
                                    cus_id: "USR-009",
                                    first_name: "Jessica",
                                    last_name: "Taylor",
                                    email: "jessica.taylor@company.com",
                                    password: "$2y$10$Fz98sBJJlJG58988Lz5CyOo3RqKwcWgmofuOHQwEV.lxfdCNUEEcq",
                                    joined_date: new Date("2023-01-20"),
                                    is_Active: true,
                                    role_id: ((_k = roles.find(function (r) { return r.name === "EMPLOYEE"; })) === null || _k === void 0 ? void 0 : _k.id) || 4,
                                    department_name: "DEPT-004",
                                    manager_id: "USR-005", // David Wilson
                                },
                            }),
                        ])];
                case 18:
                    employees = _p.sent();
                    // 6. Seed Leave Policies
                    console.log("📋 Seeding leave policies...");
                    return [4 /*yield*/, Promise.all([
                            // General policies for all departments
                            db_1.default.leave_policy.create({
                                data: {
                                    leave_type_id: "CASUAL",
                                    max_days_per_year: 12,
                                    max_days_per_request: 5,
                                    carry_over_limit: 3,
                                    carry_over_expiry: 90,
                                    is_Active: true,
                                    effective_from: new Date("2024-01-01"),
                                    effective_to: new Date("2024-12-31"),
                                },
                            }),
                            db_1.default.leave_policy.create({
                                data: {
                                    leave_type_id: "SICK",
                                    max_days_per_year: 10,
                                    max_days_per_request: 10,
                                    carry_over_limit: 5,
                                    carry_over_expiry: 365,
                                    is_Active: true,
                                    effective_from: new Date("2024-01-01"),
                                    effective_to: new Date("2024-12-31"),
                                },
                            }),
                            db_1.default.leave_policy.create({
                                data: {
                                    leave_type_id: "ANNUAL",
                                    max_days_per_year: 21,
                                    max_days_per_request: 15,
                                    carry_over_limit: 5,
                                    carry_over_expiry: 120,
                                    is_Active: true,
                                    effective_from: new Date("2024-01-01"),
                                    effective_to: new Date("2024-12-31"),
                                },
                            }),
                            db_1.default.leave_policy.create({
                                data: {
                                    leave_type_id: "ANNUAL",
                                    max_days_per_year: 21,
                                    max_days_per_request: 15,
                                    carry_over_limit: 5,
                                    carry_over_expiry: 120,
                                    is_Active: true,
                                    effective_from: new Date("2024-01-01"),
                                    effective_to: new Date("2024-12-31"),
                                },
                            }),
                        ])];
                case 19:
                    leavePolicies = _p.sent();
                    // 7. Seed Holidays
                    console.log("🎉 Seeding holidays...");
                    return [4 /*yield*/, Promise.all([
                            db_1.default.holiday.create({
                                data: {
                                    name: "New Year Day",
                                    date: new Date("2024-01-01"),
                                    is_Recurring: true,
                                    is_Active: true,
                                },
                            }),
                            db_1.default.holiday.create({
                                data: {
                                    name: "Independence Day",
                                    date: new Date("2024-07-04"),
                                    is_Recurring: true,
                                    is_Active: true,
                                },
                            }),
                            db_1.default.holiday.create({
                                data: {
                                    name: "Christmas Day",
                                    date: new Date("2024-12-25"),
                                    is_Recurring: true,
                                    is_Active: true,
                                },
                            }),
                            db_1.default.holiday.create({
                                data: {
                                    name: "Thanksgiving",
                                    date: new Date("2024-11-28"),
                                    is_Recurring: true,
                                    is_Active: true,
                                },
                            }),
                        ])];
                case 20:
                    holidays = _p.sent();
                    // 8. Seed Leave Balances for all users
                    console.log("⚖️ Seeding leave balances...");
                    allUsers = __spreadArray(__spreadArray(__spreadArray([adminUser], hrUsers, true), managers, true), employees, true);
                    currentYear = new Date().getFullYear();
                    _i = 0, allUsers_1 = allUsers;
                    _p.label = 21;
                case 21:
                    if (!(_i < allUsers_1.length)) return [3 /*break*/, 24];
                    user = allUsers_1[_i];
                    // Create leave balances for each leave type
                    return [4 /*yield*/, Promise.all([
                            db_1.default.leave_balance.create({
                                data: {
                                    user_id: user.cus_id,
                                    leave_type_id: "CASUAL",
                                    yearly: 12,
                                    totalEntitlement: 12,
                                    year: currentYear,
                                    used: Math.floor(Math.random() * 5), // Random used days (0-4)
                                    pending: Math.floor(Math.random() * 3), // Random pending days (0-2)
                                    carried_over: Math.floor(Math.random() * 3), // Random carried over (0-2)
                                    balance: 12 - Math.floor(Math.random() * 5), // Remaining balance
                                },
                            }),
                            db_1.default.leave_balance.create({
                                data: {
                                    user_id: user.cus_id,
                                    leave_type_id: "SICK",
                                    yearly: 10,
                                    totalEntitlement: 10,
                                    year: currentYear,
                                    used: Math.floor(Math.random() * 3),
                                    pending: 0,
                                    carried_over: Math.floor(Math.random() * 2),
                                    balance: 10 - Math.floor(Math.random() * 3),
                                },
                            }),
                            db_1.default.leave_balance.create({
                                data: {
                                    user_id: user.cus_id,
                                    leave_type_id: "ANNUAL",
                                    yearly: 21,
                                    totalEntitlement: 21,
                                    year: currentYear,
                                    used: Math.floor(Math.random() * 10),
                                    pending: Math.floor(Math.random() * 5),
                                    carried_over: Math.floor(Math.random() * 5),
                                    balance: 21 - Math.floor(Math.random() * 10),
                                },
                            }),
                        ])];
                case 22:
                    // Create leave balances for each leave type
                    _p.sent();
                    _p.label = 23;
                case 23:
                    _i++;
                    return [3 /*break*/, 21];
                case 24:
                    // 9. Seed Leave Requests
                    console.log("📝 Seeding leave requests...");
                    sampleRequests = [
                        {
                            user_id: "USR-006", // John Smith
                            leave_type_id: "CASUAL",
                            start_date: new Date("2024-03-15"),
                            end_date: new Date("2024-03-17"),
                            no_of_days: 3,
                            reason: "Personal work",
                            status_id: ((_l = leaveStatuses.find(function (s) { return s.name === "APPROVED"; })) === null || _l === void 0 ? void 0 : _l.id) || 4,
                        },
                        {
                            user_id: "USR-007", // Emily Davis
                            leave_type_id: "SICK",
                            start_date: new Date("2024-02-20"),
                            end_date: new Date("2024-02-22"),
                            no_of_days: 3,
                            reason: "Flu symptoms",
                            status_id: ((_m = leaveStatuses.find(function (s) { return s.name === "APPROVED"; })) === null || _m === void 0 ? void 0 : _m.id) || 4,
                        },
                        {
                            user_id: "USR-008", // Robert Brown
                            leave_type_id: "ANNUAL",
                            start_date: new Date("2024-06-10"),
                            end_date: new Date("2024-06-20"),
                            no_of_days: 11,
                            reason: "Family vacation",
                            status_id: ((_o = leaveStatuses.find(function (s) { return s.name === "PENDING"; })) === null || _o === void 0 ? void 0 : _o.id) || 1,
                        },
                    ];
                    requestCounter = 1;
                    _a = 0, sampleRequests_1 = sampleRequests;
                    _p.label = 25;
                case 25:
                    if (!(_a < sampleRequests_1.length)) return [3 /*break*/, 29];
                    request = sampleRequests_1[_a];
                    return [4 /*yield*/, db_1.default.leave_request.create({
                            data: {
                                cus_id: "REQ-".concat(String(requestCounter).padStart(3, "0")),
                                user_id: request.user_id,
                                leave_type_id: request.leave_type_id,
                                start_date: request.start_date,
                                end_date: request.end_date,
                                no_of_days: request.no_of_days,
                                reason: request.reason,
                                status_id: request.status_id,
                            },
                        })];
                case 26:
                    createdRequest = _p.sent();
                    // Create initial history entry for each request
                    return [4 /*yield*/, db_1.default.leave_request_history.create({
                            data: {
                                leave_request_id: createdRequest.cus_id,
                                status_id: request.status_id,
                                updated_by: adminUser.id, // Use admin user ID for initial entries
                                comments: "Initial request submission",
                            },
                        })];
                case 27:
                    // Create initial history entry for each request
                    _p.sent();
                    requestCounter++;
                    _p.label = 28;
                case 28:
                    _a++;
                    return [3 /*break*/, 25];
                case 29:
                    console.log("✅ Database seeding completed successfully!");
                    console.log("\n📊 Summary:");
                    console.log("- Roles: ".concat(roles.length));
                    console.log("- Leave Types: ".concat(leaveTypes.length));
                    console.log("- Leave Statuses: ".concat(leaveStatuses.length));
                    console.log("- Departments: ".concat(departments.length));
                    console.log("- Users: ".concat(allUsers.length));
                    console.log("- Leave Policies: ".concat(leavePolicies.length));
                    console.log("- Holidays: ".concat(holidays.length));
                    console.log("- Leave Balances: ".concat(allUsers.length * 3));
                    console.log("- Leave Requests: ".concat(sampleRequests.length));
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, db_1.default.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })
    .catch(function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error("❌ Error during seeding:", e);
                return [4 /*yield*/, db_1.default.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
