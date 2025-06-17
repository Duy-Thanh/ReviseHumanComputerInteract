using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CloudIDE_
{
    public partial class Password : Form
    {
        private static readonly string passwordHash = "f51f1873dc0fd26daeac2370773f58e0d80827b3f970f54103da8e8d842073c7";
        public Password()
        {
            InitializeComponent();
            txtPasswordVerify.UseSystemPasswordChar = true;
        }

        private static string ComputeHash(string input)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(input));
                StringBuilder builder = new StringBuilder();
                foreach (byte b in bytes)
                    builder.Append(b.ToString("x2"));
                return builder.ToString();
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void btnSubmit_Click(object sender, EventArgs e)
        {
            string inputHash = ComputeHash(txtPasswordVerify.Text);

            if (inputHash == passwordHash)
            {
                MessageBox.Show("Password is correct. You may now proceed.", "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
                this.DialogResult = DialogResult.OK;
            }
            else
            {
                MessageBox.Show("Incorrect password. Please try again.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                txtPasswordVerify.Clear();
            }
        }
    }
}
