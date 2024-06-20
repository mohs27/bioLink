import "../styles/profile.css";

export function Profile() {
	return (
		<div className="profile">
			<a href="/bioLink/">
				<img
					src="https://pbs.twimg.com/profile_images/1801773800377487362/_HU-TPws_400x400.jpg"
					alt="Emilio Blacksmith's Profile Picture"
				></img>
			</a>
			<div className="name">Emilio (Blacksmith) Herrera</div>
			<div className="description">
				Developing some fun stuff (sometimes...)
			</div>
			<div className="social-media">
				<a
					href="https://reac-tube.vercel.app/"
					target="_blank"
				>
					
				</a>
				<a
					href="https://reac-tube.vercel.app/"
					target="_blank"
				>
					󰗃
				</a>
				<a
					href="https://reac-tube.vercel.app/"
					target="_blank"
				>
					
				</a>
				<a
					href="mailto: malipor180@gmail.com"
					target="_blank"
				>
					
				</a>
			</div>
		</div>
	);
}
