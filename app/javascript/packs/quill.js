import Quill from 'quill'
import 'quill/dist/quill.snow.css'

document.addEventListener('DOMContentLoaded', initialize)

function initialize() {
    const editor = new Quill("#quill", {
        placeholder: "what's on your mind?",
        modules: {
            toolbar: [
                [{header: [1, 2, false]}],
                ['bold', 'italic', 'underline'],
                [{list: 'ordered'}, {list: 'bullet'}],
                ['link', 'blockquote', 'code-block', 'image'],
            ]
        },
        theme: 'snow',
        imageHandler
    })
}

// https://codepen.io/jackmu95/pen/EgBKZr
function imageHandler(image, callback) {

}