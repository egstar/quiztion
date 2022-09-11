import { Link } from 'react-router-dom'
function LastQuiz() {
    return(
        <>
            
                        <div className="row g-0">
                            <div className="QuizNameHead col-md-4">Quiz Name</div>
                            <div className="QSessionHead col-md-4">Session Name</div>
                            <div className="AddDateHead col-md-4">Date/Time</div>
                        </div>
                        <div className="row g-0">
                            <div className="QuizName col-md-4"><Link to="quiz?id=1">Routing Quiz</Link></div>
                            <div className="QSession col-md-4"><Link to="/session?id=1">Session 2</Link></div>
                            <div className="AddDate col-md-4">{new Date().toLocaleString() + ""}</div>
                        </div>
                        <div className="row g-0">
                            <div className="QuizName col-md-4"><Link to="quiz?id=1">Routing Quiz</Link></div>
                            <div className="QSession col-md-4"><Link to="/session?id=1">Session 2</Link></div>
                            <div className="AddDate col-md-4">{new Date().toLocaleString() + ""}</div>
                        </div>
                        <div className="row g-0">
                            <div className="QuizName col-md-4"><Link to="quiz?id=1">Routing Quiz</Link></div>
                            <div className="QSession col-md-4"><Link to="/session?id=1">Session 2</Link></div>
                            <div className="AddDate col-md-4">{new Date().toLocaleString() + ""}</div>
                        </div>
                        <div className="row g-0">
                            <div className="QuizName col-md-4"><Link to="quiz?id=1">Routing Quiz</Link></div>
                            <div className="QSession col-md-4"><Link to="/session?id=1">Session 2</Link></div>
                            <div className="AddDate col-md-4">{new Date().toLocaleString() + ""}</div>
                        </div>
                        <div className="row g-0">
                            <div className="QuizName col-md-4"><Link to="quiz?id=1">Routing Quiz</Link></div>
                            <div className="QSession col-md-4"><Link to="/session?id=1">Session 2</Link></div>
                            <div className="AddDate col-md-4">{new Date().toLocaleString() + ""}</div>
                        </div>

        </>
    )
}

export default LastQuiz;