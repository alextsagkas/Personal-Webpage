# Personal Webpage

This is an attempt to create a personal webpage and inspire others to create their own. My inspiration for this project was the [tutorial](https://www.youtube.com/watch?v=b0pkpcD8Ms4) by ForrestKnight on YouTube. His repository on GitHub can be found [here](https://github.com/ForrestKnight/minimal-portfolio).

The project is implemented with **React** and **TailwindCSS** and **Vite** is used as the bundler. Also, GitHub Pages is used to deploy the app and assign to it a custom domain name, purchased from **Cloudflare**.

## Styling

For the styling of the webpage **TailwindCSS framework** is used. Also, for the Introduction Page's sliding animation the **Framer Motion library** is exploited.

The app is made responsive through the handy **TailwindCSS** classes. Some theme colors and the font are defined in the `tailwind.config.js` file.

## Storage

The data for the education and projects sections are stored in `src/data/data` folder. Therefore, in every section the Component maps to the data array a ComponentItem each time, so as to construct the whole section.

## Contact Form

The data from the form submission is sent to the [getform.io](https://getform.io) service.

The functionality of the form is implemented with functions located in `src/functions/formValidation.js` file. Furthermore, the data are fetched with the `fetchData` function located in `src/functions/fetchData.js` file.

## Projects Carousel

The projects' Carousel is built from ground up with **React** and **TailwindCSS**. It is responsive and can be used on any device. The Carousel can also be navigated with gestures implemented with **react-swipeable** package.
