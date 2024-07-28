# HandFont

## Description

The project aims to automate the creation of a personalized handwriting font using image processing techniques. Users upload scanned images of handwritten characters, which are then processed to generate a TrueType Font (.ttf) file. Key functionalities include image segmentation using grid-based splitting, vectorization of character images to SVG format, and compilation into a downloadable font file. The project leverages Node.js for backend processing, Multer for file handling, and custom scripts for image manipulation and font generation.

## Demo
[HandFont Demo Link](https://youtu.be/bPF9YTvGUec)

## Installation

To install this project, follow these steps:

### Installation Guide

1. **Clone this repository**
   ```sh
   git clone <repository-url>
   ```

2. **Open terminal in the project directory**
    ```sh
    cd <project-directory>
    ```

3. **Install dependencies**
    - Navigate to the `frontend` folder and execute:
        ```sh
        cd frontend
        npm install
        ```
    - Navigate to the `backend` folder and execute:
        ```sh
        cd ../backend
        npm install
        ```

4. **Run the development servers**
    - In the `frontend` folder, execute:
        ```sh
        cd ../frontend
        npm run dev
        ```
    - In the `backend` folder, execute:
        ```sh
        cd ../backend
        npm run dev
        ```

5. **Open the project in a browser**

    Go to [LocalHost](http://localhost:5173) in your preferred web browser.

## Usage

To use this project, follow these instructions:

# Usage Guide

Follow these steps to create and download your custom handwriting font:

1. **Download Template**
- Visit the website and download the template provided.

2. **Fill the Grid**
- Use the template to write each letter in the provided grid.
- Ensure that:
  - The spaces are even.
  - The letters do not extend outside the grid squares.

3. **Scan and Upload**
- Scan the filled template using your camera.
- Upload the scanned image to the website.

4. **Upload the Template**
- Click the upload button.
- You will be redirected to a new page.

5. **Preview and Edit**
- Check the preview of each letter.
- If any letters are unclear, click on the corresponding tile to reupload the correct image.

6. **Download Your Font**
- Once you are satisfied with all the letters, download your custom font.

## Contributing

Contributions are welcome! Please open an `issue` or submit a `pull request` for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
