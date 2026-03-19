import { useForm } from "react-hook-form";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log("Дані форми:", data);
    alert("Форму успішно відправлено!");
    reset();
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>Реєстрація</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div style={{ marginBottom: "15px" }}>
          <label>Ім'я:</label>
          <input
            {...register("firstName", { 
              required: "Це поле обов'язкове",
              minLength: { value: 2, message: "Мінімум 2 символи" }
            })}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.firstName && <p style={{ color: "red", fontSize: "12px" }}>{errors.firstName.message}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Електронна пошта:</label>
          <input
            {...register("email", { 
              required: "Email обов'язковий",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Невірний формат email"
              }
            })}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</p>}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Пароль:</label>
          <input
            type="password"
            {...register("password", { 
              required: "Пароль обов'язковий",
              minLength: { value: 6, message: "Пароль має бути не менше 6 символів" }
            })}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password.message}</p>}
        </div>

        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Відправити
        </button>
      </form>
    </div>
  );
};

export default MyForm;