export const days = [
	"Domingo",
	"Lunes",
	"Martes",
	"Miércoles",
	"Jueves",
	"Viernes",
	"Sábado",
];

export const months = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre",
];

export const cookie_days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export const cookie_months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export function Tags(tag: string, border: boolean = false): string {
	let styles: string;
	switch (tag.toUpperCase()) {
		case "HABILITADO":
		case "APROBADA": {
			styles = `bg-emerald-200 text-emerald-500 ${
				border && "border border-emerald-500"
			}`;
			break;
		}

		case "SEPARADO": {
			styles = "bg-lime-200 text-lime-600";
			break;
		}

		case "INHABILITADO":
		case "EN PROCESO": {
			styles = `bg-yellow-200 text-yellow-600 ${
				border && "border border-yellow-500"
			}`;
			break;
		}

		case "RETORNADA": {
			styles = `bg-orange-200 text-orange-600 ${
				border && "border border-orange-600"
			}`;
			break;
		}

		case "RECHAZADA": {
			styles = `bg-red-200 text-red-500 ${
				border && "border border-red-500"
			}`;
			break;
		}

		case "BARRANQUILLA": {
			styles = "bg-teal-200 text-teal-600";
			break;
		}

		case "CHIA": {
			styles = "bg-sky-200 text-sky-500";
			break;
		}

		case "APROBADA PARA PAGO": {
			styles = `bg-blue-200 text-blue-500 ${
				border && "border border-blue-500"
			}`;
			break;
		}

		case "CONTABILIZADA": {
			styles = `bg-indigo-200 text-indigo-500 ${
				border && "border border-indigo-500"
			}`;
			break;
		}

		case "NUEVA": {
			styles = `bg-purple-200 text-purple-500 ${
				border && "border border-purple-500"
			}`;
			break;
		}

		case "CASA":
		case "CASA CAMPESTRE":
		case "CASA COMERCIAL":
		case "CASA CONDOMINIO":
		case "CASA-LOTE":
		case "PDTE CONTRATO": {
			styles = "bg-rose-200 text-rose-500";
			break;
		}

		case "SIN INMUEBLE": {
			styles = "";
			break;
		}

		case "NO CONTABILIZADA":
		case "ANULADA":
		default: {
			styles = `bg-gray-200 text-gray-500 ${
				border && "border border-gray-500"
			}`;
			break;
		}
	}
	return styles;
}
