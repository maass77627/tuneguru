


function RecordInfo({record}) {
console.log(record)



    return(
        <div class="nothidden" id="recordinfo">
            <h1>{record.title}</h1>
            <h3>{record.artist}</h3>

        </div>
    )
}

export default RecordInfo