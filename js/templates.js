module.exports = {
  newBitterForm: [
    '<div class="create-bitter-form-wrap">',
      '<h1>Bitter</h1>',
        '<form class="create-bitter-form">',
          '<input type="text" class="create-bitter-input-name" placeholder="username">',
          '<input type="text" class="create-bitter-input-post"placeholder="what\'s crappening?" maxlength="144">',
          '<div class="create-bitter-submit-wrap">',
            '<button class="create-bitter-submit">submit</button>',
          '</div>',
        '</form>',
      '</div>'
  ].join(""),
  bitterPost: [
      '<div class="bitter-text-wrap">',
        '<p class="bitter-post-name"><%= name %></p>',
        '<h3 class="bitter-post-text"><%= post %></h3>',
      '</div>',
      '<div class="bitter-options">',
        '<button class="bitter-options-delete">delete</button>',
        '<button class="bitter-options-edit">edit</button>',
      '</div>'
  ].join(""),
  bitterEdit: [
    '<form class="edit-bitter-form">',
      '<input type="text" class="edit-bitter-input-name" value="<%= name %>">',
      '<input type="text" class="edit-bitter-input-post" value="<%= post %>" maxlength="144">',
      '<button class="edit-bitter-save">save</button>',
    '</form>'
  ].join("")
}
