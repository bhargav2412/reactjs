import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      name: "Test",
      email: "",
      age: "18",
      social: {
        facebook: "",
        yahoo: "",
      },
      phonenumber: ["", ""],
      dob: new Date(),
    },
  });
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("FormData:-", data);
  };

  const watchForm = watch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <p> {JSON.stringify(watchForm)}</p>
      <form>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
          />

          {errors.name && (
            <p style={{ color: "red", margin: 0 }}>{errors.name?.message}</p>
          )}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              // Custom validations
              validate: {
                notAdminEmail: (value) => {
                  return (
                    value !== "admin@example.com" || "Enter a different email"
                  );
                },
                notBlackListedEmail: (value) => {
                  return (
                    !value.endsWith("@blacklisted.com") ||
                    "This domain is not allowwd"
                  );
                },
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red", margin: 0 }}>{errors.email?.message}</p>
          )}
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            id="age"
            {...register("age", {
              required: "Age is required",
              valueAsNumber: true,
            })}
          />
          {errors.age && (
            <p style={{ color: "red", margin: 0 }}>{errors.age?.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="country">Country: </label>
          <select id="country" name="country" {...register("country")}>
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="australlia">Australlia</option>
            <option value="paris">Paris</option>
          </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="gender">Gender </label>
          <label htmlFor="gender">
            <input
              type="radio"
              value="male"
              {...register("gender", { required: true })}
            />
            Male
          </label>
          <label htmlFor="gender">
            <input type="radio" value="female" {...register("gender")} />
            Female
          </label>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="skills">Skills: </label>
          <label htmlFor="skills">
            <input type="checkbox" value="react" {...register("skills")} />
            Reactjs
          </label>
          <label htmlFor="skills">
            <input type="checkbox" value="node" {...register("skills")} />
            Nodejs
          </label>
          <label htmlFor="skills">
            <input type="checkbox" value="next" {...register("skills")} />
            Nextjs
          </label>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="dob">DOB: </label>
          <input
            type="date"
            id="dob"
            {...register("dob", {
              required: "DOB is required",
              valueAsDate: true,
            })}
          />
          {errors.dob && (
            <p style={{ color: "red", margin: 0 }}>{errors.dob?.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="facebook">Facebook URL: </label>
          <input
            type="test"
            id="facebook"
            {...register("social.facebook", {
              required: "Facebook is required",
            })}
          />
          {errors.facebook && (
            <p style={{ color: "red", margin: 0 }}>
              {errors.facebook?.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="yahoo">Yahoo URL: </label>
          <input
            type="test"
            id="yahoo"
            {...register("social.yahoo", {
              required: "Yahoo is required",
            })}
          />
          {errors.yahoo && (
            <p style={{ color: "red", margin: 0 }}>{errors.yahoo?.message}</p>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="primarynumber">Primary Phone Number: </label>
          <input
            type="number"
            id="primarynumber"
            {...register("phonenumber.0", {
              required: "primarynumber is required",
              valueAsNumber: true,
            })}
          />
          {errors.primarynumber && (
            <p style={{ color: "red", margin: 0 }}>
              {errors.primarynumber?.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="secondarynumber">Secondary Phone Number: </label>
          <input
            type="number"
            id="secondarynumber"
            {...register("phonenumber.1", {
              required: "secondarynumber is required",
              valueAsNumber: true,
            })}
          />
          {errors.secondarynumber && (
            <p style={{ color: "red", margin: 0 }}>
              {errors.secondarynumber?.message}
            </p>
          )}
        </div>

        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
