<HTML>
    <HEAD>
      <TITLE>Feedback Form</TITLE>
      <link rel="stylesheet" type="text/css" href="Feedback.css">
    </HEAD>
    <BODY>
      <H1>Feedback Form</H1>
      <FORM action="mailto:simon.long@cit.ie" method="post" enctype="text/plain">
        First Name : <INPUT type="text" name="firstname" placeholder="Enter name here">
        Second Name : <INPUT type="text" name="secondname"  placeholder="Enter surname here">
        <BR>
        <BR>
        <!--It's important that both of these radio button have the same name so they behave as one component (i.e. Only one can be selected at a time)-->  
        <INPUT type="radio" name="gender" value="male">Male<BR>
        <INPUT type="radio" name="gender" value="female">Female  
        <BR>
        <BR>
        <!--This uses the new HTML "email" INPUT type which will automatically validates the email address when the SUBMIT button is clicked-->
        email: <INPUT type="email" name="mail" placeholder="e-mail address">
        <BR>
        <BR>
          Comment :<BR>        
          <TEXTAREA rows="6" cols="50" name="commentfield"></TEXTAREA>
          <BR>
          <!-- <SELECT name="countychooser">
            <OPTION value="cork">Cork</OPTION>
            <OPTION value="dublin">Dublin</OPTION>
            <OPTION value="galway">Galway</OPTION>
            <OPTION value="kerry">Kerry</OPTION>
          </SELECT> -->
          <BR>
          <BR>
          <INPUT TYPE="submit" value="Send Feedback">
          <INPUT TYPE="reset" value="Reset">
      </FORM>
      
    </BODY>  
  </HTML>        
