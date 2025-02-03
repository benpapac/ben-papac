"use client"

import { useState, useRef, useEffect } from 'react';
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

	const sendEmail = (e: React.SyntheticEvent) => {
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

			e.target.reset();
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
		<div className={"mt-4 flex flex-col md:flex-row place-content-center place-items-start p-8"}>
			<div className={"mb-2"}>
				<h1 className={"text-3xl "}>{"Let's get in touch."}</h1>
				<p className={"txt-lg"}>{"To inquire about a project, or just say hello, just fill out the contact form."}</p>
			</div>
		<div className={"w-full md:w-1/3  h-3/4 mx-auto bg-slate-300 rounded-lg"} >
			<form className={"p-8 md:w-3/4 flex flex-col"} ref={form} onSubmit={sendEmail}>
				<label className={" my-1 h-10 text-xl"}>Name</label>
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
		</div>
	);
};

export default ContactUs;