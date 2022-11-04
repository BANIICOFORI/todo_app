// import React from 'react'

// const  Home =()=> {
//   return (
//     <>
// <div>
       
//   <nav class="main-header navbar navbar-expand navbar-white navbar-light">
//     {/* <!-- Left navbar links --> */}
//     <ul class="navbar-nav">
//       <li class="nav-item">
//         <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
//       </li>
//       <li class="nav-item d-none d-sm-inline-block">
//         <a href="#" class="nav-link">Home</a>
//       </li>
//       <li class="nav-item d-none d-sm-inline-block">
//         <a href="#" class="nav-link">Contact</a>
//       </li>
//     </ul>

//     {/* <!-- SEARCH FORM --> */}
//     <form class="form-inline ml-3">
//       <div class="input-group input-group-sm">
//         <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
//         <div class="input-group-append">
//           <button class="btn btn-navbar" type="submit">
//             <i class="fas fa-search"></i>
//           </button>
//         </div>
//       </div>
//     </form>

//     {/* <!-- Right navbar links --> */}
//     <ul class="navbar-nav ml-auto">
//       {/* <!-- Messages Dropdown Menu --> */}
//       <li class="nav-item dropdown">
//         <a class="nav-link" data-toggle="dropdown" href="#">
//           <i class="far fa-comments"></i>
//           <span class="badge badge-danger navbar-badge">3</span>
//         </a>
//         <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//           <a href="#" class="dropdown-item">
//             {/* <!-- Message Start --> */}
//             <div class="media">
//               <img src="Admin_Layout/dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle"/>
//               <div class="media-body">
//                 <h3 class="dropdown-item-title">
//                   Brad Diesel
//                   <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
//                 </h3>
//                 <p class="text-sm">Call me whenever you can...</p>
//                 <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
//               </div>
//             </div>
//             {/* <!-- Message End --> */}
//           </a>
//           <div class="dropdown-divider"></div>
//           <a href="#" class="dropdown-item">
//             {/* <!-- Message Start --> */}
//             <div class="media">
//               <img src="Admin_Layout/dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
//               <div class="media-body">
//                 <h3 class="dropdown-item-title">
//                   John Pierce
//                   <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
//                 </h3>
//                 <p class="text-sm">I got your message bro</p>
//                 <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
//               </div>
//             </div>
//             {/* <!-- Message End --> */}
//           </a>
//           <div class="dropdown-divider"></div>
//           <a href="#" class="dropdown-item">
//             {/* <!-- Message Start --> */}
//             <div class="media">
//               <img src="Admin_Layout/dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
//               <div class="media-body">
//                 <h3 class="dropdown-item-title">
//                   Nora Silvester
//                   <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
//                 </h3>
//                 <p class="text-sm">The subject goes here</p>
//                 <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
//               </div>
//             </div>
//             {/* <!-- Message End --> */}
//           </a>
//           <div class="dropdown-divider"></div>
//           <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
//         </div>
//       </li>
//       {/* <!-- Notifications Dropdown Menu --> */}
//       <li class="nav-item dropdown">
//         <a class="nav-link" data-toggle="dropdown" href="#">
//           <i class="far fa-bell"></i>
//           <span class="badge badge-warning navbar-badge">15</span>
//         </a>
//         <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
//           <span class="dropdown-item dropdown-header">15 Notifications</span>
//           <div class="dropdown-divider"></div>
//           <a href="#" class="dropdown-item">
//             <i class="fas fa-envelope mr-2"></i> 4 new messages
//             <span class="float-right text-muted text-sm">3 mins</span>
//           </a>
//           <div class="dropdown-divider"></div>
//           <a href="#" class="dropdown-item">
//             <i class="fas fa-users mr-2"></i> 8 friend requests
//             <span class="float-right text-muted text-sm">12 hours</span>
//           </a>
//           <div class="dropdown-divider"></div>
//           <a href="#" class="dropdown-item">
//             <i class="fas fa-file mr-2"></i> 3 new reports
//             <span class="float-right text-muted text-sm">2 days</span>
//           </a>
//           <div class="dropdown-divider"></div>
//           <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
//           <i class="fas fa-th-large"></i>
//         </a>
//       </li>
//     </ul>
//   </nav>
 


//   <aside class="main-sidebar sidebar-dark-primary elevation-4">
//     {/* <!-- Brand Logo --> */}
//     <a href="#" class="brand-link">
//       <img src="Admin_Layout/dist/img/logo.png" alt="logo.png" class="brand-image img-circle elevation-3"
//            style={{opacity: ".8"}}/>
//       <span class="brand-text font-weight-light">GPS PORTAL</span>
//     </a>

//     {/* <!-- Sidebar --> */}
//     <div class="sidebar">
//       {/* <!-- Sidebar user panel (optional) --> */}
//       <div class="user-panel mt-3 pb-3 mb-3 d-flex">
//         <div class="image">
//           <img src="Admin_Layout/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"/>
//         </div>
//         <div class="info">
//           <a href="#" class="d-block">USER NAME HERE</a>
//         </div>
//       </div>

//       {/* <!-- Sidebar Menu --> */}
//       <nav class="mt-2">
//         <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" />
//           {/* <!-- Add icons to the links using the .nav-icon class
//                with font-awesome or any other icon font library --> */}
//           <li class="nav-item has-treeview menu-open">
//             <a href="#" class="nav-link active">
//               <i class="nav-icon fas fa-tachometer-alt"></i>
//               <p>
//                 Dashboard
               
//               </p>
//             </a>
            
//           </li>
//           <li class="nav-item">
//             <a href="pages/widgets.html" class="nav-link">
//               <i class="nav-icon fas fa-th"></i>
//               <p>
//                 GPS NEW 
//                 <span class="right badge badge-danger">APP</span>
//               </p>
//             </a>
//           </li>
//           <li class="nav-item has-treeview">
//             <a href="#" class="nav-link">
//               <i class="nav-icon fas fa-copy"></i>
//               <p>
//                 Application ONE
//                 <i class="fas fa-angle-left right"></i>
//                 <span class="badge badge-info right"></span>
//               </p>
//             </a>
//             <ul class="nav nav-treeview">
//               <li class="nav-item">
//                 <a href="pages/layout/top-nav.html" class="nav-link">
//                   <i class="far fa-circle nav-icon"></i>
//                   <p>LINK ONE</p>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a href="pages/layout/top-nav-sidebar.html" class="nav-link">
//                   <i class="far fa-circle nav-icon"></i>
//                   <p>LINK TWO</p>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a href="pages/layout/boxed.html" class="nav-link">
//                   <i class="far fa-circle nav-icon"></i>
//                   <p>LINK THREE</p>
//                 </a>
//               </li>

//             </ul>
//           </li>
		  
// 		   <li class="nav-item has-treeview">
//             <a href="#" class="nav-link">
//               <i class="nav-icon fas fa-copy"></i>
//               <p>
//                 Application TWO
//                 <i class="fas fa-angle-left right"></i>
//                 <span class="badge badge-info right"></span>
//               </p>
//             </a>
//             <ul class="nav nav-treeview">
//               <li class="nav-item">
//                 <a href="pages/layout/top-nav.html" class="nav-link">
//                   <i class="far fa-circle nav-icon"></i>
//                   <p>LINK ONE</p>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a href="pages/layout/top-nav-sidebar.html" class="nav-link">
//                   <i class="far fa-circle nav-icon"></i>
//                   <p>LINK TWO</p>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a href="pages/layout/boxed.html" class="nav-link">
//                   <i class="far fa-circle nav-icon"></i>
//                   <p>LINK THREE</p>
//                 </a>
//               </li>

//             </ul>
//           </li>
// 		            <li class="nav-item has-treeview">
//             <a href="#" class="nav-link">
//               <i class="nav-icon fas fa-copy"></i>
//               <p>
//                 Application THREE
//                 <i class="fas fa-angle-left right"></i>
//                 <span class="badge badge-info right"></span>
//               </p>
//             </a>
//             <ul class="nav nav-treeview">
//               <li class="nav-item">
//                 <a href="pages/layout/top-nav.html" class="nav-link">
//                   <i class="far fa-circle nav-icon"></i>
//                   <p>LINK ONE</p>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a href="pages/layout/top-nav-sidebar.html" class="nav-link">
//                   <i class="far fa-circle nav-icon"></i>
//                   <p>LINK TWO</p>
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a href="pages/layout/boxed.html" class="nav-link">
//                   <i class="far fa-circle nav-icon"></i>
//                   <p>LINK THREE</p>
//                 </a>
//               </li>
           
          
             
            
//             </ul>
//           </li>
 

//       </nav>
//       {/* <!-- /.sidebar-menu --> */}
//     </div>
//     {/* <!-- /.sidebar --> */}
//   </aside>

//   {/* <!-- Content Wrapper. Contains page content --> */}
//   {/* < class="content-wrapper"> */}
//     {/* <!-- Content Header (Page header) --> */}
//     <div class="content-header">
//       <div class="container-fluid">
//         <div class="row mb-2">
//           <div class="col-sm-6">
//             <h1 class="m-0 text-dark">Dashboard</h1>
//           </div>
//           {/* <!-- /.col --> */}
//           <div class="col-sm-6">
//             <ol class="breadcrumb float-sm-right">
             
//             </ol>
//           </div>
//           {/* <!-- /.col --> */}
//         </div>
//         {/* <!-- /.row --> */}
//       </div>
//       {/* <!-- /.container-fluid --> */}
//     </div>
//     {/* <!-- /.content-header --> */}
// </div>
//     {/* <!-- Main content --> */}
// <section class="content">
//       <div class="container-fluid">
//         {/* <!-- Small boxes (Stat box) --> */}
//         <div class="row">
//           <div class="col-lg-3 col-6">
//             {/* <!-- small box --> */}
//             <div class="small-box bg-info">
//               <div class="inner">
//                 <h3>CASE TRALKING</h3>

//                 <p></p>
//               </div>
//               <div class="icon">
//                 <i class=""></i>
//               </div>
//               <a href="#" class="small-box-footer">ENTER <i class="fas fa-arrow-circle-right"></i></a>
//             </div>
//           </div>
		  
// 		   <div class="col-lg-3 col-6">
//             {/* <!-- small box --> */}
//             <div class="small-box bg-info">
//               <div class="inner">
//                 <h3>GPS MANUALS</h3>

//                 <p></p>
//               </div>
//               <div class="icon">
//                 <i class=""></i>
//               </div>
//               <a href="#" class="small-box-footer">ENTER <i class="fas fa-arrow-circle-right"></i></a>
//             </div>
//           </div>
// 		   <div class="col-lg-3 col-6">
//             {/* <!-- small box --> */}
//             <div class="small-box bg-info">
//               <div class="inner">
//                 <h3>GPSFSL STORES</h3>

//                 <p></p>
//               </div>
//               <div class="icon">
//                 <i class=""></i>
//               </div>
//               <a href="#" class="small-box-footer">ENTER <i class="fas fa-arrow-circle-right"></i></a>
//             </div>
//           </div>
// 		   <div class="col-lg-3 col-6">
//             {/* <!-- small box --> */}
//             <div class="small-box bg-info">
//               <div class="inner">
//                 <h3>ARMS REGISTRATION</h3>

//                 <p></p>
//               </div>
//               <div class="icon">
//                 <i class=""></i>
//               </div>
//               <a href="#" class="small-box-footer">ENTER <i class="fas fa-arrow-circle-right"></i></a>
//             </div>
//           </div>
		  
		  
//           {/* <!-- ./col --> */}
//           <div class="col-lg-3 col-6">
//             {/* <!-- small box --> */}
//             <div class="small-box bg-success">
//               <div class="inner">
//                 <h3>ONLINE<sup style={{fontSize: "20px"}}></sup></h3>

//                 <h2>53</h2>
//               </div>
//               <div class="icon">
//                 <i class="ion ion-stats-bars"></i>
//               </div>
              
//             </div>
//           </div>
//           {/* <!-- ./col --> */}
//           <div class="col-lg-3 col-6">
//             {/* <!-- small box --> */}
//             <div class="small-box bg-info">
//               <div class="inner">
//                 <h3>User Registrations</h3>

//                 <h2>44</h2>
//               </div>
//               <div class="icon">
//                 <i class="ion ion-person-add"></i>
//               </div>
//             </div>
//           </div>
//           {/* <!-- ./col --> */}
//            <div class="col-lg-3 col-6">
//             {/* <!-- small box --> */}
//             <div class="small-box bg-success">
//               <div class="inner">
//                 <h3>Reguler Users</h3>

//                 <h2>30</h2>
//               </div>
//               <div class="icon">
//                 <i class="ion ion-person-add"></i>
//               </div>
//             </div>
//           </div>
		  
// 		   <div class="col-lg-3 col-6">
//             {/* <!-- small box --> */}
//             <div class="small-box bg-danger">
//               <div class="inner">
//                 <h3>Deative Users</h3>

//                 <h2>14</h2>
//               </div>
//               <div class="icon">
//                 <i class="ion ion-person-add"></i>
//               </div>
//             </div>
//           </div>
//           </div>
//           </div>
// 	</section>
         
  
//   <div class="container">
//         <main role="main" class="pb-3">
//             @RenderBody()
//         </main>
//     </div>
  
//   <footer class="main-footer">
//     <strong>Copyright &copy; <a href="http://adminlte.io">2020 - GPS_Portal</a>.</strong>
//     All rights reserved.
//     <div class="float-right d-none d-sm-inline-block">
//       <b>Version</b>1
//     </div>
//   </footer>

  


// </>
//   )
// }

// export default Home;