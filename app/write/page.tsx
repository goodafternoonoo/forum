export default function Write() {
    return (
        <div>
            <h4>글작성</h4>
            <form action='/api/write' method='POST'>
                <input className='border' type='text' name='title' />
                <textarea
                    className='border'
                    name='content'
                    cols={30}
                    rows={10}
                />
                <button className='border' type='submit'>
                    버튼
                </button>
            </form>
        </div>
    );
}
