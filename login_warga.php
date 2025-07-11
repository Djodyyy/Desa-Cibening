<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>LOGIN - WARGA</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="assets/img/logo/logo_tab.png">
    <!-- Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">

    <style>
        body {
            background-color: #f8f9fa;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        main {
            flex: 1;
        }

        .btn-primary {
            background-color: #009961;
            border-color: #009961;
        }

        .btn-primary:hover {
            background-color: #007f4e;
            border-color: #007f4e;
        }

        footer {
            background-color: #009961;
        }

        footer a {
            color: white;
        }
    </style>
</head>

<body>
    <main>
        <section class="d-flex align-items-center min-vh-100">
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-md-9 col-lg-6 col-xl-5 d-flex align-items-start justify-content-start">
                        <a href="index.php">
                            <img src="assets/img/logo/logo_login.png" alt="Logo Desa"
                                style="max-width: 800px; height: auto; margin-top: -70px; margin-left: -20px;">
                        </a>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                        <?php if (isset($_GET['error'])): ?>
                            <div class="alert alert-danger"><?= htmlspecialchars($_GET['error']) ?></div>
                        <?php elseif (isset($_GET['success'])): ?>
                            <div class="alert alert-success"><?= htmlspecialchars($_GET['success']) ?></div>
                        <?php endif; ?>

                        <form action="functions/login_check_warga.php" method="POST">


                            <!-- NIK -->
                            <div class="form-outline mb-4">
                                <input type="text" name="nik" class="form-control form-control-lg"
                                    placeholder="Masukan NIK" required />
                                <label class="form-label">Nomor Induk Kependudukan</label>
                            </div>

                            <!-- Password -->
                            <div class="form-outline mb-3">
                                <input type="password" name="password" class="form-control form-control-lg"
                                    placeholder="Masukkan password" required />
                                <label class="form-label">Password</label>
                            </div>

                            <!-- Remember me -->
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div class="form-check">
                                    <input class="form-check-input me-2" type="checkbox" name="remember"
                                        id="remember" />
                                    <label class="form-check-label" for="remember">Ingat saya</label>
                                </div>
                                <a href="#" class="text-body">Lupa password?</a>
                            </div>

                            <!-- Submit -->
                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" class="btn btn-primary btn-lg px-5">Login</button>
                                <p class="small fw-bold mt-2 pt-1 mb-0">
                                    Belum punya akun?
                                    <a href="register_warga.php" class="link-danger">Register</a>
                                </p>
                                <a href="index.php" class="btn btn-link text-body ms-3 btn-lg">Kembali ke Halaman Utama</a>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="text-white text-center py-3">
        Copyright © 2025 Sistem Informasi Desa Cibening
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>