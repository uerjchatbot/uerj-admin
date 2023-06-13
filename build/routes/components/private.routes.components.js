import { DoctorCalendarPage } from "@/page/doctor/calendar";
import { DoctorContactPage } from "@/page/doctor/contact";
import { HomeDoctor } from "@/page/doctor/home";
import { DoctorPogramPage } from "@/page/doctor/program";
import { DoctorProcessSelectivePage } from "@/page/doctor/selective_process";
import { EgressComunicationsPage } from "@/page/egress/comunication";
import NewComunication from "@/page/egress/comunication/new-comunication";
import { EgressFormsPage } from "@/page/egress/forms";
import NewForm from "@/page/egress/forms/new-form";
import { HomeEgress } from "@/page/egress/home";
import { Home } from "@/page/home/main";
import { ViewHome } from "@/page/home/view";
import { MasterCalendarPage } from "@/page/master/calendar";
import { MasterContactPage } from "@/page/master/contact";
import { HomeMaster } from "@/page/master/home";
import { MasterPogramPage } from "@/page/master/program";
import { MasterProcessSelectivePage } from "@/page/master/selective_process";
import { CalendarPage } from "@/page/student/calendar";
import { Events } from "@/page/student/events";
import { FacultAndStudents } from "@/page/student/faculty_and_students";
import { HomeStudent } from "@/page/student/home";
import { Matters } from "@/page/student/matters";
import { Schedules } from "@/page/student/schedules";
import { SelectiveProcess } from "@/page/student/selective_process";
import { Tutorials } from "@/page/student/tutorials";
import * as Private from "@/routes/paths/paths.private";
export const PrivateRoutesComponents = [
    {
        path: Private.HOME_PATH(),
        Component: Home,
        breadcrumb: "Início"
    },
    {
        path: Private.VIEW_HOME_PATH(),
        Component: ViewHome,
        breadcrumb: "Editar início"
    },
    {
        path: Private.STUDENT_PATH(),
        Component: HomeStudent,
        breadcrumb: "1 - Aluno"
    },
    {
        path: Private.STUDENT_CALENDAR_PATH(),
        Component: CalendarPage,
        breadcrumb: " / 1 - Calendário letivo"
    },
    {
        path: Private.STUDENT_FACULTY_AND_STUDENDS(),
        Component: FacultAndStudents,
        breadcrumb: " / 2 - Corpos Docentes e Discentes"
    },
    {
        path: Private.STUDENT_MATTERS(),
        Component: Matters,
        breadcrumb: " / 3 - Disciplinas"
    },
    {
        path: Private.STUDENT_EVENTS(),
        Component: Events,
        breadcrumb: " / 4 - Eventos"
    },
    {
        path: Private.STUDENT_SCHEDULES(),
        Component: Schedules,
        breadcrumb: " / 5 - Horários"
    },
    {
        path: Private.STUDENT_TUTORIALS(),
        Component: Tutorials,
        breadcrumb: " / 6 - Instruções e tutoriais"
    },
    {
        path: Private.STUDENT_SELECTIVE_PROCESS(),
        Component: SelectiveProcess,
        breadcrumb: " / 7 - Processo seletivo de bolsas"
    },
    {
        path: Private.MASTER_PATH(),
        Component: HomeMaster,
        breadcrumb: "3 - Candidato Mestrado"
    },
    {
        path: Private.MASTER_CALENDAR_PATH(),
        Component: MasterCalendarPage,
        breadcrumb: " / 1 - Cronograma"
    },
    {
        path: Private.MASTER_SELECTIVE_PROCESS(),
        Component: MasterProcessSelectivePage,
        breadcrumb: " / 2 - Processo seletivo"
    },
    {
        path: Private.MASTER_PROGRAM(),
        Component: MasterPogramPage,
        breadcrumb: " / 3 - Programa"
    },
    {
        path: Private.MASTER_CONTACT(),
        Component: MasterContactPage,
        breadcrumb: " / 4 - Contato"
    },
    {
        path: Private.DOCTOR_PATH(),
        Component: HomeDoctor,
        breadcrumb: "2 - Candidato Doutorado"
    },
    {
        path: Private.DOCTOR_CALENDAR_PATH(),
        Component: DoctorCalendarPage,
        breadcrumb: " / 1 - Cronograma"
    },
    {
        path: Private.DOCTOR_SELECTIVE_PROCESS(),
        Component: DoctorProcessSelectivePage,
        breadcrumb: " / 2 - Processo seletivo"
    },
    {
        path: Private.DOCTOR_PROGRAM(),
        Component: DoctorPogramPage,
        breadcrumb: " / 3 - Programa"
    },
    {
        path: Private.DOCTOR_CONTACT(),
        Component: DoctorContactPage,
        breadcrumb: " / 4 - Contato"
    },
    {
        path: Private.EGRESS_PATH(),
        Component: HomeEgress,
        breadcrumb: "4 - Egresso"
    },
    {
        path: Private.EGRESS_FORMS(),
        Component: EgressFormsPage,
        breadcrumb: " / 1 - Formulários"
    },
    {
        path: Private.EGRESS_NEW_FORM(),
        Component: NewForm,
        breadcrumb: " / Novo Formulário"
    },
    {
        path: Private.EGRESS_COMUNICATIONS(),
        Component: EgressComunicationsPage,
        breadcrumb: " / 2 - Comunicações"
    },
    {
        path: Private.EGRESS_NEW_COMUNICATION(),
        Component: NewComunication,
        breadcrumb: " / Nova Comunicação"
    }
];
//# sourceMappingURL=private.routes.components.js.map