function DetailPage({ freitag, allPosts, isCool, setAllPosts, addTwoNumbers }) {

    addTwoNumbers(2, 4);

    // 1. Beispiel zum hinzufügen: CREATE
    setAllPosts((prev) => {
        // prev ist der Zustand bevor die Bearbeitung beginnt
        //prev = [{firstName:"Florian"}]
        return [...prev, { firstName: "Danka" }];
        // arrayPerson = [{firstName:"Florian"},{firstName:"Danka"}]
    });
    // 2. Beispiel zum hinzufügen: CREATE
    const arrayPerson = [...allPosts, { firstName: "Danka" }];
    setAllPosts(arrayPerson);

    return (
        <div className="DetailPage">

        </div>
    );
}

export default DetailPage;
