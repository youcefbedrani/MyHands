"use client";

import { EMAIL_ADDRESS } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";

export default function ContactForm() {
	return (
		<div className="flex">
			<input
				type="email"
				name="email"
				id="email"
				placeholder="Email"
				value={EMAIL_ADDRESS}
				className="border-1 col-span-1 rounded-lg rounded-e-none border border-r-0 border-neutral-300 bg-white px-3 py-2 text-neutral-500 outline-none selection:bg-indigo-500 selection:text-white placeholder:text-neutral-500 focus:border-indigo-300"
			/>
			<CopyEmailButton />
			<Link
				title="Contact me"
				href={"mailto:" + EMAIL_ADDRESS}
				target={"_blank"}
				rel="noopener noreferrer"
				aria-label="Contact me"
				className="col-span-2 rounded-lg rounded-s-none bg-indigo-500 px-4 py-2.5 font-semibold leading-6 text-white hover:bg-indigo-400"
			>
				Contact me
			</Link>
		</div>
	);
}

function CopyEmailButton() {
	const [isCopied, setIsCopied] = useState(false);

	const copyEmail = () => {
		navigator.clipboard.writeText(EMAIL_ADDRESS);

		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 5000);
		return () => setIsCopied(false);
	}

	return (
		<button
			title={isCopied ? "Email copied!" : "Copy email"}
			aria-label={isCopied ? "Email copied!" : "Copy email"}
			className="col-span-2 border border-indigo-500 px-4 py-2.5 font-semibold leading-6 text-indigo-500 hover:bg-indigo-50"
			onClick={copyEmail}
		>
			{isCopied ? "Email copied!" : "Copy email"}
		</button>
	)
}