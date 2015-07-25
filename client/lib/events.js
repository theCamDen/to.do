  Template.body.events({
    "submit .new-task": function(event) {
      // called when new task form is submitted
      var text = event.target.text.value;


      Meteor.call("addTask", text);

      // clear form 
      event.target.text.value = "";

      // prevent default form submit behavior
      return false;

    },

    "change .hide-completed input": function(event) {
      Session.set("hideCompleted", event.target.checked);
    },

    "click #login-button": function(event) {
          $("#list-container").toggleClass('hidden');
          $('#login-form').toggleClass('hidden');
    },

     "click #signup-button": function(event) {
          $("#list-container").toggleClass('hidden');
          $('#signup-form').toggleClass('hidden');
    },

        

  });

  Template.task.events({
    "click .toggle-checked": function() {
      // set the checked property to the opposite of its current value
      Meteor.call("setChecked", this._id, !this.checked);
    },

    "click .delete": function() {
      Meteor.call("deleteTask", this._id);
    },

      "click .toggle-private": function() {
      Meteor.call("setPrivate", this._id, !this.private);
    }

  });

  