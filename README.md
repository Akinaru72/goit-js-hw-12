# Homework №12

## General Requirements

1. Create a repository **goit-js-hw-12**.
2. Build the project using [**Vite**](https://vite.dev/). We have prepared a
   [ready-made template](https://github.com/goitacademy/vanilla-app-template)
   with all the necessary settings — we recommend using it.
3. Use the [**Axios**](https://axios-http.com/) library for HTTP requests.
4. Use **async/await** syntax.
5. Read the task carefully and complete it in the code editor.
6. Make sure the code is formatted with **Prettier**, and the browser console
   contains no errors or warnings when opening the live page.
7. Submit the homework for review.

### Submission Format

The homework must contain **two links**:

- a link to the source files repository;
- a link to the live page on **GitHub Pages**.

> ⚠️ **Important!** File and folder names, as well as the folder structure, must
> exactly match the specified scheme. Otherwise, the homework **will not be
> accepted**.

![Project preview](assets/goit-12.jpg)

---

## Code Structure and Organization

Use **modularity** and the `export / import` syntax to organize the code.

### `pixabay-api.js`

This file should contain functions for making HTTP requests:

- **getImagesByQuery(query, page)**
  - `query` — search keyword (string);
  - `page` — page number (number);
  - the function performs an HTTP request and returns the `data` property from
    the response.

### `render-functions.js`

In this file:

- create an instance of **SimpleLightbox** to work with the modal window;
- implement UI rendering functions:

  - **createGallery(images)** Accepts an `images` array, creates the HTML markup
    for the gallery, appends it to the gallery container, and calls the
    `refresh()` method of the **SimpleLightbox** instance.

  - **clearGallery()** Clears the gallery container.

  - **showLoader() / hideLoader()** Shows and hides the loading indicator.

  - **showLoadMoreButton() / hideLoadMoreButton()** Shows and hides the **Load
    more** button.

All functions do not return any values.

### `main.js`

- Contains **all application logic**.
- This file handles:
  - **iziToast** notifications;
  - checks for the length of arrays in API responses;
  - **pagination** and **page scrolling** logic.
- Import functions from `pixabay-api.js` and `render-functions.js` and call them
  at the appropriate moments.

---

## Task — Image Search

Use the code from the previous homework and **extend the application with new
functionality**.

For styling, use the provided
[layout](https://www.figma.com/file/m8k9NQV7qZrtYDCvxfD68B/%D0%94%D0%97-JavaScript?type=design&node-id=3-1010&mode=design&t=eCh8cUwdfWOakuAr-0)
(or your own styles).

---

## Refactoring

- Use **async/await** syntax for asynchronous requests.
- Refactor the code from the previous homework.

---

## Pagination

The **Pixabay API** supports pagination using the `page` and `per_page`
parameters.

### Requirements:

- Each response must return **15 images** (`per_page = 15`).
- The initial `page` value is **1**.
- After each subsequent request, increment `page` by **1**.
- When performing a new search, reset `page` back to **1**.

### Load More Button

- Add a **Load more** button below the gallery in the HTML.
- When the button is clicked, request the next page of images.
- New images must be appended to the existing gallery content.
- Store the user’s search query in a **global variable**.

#### Button Display Logic:

- If there are no images — the button is hidden.
- After the first successful request — the button appears.
- On form resubmission — the button is hidden first and then shown again if
  needed.
- The loading indicator must be placed **below the Load more button**.

Watch the
[demo video of the application at this stage](https://www.youtube.com/watch?v=00hLHI3hx28&embeds_referring_euri=https%3A%2F%2Fwww.edu.goit.global%2F&embeds_referring_origin=https%3A%2F%2Fwww.edu.goit.global&source_ve_path=OTY3MTQ).

---

## End of Collection

The backend response includes the **totalHits** property — the total number of
images matching the search query.

If the user reaches the end of the collection:

- hide the **Load more** button;
- display the message:

`We're sorry, but you've reached the end of search results.`

Please note that the end of the collection can occur **on the first page** as
well as **on any subsequent page**.

Watch the
[demo video of the application at this stage](https://www.youtube.com/watch?v=0ZQVWxm0VcQ&embeds_referring_euri=https%3A%2F%2Fwww.edu.goit.global%2F&embeds_referring_origin=https%3A%2F%2Fwww.edu.goit.global&source_ve_path=OTY3MTQ).

---

## Page Scrolling

Implement **smooth page scrolling** after each request and after rendering the
next group of images.

To do this:

1. Get the height of a single gallery card using the
   [`getBoundingClientRect`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
   method.
2. After adding new elements to the DOM, scroll the page using
   [`window.scrollBy`](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy)
   by **two heights of a gallery card**.

Watch the
[demo video of the application at this stage](https://www.youtube.com/watch?v=aEhYvL7wIV8&embeds_referring_euri=https%3A%2F%2Fwww.edu.goit.global%2F&embeds_referring_origin=https%3A%2F%2Fwww.edu.goit.global&source_ve_path=OTY3MTQ).

---

## What the Mentor Will Pay Attention To

- The homework contains **two links**:
  - a link to the source files repository;
  - a link to the live page on **GitHub Pages**
- The project is built using [**Vite**](https://vite.dev/)
- The browser developer console contains **no errors, warnings, or console.log**
- Page elements are styled according to the layout (or custom styles are used)
- The project includes code from the previous homework
- The file `pixabay-api.js` contains the function
  `getImagesByQuery(query, page)` for making HTTP requests
- The file `render-functions.js`:
  - creates an instance of **SimpleLightbox**;
  - implements the following functions:
    - `createGallery(images)`
    - `clearGallery()`
    - `showLoader()`
    - `hideLoader()`
    - `showLoadMoreButton()`
    - `hideLoadMoreButton()`
- The file `main.js` contains **all application logic**
- All asynchronous requests are implemented using **async/await**
- Each HTTP request returns **15 items**
- New images are added to the DOM **in a single operation**
- A **Load more** button is displayed below the gallery and loads the next page
  when clicked
- After adding new images, the `SimpleLightbox.refresh()` method is called
- When the user reaches the end of the collection:
  - the **Load more** button is hidden;
  - a corresponding message is displayed
- On each new form submission:
  - the page number is reset to **1**;
  - results from the previous search are cleared
- When clicking a thumbnail image in the gallery, its **large version** opens in
  a modal window using **SimpleLightbox**

---

**Live page: [GitHub Pages](https://akinaru72.github.io/goit-js-hw-12/)**
