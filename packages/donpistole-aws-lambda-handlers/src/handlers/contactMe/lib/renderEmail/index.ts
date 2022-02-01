export const renderEmail = ({ email = '' }) => `
<html>
<body>
  <table>
    <tr style="height: 150px;" >
      <td>
        &nbsp;
      </td>
    </tr>
    <tr>
      <td>
        Mr. Pistole, <br/>
        <p>We (the aws robots), are delighted to inform you that a request to be contacted has been received via your website. Please do reach out to ${email} at your earliest conviencice. <br/>
        <br/>
        Best Regards, <br/>
        AWS SES
        </p>
      </td>
    </tr>
    <tr style="height: 150px;" >
      <td>
        &nbsp;
      </td>
    </tr>
  </table>
</body>
</html>
`;
