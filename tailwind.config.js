module.exports = {
	purge: ["./public/**/*.html", "./src/**/*.vue"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		minWidth: {
			"1/2": "50%",
			"3/4": "75%"
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
