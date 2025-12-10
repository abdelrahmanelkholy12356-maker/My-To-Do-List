document.addEventListener("DOMContentLoaded", () => {
  // 1. تعريف العناصر الأساسية
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const noTasksMessage = document.getElementById("no-tasks-message");

  // 2. دالة لعرض/إخفاء رسالة "لا توجد مهام"
function toggleNoTasksMessage() {
    if (todoList.children.length === 0) {
        noTasksMessage.style.display = "block";
    } else {
        noTasksMessage.style.display = "none";
    }
}

  // 3. دالة إنشاء عنصر المهمة (Li)
function createTodoItem(taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // إضافة زر الحذف
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");

    // ربط حدث الحذف بالزر
    deleteBtn.addEventListener("click", () => {
        listItem.remove();
      toggleNoTasksMessage(); // تحديث الرسالة بعد الحذف
    });

    // ربط حدث تبديل حالة الاكتمال بالنقر على المهمة نفسها
    listItem.addEventListener("click", () => {
    listItem.classList.toggle("completed");
    });

    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);
}

  // 4. معالجة إرسال النموذج (إضافة مهمة جديدة)
    todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    const taskText = todoInput.value.trim();

    if (taskText !== "") {
        createTodoItem(taskText);
      todoInput.value = ""; // مسح حقل الإدخال
      toggleNoTasksMessage(); // تحديث الرسالة بعد الإضافة
    }
});

  // 5. تهيئة أولية لعرض رسالة "لا توجد مهام" عند تحميل الصفحة
toggleNoTasksMessage();
});
