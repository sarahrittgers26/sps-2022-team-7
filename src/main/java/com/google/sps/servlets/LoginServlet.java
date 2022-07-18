package com.google.sps.servlets;

import java.io.IOException;
import java.io.InputStream;
import java.util.Enumeration;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import com.google.firebase.auth.FirebaseAuthException;
import com.google.sps.firebase.LoginAuthenticator;

/** Handles requests sent to the /login URL */
@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    /**
     * Handle GET method to display login page
     * @param request request from the client
     * @param response response from the client
     * @throws IOException
     * @throws ServletException
     */
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        RequestDispatcher view = request.getRequestDispatcher("login.html");
        view.forward(request, response);
    }

    /**
     * Handle POST method of login
     * @param request request from the client 
     * @param response response to the clinet
     * @throws IOException
     * @throws ServletException
     */
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
  
        // Get the value entered in the login form
        String username = request.getParameter("username");
        String password = request.getParameter("password");
    
        LoginAuthenticator authenticator = new LoginAuthenticator();
        try 
        {
            authenticator.authenticate(username, password);
        } catch (FirebaseAuthException e) 
        {
            response.setContentType("text/html;");
            response.getWriter().println("<h1>" + e.getMessage() + "</h1>");
            //response.sendRedirect("http://dle-sps-summer22.appspot.com/");
        }
    }
}
