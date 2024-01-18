
let notes = [
    {
        id: 1,
        title: "first one",
        content: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos ad, doloribus blanditiis et ipsam laborum corrupti illo beatae vero illum totam inventore numquam consectetur quas incidunt molestiae voluptates praesentium ea. ",
        date: Date.now(),
    },
    {
        id: 2,
        title: "second one",
        content: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi, et eius veritatis ipsa quis minima nostrum? Recusandae cumque, officiis maiores ut blanditiis inventore accusamus iste laudantium? Consequatur, dicta repellendus.",
        date: Date.now(),
    },
    {
        id: 3,
        title: "third one",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis molestias, explicabo cupiditate voluptas totam incidunt quo suscipit corrupti dolorem nisi est repudiandae sequi delectus esse eius fuga iure! Repudiandae.",
        date: Date.now(),
    }
];

const getNotes = (search) => {
    if(!search) return notes;
    return notes.filter(note=> note.title.includes(search) || note.content.includes(search));
    
}

const getNote = (id) => {
    return notes.find(note => note.id == id);;
}

const deleteNote = (id) => {
    notes = notes.filter((note) => note.id !== id);
}

const addNote = (content) => {
    const index = notes[notes.length - 1].id;
    const note = {
        id: index + 1,
        ...content,
        date: new Date()
    };
    notes.push(note);
}
export default { getNotes, getNote, deleteNote, addNote };