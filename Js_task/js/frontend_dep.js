$(document).ready(function () {
    let $taskBoxContainer = $('task_box_style')

    let tasksArr = JSON.parse(localStorage.getItem('tasks') || [])

    fetch_dep_data = tasksArr.filter((dep) => dep.dep_name === 'Front-end');



    console.log(fetch_dep_data);


    const updateHTML = () => {



        let $taskBoxContainer = $(".task_box_style");
        let $no_task_assign_container = $(".no_task_assign_container")
        let $status_bar_container = $('.status_bar_container')

        $taskBoxContainer.empty();

        if (fetch_dep_data.length === 0) {
            $no_task_assign_container.removeClass("hide");
            $taskBoxContainer.addClass("hide");
            $status_bar_container.addClass("hide")

        } else {
            $no_task_assign_container.addClass("hide");
            $taskBoxContainer.removeClass("hide");
            $status_bar_container.removeClass('hide')
            let str = '';
            // alert("One task has added")

            fetch_dep_data.forEach((task, index) => {
                console.log("fetch frontend",)
                const { project_man_name, title, description, due_date, priority_level, dep_name, project_name, assigned_name, status } = task;

                let backgroundColor = priority_level == "high" ? "green" : "red";

                str += `
                <div key="${index}"> 
                    <div class="d-flex justify-content-between">
                        <div class="d-flex gap-3">
                            <img src="img/linkedln.svg">
                            <h5>${project_man_name}</h5>
                        </div>
                        <span><i class="fa-solid fa-list-ol"></i> Task num-${index + 1}</span>
                     
                    </div>
                    <div>
                        <h5>Title :</h5>
                        <p>${title}</p>
                        <h5>Description :</h5>
                        <p>${description}</p>
                    </div>
                    <div class="d-flex gap-5">
                        <div>
                            <h5>Due date :</h5>
                            <p>${due_date}</p>
                        </div>
                        <div>
                            <h5>Priority level :</h5>
                            <p class="${priority_level == 'high' ? 'priority_high' : 'priority_low'}">${priority_level}</p>
                        </div>
                        <div>
                        <h5>Status :</h5>
                        <p class="${status === 'Pending' ? 'pending_status' : status === 'In-progress' ? 'inprogress_status' : 'complete_status'}">${status}</p>

                       
                    </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <h5>Department name :</h5>
                            <p>${dep_name}</p>
                        </div>
                        <div>
                            <h5>Project name :</h5>
                            <p>${project_name}</p>
                        </div>
                        <div>
                            <h5>Assigned to :</h5>
                            <p>${assigned_name}</p>
                        </div>
                    </div>
                </div>`;
            });

            // tasksArr.filter((dep) => dep.dep_name === 'Front-end'){

            $taskBoxContainer.append(str)
            // }
        }
    };




    $('#filterStatus').change(function () {
        let filterStatus = $(this).val();

        if (filterStatus === 'Pending') {
            fetch_dep_data = tasksArr.filter((dep) => dep.status === 'Pending' && dep.dep_name === 'Front-end');
        } else if (filterStatus === 'In-progress') {
            fetch_dep_data = tasksArr.filter((dep) => dep.status === 'In-progress' && dep.dep_name === 'Front-end');
        } else if (filterStatus === 'Complete') { // Corrected condition
            fetch_dep_data = tasksArr.filter((dep) => dep.status === 'Complete' && dep.dep_name === 'Front-end');
        } else {
            fetch_dep_data = tasksArr.filter((dep) =>  dep.dep_name === 'Front-end');
        }

        updateHTML();
    });

    updateHTML();

})
// end ready function