$(document).ready(function () {

    let originalTasksArr = JSON.parse(localStorage.getItem('tasks')) || [];
    let tasksArr = originalTasksArr.slice();
    let editIndex;

    $('#filter_dep_name').change(function () {

        let filter_dep_name = $(this).val();
        let filterStatus = $('#filterStatus').val();

        tasksArr = originalTasksArr.filter((task) => {
            console.log(task.dep_name === filter_dep_name);
            return task.dep_name === filter_dep_name && (filterStatus === '' || task.status === filterStatus);
        });

        updateHTML();
    });

    $('#filterStatus').change(function () {
        let filterStatus = $(this).val();
        let filter_dep_name = $('#filter_dep_name').val();

        tasksArr = originalTasksArr.filter((task) => {
            return task.status === filterStatus && (filter_dep_name === '' || task.dep_name === filter_dep_name);
        });

        updateHTML();
    });

    $(document).on('click', '.deleteBtn', function () {

        let result = Swal.fire({

            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your task has been deleted.",
                    icon: "success"
                });
            }
        });
        if (result) {
            // Delete logic goes here
            let deleteIndex = $(this).data('id')
            tasksArr = tasksArr.filter((val, index) => { return index != deleteIndex })
            localStorage.setItem("tasks", JSON.stringify(tasksArr));
        }
        // alert("OOPS ! One Task has been deleted.")
    })

    $(document).on('click', '.editBtn', function () {

        editIndex = $(this).data('id');

        let task = tasksArr[editIndex];

        console.log("suggest ----", task);
        // Populate edit popup with task details
        populateEditPopup(task);


    });

    function populateEditPopup(task) {

        // Populate edit popup form fields with task details
        $('#editProject_man_name').val(task.project_man_name);
        $('#editTitle').val(task.title);
        $('#editDescription').val(task.description);

        $('#editDue_date').val(task.due_date);

        if (task.priority_level === 'high') {
            $('#editHigh').prop('checked', true);
            $('#editLow').prop('checked', false);
        } else if (task.priority_level === 'low') {
            $('#editLow').prop('checked', true);
            $('#editHigh').prop('checked', false);
        }

        // let priority_level = $('#high').is(':checked') ? 'high' : $('#low').is(':checked') ? 'low' : null;

        $('#editPriority_level').val(task.priority_level);
        $('#editPriority_level').val(task.priority_level);
        $('#editDep_name').val(task.dep_name);
        $('#editProject_name').val(task.project_name);
        $('#editAssigned_name').val(task.assigned_name);
        $('#editStatus').val(task.status);


        $("#edit_popup").modal("show")
        // Populate other fields similarly...
    }

    $(document).on('click', '#editSubmit', function (e) {
        e.preventDefault();

        let index = $(this).data('id');

        let updatedTask = {
            project_man_name: $('#editProject_man_name').val(),
            title: $('#editTitle').val(),
            due_date: $('#editDue_date').val(),
            description: $('#editDescription').val(),
            priority_level: $('input[name="priority"]:checked').val(),
            dep_name: $('#editDep_name').val(),
            project_name: $('#editProject_name').val(),
            assigned_name: $('#editAssigned_name').val(),
            status: $('#editStatus option:selected').val(),
        };



        console.log("Edit Project Manager name:", $('#editProject_man_name').val());
        console.log("Edit Title:", $('#editTitle').val());
        console.log("Edit Due Date:", $('#editDue_date').val());
        console.log('edit description-', $('#editDescription').val());
        console.log("Edit Priority Level (High):", $('#editHigh').is(':checked'));
        console.log("Edit Priority Level (Low):", $('#editLow').is(':checked'));
        console.log("Edit Department name:", $('#editDep_name').val());
        console.log("Edit Project name:", $('#editProject_name').val());
        console.log("Edit Assigned to:", $('#editAssigned_name').val());
        console.log("Edit Status:", $('#editStatus').val());

        // Update HTML and close edit popup

        // Validate if any required field is empty
        if (!updatedTask.project_man_name || !updatedTask.title || !updatedTask.description || !updatedTask.due_date || !updatedTask.priority_level || !updatedTask.dep_name || !updatedTask.project_name || !updatedTask.assigned_name) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Please fill all fields in Tasklist!',
            });

        } else {

            Swal.fire({
                icon: "question",
                title: "Do you want to save the changes?",
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: "Save",
                denyButtonText: `Don't save`
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire("Saved!", "", "success");
                } else if (result.isDenied) {
                    Swal.fire("Changes are not saved", "", "info");
                }
            });


            tasksArr[editIndex] = updatedTask;

            // Update HTML and close edit popup
            updateHTML();
            saveToLocalStorage();

            $('#edit_popup').modal('hide');
        }
    });

    $('.modal-header .close').on('click', function () {
        $('#edit_popup').modal('hide');
    });

    const updateHTML = () => {



        let $taskBoxContainer = $(".task_box_style");
        let $no_task_assign_container = $(".no_task_assign_container")
        $taskBoxContainer.empty();

        if (tasksArr.length === 0) {
            $no_task_assign_container.removeClass("hide");
            $taskBoxContainer.addClass("hide");
        } else {
            $no_task_assign_container.addClass("hide");
            $taskBoxContainer.removeClass("hide");

            let str = '';
            // alert("One task has added")
            tasksArr.forEach((task, index) => {
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
                        <div>
                        
                            <button class="btn btn-primary mx-3 editBtn" data-id="${index}"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn btn-danger ml-5 deleteBtn" data-id="${index}"><i class="fa-solid fa-trash"></i></button>
                        </div>
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

            $taskBoxContainer.append(str);
        }
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(tasksArr));
    }



    $(document).on('submit', "#main_form", function (e) {
        e.preventDefault();

        let project_man_name = $("#project_man_name").val();
        let title = $("#title").val();
        let description = $("#description").val();

        let due_date = $("#due_date").val();


        let priority_level = $('#high').is(':checked') ? 'high' : $('#low').is(':checked') ? 'low' : null;
        let dep_name = $("#dep_name").val();
        let project_name = $("#project_name").val();
        let assigned_name = $("#assigned_name").val();

        let taskExists = tasksArr.find(task => task.title === title);

        if (taskExists) {

            Swal.fire({
                icon: 'error',
                title: 'Title!',
                text: 'Task with the same title already exists. Please enter a new title.',
            });

        } else if (!project_man_name || !title || !description || !due_date || !priority_level || !dep_name || !project_name || !assigned_name) {

            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Please fill all fields in Tasklist!',
            });
        }

        else {
            tasksArr.push({
                project_man_name: project_man_name,
                title: title,
                description: description,
                due_date: due_date,
                priority_level: priority_level,
                dep_name: dep_name,
                project_name: project_name,
                assigned_name: assigned_name,
                status: "Pending"
            });

            Swal.fire({
                icon: 'success',
                title: 'Successfully',
                text: 'One task added to your list',
            });

            updateHTML();
            saveToLocalStorage();

            $('#exampleModalLong').modal('hide');

            $("#main_form").trigger('reset');
        }
    });



    updateHTML();

});


