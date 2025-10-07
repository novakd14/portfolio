import React from "react";
import "./App.css"

// Jednotlivé sekce CV
function Header() {
	return (
		<header className="bg-gray-800 text-white p-6 text-center text-2xl font-bold">
			Mgr. David Novák
		</header>
	);
}

function Profile() {
	return (
		<section className="p-8 bg-white" id="profile">
			<h2 className="text-xl font-semibold mb-4">Profil</h2>
			<p>
				Absolvent MFF UK a účastník programu 42 Prague se zaměřením na Python a
				datovou analýzu. Vynikám analytickým myšlením a pečlivostí, baví mě hledat
				efektivní řešení a rozvíjet se směrem k Python developmentu, testování a
				data analysis.
			</p>
		</section>
	);
}

function Skills() {
	return (
		<section className="p-8 bg-gray-100" id="skills">
			<h2 className="text-xl font-semibold mb-4">Dovednosti</h2>
			<ul className="list-disc ml-6">
				<li>Python (pokročilý), C (středně pokročilý), JavaScript/HTML (základy)</li>
				<li>React + TypeScript (kurz Code with Mosh)</li>
				<li>Git, Linux, Excel (pokročilé funkce, makra)</li>
				<li>Angličtina (B2), Čeština (C2)</li>
			</ul>
		</section>
	);
}

function Projects() {
	return (
		<section className="p-8 bg-white" id="projects">
			<h2 className="text-xl font-semibold mb-4">Projekty</h2>
			<ul className="list-disc ml-6">
				<li>
					<b>TolKalSpec</b> – Program v Pythonu pro kalibraci Ramanových spekter,
					automatické přiřazení pásem a export do CSV.
				</li>
				<li>
					<b>FdF</b> – Projekt v jazyce C (42 Prague), načítání a zobrazení 3D map
					pomocí drátěného modelu, práce s knihovnou MiniLibX.
				</li>
				<li>
					<b>Webová aplikace v Reactu</b> – Jednoduchá aplikace vytvořená v rámci
					kurzu Code with Mosh.
				</li>
			</ul>
		</section>
	);
}

function Experience() {
	return (
		<section className="p-8 bg-gray-100" id="experience">
			<h2 className="text-xl font-semibold mb-4">Praxe</h2>
			<ul className="list-disc ml-6">
				<li>
					Administrativní pracovník – Health Plus (2020–2025): správa jízdních
					deníků, práce s daty, pečlivá evidence.
				</li>
			</ul>
		</section>
	);
}

function Education() {
	return (
		<section className="p-8 bg-white" id="education">
			<h2 className="text-xl font-semibold mb-4">Vzdělání</h2>
			<ul className="list-disc ml-6">
				<li>42 Prague – Softwarové inženýrství (od 2024)</li>
				<li>MFF UK – Navazující magisterské studium, Biofyzika a chemická fyzika (2025)</li>
				<li>MFF UK – Bakalářské studium, Obecná fyzika (2022)</li>
			</ul>
		</section>
	);
}

function Contact() {
	return (
		<section className="p-8 bg-gray-100" id="contact">
			<h2 className="text-xl font-semibold mb-4">Kontakt</h2>
			<p>Email: dnovak98@gmail.com</p>
			<p>GitHub: github.com/novakd14</p>
		</section>
	);
}

export default function App() {
	return (
		<div className="font-sans text-black">
			<Header />
			<Profile />
			<Skills />
			<Projects />
			<Experience />
			<Education />
			<Contact />
			<footer className="bg-gray-800 text-white text-center p-4 text-sm">
				© 2025 David Novák
			</footer>
		</div>
	);
}
