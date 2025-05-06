"use client"

import { useState, useRef, useEffect, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';


 const ContactUs = () => {
	const form = useRef();
    const user_id = process.env.NEXT_PUBLIC_USER_ID;


	const [sent, setSent] = useState('');

	useEffect(() => {
		setSent('');
		window.scroll(0,0);
	}, [])

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        console.log('user', user_id)

		emailjs
			.sendForm(
				'benpapac',
				'template_z6wo6nv',
				form.current!,
				{publicKey: `${user_id}`}
			)
			.then(
				() => {
					setSent('pass');
				},
				() => {
					setSent('fail')
				}
			);
			
			(document.getElementById("contact-form") as HTMLFormElement).reset();
	};

    if (sent === 'pass') {
        return (
            <div> 
                <h4 className={"my-10 text-lg md:text-3xl"}>{'Your message was successfully sent!'}</h4>
                <Link href={"/"}>Back to Main Page.</Link>
            </div>
        );
    }

    if (sent === 'fail') {
        return (<h4 className={"my-10 text-lg md:text-3xl"}>{'Oops! Something went wrong. Refresh the page, and try again.'}</h4>);
    }

	return (
		<div className={"mt-[20%] md:mt-[10%] mx-auto max-w-3xl flex flex-col place-items-center"}>
			<form id={"contact-form"} className={"p-1 w-[90%] md:w-3/4 flex flex-col"} ref={form} onSubmit={sendEmail}>
				<label className={"my-1 h-10 text-xl"}>Name</label>
				<input type="hidden" name='to_name' value="Ben"/>
				<input className={"md:w-3/4 rounded shadow appearance-none h-10 p-1"} type='text' placeholder='e.g. Nicole Seymour' name='name' />
				<label className={"my-1 h-10 text-xl"}>Email Address</label>
				<input className={"md:w-3/4 rounded shadow appearance-none h-10 p-1"} type='email' placeholder='username@email.com' name='email' />
				<label className={"my-1 w-3/4 h-10 text-xl"}>Subject</label>
				<input className={"md:w-3/4 rounded shadow appearance-none h-10 p-1"} type="text" placeholder="What's the subject?" name='subject'/>
				<label className={"my-1 w-3/4 h-10 text-xl"}>Message</label>
				<textarea className={"rounded shadow appearance-none p-1"} rows={6} name='message' placeholder="Type your message here." />
				<input className={" mt-10 w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"} type='submit' value='Send.' />
			</form>

		</div>
	);
};

export default ContactUs;