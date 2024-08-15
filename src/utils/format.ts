import { days, months } from "../data/mock.utils";

// String functions

function capitalize(word: string): string {
	if (typeof word === "undefined") return "";

	return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
}

function capitalizeAll(string: string): string {
	if (typeof string === "undefined") return "";

	return string
		.split(" ")
		.map((word) => capitalize(word))
		.join(" ");
}

function initials(string: string): string {
	if (typeof string === "undefined") return "";

	const words = string.split(" ");
	let initials: string = "";

	if (words.length > 1) {
		const firstInitial = words[0].slice(0, 1);
		const lastInitial = words[words.length - 1].slice(0, 1);

		initials = `${firstInitial}${lastInitial}`;
	} else {
		initials = words[0].slice(0, 1);
	}

	return initials;
}

interface getFormatProps {
	originalValue: string;
	capitalize: string;
	capitalizeAll: string;
	initials: string;
}

export default function getFormat(value: string): getFormatProps {
	const finalFormat: getFormatProps = {
		originalValue: value,
		capitalize: capitalize(value),
		capitalizeAll: capitalizeAll(value),
		initials: initials(value),
	};

	return finalFormat;
}

// Number functions

function currency(value: number): string {
	const formatting_options = {
		style: "currency",
		currency: "COP",
		minimumFractionDigits: 0,
	};

	const currency = new Intl.NumberFormat("es-CO", formatting_options);
	const finalCurreny = currency.format(value);

	return finalCurreny;
}

interface getNumberFormatProps {
	originalValue: number;
	currency: string;
}

export function getNumberFormat(value: number): getNumberFormatProps {
	const finalFormat: getNumberFormatProps = {
		originalValue: value,
		currency: currency(value),
	};

	return finalFormat;
}

interface RangeProps {
	(start: number, end?: number, step?: number, fromRight?: boolean): number[];
}

/**
 * Function copied of lodash dependency
 * Returns an array with the specified parameters
 *
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
export const range: RangeProps = (start, end, step, fromRight = false) => {
	// Validate step variable
	if (step && typeof step != "number") {
		end = step = undefined;
	}

	// Validate end variable
	if (end === undefined) {
		end = start;
		start = 0;
	}

	// Define step
	step = step === undefined ? (start < end ? 1 : -1) : step;

	let index = -1;
	let length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
	const result = Array(length);

	while (length--) {
		result[fromRight ? length : ++index] = start;
		start += step;
	}

	return result;
};

// Date functions

function addLeadingZero(number: number | string): string {
	let formatedNumber: string = number.toString();

	if (formatedNumber.length === 1) {
		formatedNumber = "0" + formatedNumber;
	} else if (formatedNumber.length > 1) {
		formatedNumber;
	} else {
		formatedNumber = "00";
	}

	return formatedNumber;
}

interface baseDateProps {
	year: number;
	month: number;
	day: number;
	hour: number;
	minute: number;
	second: number;
}

interface formatedDateProps {
	days: string[];
	months: string[];
	baseDate: baseDateProps;
	shortTime24: () => string;
	longTime24: () => string;
	shortDate: () => string;
	shortDateTime24: () => string;
	longDate: () => string;
	longDateTime24: () => string;
	UTC: () => string;
}

/**
 * Returns the UTC providedDate with different providedDate structures
 *
 * shortTime24: hh:mm
 *
 * longTime24: hh:mm:ss
 *
 * shortDate: dd/mm/yyyy
 *
 * shortDateTime: dd/mm/yyyy hh:mm:ss
 *
 * longDate: day, month dd, yyyy
 *
 * longDateTime24: day, month dd, yyyy hh:mm:ss
 *
 * UTC
 *
 * @param {string} providedDate The UTC providedDate to be formated
 * @returns {formatedDateProps} Returns an object of providedDate formats
 */
export function formatDateUTC(providedDate?: string): formatedDateProps {
	if (providedDate) {
		const dateArray = providedDate
			.substring(0, providedDate.indexOf("T"))
			.split("-");
		const timeArray = providedDate
			.substring(providedDate.indexOf("T") + 1, providedDate.indexOf("."))
			.split(":");

		const formatedDate: formatedDateProps = {
			days,
			months,
			baseDate: {
				year: Number(dateArray[0]),
				month: Number(dateArray[1]),
				day: Number(dateArray[2]),
				hour: Number(timeArray[0]),
				minute: Number(timeArray[1]),
				second: Number(timeArray[2]),
			},

			shortTime24: function () {
				const formattedDate = `${addLeadingZero(
					this.baseDate.hour
				)}:${addLeadingZero(this.baseDate.minute)}`;
				return formattedDate;
			},

			longTime24: function () {
				const formattedDate = `${addLeadingZero(
					this.baseDate.hour
				)}:${addLeadingZero(this.baseDate.minute)}:${addLeadingZero(
					this.baseDate.second
				)}`;
				return formattedDate;
			},

			shortDate: function () {
				const formattedDate = `${addLeadingZero(
					this.baseDate.day
				)}/${addLeadingZero(this.baseDate.month)}/${
					this.baseDate.year
				}`;
				return formattedDate;
			},

			shortDateTime24: function () {
				const formattedDate = `${addLeadingZero(
					this.baseDate.day
				)}/${addLeadingZero(this.baseDate.month)}/${
					this.baseDate.year
				} ${addLeadingZero(this.baseDate.hour)}:${addLeadingZero(
					this.baseDate.minute
				)}:${addLeadingZero(this.baseDate.second)}`;
				return formattedDate;
			},

			longDate: function () {
				const providedDate = new Date(
					`${this.baseDate.year}/${this.baseDate.month}/${this.baseDate.day}`
				);
				const day = days[providedDate.getDay()];
				const month = months[this.baseDate.month - 1];
				const formattedDate = `${day}, ${month} ${addLeadingZero(
					this.baseDate.day
				)}, ${this.baseDate.year}`;
				return formattedDate;
			},

			longDateTime24: function () {
				const providedDate = new Date(
					`${this.baseDate.year}/${this.baseDate.month}/${this.baseDate.day}`
				);
				const day = days[providedDate.getDay()];
				const month = months[this.baseDate.month - 1];
				const formattedDate = `${day}, ${month} ${addLeadingZero(
					this.baseDate.day
				)}, ${this.baseDate.year} ${addLeadingZero(
					this.baseDate.hour
				)}:${addLeadingZero(this.baseDate.minute)}:${addLeadingZero(
					this.baseDate.second
				)}`;
				return formattedDate;
			},

			UTC: function () {
				const formattedDate = `${this.baseDate.year}-${addLeadingZero(
					this.baseDate.month
				)}-${addLeadingZero(this.baseDate.day)}T${addLeadingZero(
					this.baseDate.hour
				)}:${addLeadingZero(this.baseDate.minute)}:${addLeadingZero(
					this.baseDate.second
				)}Z`;
				return formattedDate;
			},
		};

		return formatedDate;
	} else {
		const actualDate = new Date();

		const formatedDate: formatedDateProps = {
			days,
			months,
			baseDate: {
				year: Number(actualDate.getFullYear()),
				month: Number(actualDate.getMonth()),
				day: Number(addLeadingZero(actualDate.getDate())),
				hour: Number(actualDate.getHours()),
				minute: Number(actualDate.getMinutes()),
				second: Number(actualDate.getSeconds()),
			},

			shortTime24: function () {
				const formattedDate = `${addLeadingZero(
					this.baseDate.hour
				)}:${addLeadingZero(this.baseDate.minute)}`;
				return formattedDate;
			},

			longTime24: function () {
				const formattedDate = `${addLeadingZero(
					this.baseDate.hour
				)}:${addLeadingZero(this.baseDate.minute)}:${addLeadingZero(
					this.baseDate.second
				)}`;
				return formattedDate;
			},

			shortDate: function () {
				const formattedDate = `${addLeadingZero(
					this.baseDate.day
				)}/${addLeadingZero(this.baseDate.month)}/${
					this.baseDate.year
				}`;
				return formattedDate;
			},

			shortDateTime24: function () {
				const formattedDate = `${addLeadingZero(
					this.baseDate.day
				)}/${addLeadingZero(this.baseDate.month)}/${
					this.baseDate.year
				} ${addLeadingZero(this.baseDate.hour)}:${addLeadingZero(
					this.baseDate.minute
				)}:${addLeadingZero(this.baseDate.second)}`;
				return formattedDate;
			},

			longDate: function () {
				const providedDate = new Date(
					`${this.baseDate.year}/${this.baseDate.month}/${this.baseDate.day}`
				);
				const day = days[providedDate.getDay()];
				const month = months[this.baseDate.month - 1];
				const formattedDate = `${day}, ${month} ${addLeadingZero(
					this.baseDate.day
				)}, ${this.baseDate.year}`;
				return formattedDate;
			},

			longDateTime24: function () {
				const providedDate = new Date(
					`${this.baseDate.year}/${this.baseDate.month}/${this.baseDate.day}`
				);
				const day = days[providedDate.getDay()];
				const month = months[this.baseDate.month - 1];
				const formattedDate = `${day}, ${month} ${addLeadingZero(
					this.baseDate.day
				)}, ${this.baseDate.year} ${addLeadingZero(
					this.baseDate.hour
				)}:${addLeadingZero(this.baseDate.minute)}:${addLeadingZero(
					this.baseDate.second
				)}`;
				return formattedDate;
			},

			UTC: function () {
				const formattedDate = `${this.baseDate.year}-${addLeadingZero(
					this.baseDate.month
				)}-${addLeadingZero(this.baseDate.day)}T${addLeadingZero(
					this.baseDate.hour
				)}:${addLeadingZero(this.baseDate.minute)}:${addLeadingZero(
					this.baseDate.second
				)}Z`;
				return formattedDate;
			},
		};

		return formatedDate;
	}
}

export const getYears = (
	fromYear: number,
	toYear: number | "actual" = "actual"
): number[] | [] => {
	if (!fromYear) return [];

	if (toYear === "actual" || typeof toYear !== "number") {
		toYear = new Date().getFullYear();
	}

	let years = [toYear];

	for (let i = 0; i < toYear - fromYear; i++) {
		years = [fromYear + i, ...years];
	}

	years.sort((a, b) => a - b);

	return years;
};

// Other functions

interface PreparedObject {
	value: string | number | boolean;
	label: string;
}

interface DataObject {
	[key: string]: string | number | boolean;
}

type DataArray = DataObject[];

interface PrepareObjectArrayOptions {
	reverse?: boolean;
}

export function prepareObjectArray(
	data: DataArray,
	options: PrepareObjectArrayOptions = {}
): PreparedObject[] | void {
	if (Array.isArray(data)) {
		if (data.length > 0) {
			const objectKeys = Object.keys(data[0]);
			const preparedArray = [];

			if (options.reverse) {
				for (let i = 0; i < data.length; i++) {
					preparedArray.push({
						value: data[i][objectKeys[1]],
						label: data[i][objectKeys[0]].toString(),
					});
				}
			} else {
				for (let i = 0; i < data.length; i++) {
					preparedArray.push({
						value: data[i][objectKeys[0]],
						label: data[i][objectKeys[1]].toString(),
					});
				}
			}

			return preparedArray;
		}
	}
}
